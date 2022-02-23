<template>
    <view>
        <u-popup 
            class="public-popup-component"
            :show="show" 
            mode="right"
            @close="close"
            closeable
            closeOnClickOverlay
        >
            <view class="popup-content-box">
                <slot></slot>
                <view class="footer">
                    <u-button class="rest-btn">重置</u-button>
                    <u-button class="ok-btn" @click="ok">确定</u-button>
                </view>
            </view>
        </u-popup>
    </view>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean
        },
        close: {
            type: Object
        },
        ok: {
            type: Object
        },
    }
}
</script>
<style lang="scss" scoped>
    .public-popup-component {
        position: relative;

        .popup-content-box {
            width: 320px;
        }
        .footer {
            width: 320px;
            height: 54px;
            padding: 8px 16px;
            background: #FFFFFF;
            box-shadow: 0 -2px 6px 0 rgba(1,22,72,0.10);
            border-radius: 0 0 0 14px;
            position: absolute;
            bottom: 0;
            right: 0;
            display: flex;
            justify-content: center;

            .rest-btn {
                width: 145px;
                height: 38px;
                border: 1px solid #3278FF;
                border-right: none;
                border-radius: 20px 0 20px 20px;
                position: absolute;
                left: 16px;
                z-index: 1;
                font-size: 16px;
                color: #3A90FF;
                text-align: center;
                font-weight: 400;
            }
            .ok-btn {
                width: 165px;
                height: 38px;
                border-radius: 0 20px 20px 0;
                border: 1px solid #3278FF;
                background-image: linear-gradient(-13deg, #3278FF 0%, #368EFF 100%);
                position: absolute;
                right: 16px;
                font-size: 16px;
                color: #ffffff;
                text-align: center;
                font-weight: 400;
            }
        }
    }
</style>
