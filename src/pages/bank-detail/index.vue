<template>
    <view class="new-back-box">
        <bank-detail></bank-detail>
        <plat-info></plat-info>
        <contract></contract>
        <top-10></top-10>
        <credit-category></credit-category>
    </view>
</template>

<script>
import bankDetail from './bank-detail.vue'
import platInfo from './plat-info.vue'
import contract from './contract.vue'
import Top10 from './top10.vue'
import CreditCategory from './credit-category.vue'
export default {
    name: "new-bank",
    data() {
        return {
            data: {}
        }
    },
    components: {
        bankDetail,
        platInfo,
        contract,
        Top10,
        CreditCategory
    }
}
</script>

<style scoped lang="scss">
    .new-back-box {
        width: 100%;
        min-height: 100vh;
        background: #F1F2F5;
        padding: 8px;
    }
</style>