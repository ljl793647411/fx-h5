<template>
    <view>
        <view class="public-filter-title-component">
            <text class="title">{{title}}</text>
            <view v-if="tagsList.length > 6" class="right">
                <text class="select-text">{{selectText}}</text>
                <text class="more" @click="open">更多</text>
                <view class="more-img">
                    <image src="/static/img/s-arrow.svg" />
                </view>
            </view>
        </view>
        <u-popup
            :show="show" 
            mode="right"
            @close="close"
            closeOnClickOverlay
        >
            <more-filter :close="close" :tagsList="tagsList" :title="title"></more-filter>
        </u-popup>
    </view>
</template>

<script>
import popup from '../popup/popup.vue'
export default {
  components: { popup },
    props: {
        title: {
            type: String
        },
        tagsList: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            show: false
        }
    },
    computed: {
        selectText() {
            return this.tagsList.filter(i => i.checked).map(v => v.text).join(',')
        }
    },
    methods: {
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
    .public-filter-title-component {
        margin-bottom: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
            font-size: 16px;
            color: #333333;
            font-weight: 400;
        }
        .right {
            display: flex;
            align-items: center;
        }

        .more {
            font-size: 13px;
            color: #999999;
            font-weight: 400;
            padding-right: 4px;
        }
        .more-img {
            width: 12px;
            height: 12px;
            line-height: 12px;
        }
        .select-text {
            margin-right: 8px;
            width: 143px; 
            font-size: 13px;
            text-align: right;
            font-weight: 400;
            color: #3A90FF;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
            white-space: nowrap;
        }
    }
</style>