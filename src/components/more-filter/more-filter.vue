<template>
    <view class="public-more-filter-component">
        <view class="top">
            <view class="back-img" @click="close">
                <image src="../../static/img/s-arrow-left.svg" />
            </view>
            <text class="title">
                {{`${title}选择`}}
            </text>
            <!-- 占位 -->
            <view></view>
        </view>
        <scroll-view class="list" :scroll-y="true">
            <view class="list-item" v-for="(item, index) in tagsList" :key="index" @click="checkboxClick(index)">
                <text>{{item.label}}</text>
                <text class="checked-img" v-if="item.checked">
                    ✓
                </text>
            </view>
        </scroll-view>
    </view>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        },
        tagsList: {
            type: Array,
            default: () => []
        },
        close: {
            type: Function
        }
    },
    methods: {
        checkboxClick(index) {
            this.tagsList[index].checked = !this.tagsList[index].checked
        }
    }
}
</script>

<style lang="scss" scoped>
    .public-more-filter-component {
        width: 320px;
        padding: 0 16px;     
        
        .top {
            width: 100%;
            height: 44px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .back-img {
                width: 20px;
                height: 20px;
                line-height: 20px;
            }
            .title {
                font-size: 17px;
                color: #333333;
                letter-spacing: 0;
                text-align: center;
                font-weight: 500;
            }
        }
        .list {
            height: calc(100vh - 44px);
            .list-item {
                font-size: 16px;
                color: #333333;
                letter-spacing: 0;
                font-weight: 400;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #dddddd;
                padding: 11px 0;
            }

            .checked-img {
                line-height: 14px;
                color: #3A90FF;
                font-size: 14px;
            }
        }
    }
</style>