<template>
    <view>
        <filter-item>
            <template #title>
                <filter-title :tagsList="bankRangeOptionData" title="范围"></filter-title>
            </template>   
            <template #select>
                <filter-select :tagsList="bankRangeOptionData" type="radio"></filter-select>
            </template>            
        </filter-item>
        <filter-item>
            <template #title>
                <filter-title title="排序"></filter-title>
            </template>   
            <template #select>
                <filter-select :tagsList="bankSortOptionData" type="radio"></filter-select>
            </template>            
        </filter-item>
    </view>
</template>

<script>
import { bankSortOption, bankRangeOption } from '@/common/config.js'
import { filterDataMapping } from '@/common/utils.js'
export default {
    props: {
        filterParam: {
            type: Object
        }
    },
    data() {
        return {
            bankRangeOptionData: bankRangeOption,
            bankSortOptionData: bankSortOption
        }
    },
    watch: {
        bankRangeOptionData: {
            handler(newV) {
                const param = newV.find(i => i.checked)?.key || ''
                this.filterParam.bankAttribute = param
            },
            deep: true
        },
        bankSortOptionData: {
            handler(newV) {
                newV.forEach(item => {
                    switch (item.originField) {
                        case 'totalCreditOrder':
                            this.filterParam.totalCreditOrder = item.checked ? 1 : 0
                            break;
                        case 'availableCreditOrder':
                            this.filterParam.availableCreditOrder = item.checked ? 1 : 0
                            break;
                    }
                })
            },
            deep: true
        },
    },
    methods: {
        reset() {
            this.bankRangeOptionData = filterDataMapping(this.bankRangeOptionData, {
                key: 'key',
                label: 'label'
            })
            this.bankSortOptionData = filterDataMapping(this.bankSortOptionData, {
                key: 'key',
                label: 'label'
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>