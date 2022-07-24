<template>
    <view class="base-card-component">
        <view v-for="(item, index) in columns" :key="index">
            <view class="base-card-item">
                <text class="label">{{item.label}}</text>
                <text class="value">{{item.render ? item.render(dataSource) : dataSource[item.dataIndex]}}</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        dataSource: {
            type: Object,
            default: []
        },
        columns: {
            type: Array,
            default: []
        }
    }
}
</script>

<style scoped lang="scss">
.base-card-component {
    width: 100%;
    height: auto;

    .base-card-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 6px;

        .label {
            font-size: 13px;
            color: #373737;
            letter-spacing: 0;
            font-weight: 400;
        }

        .value {
            font-size: 13px;
            color: #373737;
            letter-spacing: 0;
            text-align: right;
            font-weight: 400;
        }
    }
}

</style>