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

// 2.0之后新增
// 银行详情页top10条形图数据
export const getBankTopTenApi = (params, config = {
    custom: {auth: 2}
}) => http.post('/fosun/fullcaliber/v1.0/qryCompanyCreditExposureRank', params, config)

// 银行详情页授信品种分摊饼图出局
export const getCreditCategory = (params, config = {
    custom: {auth: 2}
}) => http.post('/fosun/fullcaliber/v1.0/qryCreditExposureAllocationByVariety', params, config)

// 银行详情Api
export const getBankDetail = (params, config = {
    custom: {auth: 2}
}) => http.post('/fosunbond/v1.0/getfsun/bank/getbanklist', params, config)

// 银行架构Api
export const getBankOrganize = (params, config = {
    custom: {auth: 2}
}) => http.post('/fosunbond/v1.0/getfsun/bank/getbanklist', params, config)