<template>
    <view class="public-component-container">
        <view class="search-box"></view>
        <view class="content-box">
            <slot name="content"></slot>
        </view>
    </view>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .public-component-container {
        width: 100%;
        height: auto;
        background: #F1F2F5;
        min-height: 100vh;
        .search-box {
            width: 100%;
            height: 50px;
            background: #ffffff;
        }

        .content-box {
            width: 100%;
            padding: 12px 8px;
        }
    }
</style>
