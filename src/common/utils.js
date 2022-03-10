// 银行数据映射
export const bankChartsMapping = (list = []) => {
    let obj = {
        category: [],
        data: []
    }
    list?.forEach(item => {
        obj.category.unshift(item?.financialName || '-')
        obj.data.unshift(item?.Amount || 0)
    });

    obj.unit = list?.[0]?.amountUnit || '亿'
    return obj
}

// 未来还款统计数据映射
export const repaymentChartsMapping = (list = []) => {
    let obj = {
        category: [],
        data1: [],
        data2: [],
    }
    list?.forEach(item => {
        obj.category.push(item?.yearmonth || '-')
        obj.data1.push(item?.totalPrincipal || 0)
        obj.data2.push(item?.totalInterest || 0)
    });

    obj.unit = list?.[0]?.amountUnit || '亿'
    return obj
}

// 贷款人数据映射
export const personChartsMapping = (list = []) => {
    let obj = {
        dataList: []
    }
    obj.dataList = list?.map(item => {
        return {
            name: item?.borrowerName || '-',
            value: item?.totalAmount || 0
        }
    })

    obj.unit = list?.amountUnit || '亿'
    return obj
}
/**
 * @description 筛选数据映射
 * @param {Array} list 数据源
 * @param {*} param key/label 字段名
 */
export const filterDataMapping = (list = [], {key, label}) => {
    if (list?.length <= 0) {
        return []
    }
    let arr = []
    arr = list.map(item => ({
        ...item,
       key: item?.[key] || '', 
       label: item?.[label] || '',
       checked: false
    }))

    return arr
}

export function numberFormat(s) {
    if (!s) {
        return 0
    }
    return (s).toLocaleString()
}
