const { Object } = require("core-js");

// 此vm参数为页面的实例，可以通过它引用vuex中的变量
module.exports = (vm) => {
    // 初始化请求配置
    uni.$u.http.setConfig((config) => {
        /* config 为默认全局配置*/
        config.baseURL = '/api/jtgk/hbct/v1.0'; /* 根域名 */
		config.header = {
			'content-type' : 'application/json',
			// "Authorization": "Bearer 13b91cb6-2814-473c-dd20-95652baac594", // 开发环境
			"Authorization": "Bearer d4477364-0248-a21c-3d7d-ce5c921cf96f", // 测试环境
			"X-ECC-Current-Tenant": 10000,
	   	} 
        return config
    })
	
	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
	    // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
	    config.data = config.data || {}
		// 根据custom参数中配置的是否需要token，添加对应的请求头
		if(config?.custom?.auth) {
			// 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
			config.header.token = vm.$store.state.token
		}
	    return config 
	}, config => { // 可使用async await 做异步操作
	    return Promise.reject(config)
	})
	
	// 响应拦截
	uni.$u.http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
		return response.data || {}
	}, (response) => { 
		uni.$u.toast('网络错误')
		// 对响应错误做点什么 （statusCode !== 200）
		return Promise.reject(response)
	})
}