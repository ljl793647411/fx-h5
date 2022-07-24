<template>
    <view class="new-bank-detail-box">
        <list-item>
            <view class="header">
                <view class="back-title-box">
                    <view class="back-logo">
                        <img :src="data.dataiconurl" />
                    </view>
                    <view class="back-name">{{data.shortName}}</view>
                    <text class="back-tag">{{data.category}}</text>
                </view>
                <view class="jump-back-info" @click="jump">
                    查看银行架构
                </view>
            </view>
            <view class="back-english-name">{{data.name_en}}</view>
            <view class="back-data-summary">
                <view class="back-item-left">
                    <view class="back-item">
                        <view class="back-item-top">
                            <view class="circle y"></view>
                            <view class="item-name">年审日期</view>
                        </view>
                        <view class="back-item-bottom">
                            {{data.annualReview}}
                        </view>
                    </view>
                    <view class="back-item">
                        <view class="back-item-top">
                            <view class="circle b"></view>
                            <view class="item-name">对接人(A角)</view>
                        </view>
                        <view class="back-item-bottom">
                            {{data.bankangleA}}
                        </view>
                    </view>
                </view>
                <view class="line"></view>
                <view class="back-item-left">
                    <view class="back-item">
                        <view class="back-item-top">
                            <view class="circle r"></view>
                            <view class="item-name">理财子方针</view>
                        </view>
                        <view class="back-item-bottom">
                            {{data.managePrpolicy}}
                        </view>
                    </view>
                    <view class="back-item">
                        <view class="back-item-top">
                            <view class="circle p"></view>
                            <view class="item-name">对接人(B角)</view>
                        </view>
                        <view class="back-item-bottom">
                            {{data.bankangleA}}
                        </view>
                    </view>
                </view>
            </view>
        </list-item>
    </view>
</template>

<script>
const mockData = [{
			"id": "001283",//内码
            code: '00001',//编号 
            name_chs: '上海复星高科技（集团）有限公司',//中文简体
            shortName: '复星高科 ',
            name_cht: '复星高科 ',//中文繁体
            name_en: 'fasdff', //英文名称
            name_pt: '',
            name_es: '',
            annualReview: "2022-01-01",//年审日期
            managePrpolicy: "12.5%",//理财子占比方针
            contacts: "联系人",
            countryOrRegion: "国家",
            ofRegion: "地区",
            province: "省",
            city: "市",
            partnerShiplevel: "合作紧密程度",
            bankangleA: "A角",
            bankangleB: "B角",
            iconurl: "te",//图标名称
			remark: "备注",///备注
            category: '中资 '//中资，外资
    }          
]
export default {
    name: "bank-detail",
    data() {
        return {
            data: {}
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        jump() {
            if (!this.data) {
                return
            }
            uni.navigateTo({
                url: `/pages/bank/bank-base-detail`
            })
        },
        getData() {
            this.data = mockData?.[0]
        }
    }
}
</script>

<style scoped lang="scss">
.new-bank-detail-box {
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .back-title-box {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .back-logo {
                width: 20px;
                height: 20px;
            }
            .back-name {
                font-size: 16px;
                color: #232426;
                font-weight: 500;
                padding-left: 6px;
                padding-right: 16px;
            }
            .back-tag {
                border-radius: 4px;
                background-image: linear-gradient(135deg, rgba(249,86,76,0.82) 0%, rgba(255,93,82,0.74) 100%);
                font-size: 10px;
                color: #FFFFFF;
                font-weight: 500;
                padding: 2px 6px;
            }
        }
        .jump-back-info {
            background: #F7FBFF;
            border: 0.6px solid #CAE1FF;
            box-shadow: 0 2px 8px 0 rgba(218,231,255,0.30);
            border-radius: 10px;
            font-size: 12px;
            color: #3A90FF;
            letter-spacing: 0;
            font-weight: 400;
            padding: 2px 8px;
        }
    }

    .back-english-name {
        padding: 7px 0 14px 26px;
        font-size: 10px;
        color: rgba(0,0,0,0.85);
        font-weight: 400;
    }

    .back-data-summary {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 36px;

        .line {
            width: 1px;
            height: 46px;
            background: rgba(67,80,105,0.15);;
        }

        .back-item-left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .circle {
                width: 12px;
                height: 12px;
                transform: scaleX(-1);
                border: 4px solid;
                border-radius: 50%;
            }
            .y {
                border-color: #FFA326;
            }
            .r {
                border-color: #FB776F;
            }
            .b {
                border-color: #00CEDB;
            }
            .p {
                border-color: #6474EF;
            }

            .back-item {
                margin-bottom: 14px;

                &:last-child {
                    margin-bottom: 0;
                }
                .back-item-top {
                    display: flex;
                    align-items: center;
                    margin-bottom: 7px;

                    .item-name {
                        padding-left: 5px;
                        color: #5A5E66;
                        line-height: 18px;
                        font-weight: 400;
                        font-size: 13px;
                    }
                }
                .back-item-bottom {
                    font-size: 13px;
                    color: rgba(0,0,0,0.85);
                    font-weight: 400;
                }

            }
        }
    }
    
}

</style>