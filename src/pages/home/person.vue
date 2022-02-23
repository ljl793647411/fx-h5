<template>
    <view class="person-chart-container">
        <home-chart img="/static/img/person-title.svg" title="借款人贷款分摊" chartClass="person-chart" :height="300" />
    </view>
</template>
<script>
import { pieColorList } from '@/common/config'
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
            const personChart = this.echarts.init(document.querySelector('.person-chart'))
            // 绘制图表
            personChart.setOption({
                legend: {
                    bottom: 5,
                    left: 'center',
                    itemWidth: 18,
                    itemHeight: 3,
                }, 
                color: pieColorList,
                series: [
                    {
                        type: 'pie',
                        radius: ['30%', '70%'],
                        left: 50,
                        top: 0,
                        bottom: 80,
                        right: 50,
                        avoidLabelOverlap: false,
                        hoverAnimation: false,
                        legendHoverLink : false,
                        label: {
                            show: true,
                            position: 'outside',
                            formatter: '{b}\n{d}%',
                            color: 'rgba(67,80,105,0.60);'
                        },
                        markLine: {
                            silent: true
                        },
                        labelLine: {
                            show: true
                        },
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 580, name: 'Email1' },
                            { value: 580, name: 'Email2' },
                            { value: 580, name: 'Email3' },
                            { value: 580, name: 'Email4' },
                            { value: 580, name: '5' },
                            { value: 580, name: 'Email6' },
                            { value: 580, name: 'Email7' },
                            { value: 484, name: 'Union Ads' }
                        ]
                    }
                ]
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    .person-chart-container {
        .person-chart {
            padding: 14px;
        }
    }
</style>