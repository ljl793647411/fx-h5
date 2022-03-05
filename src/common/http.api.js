const http = uni.$u.http

// 用户权限校验
export const getUser = (params, config = {
    custom: {auth: 3}
}) => http.post('/getDataFromOA/getuser', params, config)

// 总授信信息获取
export const getCreditInformation = (params, config = {
    custom: {auth: 1}
}) => http.post('/getDataFromOA/getCreditInformation', params, config)

// 未来的还款统计
export const getRepayment = (params, config = {
    custom: {auth: 1}
}) => http.post('/getDataFromOA/getRepayment', params, config)

// 银行贷款分摊
export const getBankLoan = (params, config = {
    custom: {auth: 1}
}) => http.post('/getDataFromOA/getBankLoan', params, config)

// 借款人贷款分摊
export const getBorrowerLoan = (params, config = {
    custom: {auth: 1}
}) => http.post('/getDataFromOA/getBorrowerLoan', params, config)

// 金融机构
export const getjyjg = (params, config = {
    custom: {auth: 2}
}) => http.post('/getDataFromOA/getjyjg', params, config)

// 借款人接口
export const getLoanuser = (params, config = {
    custom: {auth: 2}
}) => http.post('/getDataFromOA/getLoanuser', params, config)

// 银行列表
export const getBankCredit = (params, config = {
    custom: {auth: 2}
}) => http.post('/getDataFromOA/getBankCredit', params, config)

// 授信贷款列表
export const getLoanWeb = (params, config = {
    custom: {auth: 2}
}) => http.post('/getDataFromOA/getLoanWeb', params, config)

