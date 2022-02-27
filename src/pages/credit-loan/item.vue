<template>
    <view class="credit-item-box">
        <list-item>
            <view class="header-box">
                <view class="header-left">
                    <image class="bank-logo" :src="data.logo" />
                    <text class="bank-text">{{data.financialName}}</text>
                    <text class="bank-code">{{data.code}}</text>
                </view>
                <view :class="{'header-right': data.dataStatus === '使用中', 'header-right-active': data.dataStatus === '未提款'}">
                    {{data.dataStatus}}
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
                <text class="content-text">以提款</text>
                <text class="content-text">贷款额度</text>
                <text class="number number-1">{{data.loanLimit}}</text>
                <text class="number number-2">{{data.withDrawn}}</text>
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
        .header-box {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
            .header-left {
                display: flex;
                align-items: center;
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
                    font-size: 13px;
                    color: #999999;
                    letter-spacing: 0;
                    font-weight: 400;
                }
            }
            .header-right {
                background: #F0F9F2;
                border: 1px solid #B5E3BF;
                border-radius: 6px;
                padding: 2px 8px;
                font-size: 12px;
                color: #6CC77F;
                font-weight: 400;
            }
            .header-right-active {
                background: #ECF4FF;
                border: 1px solid #AED1FF;
                border-radius: 6px;
                padding: 2px 8px;
                font-size: 12px;
                color: #4190FF;
                font-weight: 400;
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