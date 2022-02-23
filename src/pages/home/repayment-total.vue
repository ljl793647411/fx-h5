<template>
    <view class="">
        <home-chart img="/static/img/re-title.svg" title="未来还款统计" chartClass="repayment-chart" :height="327" />
    </view>
</template>
<script>
export default {
    name: "repaymentTotal",
    data() {
        return {
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            let xAxisData = [];
            let data1 = [];
            let data2 = [];
            for (let i = 1; i < 13; i++) {
            xAxisData.push(i);
                data1.push(+(Math.random() * 2).toFixed(2));
                data2.push(+(Math.random() * 5).toFixed(2));
            }
           
            const repaymentCharts = this.echarts.init(document.querySelector('.repayment-chart'))
            // 绘制图表
            repaymentCharts.setOption({
                legend: {
                    data: ['还本金额', '还息金额'],
                    bottom: 30,
                    itemWidth: 18,
                    itemHeight: 3,
                    itemGap: 80,
                },
                tooltip: {},
                xAxis: {
                    data: xAxisData,
                    name: '(月)',
                    nameTextStyle: {
                        color: "#5f78a9",
                        align: "center",
                    },
                    axisTick: {
                        alignWithLabel: true,
                    },
                    axisLabel: {
                        margin: 10,
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
                    name: '(亿元)',
                    nameTextStyle: {
                        color: "#5f78a9",
                        align: "center",
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
                    bottom: 80
                },
                series: [
                    {
                        name: '还本金额',
                        type: 'bar',
                        stack: 'one',
                        data: data1,
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
                        data: data2,
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