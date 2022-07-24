<template>
    <view class="plat-info-box">
        <list-item title="板块信息">
            <view v-if="list.length > 0">
                <view v-for="(item, index) in list" :key="index">
                    <back-plat-process
                        :logo="''"
                        :name="item.sectionName"
                        :amount="item.exposureLimit"
                        :proportion="item.creditUsedRate"
                        :process="item.creditUsedRate"
                    ></back-plat-process>
                    <view v-if="item.sectionName === '集团总部'">
                        <view class="plat-base-card">
                            <base-card
                                :columns="columns"
                                :dataSource="item"
                            ></base-card>
                        </view>
                        <view class="line"></view>
                    </view>
                </view>
            </view>
            <view v-else>
                <empty></empty>
            </view>
        </list-item>
    </view>
</template>

<script>
import backPlatProcess from './back-plat-process.vue'
let mockList = [{
                sectionName: '集团总部',//版块名
                exposureLimit: '1500.12',//敞口额度 ，不显示两位小数
                averageInterestRate: '12.00%',//平均利率，显示两位小数
                creditUsedRate: '14%',//授信使用率，不显示两位小数
                loanCreditOccupied: '1200',//贷款授信占用额度，不显示两位小数
                bondCreditOccupied: '4000',//债券授信占用额度，不显示两位小数
                totalDepositAmount: '-',//总存款金额，系统内无数据，暂时显示-
                withdrawableAmount: '200',//可提款金额，不显示两位小数
                accountsNumber: '20',//账号数目，系统内无数据，暂时显示-
                averageLoanTerm: '10',//平均贷款期限 ，数值后缀是（月）
            },
            {
                sectionName: '健康',//版块名
                exposureLimit: '1500.12',//敞口额度 ，不显示两位小数
                averageInterestRate: '12.00%',//平均利率，显示两位小数
                creditUsedRate: '14%',//授信使用率，不显示两位小数
                loanCreditOccupied: '1200',//贷款授信占用额度，不显示两位小数
                bondCreditOccupied: '4000',//债券授信占用额度，不显示两位小数
                totalDepositAmount: '-',//总存款金额，系统内无数据，暂时显示-
                withdrawableAmount: '200',//可提款金额，不显示两位小数
                accountsNumber: '20',//账号数目，系统内无数据，暂时显示-
                averageLoanTerm: '10',//平均贷款期限 ，数值后缀是（月）

            },
            {
                sectionName: '快乐',//版块名
                exposureLimit: '1500.12',//敞口额度 ，不显示两位小数
                averageInterestRate: '12.00%',//平均利率，显示两位小数
                creditUsedRate: '14%',//授信使用率，不显示两位小数
                loanCreditOccupied: '1200',//贷款授信占用额度，不显示两位小数
                bondCreditOccupied: '4000',//债券授信占用额度，不显示两位小数
                totalDepositAmount: '-',//总存款金额，系统内无数据，暂时显示-
                withdrawableAmount: '200',//可提款金额，不显示两位小数
                accountsNumber: '20',//账号数目，系统内无数据，暂时显示-
                averageLoanTerm: '10',//平均贷款期限 ，数值后缀是（月）

            },
            {
                sectionName: '富足',//版块名
                exposureLimit: '1500.12',//敞口额度 ，不显示两位小数
                averageInterestRate: '12.00%',//平均利率，显示两位小数
                creditUsedRate: '14%',//授信使用率，不显示两位小数
                loanCreditOccupied: '1200',//贷款授信占用额度，不显示两位小数
                bondCreditOccupied: '4000',//债券授信占用额度，不显示两位小数
                totalDepositAmount: '-',//总存款金额，系统内无数据，暂时显示-
                withdrawableAmount: '200',//可提款金额，不显示两位小数
                accountsNumber: '20',//账号数目，系统内无数据，暂时显示-
                averageLoanTerm: '10',//平均贷款期限 ，数值后缀是（月）

            }
    ]
export default {
    name: "plat-info",
    data() {
        return {
            list: [],
            columns: [
                {
                    label: '贷款授信占用金额',
                    dataIndex: 'loanCreditOccupied'
                },
                {
                    label: '债券授信占用金额',
                    dataIndex: 'bondCreditOccupied'
                },
                {
                    label: '总存款金额',
                    dataIndex: 'totalDepositAmount'
                },
                {
                    label: '可提款金额',
                    dataIndex: 'withdrawableAmount'
                },
                {
                    label: '账号数目',
                    dataIndex: 'accountsNumber',
                    render: (data) => {
                        return `${data.accountsNumber}个`
                    }
                },
                {
                    label: '平均债务期限',
                    dataIndex: 'averageLoanTerm',
                    render: (data) => {
                        return `${data.averageLoanTerm}月`
                    }
                },
            ]
        }
    },
    components: {
        backPlatProcess
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            this.list = mockList.map(item => ({
                ...item,
                creditUsedRate: item.creditUsedRate.split('%')[0] || 0
            }))
        }
    }
}
</script>

<style scoped lang="scss">
    .plat-info-box {
        width: 100%;

        .line {
            border-bottom: 1px dashed #C4D5EB;
            margin: 12px 0;
        }
        .plat-base-card {
            padding: 0 16px;
        }
    }
</style>