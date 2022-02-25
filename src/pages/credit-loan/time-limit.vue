<template>
    <view class="time-limit-box">
        <view class="range-box">
            <u--input 
                type="number" 
                placeholderStyle="color: #999999"
                inputAlign="center" 
                class="date-box"
                placeholder="开始"
                :value="startDate"
            ></u--input>
            <view class="line"></view>
            <u--input
                type="number" 
                placeholderStyle="color: #999999"
                inputAlign="center" 
                class="date-box"
                placeholder="结束" 
                :value="endDate"
            ></u--input>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            startDate: '',
            endDate: '',
        }
    },
    methods: {
        reset() {
            this.startDate = ''
            this.endDate = ''
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