<script>
	export default {
		onLaunch: function() {
			let loginValue = uni.getStorageSync("isLogin");
            //如果没有登陆，就跳转到登陆页，如果已经登陆过，那就默认，会直接展示首页
			console.log(loginValue)
			if (!loginValue) {
                //跳转进入登录页
				uni.reLaunch({
					url: "/pages/login/login",
					success: () => {}
				})
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>