<template>
    <view class="public-item-container">
        <slot></slot>
    </view>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .public-item-container {
        width: 100%;
        height: auto;
        padding: 15px;
        background: #FFFFFF;
        box-shadow: 0 4px 10px 0 rgba(0,0,0,0.06);
        border-radius: 8px;
        margin-bottom: 7px;
    }
</style>