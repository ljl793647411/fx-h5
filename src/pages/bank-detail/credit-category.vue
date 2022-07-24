<template>
    <view class="credit-category-chart-container">
        <home-chart title="授信品种分摊" chartClass="credit-category-chart" :height="300" />
    </view>
</template>
<script>
import { pieColorList } from '@/common/config'
import { 
    getCreditCategory,
} from '@/common/http.api.js'
import { creditCategoryChartsMapping } from '@/common/utils.js' 

const mockData = [{
			"id": "001283",//授信品种字典内码
            code: '00001',//授信品种字典编号 
            name: '银行贷款',//授信品种字典中文简体
            exposureLimit:'700.34',//当前品种全口径敞口额度CNY汇总
            apportRatio:'12.50'//分摊比例*当前品种全口径敞口额度CNY汇总/当前总行下面所有全口径敞口额度CNY汇总',显示两位小数
            },
            {
			"id": "001284",//授信品种字典内码
            code:'00002',//授信品种字典编号 
            name:'流贷4',//授信品种字典中文简体
            exposureLimit:'890.34',//敞口额度
            apportRatio:'7.80'//分摊比例
        },
            {
			"id": "001285",//授信品种字典内码
            code:'00002',//授信品种字典编号 
            name:'流贷3',//授信品种字典中文简体
            exposureLimit:'230.34',//敞口额度
            apportRatio:'7.80'//分摊比例
        },
            {
			"id": "001286",//授信品种字典内码
            code:'00002',//授信品种字典编号 
            name:'流贷2',//授信品种字典中文简体
            exposureLimit:'120.34',//敞口额度
            apportRatio:'7.80'//分摊比例
        },
            {
			"id": "001287",//授信品种字典内码
            code:'00002',//授信品种字典编号 
            name:'流贷1',//授信品种字典中文简体
            exposureLimit:'490.34',//敞口额度
            apportRatio:'7.80'//分摊比例
        }
]
export default {
    name: "creditCategoryChart",
    data() {
        return {
        }
    },
    mounted() {
        this.getCreditCategoryApi()
    },
    methods: {
        getCreditCategoryApi() {
            this.data = creditCategoryChartsMapping(mockData)
            this.init()
            // getCreditCategory().then(res => {
            //     this.data = creditCategoryChartsMapping(res?.dataList)
            //     this.init()
            // })
        },
        init() {
            const personChart = this.echarts.init(document.querySelector('.credit-category-chart'))
            // 绘制图表
            personChart.setOption({
                color: pieColorList,
                series: [
                    {
                        type: 'pie',
                        radius: ['30%', '70%'],
                        left: 50,
                        top: 0,
                        bottom: 20,
                        right: 50,
                        avoidLabelOverlap: false,
                        hoverAnimation: false,
                        legendHoverLink : false,
                        label: {
                            show: true,
                            position: 'outside',
                            // formatter: '{b}\n{d}%',
                            normal: {
                                formatter(params) {
                                    let label = params.name.length > 3 ? params.name.substr(0, 3) + '...' : params.name
                                    return `${label}\n${params.percent}%`
                                }
                            },
                            color: 'rgba(67,80,105,0.60);'
                        },
                        markLine: {
                            silent: true
                        },
                        labelLine: {
                            show: true
                        },
                        data: this.data.dataList,
                        selectedOffset: 20,
                    }
                ]
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    .credit-category-chart-container {
        .credit-category-chart {
            padding: 14px;
        }
    }
</style>