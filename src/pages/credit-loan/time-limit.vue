<template>
    <view class="time-limit-box">
        <view class="range-box">
            <u--input 
                type="number" 
                placeholderStyle="color: #999999"
                inputAlign="center" 
                class="date-box"
                placeholder="开始"
                :value="start"
                @change="startChange"
            ></u--input>
            <view class="line"></view>
            <u--input
                type="number" 
                placeholderStyle="color: #999999"
                inputAlign="center" 
                class="date-box"
                placeholder="结束" 
                :value="end"
                @change="endChange"
            ></u--input>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        startPeriod: {
            type: String
        },
        endPeriod: {
            type: String
        },
    },
    data() {
        return {
            start: this.startPeriod,
            end: this.endPeriod,
        }
    },
    watch: {
        startPeriod(value) {
            if (this.start !== value) {
                this.start = value
            }
        },
        endPeriod(value) {
            if (this.end !== value) {
                this.end = value
            }
        }
    },
    methods: {
        reset() {
            this.start = ''
            this.end = ''
        },
        startChange(value) {
            this.$emit('startOnChange', value)
        },
        endChange(value) {
            this.$emit('endOnChange', value)
        },
    }
}
</script>


<style lang="scss" scoped>
    .time-limit-box {
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
                border: none;
            }
            .line {
                width: 8px;
                height: 0;
                background: #D8D8D8;
                border: 1px solid #979797;
            }
            .uni-input-placeholder {
                text-align: center !important;
                font-size: 13px;
                color: #999999;
            }

        }
    }
</style>