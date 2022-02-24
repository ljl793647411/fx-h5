<template>
    <view class="public-filter-select-component">
        <view class="item-box" v-for="(item, index) in showList" :key="index">
            <public-tag
                :text="item.text"
                :checkboxClick="checkboxClick"
                :index="index"
                :checked="item.checked"
            ></public-tag>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'multiple',   // multiple:多选  radio: 单选
        },
        tagsList: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        showList() {
            return [...this.tagsList].splice(0, 6)
        }
    },
    methods: {
        checkboxClick(index) {
            switch (this.type) {
                case 'multiple':
                    this.multipleClick(index)
                    break;
                case 'radio':
                    this.radioClick(index)
                    break;
            }
        },
        multipleClick(index) {
            this.tagsList[index].checked = !this.tagsList[index].checked
        },
        radioClick(index) {
            if (this.tagsList[index].checked) {
                this.tagsList[index].checked = false
            } else {
                this.tagsList.map(item => item.checked = false)
                this.tagsList[index].checked = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .public-filter-select-component {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        view:nth-of-type(3n) {
            margin-right: 0;
        }
        .item-box {
            margin-right: 10px;
        }
    }
</style>