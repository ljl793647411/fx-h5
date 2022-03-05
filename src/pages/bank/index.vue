<template>
    <view class="back-list-container">
        <search-container :showDrawer="showDrawer">
            <template #content>
                <view v-for="(item, index) in dataList" :key="index">
                    <item :data="item"></item>
                </view>
            </template>
            <template #drawer>
                <popup 
                    :show="show"
                    @close="closeDrawer"
                    @ok="ok"
                    @reset="reset"
                >
                    <bank-filter ref="filterRef" :filterParam="filterParam"></bank-filter>
                </popup>
            </template>
        </search-container>
    </view>
</template>
<script>
import item from './item.vue'
import bankFilter from './bank-filter.vue'
import { getBankCredit } from '@/common/http.api.js'
import { numberFormat } from '@/common/utils.js'
import { imgSrc } from '@/common/config.js'

export default ({
    data() {
        return {
            show: false,
            dataList: [{
                "financialName": "招商银行",
                "financialEnName": "China Merchants Bank",
                "totalCredit":2000.12,
                "totalUsedCredit":1000,
                "availableCredit":1000.12,
                "amountUnit": "亿",
                "currency": "人民币"
            }],
            filterParam: {
                bankAttribute: '',
                totalCreditOrder: 0,  
                availableCreditOrder: 0 
            }
        }
    },
    components: {
        item,
        bankFilter
    },
    mounted() {
        this.getDataList(this.filterParam)
    },
    methods: {
        async getDataList(query) {
             try {
                const res = await getBankCredit(query)
                this.dataList = res?.dataList?.map(item => ({
                    ...item,
                    iconName: imgSrc + item.iconName,
                    totalUsedCredit: numberFormat(item.totalUsedCredit, 0),
                    availableCredit: numberFormat(item.availableCredit, 0),
                    totalCredit: numberFormat(item.totalCredit, 0)
                })) || []
            } catch (error) {
                this.dataList = []
            }
        },
        showDrawer() {
            this.show = true
        },
        closeDrawer() {
            this.show = false
        },
        async ok() {
            await this.getDataList(this.filterParam)
            this.closeDrawer()
        },
        reset() {
            this.$refs.filterRef.reset()
            this.filterParam.bankAttribute = ''
            this.filterParam.totalCreditOrder = 0
            this.filterParam.availableCreditOrder = 0
        }
    }
})
</script>
<style lang="scss" scoped>
   
</style>