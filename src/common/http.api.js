const http = uni.$u.http

// 用户权限校验
export const getUser = (params, config = {}) => http.post('/getDataFromOA/getuser', params, config)

// 总授信信息获取
export const getCreditInformation = (params, config = {}) => http.post('/getDataFromOA/getCreditInformation', params, config)

// 未来的还款统计
export const getRepayment = (params, config = {}) => http.post('/getDataFromOA/getRepayment', params, config)

// 银行贷款分摊
export const getBankLoan = (params, config = {}) => http.post('/getDataFromOA/getBankLoan', params, config)

// 借款人贷款分摊
export const getBorrowerLoan = (params, config = {}) => http.post('/getDataFromOA/getBorrowerLoan', params, config)

// 金融机构
export const getjyjg = (params, config = {}) => http.post('/getDataFromOA/getjyjg', params, config)

// 借款人接口
export const getLoanuser = (params, config = {}) => http.post('/getDataFromOA/getLoanuser', params, config)

// 银行列表
export const getBankCredit = (params, config = {}) => http.post('/getDataFromOA/getBankCredit', params, config)

