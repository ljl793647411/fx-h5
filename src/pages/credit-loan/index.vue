<template>
    <view class="credit-loan-container">
        <search-container :showDrawer="showDrawer">
            <template #content>
                <view v-for="(item, index) in dataList" :key="index">
                    <item :data="item"></item>
                </view>
            </template>
            <template #drawer>
                <popup 
                    :show="show"
                    @close="closeDrawer"
                    @ok="ok"
                    @reset="reset"
                >
                    <credit-filter 
                    :filterParam="filterParam"
                    :repaymentStatusData="repaymentStatusData"
                    :financialData="financialData"
                    :borrowerData="borrowerData"
                    ></credit-filter>
                </popup>
            </template>
        </search-container>
    </view>
</template>
<script>
import item from './item.vue'
import creditFilter from './credit-filter.vue'
import { getLoanWeb } from '@/common/http.api.js'
import { numberFormat } from '@/common/utils.js'
import { imgSrc } from '@/common/config.js'
import { repaymentStatus } from '@/common/config.js'
import { filterDataMapping } from '@/common/utils.js'
import { getjyjg, getLoanuser } from '@/common/http.api.js'

export default ({
    data() {
        return {
            show: false,
            dataList: [],
            repaymentStatusData: repaymentStatus,
            financialData: [],
            borrowerData: [],
            filterParam: {
                statusList: [],
                financialList: [],
                borrowerList: [],
                startDate: '',
                endDate: '',
                startPeriod: '',
                endPeriod: ''
            },
        }
    },
    components: {
        item,
        creditFilter
    },
    mounted() {
        this.getDataList(this.filterParam)
        this.getFilter()
    },
    watch: {
        repaymentStatusData: {
            handler(newV) {
                const param = newV.filter(i => i.checked).map(v => ({dataStatus: v.label}))
                this.filterParam.statusList = param
            },
            deep: true
        },
        financialData: {
            handler(newV) {
                const param = newV.filter(i => i.checked).map(v => ({financialName: v.label}))
                this.filterParam.financialList = param
            },
            deep: true
        },
        borrowerData: {
            handler(newV) {
                const param = newV.filter(i => i.checked).map(v => ({borrowerName: v.label}))
                this.filterParam.borrowerList = param
            },
            deep: true
        }
    },
    methods: {
        getFilter() {
            getjyjg().then(res => {
                this.financialData = filterDataMapping(res?.dataList, {
                    key: 'bankTypeName',
                    label: 'bankTypeName',
                })
            })
            getLoanuser().then(res => {
                this.borrowerData = filterDataMapping(res?.dataList, {
                    key: 'borrowerName',
                    label: 'borrowerName',
                })
            })
        },
        async getDataList(query) {
           let res = await getLoanWeb(query)
           this.dataList = res?.dataList?.map(item => ({
                ...item,
                iconName: imgSrc + item.iconName,
                loanLimit: numberFormat(item.loanLimit),
                withDrawn: numberFormat(item.withDrawn),
            })) || []
        },
        showDrawer() {
            this.show = true
        },
        closeDrawer() {
            this.show = false
        },
        async ok() {
            await this.getDataList(this.filterParam)
            this.closeDrawer()
        },
        reset() {
            this.repaymentStatusData = filterDataMapping(this.repaymentStatusData, {
                key: 'key',
                label: 'label'
            })
            this.financialData = filterDataMapping(this.financialData, {
                key: 'key',
                label: 'label'
            })
            this.borrowerData = filterDataMapping(this.borrowerData, {
                key: 'key',
                label: 'label'
            })
            this.filterParam.startDate = ''
            this.filterParam.endDate = ''
            this.filterParam.startPeriod = ''
            this.filterParam.endPeriod = ''
            this.filterParam.statusList = []
            this.filterParam.financialList = []
            this.filterParam.borrowerList = []
        }
    }
})
</script>
<style lang="scss" scoped>
   
</style>