<template>
    <view class="login-page">
        <u-loading-page :loading="loading === 'loading'"></u-loading-page>
        <text class="login-text">{{loadingText}}</text>
    </view>
</template>
<script>
import { login } from '@/common/utils'

export default {
    data() {
        return {
            loading: 'loading',
            loadingText: '正在登录中'
        }
    },
    mounted() {
        if (!window._isAuth) {
            login().then(res => {
                this.loading = 'success';
                this.loadingText = '登陆成功，2秒后返回首页'
                setTimeout(() => {
                    uni.reLaunch({
                        url: '/pages/home/index',
                    })
                }, 2000);
            }).catch((err) => {
                this.loading = 'fail';
                this.loadingText = '登陆失败, 请退出重试,\n' + err
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .login-page {
        padding: 200px 20px 0;
        display: flex;
        justify-content: center;
        .login-text {
            font-size: 18px;
            color: #333333;
            line-height: 36px;
            word-break: break-all;
        }
    }
</style>