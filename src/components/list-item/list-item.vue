<template>
    <view class="public-item-container">
        <view class="public-item-title" v-if="title">{{title}}</view>
        <view class="container">
            <slot></slot>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        }
    }
}
</script>

<style lang="scss" scoped>
    .public-item-container {
        width: 100%;
        height: auto;
        background: #FFFFFF;
        box-shadow: 0 4px 10px 0 rgba(0,0,0,0.06);
        border-radius: 8px;
        margin-bottom: 7px;

        .public-item-title {
            padding: 11px 20px;
            box-shadow: inset 0 0 0 0 #DDDDDD;
            border-radius: 8px 8px 0 0;
            font-size: 16px;
            color: #333333;
            letter-spacing: 0;
            line-height: 22px;
            font-weight: 500;
            border-bottom: 1px solid #dddddd;
        }

        .container {
            padding: 15px;
        }
    }
</style>