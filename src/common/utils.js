import { getUser } from '@/common/http.api.js'
import * as dd from 'dingtalk-jsapi'

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
            value: item?.Amount || 0
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
    let num = +s;
    return (num).toLocaleString()
}

export function login() {
    return new Promise((res, rej) => {
        if (dd.env.platform != 'notInDingTalk') {
            dd.ready(() => {
                dd.runtime.permission.requestAuthCode({
                    // corpId: 'ding7a05491d2e914134',  // 正式环境
                    corpId: 'ding6f768bca630f8220',  // 测试环境
                    onSuccess: result => {
                        // 调用免登
                        getUser({userCode: result.code}).then(() => {
                            // 授权认证成功
                            window._isAuth = true
                            res(true)
                        }).catch(e => {
                            rej(e.resultMsg || JSON.stringify(e));
                        });
                    },
                    onFail: err => {
                        rej(e.resultMsg || JSON.stringify(e));
                    }
                });
            });
            dd.error(error => {
                rej('dd error----: ' + JSON.stringify(error));
            });
        } else {
            rej('必须在钉钉访问该应用');
        }
    })
}
