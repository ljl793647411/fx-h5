<template>
    <view class="">
        <home-chart img="/static/img/person-title.svg" title="借款人贷款分摊" chartClass="person-chart" :height="340" />
    </view>
</template>
<script>
export default {
    name: "personChart",
    data() {
        return {
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            const repaymentCharts = this.echarts.init(document.querySelector('.person-chart'))
            // 绘制图表
            repaymentCharts.setOption({
                legend: {
                    bottom: '5%',
                    left: 'center',
                    width: 200,
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['30%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                        ]
                    }
                ]
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>