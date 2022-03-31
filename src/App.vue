
<script>
	export default {
        onLaunch: async function() {
		},
		onShow: function() {
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
