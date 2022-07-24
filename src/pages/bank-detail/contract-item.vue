<template>
    <view class="contract-item-box">
        <view  v-if="list.length > 0">
            <view class="item" v-for="(item, index) in list" :key="index">
                <view class="top">
                    <view class="left">
                        <view class="name">{{item.borrowerShortName}}</view>
                        <view class="code">{{item.code}}</view>
                    </view>
                    <text :class="{'date-box': true, 'error': true, 'warning': false}">{{`到期日期：${item.paydate}`}}</text>
                </view>
                <view class="bottom">
                    <text class="price">{{`金额：${item.payamount}`}}</text>
                    <text>{{`币种：${item.paydate}`}}</text>
                </view>
            </view>
        </view>
        <view v-else>
            <empty></empty>
        </view>
    </view>
</template>

<script>
import empty from '../../components/empty/empty.vue'
export default {
  components: { empty },
    props: {
        list: {
            type: Array,
            default: []
        }
    }
}
</script>

<style scoped lang="scss">
.contract-item-box {
    .item {
        padding: 10px 0;
        border-bottom: 1px solid #dddddd;

        .top {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .left {
                display: flex;
                align-items: center;

                .name {
                    font-size: 13px;
                    color: #3794FF;
                    font-weight: 500;
                }
                .code {
                    font-size: 13px;
                    color: rgba(0,0,0,0.85);
                    font-weight: 400;
                    padding-left: 12px;
                }
            }
            .date-box {
                font-size: 12px;
                color: rgba(0,0,0,0.85);
                text-align: right;
                font-weight: 400;

                &.error {
                    color: rgba(254,21,20,0.65);
                }

                &.warning {
                    color: #F7933B;
                }
            }
        }
        .bottom {
            margin-top: 6px;
            font-size: 12px;
            color: rgba(0,0,0,0.65);
            font-weight: 400;
            .price {
                margin-right: 47px;
            }
        }
    }
}
</style>