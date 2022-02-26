<template>
    <view class="person-chart-container">
        <home-chart img="/static/img/person-title.svg" title="借款人贷款分摊" chartClass="person-chart" :height="300" />
    </view>
</template>
<script>
import { pieColorList } from '@/common/config'
import { 
    getBorrowerLoan,
} from '@/common/http.api.js'
import { personChartsMapping } from '@/common/utils.js' 
export default {
    name: "personChart",
    data() {
        return {
        }
    },
    mounted() {
        this.getBorrowerLoanApi()
    },
    methods: {
        getBorrowerLoanApi() {
            getBorrowerLoan().then(res => {
                this.data = personChartsMapping(res?.dataList)
                this.init()
            })
        },
        init() {
            const personChart = this.echarts.init(document.querySelector('.person-chart'))
            // 绘制图表
            personChart.setOption({
                legend: {
                    bottom: 5,
                    left: 'center',
                    itemWidth: 18,
                    itemHeight: 3,
                    type: 'scroll',
                    // orient: 'vertical', //图例列表的布局朝向（垂直排列）
                    formatter: function (name) {
                        return name.length > 4 ? name.substr(0, 4) + '...' : name
                    },
                    tooltip: {
                        show: true
                    }
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
                            // formatter: '{b}\n{d}%',
                            normal: {
                                formatter({name}) {
                                    return name.length > 3 ? name.substr(0, 3) + '...' : name
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
                        data: this.data.dataList
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