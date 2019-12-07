<template>
	<view class="personage-list">
		<view class="personage-list1 u-f-ac">
			<image :src="userInfo.userImg" lazy-load></image>
			<view>{{userInfo.userName}}</view>
		</view>
		<view class="hr-tag"></view>
		<view class="personage-list2 u-f-ajc">
			<view class="u-f-ac">
				<view class="icon iconfont icon-vip"></view>
				<view>会员专区</view>
			</view>
			<view class="hr-ytag"></view>
			<view class="u-f-ac">
				<view class="icon iconfont icon-wodeguanzhu"></view>
				<view>我的关注</view>
			</view>
		</view>
		<view class="hr-tag"></view>
		<view class="personage-list3">
			<image src="../../static/objImg/huancun.png" class="not-tag"></image>
			<view>离线缓存</view>
			<image src="../../static/objImg/info-right.png"></image>
		</view>
		<view class="personage-list3">
			<image src="../../static/objImg/lisi.png" class="not-tag"></image>
			<view>观看历史</view>
			<image src="../../static/objImg/info-right.png"></image>
		</view>
		<view class="personage-list4 uni-tab-bar">
			<scroll-view scroll-x class="uni-swiper-img">
				<block v-for="(val,index) in userInfo.userHistoryList" :key="index">
					<image class="info-img" :src="val.imgSrc" lazy-load></image>
				</block>
			</scroll-view>
		</view>
		<view class="hr-1"></view>
		<view class="personage-list3">
			<image src="../../static/objImg/rongmei.png" class="not-tag"></image>
			<view>央视融媒</view>
			<image src="../../static/objImg/info-right.png"></image>
		</view>
		<view class="hr-1"></view>
		<view class="personage-list3">
			<image src="../../static/objImg/jinri.png" class="not-tag"></image>
			<view>今日中国</view>
			<image src="../../static/objImg/info-right.png"></image>
		</view>
		<view class="hr-1"></view>
		<view class="personage-list3">
			<image src="../../static/objImg/baobo.png" class="not-tag"></image>
			<view>交通报播</view>
			<image src="../../static/objImg/info-right.png"></image>
		</view>
		<view class="hr-1"></view>
		<view class="personage-list3">
			<image src="../../static/objImg/hezuo.png" class="not-tag"></image>
			<view>商务合作</view>
			<image src="../../static/objImg/info-right.png"></image>
		</view>


		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{
					"userName":"weiinng.cn",
					"userImg":"../../static/imags/5001669.jpg",
					"userId":"",
					"userHistoryList":[
						{
							"imgId":"",
							"imgSrc":"../../static/imags/6675719.jpg",
							"imgTime":""
						},
						{
							"imgId":"",
							"imgSrc":"../../static/imags/6675719.jpg",
							"imgTime":""
						},
						{
							"imgId":"",
							"imgSrc":"../../static/imags/6675719.jpg",
							"imgTime":""
						},
						{
							"imgId":"",
							"imgSrc":"../../static/imags/6675719.jpg",
							"imgTime":""
						},
					]
					
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.hr-tag{
	width: 100%;
	height: 30upx;
	background: #EEEEEE ;
}
.hr-ytag{
	background: #EEEEEE;
	width: 3upx;	
	height: 75upx;
	margin: 30upx 20%;
}
.hr-1{
	width: 100%;
	margin: 0 20upx 0 20upx;
	height: 3upx;
	background: #EEEEEE;
}
.personage-list{
	
}
.personage-list1{
	margin: 35upx 35upx 35upx 25upx;
}
.personage-list1>image{
	width: 130upx;
	height: 130upx;
	border-radius: 100%;
	margin-right: 15upx;
}
.personage-list2{
	
}
.personage-list2>view:first-child view:first-child{
	color: #F17594;
	font-size: 75upx;
}
.personage-list2>view:last-child view:first-child{
	color: #74ACFB;
	font-size: 75upx;
}
.personage-list3{
	display: flex;
	align-items: center;
	margin:15upx 15upx 22upx 25upx;
}
.personage-list3>image:last-child{
	width: 50upx;
	height: 50upx;
	margin-left: 480upx;
}
.personage-list3>view{
	font-size: 27upx;
	font-weight: 500;
}
.not-tag{
	width: 45upx;
	height: 45upx;
	margin-right: 20upx;
}
.personage-list4{
	margin-bottom: 15upx;
}
.info-img{
	width: 270upx;
	height: 180upx;
	margin-left: 25upx;
	border-radius: 15upx;
}
.uni-swiper-img {
	width: 100%;
	white-space: nowrap;
	line-height: 100upx;
}
</style>
