// 脚本命令启动时将会替换为dev|test
export const env = 'test'

// 饼图调色板
export const pieColorList = [
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0, color: '#b5c7fd' // 0% 处的颜色
        }, {
            offset: 1, color: '#93a3d3' // 100% 处的颜色
        }],
    },{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0, color: '#8b99ff' // 0% 处的颜色
        }, {
            offset: 1, color: '#897afb' // 100% 处的颜色
        }],
    },{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0, color: '#7f8dff' // 0% 处的颜色
        }, {
            offset: 1, color: '#5e6eeb' // 100% 处的颜色
        }],
    },{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0, color: '#79b1ff' // 0% 处的颜色
        }, {
            offset: 1, color: '#4d97ff' // 100% 处的颜色
        }],
    },{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0, color: '#00dbe9' // 0% 处的颜色
        }, {
            offset: 1, color: '#01bbc7' // 100% 处的颜色
        }],
    },{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0, color: '#46fa9b' // 0% 处的颜色
        }, {
            offset: 1, color: '#3ddb88' // 100% 处的颜色
        }],
    },{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0, color: '#c1ff73' // 0% 处的颜色
        }, {
            offset: 1, color: '#a4ea4d' // 100% 处的颜色
        }],
    },{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0, color: '#f8dd0c' // 0% 处的颜色
        }, {
            offset: 1, color: '#f5b805' // 100% 处的颜色
        }],
    },{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0, color: '#ffb046' // 0% 处的颜色
        }, {
            offset: 1, color: '#ff9300' // 100% 处的颜色
        }],
    },{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0, color: '#ff9579' // 0% 处的颜色
        }, {
            offset: 1, color: '#ff9300' // 100% 处的颜色
        }],
    }
]

// 贷款查询筛选状态option
export const repaymentStatus = [
    {
        key: '未提款',
        label: '未提款',
        checked: false,
    },{
        key: '使用中',
        label: '使用中',
        checked: false,
    }
]

// 银行页排序option
export const bankSortOption = [
    {
        key: '按总授信降序',
        label: '按总授信降序',
        originField: 'totalCreditOrder',
        checked: false,
    },{
        key: '按可用授信降序',
        label: '按可用授信降序',
        originField: 'availableCreditOrder',
        checked: false,
    }
]


// 银行页范围option
export const bankRangeOption = [
    {
        key: '中资银行',
        label: '中资银行',
        checked: false,
    },{
        key: '外资银行',
        label: '外资银行',
        checked: false,
    }
]

const imgSrcMap = {
    dev: 'http://10.101.232.205:5200/apps/bf/df/web/bankaccounts/banktypes/',
    test: 'http://10.101.232.205:5200/apps/bf/df/web/bankaccounts/banktypes/',
    pro: 'https://tms.fosun.com/apps/bf/df/web/bankaccounts/banktypes/'
}

console.log('imgSrcMap', imgSrcMap[env], env)
// 图片地址请求前缀
export const imgSrc = imgSrcMap[env]