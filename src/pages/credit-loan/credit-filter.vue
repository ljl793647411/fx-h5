<template>
    <view>
        <filter-item>
            <template #title>
                <filter-title :tagsList="multipleList" title="状态"></filter-title>
            </template>   
            <template #select>
                <filter-select :tagsList="multipleList"></filter-select>
            </template>            
        </filter-item>
        <filter-item>
            <template #title>
                <filter-title :tagsList="multipleList" title="金融机构"></filter-title>
            </template>   
            <template #select>
                <filter-select :tagsList="radioList"></filter-select>
            </template>            
        </filter-item>
        <filter-item>
            <template #title>
                <filter-title :tagsList="multipleList" title="借款人"></filter-title>
            </template>   
            <template #select>
                <filter-select :tagsList="radioList"></filter-select>
            </template>            
        </filter-item>
        <filter-item>
            <template #title>
                <filter-title title="日期范围"></filter-title>
            </template>   
            <template #select>
                <date-range></date-range>             
            </template>            
        </filter-item>
        <filter-item>
            <template #title>
                <filter-title title="期限范围"></filter-title>
            </template>   
            <template #select>
                <date-range></date-range>             
            </template>            
        </filter-item>
    </view>
</template>

<script>
export default {
    data() {
        return {
            multipleList: [
                {
                    text: '1',
                    checked: true
                },
                {
                    text: '2',
                    checked: false
                },
                {
                    text: '3',
                    checked: false
                },
                {
                    text: '4',
                    checked: false
                },
                {
                    text: '5',
                    checked: false
                },
                {
                    text: '6',
                    checked: false
                },
                {
                    text: '7',
                    checked: false
                },
            ],
            radioList: [
                {
                    text: '按总授信降序',
                    checked: false
                },
                {
                    text: '按可用授信降序',
                    checked: false
                },
            ]
        }
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>

</style>