<template>
    <view>
        <home-chart title="TOP10企业授信分摊" chartClass="bank-top-10-charts" :height="357" />
    </view>
</template>
<script>
import { getBankTopTenApi } from '@/common/http.api.js'
import { bankTopTenMapping } from '@/common/utils.js'
const mockData1 = [{
			code: '00001',//公司编号 
            name: '复地',//公司全称
            shortName: '复地公司',//公司简称
            exposureLimit: '89.34'//敞口额度
            },
            {
			code: '00002',//公司编号  
            name: '复星高科',//公司全称
            shortName: '复星高科技集团',//公司简称
            exposureLimit: '100.12'//敞口额度
            },
            {
			code: '00002',//公司编号  
            name: '复星高科',//公司全称
            shortName: '复星高科技集团',//公司简称
            exposureLimit: '100.12'//敞口额度
            },
            {
			code: '00002',//公司编号  
            name: '复星高科',//公司全称
            shortName: '复星高科技集团',//公司简称
            exposureLimit: '100.12'//敞口额度
            },
            {
			code: '00002',//公司编号  
            name: '复星高科',//公司全称
            shortName: '复星高科技集团',//公司简称
            exposureLimit: '100.12'//敞口额度
            },
            {
			code: '00002',//公司编号  
            name: '复星高科',//公司全称
            shortName: '复星高科技集团',//公司简称
            exposureLimit: '100.12'//敞口额度
            },
            {
			code: '00002',//公司编号  
            name: '复星高科',//公司全称
            shortName: '复星高科技集团',//公司简称
            exposureLimit: '100.12'//敞口额度
            },
            {
			code: '00002',//公司编号  
            name: '复星高科',//公司全称
            shortName: '复星高科技集团',//公司简称
            exposureLimit: '100.12'//敞口额度
            },
            {
			code: '00002',//公司编号  
            name: '复星高科',//公司全称
            shortName: '复星高科技集团',//公司简称
            exposureLimit: '100.12'//敞口额度
            },
            {
			code: '00002',//公司编号  
            name: '复星高科',//公司全称
            shortName: '复星高科技集团',//公司简称
            exposureLimit: '100.12'//敞口额度
            }
        ]
export default {
    name: "top-ten",
    data() {
        return {
            data: {}
        }
    },
    mounted() {
        this.getBankTopTen()
    },
    methods: {
        getBankTopTen() {
            this.data = bankTopTenMapping(mockData1)
            this.init()
            // getBankTopTenApi().then(res => {
            //     let list = []
            //     // 最多展示10条
            //     if (res?.dataList?.length > 10) {
            //         list = res?.dataList.slice(0, 10)
            //     } else {
            //         list = res?.dataList || []
            //     }

            //     this.data = bankTopTenMapping(list)
            //     this.init()
            // })
        },
        init() {
            const bankChart = this.echarts.init(document.querySelector('.bank-top-10-charts'))
            // 绘制图表
            bankChart.setOption({
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    triggerOn: 'click'
                },
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