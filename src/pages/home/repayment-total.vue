<template>
    <view class="">
        <home-chart img="/static/img/re-title.svg" title="未来还款统计" chartClass="repayment-chart" :height="327" />
    </view>
</template>
<script>
import { 
    getRepayment,
} from '@/common/http.api.js'
import { repaymentChartsMapping } from '@/common/utils.js'
export default {
    name: "repaymentTotal",
    data() {
        return {
            data: {}
        }
    },
    mounted() {
        this.getRepaymentApi()
    },
    methods: {
        getRepaymentApi() {
            getRepayment().then(res => {
                this.data = repaymentChartsMapping(res?.dataList)
                this.init()
            })
        },
        init() {
            const repaymentCharts = this.echarts.init(document.querySelector('.repayment-chart'))
            // 绘制图表
            repaymentCharts.setOption({
                legend: {
                    data: ['还本金额', '还息金额'],
                    bottom: 10,
                    itemWidth: 18,
                    itemHeight: 3,
                    itemGap: 80,
                },
                xAxis: {
                    data: this.data.category,
                    name: '(年月)',
                    nameTextStyle: {
                        color: "#5f78a9",
                        align: "center",
                    },
                    axisTick: {
                        alignWithLabel: true,
                    },
                    axisLabel: {
                        margin: 10,
                        rotate: 45,
                        // showMinLabel: true
                    },
                    offset: 0,
                    axisLine: { 
                        lineStyle: {
                            color: "#C4D5EB",
                        },
                        onZero: true
                    },
                    splitLine: { show: false },
                    splitArea: { show: false }
                },
                yAxis: {
                    name: `(${this.data.unit}元)`,
                    nameTextStyle: {
                        color: "#5f78a9",
                        align: "center",
                    },
                    axisLabel: {
                        margin: 10,
                        rotate: 45,
                        // showMinLabel: true
                    },
                    splitLine :{ //网格线
                        lineStyle:{
                            type:'dashed' //设置网格线类型 dotted：虚线 solid:实线
                        },
                        show:true //隐藏或显示
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#5f78a9",
                        }
                    }
                },
                grid: {
                    bottom: 80,
                    left: 70,
                    right: 50,
                },
                series: [
                    {
                        name: '还本金额',
                        type: 'bar',
                        stack: 'one',
                        data: this.data.data1,
                        barWidth : 8,
                        itemStyle: {
                            borderRadius: [0, 0, 8, 8],
                            color: '#5697F2'
                        },
                    },
                    {
                        name: '还息金额',
                        type: 'bar',
                        stack: 'one',
                        data: this.data.data2,
                        barWidth : 8,
                        itemStyle: {
                            borderRadius: [8, 8, 0, 0],
                            color: '#2DC9D3'
                        }
                    }
                ]
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>