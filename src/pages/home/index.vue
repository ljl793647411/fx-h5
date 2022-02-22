<template>
    <view class="home-container">
        <info-content></info-content>
        <repayment-total></repayment-total>
        <back-chart></back-chart>
        <person-chart></person-chart>
    </view>
</template>
<script>
import InfoContent from './info-content.vue'
import RepaymentTotal from './repayment-total.vue'
import BackChart from './bank.vue'
import PersonChart from './person.vue'

export default ({
    components: {
        InfoContent,
        RepaymentTotal,
        BackChart,
        PersonChart
    }
})
</script>
<style scoped>
    .home-container {
        width: 100%;
        height: auto;
        background: #F1F2F5;
        padding: 12px 8px;
        min-height: 100vh;
    }
</style>