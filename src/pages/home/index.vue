<template>
    <view class="home-container">
        <info-content></info-content>
        <repayment-total></repayment-total>
        <person-chart></person-chart>
        <back-chart></back-chart>
    </view>
</template>
<script>
import InfoContent from './info-content.vue'
import RepaymentTotal from './repayment-total.vue'
import BackChart from './bank.vue'
import PersonChart from './person.vue'
import { getCreditInformation } from '@/common/http.api.js'

export default ({
    data() {
        return {
        }
    },
    components: {
        InfoContent,
        RepaymentTotal,
        BackChart,
        PersonChart
    },
    mounted() {
        this.get()
    },
    methods: {
        get() {
            getCreditInformation().then(res => {
                console.log('res', res)
            }).catch(err => {
                console.log('err', err)
            })
        }
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