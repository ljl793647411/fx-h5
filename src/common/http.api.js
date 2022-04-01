const http = uni.$u.http

// 用户权限校验
export const getUser = (params, config = {
    custom: {auth: 3}
}) => http.post('/fosun/sso/v1.0/userCheck', params, config)

// 总授信信息获取
export const getCreditInformation = (params, config = {
    custom: {auth: 1}
}) => http.post('/hbct/v1.0/getDataFromOA/getCreditInformation', params, config)

// 未来的还款统计
export const getRepayment = (params, config = {
    custom: {auth: 1}
}) => http.post('/hbct/v1.0/getDataFromOA/getRepayment', params, config)

// 银行贷款分摊
export const getBankLoan = (params, config = {
    custom: {auth: 1}
}) => http.post('/hbct/v1.0/getDataFromOA/getBankLoan', params, config)

// 借款人贷款分摊
export const getBorrowerLoan = (params, config = {
    custom: {auth: 1}
}) => http.post('/hbct/v1.0/getDataFromOA/getBorrowerLoan', params, config)

// 金融机构
export const getjyjg = (params, config = {
    custom: {auth: 2}
}) => http.post('/hbct/v1.0/getDataFromOA/getjyjg', params, config)

// 借款人接口
export const getLoanuser = (params, config = {
    custom: {auth: 2}
}) => http.post('/hbct/v1.0/getDataFromOA/getLoanuser', params, config)

// 银行列表
export const getBankCredit = (params, config = {
    custom: {auth: 2}
}) => http.post('/hbct/v1.0/getDataFromOA/getBankCredit', params, config)

// 贷款查询列表
export const getLoanWeb = (params, config = {
    custom: {auth: 2}
}) => http.post('/hbct/v1.0/getDataFromOA/getLoanWeb', params, config)

