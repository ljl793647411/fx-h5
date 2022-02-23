<template>
    <view class="credit-loan-container">
        <search-container>
            <template #content>
                <view v-for="a in [1,2,3,4,5,6,78]" :key="a">
                    <item></item>
                </view>
            </template>
        </search-container>
    </view>
</template>
<script>
import item from './item.vue'

export default ({
    data() {
        return {

        }
    },
    components: {
        item
    }
})
</script>
<style lang="scss" scoped>
   
</style>