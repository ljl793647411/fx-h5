<template>
    <view 
        :class="{'public-filter-select-tab': true, 'active': checked}" 
        @click="checkboxClick(index)"
    >
        {{text}}
    </view>
</template>

<script>
export default {
    props: {
        checked: {
            type: Boolean
        },
        checkboxClick: {
            type: Function
        },
        index: {
            type: Number
        },
        text: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    .public-filter-select-tab {
        padding: 6px 12px;
        min-width: 89px;
        height: 30px;
        background: #F6F6F6;
        margin-bottom: 10px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        color: #333333;
        font-weight: 400;

        &.active {
            background: #3A90FF;
            color: #ffffff;
        }

    }
</style>