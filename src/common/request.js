import { env } from './config'


// 不同的接口不同的环境选择不同的apiKey
const API_KEY = {
	dev: {
		1: 'Bearer 13b91cb6-2814-473c-dd20-95652baac594',
		2: 'Bearer 0cc79999-833f-6e5e-d681-c37de1ceeeb6',
		3: 'Bearer 4fcda35c-7d2e-2478-0062-667e4a88d596',
	}, // 开发环境
	test: {
		1: 'Bearer d4477364-0248-a21c-3d7d-ce5c921cf96f',
		2: 'Bearer 53d7f4e1-9056-9fd3-d79a-fab66755fb3d',
		3: 'Bearer e78a588a-37ce-3025-83cb-738dfb6836c2',
	}, // 测试环境
	pro: {
		1: 'Bearer f663eb82-25a7-0223-eb3d-04f7add687c1',
		2: 'Bearer 622d24ac-0a87-5214-78ac-5c8a10b51cfa',
		3: 'Bearer 860819fd-8088-c54d-a2f6-4b4ab40b17b4',
	} // 生产环境
}
// 为了保证接口并发导致进入多次401判断逻辑
let flag = false;
// 此vm参数为页面的实例，可以通过它引用vuex中的变量
module.exports = (vm) => {
    // 初始化请求配置
    uni.$u.http.setConfig((config) => {
        /* config 为默认全局配置*/
        config.baseURL = '/api/jtgk'; /* 根域名 */
		config.header = {
			'content-type' : 'application/json',
			"X-ECC-Current-Tenant": 10000,
	   	} 
        return config
    })
	
	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
		// 跳过对权限接口的校验
		if (!window._isAuth && config.url !== '/fosun/sso/v1.0/userCheck') {
			return Promise.reject({code: 401})
		}
	    // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
	    config.data = config.data
		// 根据custom参数中配置的添加对应的Authorization
		const auth = config.custom.auth
		if (auth) {
			config.header.Authorization = API_KEY[env][auth]
		}
	    return config 
	}, config => { // 可使用async await 做异步操作
	    return Promise.reject(config)
	})
	
	// 响应拦截
	uni.$u.http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
		if (response.data.resultCode === 'S') {
			return response.data || {}
		} else {
			return Promise.reject(response.data)
		}
	}, (response) => { 
		if (response?.code === 401) {
			// 只需处理一次401
			if (!flag) {
				flag = true;
				// uni.$u.toast('抱歉，您没有权限,将自动跳转登陆页获取权限')
				uni.navigateTo({
					url: '/pages/login/index',
				})
			}
		} else {
			uni.$u.toast('网络错误')
		}
		// 对响应错误做点什么 （statusCode !== 200）
		return Promise.reject(response)
	})
}