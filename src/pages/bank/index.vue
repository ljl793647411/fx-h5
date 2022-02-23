<template>
    <view class="back-list-container">
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
                    <view>出淤泥而不染，濯清涟而不妖出淤泥而不染，濯清涟而不妖</view>
                </popup>
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