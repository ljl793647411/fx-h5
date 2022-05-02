<template>
    <view class="credit-item-box">
        <list-item>
            <view class="header-box">
                <view class="header-top">
                    <image class="bank-logo" :src="data.iconName" />
                    <text class="bank-text ellipsis">{{data.financialName}}</text>
                </view>
                <view class="header-bottom">
                    <text class="bank-code ellipsis">{{data.code}}</text>
                    <text :class="{'header-right': data.dataStatus === '使用中', 'header-right-active': data.dataStatus === '未提款'}">
                        {{data.dataStatus}}
                    </text>
                </view>
            </view>
            <view class="content-box">
                <text class="content-text">{{`借款人: ${data.borrowerName}`}}</text>
                <text class="content-text">{{`贷款类别: ${data.loanCategory}`}}</text>
                <text class="content-text">{{`生效日期: ${data.effectiveDate}`}}</text>
                <text class="content-text">{{`到期日期: ${data.expireDate}`}}</text>
                <text class="content-text">{{`到期天数: ${data.dueDays}`}}</text>
                <text class="content-text">{{`币种: ${data.currency}`}}</text>
                <text class="content-text">{{`年利率: ${data.annualRate}`}}</text>
            </view>
            <view class="footer-box">
                <text class="content-text">已提款</text>
                <text class="content-text">贷款额度</text>
                <text class="number number-1">{{data.withDrawn}}</text>
                <text class="number number-2">{{data.loanLimit}}</text>
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
    .credit-item-box {
        width: 100%;
        .header-box {
            .header-top {
                display: flex;
                align-items: center;
                margin-bottom: 4px;
                width: 100%;
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
            }
            .header-bottom {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 12px;
                .bank-code {
                    width: 20px;
                    flex: 1;
                    font-size: 13px;
                    color: #999999;
                    letter-spacing: 0;
                    font-weight: 400;
                }
                .header-right {
                    width: 44px;
                    min-width: 44px;
                    background: #F0F9F2;
                    border: 1px solid #B5E3BF;
                    border-radius: 6px;
                    padding: 2px 2px;
                    font-size: 12px;
                    color: #6CC77F;
                    font-weight: 400;
                }
                .header-right-active {
                    min-width: 44px;
                    width: 44px;
                    background: #ECF4FF;
                    border: 1px solid #AED1FF;
                    border-radius: 6px;
                    padding: 2px 2px;
                    font-size: 12px;
                    color: #4190FF;
                    font-weight: 400;
                }
            }
        }
        .content-box {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
        }
        .content-text {
            width: 50%;
            padding-bottom: 4px;
            font-size: 13px;
            color: #999999;
            letter-spacing: 0;
            font-weight: 400;
        }
        .footer-box {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            .number {
                width: 50%;
                font-size: 18px;
                letter-spacing: 0;
                font-weight: 700;
            }
            .number-2 {
                color: #3B82FF;
            }
            .number-1 {
                color: #FA6400;
            }
        }
    }
</style>