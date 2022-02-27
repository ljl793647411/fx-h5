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
                    <credit-filter ref="filterRef" :filterParam="filterParam"></credit-filter>
                </popup>
            </template>
        </search-container>
    </view>
</template>
<script>
import item from './item.vue'
import creditFilter from './credit-filter.vue'

export default ({
    data() {
        return {
            show: false,
            dataList: [
                {
                    financialName: "财务公司",
                    code: "DK2021012000001",
                    dataStatus: "未提款",
                    borrowerName: "复星高科",
                    loanCategory: "定期贷款",
                    effectiveDate: "2022-01-01",
                    expireDate: "2025-12-31",
                    dueDays:  20,
                    currency:  "人民币",
                    annualRate: "6.7000%",
                    loanLimit:  "3000.2",
                    withDrawn:  "1000",
                    amountUnit:  "亿"
                }
            ],
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
        this.getDataList()
    },
    methods: {
        async getDataList(query) {
        },
        showDrawer() {
            this.show = true
        },
        closeDrawer() {
            this.show = false
        },
        async ok() {
            await this.getDataList()
            this.closeDrawer()
        },
        reset() {
            this.$refs.filterRef.reset()
            this.filterParam.startDate = ''
            this.filterParam.endDate = ''
            this.filterParam.startPeriod = ''
            this.filterParam.endPeriod = ''
        }

    }
})
</script>
<style lang="scss" scoped>
   
</style>