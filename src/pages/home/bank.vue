<template>
    <view class="">
        <home-chart img="/static/img/bank-title.svg" title="银行贷款分摊" chartClass="bank-chart" :height="357" />
    </view>
</template>
<script>
export default {
    name: "bankChart",
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
            for (let i = 1; i < 8; i++) {
            xAxisData.push(i);
                data1.push(+(Math.random() * 2).toFixed(2));
                data2.push(+(Math.random() * 5).toFixed(2));
            }
           
            const bankChart = this.echarts.init(document.querySelector('.bank-chart'))
            // 绘制图表
            bankChart.setOption({
                yAxis: {
                    data: ['财务公司', '中国银行', '建设银行', '北京银行', '兴业银行', '浦发银行', '农业银行', '兴业银行', '浦发银行', '农业银行', ],
                    type: 'category',
                    nameTextStyle: {
                        color: "#5f78a9",
                        align: "center",
                    },
                    axisTick: {
                        alignWithLabel: true,
                        show: false
                    },
                    axisLabel: {
                        margin: 10,
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
                    bottom: 40,
                    right: 60,
                    top: 20
                },
                xAxis: {
                    name: '(亿元)',
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
                    axisLine: {
                        lineStyle: {
                            color: "#5f78a9",
                        }
                    }
                },
                series: [
                    {
                        type: 'bar',
                        data: [1,2,3,4,5,6,7, 8,9,10],
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