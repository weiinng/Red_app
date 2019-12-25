<template>
	<view class="index-list">
		<navigator url="../attention/attention">关注的详情页</navigator>
		<navigator url="../mine/posterList">海报</navigator>
		<navigator url="../mine/login">登录</navigator>
		<navigator url="../mine/memberCenter">会员主页</navigator>
		<navigator url="../celebrity/celebrity">明星主页</navigator>
		<navigator url="../index/detail-centent">视频详情页</navigator>
		<navigator url="../mine/blog">博客</navigator>
		<navigator url="../mine/photoalbum">我的相册</navigator>
		<navigator url="../index/index1">测试导航</navigator>
		<navigator url="../index/index2">测试2</navigator>
		<button @tap="changeUserInfo">请求接口</button>
	</view>
</template>

<script>
	import request from "../../common/request.js"
	export default {
		data() {
			return {
				requestUrl:getApp().globalData.requestUrl,
				videoList:{
					loadtext:"上拉加载更多",
					list:[]
				},
				swiperheight:800,
			}
		},
		//方法写在methods
		methods:{
			
			// myclick:function(){
			// 	uni.request({
			// 		url: 'http://106.13.67.197:8000/ceshi', //接口地址
			// 		method: 'GET', //请求方式
			// 		//传参
			// 		data: {
			// 			'word': 'mysql'
			// 		},
			// 		header: {
			// 			'content-type': 'application/x-www-form-urlencoded' 
			// 		},
			// 		success: function (res) {
				
			// 			//打印接口的数据
			// 			console.log(res);
			// 		}
			// 	});
			
			// },
			
			// getDemo(){
			// 	this.$http.get('/ceshi',{pid:0}).
			// 	then(function (response) {
			// 	});
			// }
			changeUserInfo() {
				request.request({
					url:'/ceshi',
					data: {name: 'nickname'},
					method: 'GET'
				}).then(res => {
					console.log(res.data)
				}).catch(err => {
					console.log("失败！")
				})
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
