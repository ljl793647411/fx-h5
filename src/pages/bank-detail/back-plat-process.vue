<template>
    <view class="back-plat-process-component">
        <view class="header">
            <view class="logo">
                <img :src="logo" alt="">
            </view>
            <view class="name">{{`${name}板块`}}</view>
        </view>
        <view class="content">
            <view class="amount">
                <view class="amount-num">{{amount}}</view>
                <view class="amount-text">敞口额度</view>
            </view>
            <view class="proportion">
                <view class="proportion-num">{{proportion}}</view>
                <view class="proportion-text">平均利率</view>
            </view>
        </view>
        <view class="process-box">
            <text class="process-text">授信使用率</text>
            <view class="process-container">
                <u-line-progress :percentage="process" :showText="false" activeColor="#3AD6C9"></u-line-progress>
            </view>
            <text class="process-num">{{`${process}%`}}</text>
        </view>
    </view>
</template>

<script>
export default {
    name: "back-plat-process",
    props: {
        logo: {
            type: String
        },
        name: {
            type: String
        },
        amount: {
            type: String
        },
        proportion: {
            type: String
        },
        process: {
            type: String
        },
    }
}
</script>

<style scoped lang="scss">
    .back-plat-process-component {
        background: #F7FBFF;
        border: 1px solid rgba(143,203,253,0.15);
        box-shadow: 2px 2px 9px 0 rgba(0,28,140,0.06);
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 12px;
        
        .header {
            display: flex;
            align-items: center;

            .logo {
                width: 18px;
                height: 18px;
            }
            .name {
                padding-left: 4px;
                font-size: 16px;
                color: rgba(0,0,0,0.65);
                font-weight: 500;
            }
        }
        .content {
            margin: 12px 0;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;

            .amount {
                .amount-num {
                    font-size: 30px;
                    color: #373737;
                    letter-spacing: -0.07px;
                    font-weight: 700;  
                }
                .amount-text {
                    font-size: 10px;
                    color: rgba(12,33,62,0.73);
                    letter-spacing: 0;
                    font-weight: 400;
                }
            }
            .proportion {
                .proportion-num {
                    font-size: 16px;
                    color: #373737;
                    letter-spacing: 0;
                    text-align: right;
                    line-height: 24px;
                    font-weight: 700;
                }
                .proportion-text {
                    font-size: 10px;
                    color: rgba(12,33,62,0.73);
                    letter-spacing: 0;
                    font-weight: 400;
                }
            }
        }
        .process-box {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .process-text {
                font-size: 10px;
                color: rgba(12,33,62,0.73);
                letter-spacing: 0;
                font-weight: 400;
                margin-right: 4px;
            }
            .process-container {
                width: calc(100% - 100px);
            }
            .process-num {
                font-size: 13px;
                color: #373737;
                letter-spacing: 0;
                text-align: right;
                line-height: 24px;
                font-weight: 700;
                padding-left: 4px;
            }
        }
    }
</style>