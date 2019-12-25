<script>
	import Vue from 'vue'
	
	export default {
		
		
		
		created() {
			// #ifdef APP-PLUS
			plus.navigator.closeSplashscreen(); 
			// #endif 
		},
		onLaunch: function() {
			console.log('App Launch')
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
		
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		
		
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
		},
		onShow: function() {
			console.log('App 开启')
		},
		onHide: function() {
			console.log('App 关闭')
		},
		globalData: {  
		    requestUrl:'http://127.0.0.1:8000',
		},  
	}
</script>

<style>
	/*每个页面公共css */
	/* 引入官方原生的css */
	@import './common/uni.css';
	/* 引入自定义css */
	@import './common/icon.css';
	/* 引入css动画 */
	@import './common/animate.css';
	
	
	@import './common/common.css';
	
	/* #ifndef APP-PLUS-NVUE */
	@import "./static/font-icon/iconfont.css";
	/* #endif */
	/*每个页面公共css */
	/* page{height: 100%;width: 100%;} */
	
</style>
