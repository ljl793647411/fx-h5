const http = uni.$u.http

// post请求，获取菜单
export const getCreditInformation = (params, config = {}) => http.post('/getDataFromOA/getCreditInformation', params, config)

// get请求，获取菜单，注意：get请求的配置等，都在第二个参数中，详见前面解释
export const getMenu = (data) => http.get('/ebapi/public_api/index', data)