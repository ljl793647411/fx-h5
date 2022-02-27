<template>
    <view class="public-component-container">
        <view class="search-box">
            <view class="search-input">
                <u-input />
            </view>
            <view class="filter-box" @click="showDrawer">
                <text>筛选</text>
                <view class="filter-img">
                    <image src="/static/img/filter.svg" />
                </view>
            </view>
        </view>
        <view class="content-box">
            <slot name="content"></slot>
        </view>
        <view>
            <slot 
                name="drawer"
            />
        </view>
    </view>
</template>

<script>
export default {
    props: {
        showDrawer: {
            type: Function
        }
    },
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
            padding: 7px 16px;
            background: #ffffff;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .search-input {
                width: 78%;
                height: 100%;
            }
            .filter-box {
                display: flex;
                align-items: center;
                font-size: 14px;
                color: #666666;
                font-weight: 400;
                .filter-img {
                    width: 12px;
                    height: 12px;
                    line-height: 14px;
                    margin-left: 2px;
                }
            }
        }

        .content-box {
            width: 100%;
            padding: 12px 8px;
        }
    }
</style>
