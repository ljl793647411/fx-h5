<template>
    <view class="info-container">
        <view class="info-item">
            <view class="info-title">总授信</view>
            <view class="info-content">content</view>
        </view>
        <view class="info-item">
            <view class="info-title">总贷款</view>
            <view class="info-content">content</view>
        </view>
        <view class="line" />
        <view class="info-item">
            <view class="info-title">可用信</view>
            <view class="info-content">content</view>
        </view>
        <view class="info-item">
            <view class="info-title">近3个月到期兑付债务</view>
            <view class="info-content">content</view>
        </view>
    </view>
</template>
<script>

export default ({
    name: "infoContent",
})
</script>
<style lang="scss" scoped>
    .info-container {
        width: 100%;
        background-image: linear-gradient(-61deg, #63C4FF 1%, #4D97FF 100%);
        box-shadow: 0 2px 8px 0 rgba(81,120,159,0.46);
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;

        .line {
            width: 100%;
            margin: 0 16px;
            border-bottom: 1px dashed #ffffff;
        }
        .info-item {
            padding: 16px 0 0 16px;
            width: 50%;
            .info-title {
                font-size: 13px;
                color: #FFFFFF;
                letter-spacing: 0;
                text-align: left;
                font-weight: 400;
                margin-bottom: 10px;
            }
            .info-content {
                font-size: 30px;
                color: #FFFFFF;
                letter-spacing: 0;
                text-align: left;
                font-weight: 700;
                margin-bottom: 15px;
            }
        }
    }
</style>