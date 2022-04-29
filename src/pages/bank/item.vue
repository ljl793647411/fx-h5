<template>
    <view class="bank-item-box">
        <list-item>
            <view class="header-box">
                <view class="header-left">
                    <image class="bank-logo" :src="data.iconName" />
                    <text class="bank-text ellipsis">{{data.financialName}}</text>
                    <text class="bank-code ellipsis">{{data.financialEnName}}</text>
                </view>
                <!-- <view class="collect-img">
                    <image src="/static/img/collect.svg" />
                </view> -->
            </view>
            <view class="content-box">
                <view class="content-item">
                    <view class="item-top">
                        <view class="ring ring-yellow"></view>
                        <text class="item-text">总授信</text>
                    </view>
                    <text class="item-num">{{data.totalCredit}}</text>
                </view>
                <view class="line" />
                <view class="content-item">
                    <view class="item-top">
                        <view class="ring ring-green"></view>
                        <text class="item-text">总用信</text>
                    </view>
                    <text class="item-num">{{data.totalUsedCredit}}</text>
                </view>
                <view class="line" />
                <view class="content-item">
                    <view class="item-top">
                        <view class="ring ring-blue"></view>
                        <text class="item-text">总可信</text>
                    </view>
                    <text class="item-num">{{data.availableCredit}}</text>
                </view>
            </view>
        </list-item>
    </view>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>

<style lang="scss" scoped>
    .bank-item-box {
        .header-box {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 16px;
            .header-left {
                display: flex;
                align-items: center;
                width: 100%;
                flex: 1;
                .bank-logo {
                    width: 20px;
                    height: 20px;
                    margin-right: 8px;
                }
                .bank-text {
                    font-size: 16px;
                    color: #333333;
                    letter-spacing: 0;
                    font-weight: 400;
                    padding-right: 6px;
                }
                .bank-code {
                    width: 50%;
                    font-size: 13px;
                    color: #999999;
                    letter-spacing: 0;
                    font-weight: 400;
                }
            }
            .collect-img {
                width: 16px;
                height: 16px;
            }
        }
        .content-box {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;

            .content-item {
                width: 30%;
                padding: 0 4px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                .item-top {
                    display: flex;
                    align-items: center;
                    .item-text {
                        font-size: 13px;
                        color: #435069;
                        letter-spacing: 0;
                        font-weight: 400;
                        padding-left: 4px;
                    }
                }
                .item-num {
                    padding-top: 8px;
                    font-size: 17px;
                    color: #435069;
                    letter-spacing: 0;
                    font-weight: 700;
                    word-break: break-all;
                }
            }
            .line {
                width: 0;
                height: 26px;
                border: 1px solid rgba(67,80,105,0.15);
            }
            .ring {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                border: 4px solid;
            }
            .ring-yellow {
                border-color: #FFA326;
            }
            .ring-green {
                border-color: #00CEDB;
            }
            .ring-blue {
                border-color: #6474EF;
            }
        }
    }
</style>