import Vue from 'vue'
import App from './App'
import store from '@/store';
import moment from 'moment';
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    BrushComponent,
    TitleComponent
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';


// 注册必须的组件
echarts.use([
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    BrushComponent,
    TitleComponent,
    
    BarChart,
    CanvasRenderer,
    LabelLayout,
    UniversalTransition
]);

Vue.config.productionTip = false;
Vue.prototype.moment = moment;
Vue.prototype.echarts = echarts;

App.mpType = 'app';

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView)

const app = new Vue({
    store,
    ...App
})
// 引入请求封装，将app参数传递到配置中
require('@/common/request.js')(app)

app.$mount()