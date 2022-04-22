<template>
    <view class="">
        <home-chart img="/static/img/bank-title.svg" title="银行贷款分摊" chartClass="bank-chart" :height="357" />
    </view>
</template>
<script>
import { getBankLoan } from '@/common/http.api.js'
import { bankChartsMapping } from '@/common/utils.js'
export default {
    name: "bankChart",
    data() {
        return {
            data: {}
        }
    },
    mounted() {
        this.getBankLoanApi()
    },
    methods: {
        getBankLoanApi() {
            getBankLoan().then(res => {
                this.data = bankChartsMapping(res?.dataList)
                this.init()
            })
        },
        init() {
            const bankChart = this.echarts.init(document.querySelector('.bank-chart'))
            // 绘制图表
            bankChart.setOption({
                yAxis: {
                    type: 'category',
                    data: this.data.category,
                    nameTextStyle: {
                        color: "#5f78a9",
                        align: "center",
                        overflow: 'ellipsis',
                        width: 10
                    },
                    axisTick: {
                        alignWithLabel: true,
                        show: false
                    },
                    axisLabel: {
                        margin: 10,
                        overflow: 'ellipsis',
                        width: 10,
                        formatter: function (name) {
                            return name.length > 4 ? name.substr(0, 4) + '...' : name
                        },
                    },
                    offset: 0,
                    axisLine: { 
                        lineStyle: {
                            color: "#5F78A91",
                        },
                        onZero: true
                    },
                    splitLine: { show: false },
                    splitArea: { show: false }
                },
                grid: {
                    left: 78,
                    bottom: 70,
                    right: 60,
                    top: 20
                },
                xAxis: {
                    name: `(${this.data.unit}元)`,
                    type: 'value',
                    nameTextStyle: {
                        color: "#5f78a9",
                        align: "left",
                    },
                    splitLine :{ //网格线
                        lineStyle:{
                            type:'dashed' //设置网格线类型 dotted：虚线 solid:实线
                        },
                        show:true //隐藏或显示
                    },
                    axisLabel: {
                        rotate: 45,
                        hideOverlap: true,
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#5f78a9",
                        }
                    }
                },
                series: [
                    {
                        type: 'bar',
                        data: this.data.data,
                        barWidth : 9,
                        itemStyle: {
                            borderRadius:9,
                            color: '#5697F2'
                        },
                    }
                ]
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>