<template>
    <view class="public-date-range-component">
        <view :class="{'range-box': true, 'checked': selectStatus}" @click="open">
            <view class="date-box">{{start}}</view>
            <view class="line"></view>
            <view class="date-box">{{end}}</view>
        </view>
        <u-calendar :show="show" mode="range" @confirm="confirm" @close="close" maxDate="2300-12-31" :monthNum="13"></u-calendar>
    </view>
</template>

<script>
export default {
    data() {
        return {
            start: this.startDate,
            end: this.endDate,
            show: false,
            selectStatus: false, // 是否选中了时间
        }
    },
    watch: {
        startDate(value) {
            if (this.start !== value) {
                this.start = value
            }
        },
        endDate(value) {
            if (this.end !== value) {
                this.end = value
            }
        }
    },
    methods: {
        reset() {
            this.show = false
            this.start = ''
            this.end = ''
            this.selectStatus = false
        },
        confirm(date) {
            this.show = false
            if (date) {
                this.start = date[0]
                this.end = date[date.length - 1]
                this.$emit('onChange', {
                    startDate: this.start,
                    endDate: this.end,
                })
                this.selectStatus = true
            }
        },
        open() {
            this.show = true
        },
        close() {
            this.show = false
        }
    }
}
</script>

<style lang="scss" scoped>
    .public-date-range-component {
        .range-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 13px;
            color: #999999;
            font-weight: 400;
            &.checked {
                color: #333333;
            }
            .date-box {
                background: #F6F6F6;
                border-radius: 4px;
                width: 132px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .line {
                width: 8px;
                height: 0;
                background: #D8D8D8;
                border: 1px solid #979797;
            }
        }
    }
</style>