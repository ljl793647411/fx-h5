<template>
    <view class="public-filter-item-component">
        <slot name="title"></slot>
        <slot name="select"></slot>
    </view>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .public-filter-item-component {
        margin-bottom: 24px;
    }
</style>