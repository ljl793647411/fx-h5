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
                @startDateChange="startDateChange"
                @endDateChange="endDateChange"
                ></date-range>             
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
export default {
    props: {
        filterParam: {
            type: Object
        },
        repaymentStatusData: {
            type: Array
        },
        financialData: {
            type: Array
        },
        borrowerData: {
            type: Array
        },
    },
    components: {
        timeLimit
    },
    methods: {
        // 开始时间change
        startDateChange(date) {
            this.filterParam.startDate = date
        },
        // 结束时间change
        endDateChange(date) {
            this.filterParam.endDate = date
        },
        // 期限范围开始
        startPeriodChange(value) {
            this.filterParam.startPeriod = value
        },
        // 期限范围结束
        endPeriodChange(value) {
            this.filterParam.endPeriod = value
        },
    }
}
</script>

<style lang="scss" scoped>

</style>