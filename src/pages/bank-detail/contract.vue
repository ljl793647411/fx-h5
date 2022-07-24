<template>
    <view class="bank-contract-box">
        <list-item title="合同跟踪">
            <view class="tab-box">
                <u-tabs 
                    :current="currentTab"
                    :list="tabList" 
                    :scrollable="false"
                    :lineWidth="70" 
                    @change="tabChange"
                ></u-tabs>
            </view>
            <contract-item :list="showDataList"></contract-item>
            <view class="more-btn">
                <view @click="changeMore" v-if="showMore">收起</view>
                <view @click="changeMore" v-else>展开更多</view>
            </view>
        </list-item>
    </view>
</template>

<script>
import contractItem from './contract-item.vue';

const mockData =  [{
			id: '001283',//内码
            borrowerName: "上海复星高科技（集团）有限公司",//借款人名称
            borrowerShortName: "复星高科",//借款人简称
            bankName: "中国建设银行股份有限公司北京富力城支行",//金融机构名称
            bankShortName: "北京富力城支行",//金融机构简称
			bankTypeName: "中国建设银行",//行别名称
            bankTypeShortName: "中国建设银行",//行别简称
            code: "TK202102-00001",//提款编号 
            payamount: '12345566.12',//还本金额
            curName: '人民币',//币种
            paydate: '2022-01-01'//还款日期
            },
            {
			id: '001284',//内码
            borrowerName: "上海复星高科技（集团）有限公司",//借款人名称
            borrowerShortName: "复星高科",//借款人简称
            bankName: "中国建设银行股份有限公司北京富力城支行",//金融机构名称
            bankShortName: "北京富力城支行",//金融机构简称
			bankTypeName: "中国建设银行",//行别名称
            bankTypeShortName: "中国建设银行",//行别简称
            code: "TK202102-00001",//提款编号 
            payamount: '12345566.12',//还本金额
            curName: '人民币',//币种
			paydate: '2022-01-01'//还款日期
            },
            {
			id: '001284',//内码
            borrowerName: "上海复星高科技（集团）有限公司",//借款人名称
            borrowerShortName: "复星高科",//借款人简称
            bankName: "中国建设银行股份有限公司北京富力城支行",//金融机构名称
            bankShortName: "北京富力城支行",//金融机构简称
			bankTypeName: "中国建设银行",//行别名称
            bankTypeShortName: "中国建设银行",//行别简称
            code: "TK202102-00001",//提款编号 
            payamount: '12345566.12',//还本金额
            curName: '人民币',//币种
			paydate: '2022-01-01'//还款日期
            },
            {
			id: '001284',//内码
            borrowerName: "上海复星高科技（集团）有限公司",//借款人名称
            borrowerShortName: "复星高科",//借款人简称
            bankName: "中国建设银行股份有限公司北京富力城支行",//金融机构名称
            bankShortName: "北京富力城支行",//金融机构简称
			bankTypeName: "中国建设银行",//行别名称
            bankTypeShortName: "中国建设银行",//行别简称
            code: "TK202102-00001",//提款编号 
            payamount: '12345566.12',//还本金额
            curName: '人民币',//币种
			paydate: '2022-01-01'//还款日期
            },
            {
			id: '001284',//内码
            borrowerName: "上海复星高科技（集团）有限公司",//借款人名称
            borrowerShortName: "复星高科",//借款人简称
            bankName: "中国建设银行股份有限公司北京富力城支行",//金融机构名称
            bankShortName: "北京富力城支行",//金融机构简称
			bankTypeName: "中国建设银行",//行别名称
            bankTypeShortName: "中国建设银行",//行别简称
            code: "TK202102-00001",//提款编号 
            payamount: '12345566.12',//还本金额
            curName: '人民币',//币种
			paydate: '2022-01-01'//还款日期
            }
]
export default {
    components: { 
        contractItem
    },
    data () {
        return {
            max: 3, // 最大展示条数
            currentTab: 0,
            showMore: false,
            dataList: [], // 接口返回数据
            showDataList: [], // 展示的数据，收起状态时需要前端做截取
            tabList: [
                {
                    name: '到期贷款合同'
                },
                {
                    name: '到期提款台账'
                },
                {
                    name: '未提款贷款合同'
                }
            ]
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        // 获取数据
        getData() {
            this.dataList = mockData
            this.getShowDataList()
        },
        // 切换tab
        tabChange({ index }) {
            this.currentTab = index;
            this.showMore = false
            this.getShowDataList()
        },
        // 收起展开切换
        changeMore() {
            this.showMore = !this.showMore
            this.getShowDataList()
        },
        // 设置展示的数据
        getShowDataList() {
            this.showDataList = this.showMore ? this.dataList : [...this.dataList].slice(0, this.max)
        }
    }
}
</script>

<style scoped lang="scss">
.bank-contract-box {
    width: 100%;

    .tab-box {
        border-bottom: 1px solid #dddddd;
    }

    .more-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        color: #3794FF;
        font-weight: 400;
        margin-top: 10px;
    }
}
</style>
