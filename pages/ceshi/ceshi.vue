<template>
	<view style="margin: 10upx;" class="index-list">
		<navigator url="../shilu-login/reg">注册页面</navigator>
		<navigator url="../shilu-login/blog">blog</navigator>
		<navigator url="../shilu-login/forget">修改密码</navigator>
		<navigator url="../shilu-login/login">登录页面</navigator>
		<br/>
		<navigator url="../feedback/feedback">反馈</navigator>
		<navigator url="../memberCenter/memberCenter">会员中心</navigator>
		<view>{{dataStr}}</view>
		<view @tap="gitStr">点击事件</view>
		
	</view>
</template>

<script>

	
	export default {
		// 数据写在data
		data() {     
			return {
				title:"不说",
				srcList:"https://video.pearvideo.com/mp4/third/20191202/cont-1628621-12719568-205304-hd.mp4",
				gDuration:300,
				srcImg:"http://b-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.jpeg",
				dataStr:"",
			}
		},
		mounted() {
			this.gitStr()
		},
		//方法写在methods
		methods:{
			gitStr(){
				const requestTask = uni.request({
				    url: 'http://127.0.0.1:8000/ceshi', //仅为示例，并非真实接口地址。
				    data: {
				        name: 'name',
				        age: 18
				    },
				    success: function(res) {
				        console.log(res.data);
				    }
				});
				
				// 中断请求任务
				requestTask.abort();
			}
			
			
			
		}
	}
</script>

<style>
.index-list>navigator{
	width: 100%;
	height: 50upx;
	margin: 10upx 0 10upx 0;
	background: #BBBBBB;
	color: red;
	font-weight: bold;
	display: flex;
	align-items: center;
	font-size: 42upx;
	padding-left: 30upx;
	
}

</style>
