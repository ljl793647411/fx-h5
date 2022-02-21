import Vue from 'vue'
import App from './App'
import store from '@/store';
import moment from 'moment';

Vue.config.productionTip = false;
Vue.prototype.moment = moment;

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