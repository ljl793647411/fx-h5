<template>
    <view class="public-component-container">
        <view class="search-box">
            <view class="search-input">
                <!-- <u-input /> -->
            </view>
            <view class="filter-box" @click="showDrawer">
                <text>筛选</text>
                <view class="filter-img">
                    <image src="/static/img/filter.svg" />
                </view>
            </view>
        </view>
        <scroll-view class="content-box" :scroll-y="true">
            <slot name="content"></slot>
        </scroll-view>
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
        background: #F1F2F5;
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
            height: calc(100vh - 140px);
            padding: 12px 8px;
            box-sizing: border-box;
        }
    }
</style>
