
<script>
	export default {
        onLaunch: function() {
            dd.config({
                agentId: data.agent_id, // 必填，微应用ID
                corpId: data.corp_id, //必填，企业ID
                timeStamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonce_str, // 必填，生成签名的随机串
                signature: data.signature, // 必填，签名
                type: 0, //选填。0表示微应用的jsapi,1表示服务窗的jsapi；不填默认为0。该参数从dingtalk.js的0.8.3版本开始支持
                jsApiList: [
                    'biz.telephone.call',
                    'biz.telephone.showCallMenu',
                    'biz.telephone.checkBizCall',
                    'biz.telephone.quickCallList',
                    'biz.ding.create',
                    'biz.ding.post',
                    'biz.util.openLink',
                    'biz.contact.choose',
                    'biz.contact.chooseMobileContacts',
                    'biz.contact.complexPicker',
                    'biz.chat.pickConversation',
                    'biz.chat.chooseConversationByCorpId',
                    'biz.chat.openSingleChat',
                    'biz.chat.chooseConversationByCorpId'
                ] // 必填，需要使用的jsapi列表，注意：不要带dd。
            });
            dd.ready(() => {
                dd.runtime.permission.requestAuthCode({
                    corpId: data.corp_id,
                    onSuccess: result => {
                        // 调用免登
                        login(result.code).then(res => {
                            window.xSession = res.data; // 记录下免登的 xSession
                            // initApp();
                        }).catch(e => {
                            alert(e.message || JSON.stringify(e));
                        });
                    },
                    onFail: err => {
                        window.ddErr = err;
                        alert(err.message || JSON.stringify(err));
                    }
                });
            });
            dd.error(error => {
                alert('dd error----: ' + JSON.stringify(error));
            });
		},
		onShow: function() {
            console.log('App Show')
		},
		onHide: function() {
            // this.$u.api.logout()
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

</style>
