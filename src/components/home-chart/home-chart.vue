<template>
    <view class="home-chart-container">
        <view class="title-box">
            <image v-if="img" class="title-img" :src="img" />
            <text class="title">{{title}}</text>
        </view>
        <view :class="[chartClass, 'chart']" :style="{height: `${height}px`}" />
    </view>
</template>

<script>
export default {
    props: {
        img: {
            type: String
        },
        chartClass: {
            type: String
        },
        title: {
            type: String
        },
        height: {
            type: Number
        }
    }
}
</script>

<style lang="scss" scoped>
    .home-chart-container {
        width: 100%;
        background: #ffffff;
        margin-top: 12px;
        box-shadow: 0 2px 8px 0 rgba(81,120,159,0.12);
        border-radius: 8px;

        .title-box {
            width: 100%;
            padding: 8px 14px;
            border-bottom: 1px solid #dddddd;
            display: flex;
            align-items: center;
            
            .title-img {
                width: 28px;
                height: 28px;
                margin-right: 5px;
            }

            .title {
                font-size: 16px;
                color: #333333;
                letter-spacing: 0;
                font-weight: 500;
            }
        }
        .chart {
            width: 100%;
        }
    }
</style>