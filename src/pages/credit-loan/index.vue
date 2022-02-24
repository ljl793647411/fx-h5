<template>
    <view class="credit-loan-container">
        <search-container>
            <template #content>
                <view v-for="a in [1,2,3,4,5,6,78]" :key="a">
                    <item></item>
                </view>
            </template>
            <template #drawer="drawerProps">
                <popup 
                    :show="drawerProps.show"
                    :close="drawerProps.closeDrawer"
                    :ok="drawerProps.ok"
                >
                    <credit-filter></credit-filter>
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

        }
    },
    components: {
        item,
        creditFilter
    }
})
</script>
<style lang="scss" scoped>
   
</style>