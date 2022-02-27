<template>
    <view>
        <filter-item>
            <template #title>
                <filter-title :tagsList="repaymentStatusData" title="状态"></filter-title>
            </template>   
            <template #select>
                <filter-select :tagsList="repaymentStatusData"></filter-select>
            </template>            
        </filter-item>
        <filter-item>
            <template #title>
                <filter-title :tagsList="financialData" title="金融机构"></filter-title>
            </template>   
            <template #select>
                <filter-select :tagsList="financialData"></filter-select>
            </template>            
        </filter-item>
        <filter-item>
            <template #title>
                <filter-title :tagsList="borrowerData" title="借款人"></filter-title>
            </template>   
            <template #select>
                <filter-select :tagsList="borrowerData"></filter-select>
            </template>            
        </filter-item>
        <filter-item>
            <template #title>
                <filter-title title="日期范围"></filter-title>
            </template>   
            <template #select>
                <date-range 
                :startDate="filterParam.startDate" 
                :endDate="filterParam.endDate" 
                @onChange="dateChange"></date-range>             
            </template>            
        </filter-item>
        <filter-item>
            <template #title>
                <filter-title title="期限范围"></filter-title>
            </template>   
            <template #select>
                <time-limit 
                ref="itemLimitRef"
                :startPeriod="filterParam.startPeriod" 
                :endPeriod="filterParam.endPeriod" 
                @startOnChange="startPeriodChange" 
                @endOnChange="endPeriodChange"></time-limit>             
            </template>            
        </filter-item>
    </view>
</template>

<script>
import timeLimit from './time-limit.vue'
import { repaymentStatus } from '@/common/config.js'
import { filterDataMapping } from '@/common/utils.js'
import { getjyjg, getLoanuser } from '@/common/http.api.js'
export default {
    props: {
        filterParam: {
            type: Object
        }
    },
    data() {
        return {
            repaymentStatusData: repaymentStatus,
            financialData: [],
            borrowerData: [],
        }
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
                const param = newV.filter(i => i.checked).map(v => ({creditVarieties: v.label}))
                this.filterParam.borrowerList = param
            },
            deep: true
        }
    },
    components: {
        timeLimit
    },
    mounted() {
        this.getFilter()
        this.getLoanuserFunc()
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
                this.borrower = filterDataMapping(res?.dataList, {
                    key: 'borrowerName',
                    label: 'borrowerName',
                })
            })
        },
        // 时间范围change
        dateChange({startDate, endDate}) {
            this.filterParam.startDate = startDate
            this.filterParam.endDate = endDate
        },
        // 期限范围开始
        startPeriodChange(value) {
            this.filterParam.startPeriod = value
        },
        // 期限范围结束
        endPeriodChange(value) {
            this.filterParam.endPeriod = value
        },
        reset() {
            this.$refs.itemLimitRef.reset()
            this.repaymentStatusData = filterDataMapping(this.repaymentStatusData, {
                key: 'key',
                label: 'label'
            })
            this.financialData = filterDataMapping(this.financialData, {
                key: 'key',
                label: 'label'
            })
            this.borrowerData = filterDataMapping(this.financialData, {
                key: 'key',
                label: 'label'
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>