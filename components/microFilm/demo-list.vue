<template>
	<!-- 一个短视频的样式 -->
	<view class="index-list">
		<view class="index-list1 u-f-ac">
			<view>
				<image :src="val.authorImg" mode="widthFix" lazy-load></image>
				<view>{{val.author}}</view>
			</view>
			<view class="u-f-ac">
				<view class="icon iconfont icon-jia"></view>
				<view>关注</view>
			</view>
		</view>
		<view class="index-list2">
			{{val.videoTitle}}
		</view>
		<view class="index-list3 u-f-ajc">
			<!-- 图片 -->
			<image :src="val.videoImg"></image>
			<!-- 视频 -->
			<view class="micorFilm-list-play icon iconfont icon-bofang"></view>
			<view class="micorFilm-list-playinfo">
				{{val.playNum>10000?val.playNum/10000+"w":val.playNum}}次播放{{val.videoTime}}
			</view>
			<!-- <video :src="val.videoSrc"></video> -->
		</view>
		<view class="index-list4">
			<!-- 左边 -->
			<view>
				<view class="icon iconfont icon-redu"></view>
				<view>{{val.hot}}热度</view>
			</view>
			<!-- 右边 -->
			<view>
				<view class="icon iconfont icon-xiaoxi"></view>
				<view>评论</view>
				<view class="icon iconfont icon-zhuanfa" style="margin-left: 10upx;"></view>
				<view>分享</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			val:Object,
			index:Number
			
		}
	}
</script>
<!-- 限制作用域，这里面的css不会影响到其他 -->
<style scoped> 
	.index-list{
		padding: 20upx;
		border-bottom: 1upx solid #C8C7CC;
	}
	.index-list1{
		justify-content: space-between;	
	}
	.index-list1>view:first-child image{
		width: 70upx;
		height: 70upx;
		border-radius: 100%;
		margin-right: 10upx;
	}
	.index-list1>view:first-child{
		display: flex;
		align-items: center;
	}
	.index-list1>view:last-child{
		background: #EBEBEB;
		border-radius: 10upx;
		width: 130upx;
		justify-content: center;
	}
	.index-list2{
		margin-top: 15upx;
		font-size: 35upx;
	}
	.index-list3{
		padding-top: 15upx;
		position: relative;
	}
	.index-list3>video{
		width: 100%;
		border-radius: 20upx;
	}
	.index-list3>image{
		width: 100%;
		border-radius: 20upx;
	}
	.index-list4{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15upx 0;
	}
	.index-list4>view{
		color: #999999;
	}
	.index-list4>view:first-child{
		display: flex;
		align-items: center;
	}
	.index-list4>view:last-child{
		display: flex;
		align-items: center;
	}
	.index-list4>view>view{
		display: flex;
		align-items: center;
	}
	.index-list4>view>view>view{
		margin-right: 10upx;
	}
	.micorFilm-list-play{
		position: absolute;
		font-size: 140upx;
		color: white;
	}
	.micorFilm-list-playinfo{
		position: absolute;
		color: white;
		background: rgba(51,51,51,0.72);
		bottom: 8upx;
		right: 7upx;
		border-radius: 40upx;
		padding: 0 12upx;
		font-size: 21upx;
	}
</style>
