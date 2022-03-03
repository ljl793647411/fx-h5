// 银行数据映射
export const bankChartsMapping = (list = []) => {
    let obj = {
        category: [],
        data: []
    }
    list?.forEach(item => {
        obj.category.unshift(item?.financialName || '-')
        obj.data.unshift(item?.totalAmount || 0)
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

/*
 * numberFormat(s,type)
 * 功能：金额按千位逗号分割
 * 参数：s，需要格式化的金额数值.
 * 参数：type,判断格式化后的金额是否需要小数位.
 * 返回：返回格式化后的数值字符串.
 */
export function numberFormat(s, type = 0) {
    if (/[^0-9\.]/.test(s)) {
        return '0';
    }
    if (s == null || s == '') {
        return '0';
    }
    s = s.toString().replace(/^(\d*)$/, '$1.');
    s = (s + '00').replace(/(\d*\.\d\d)\d*/, '$1');
    s = s.replace('.', ',');
    var re = /(\d)(\d{3},)/;
    while (re.test(s)) {
        s = s.replace(re, '$1,$2');
    }
    s = s.replace(/,(\d\d)$/, '.$1');
    if (type == 0) {
        // 不带小数位(默认是有小数位)
        var a = s.split('.');
        if (a[1] == '00') {
            s = a[0];
        }
    }
    return s;
}
