<template>
    <view class="public-date-range-component">
        <view class="range-box">
            <view :class="{'date-box': true, 'checked': start}" @click="open('start')">{{start || '开始时间'}}</view>
            <view class="line"></view>
            <view :class="{'date-box': true, 'checked': end}" @click="open('end')">{{end || '结束时间'}}</view>
        </view>
        <u-datetime-picker
            :show="show"
            mode="date"
            @close="close"
            @confirm="confirm" 
        ></u-datetime-picker>
    </view>
</template>

<script>
export default {
    props: {
        startDate: {
            type: String
        },
        endDate: {
            type: String
        },
    },
    data() {
        return {
            start: this.startDate,
            end: this.endDate,
            show: false,
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
        },
        confirm(date) {
            this.show = false
            if (date.value) {
                switch (this.type) {
                    case 'start':
                        this.start = this.moment(date.value).format('YYYY-MM-DD')
                        this.$emit('startDateChange', this.start)
                        break;
                    case 'end':
                        this.end = this.moment(date.value).format('YYYY-MM-DD')
                        this.$emit('endDateChange', this.end)
                        break;
                
                }
            }
        },
        open(type) {
            this.show = true
            this.type = type
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
            .date-box {
                background: #F6F6F6;
                border-radius: 4px;
                width: 132px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                &.checked {
                    color: #333333;
                }
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