
<script>
	export default {
        onLaunch: async function() {
		},
		onShow: function() {
            // dd.ready(() => {
            //     dd.runtime.permission.requestAuthCode({
            //         corpId: 'ding6f768bca630f8220',
            //         onSuccess: result => {
            //             const getUser = require('@/common/http.api.js').getUser
            //             // 调用免登
            //             getUser(result.code).then(() => {
            //                 // 授权认证成功
            //                 window._isAuth = true
            //             }).catch(e => {
            //                 uni.$u.toast(e.message || JSON.stringify(e));
            //             });
            //         },
            //         onFail: err => {
            //             // window.ddErr = err;
            //             uni.$u.toast(err.message || JSON.stringify(err));
            //         }
            //     });
            // });
            // dd.error(error => {
            //     uni.$u.toast('dd error----: ' + JSON.stringify(error));
            // });
		},
		onHide: function() {
		}
	}
</script>
<style lang="scss">
    /*每个页面公共css */
    @import "uview-ui/index.scss";

    image {
        width: 100%;
        height: 100%; 
    }

    scroll-view, view, text {
        box-sizing: border-box;
    }
    .ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        white-space: nowrap;
    }
</style>
