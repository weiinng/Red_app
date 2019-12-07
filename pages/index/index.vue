<template>
	<view class="index-list">
		<view class="index-list1">
			<view>
				<swiper-tab-header :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiper-tab-header>
			</view>
		</view>
		
		<!-- 搜索、语音、提示 -->
		<view class="index-list2 u-f-ac">
			<view>
				央视主持人、赛事详情
			</view>
			<view class="icon iconfont icon-tishi"></view>
		</view>
		<!-- 直播视频的位置 -->
		<view class="index-list3">
			<new-topic-swiper></new-topic-swiper>
		</view>
		<!-- 标题 -->
		<view class="index-list4">
			
		</view>
		<!-- 节目单 -->
		<view class="index-list5">
			<view>节目单1</view>
			<view>节目单2</view>
			<view>节目单3</view>
			<view>节目单4</view>
		</view>
		<view class="index-list6 icon iconfont icon-Group"></view>
		
		<!-- 栏目大全star -->
		<uni-headertitle :headerTitle="lanmu" ></uni-headertitle>
		<view class="index-list8">
			<scroll-view scroll-x="true" class="scroll-list">
				<block v-for="(val,index) in lamuList" :key='index'>
					<view class="scroll-view">
						<image :src="val.imgSrc" lazy-load></image>
						<view>{{val.title}}</view>
						<view>{{val.intro}}</view>
					</view>
				</block>
			</scroll-view>
		</view>
		<!-- end -->
		
		<!-- 名人主持板块 -->
		<uni-headertitle :headerTitle="zhuchi"></uni-headertitle>
		
		<view class="index-list9">
			<zhuchiren-list :zhuchiren="zhuchiren"></zhuchiren-list>
		</view>
		<!-- end -->
		
		<!-- 四个视频star -->
		<view>
			<!-- four video -->
			<uni-headertitle :headerTitle="fourHeader.headerTitle" :plateId="fourHeader.plateId"></uni-headertitle>
			<!-- 只接受四条信息 -->
			<uni-fourvideo :fourList="fourHeader.bodyList"></uni-fourvideo>
		</view>
		<!-- end -->
		
		
		<view class="viewzhanwei"></view>
	</view>
	
</template>
<script>
	import swiperTabHeader from "../../components/models/swiper-tab-header.vue";
	import zhuchirenList from "../../components/index/zhuchiren-list.vue";
	import uniFourvideo from "../../components/common/uni-four-video.vue";
	import uniHeadertitle from "../../components/common/uni-header-title.vue";
	// 轮播图 顶部
	import newTopicSwiper from "../../components/common/new-topic-swiper.vue"
	
	export default {
		components:{
			swiperTabHeader,
			zhuchirenList,
			uniFourvideo,
			uniHeadertitle,
			newTopicSwiper
		},
		data() {
			return {
				swiperheight:500,
				lanmu:"栏目大全",
				"zhuchi":"名人主持",
				list2:[
					1,2,3,4
				],
				fourHeader:{
					"headerTitle":"赛事专区",
					"plateId":"",
					"bodyList":[
						// 只传入四条信息
						{	
							"id":"",
							"title":"套马杆",
							"info":"关于内蒙古大草原",
							"img":"../../static/imags/7089841.jpg",
							"lookNun":"8000",
							"isHot":true
						},
						{
							"id":"",
							"title":"海阔天空",
							"info":"关于内蒙古大草原",
							"img":"../../static/imags/7089841.jpg",
							"lookNun":"8000",
							"isHot":false
						},
						{
							"id":"",
							"title":"童话",
							"info":"我要变成童话里！",
							"img":"../../static/imags/7089841.jpg",
							"lookNun":"8000",
							"isHot":false
						},
						{
							"id":"",
							"title":"你爱着的那天使。",
							"info":"关于内蒙古大草原",
							"img":"../../static/imags/7089841.jpg",
							"lookNun":"8000",
							"isHot":true
						}
					]
				},
				zhuchiren:[
					{	
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"zhuchirenName":"潘光源",
						"zhuchirenInfo":"河南电视台",
					},
					{
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"zhuchirenName":"潘光源",
						"zhuchirenInfo":"河南电视台",
					},
					{
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"zhuchirenName":"潘光源",
						"zhuchirenInfo":"河南电视台",
					},
					{
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"zhuchirenName":"潘光源",
						"zhuchirenInfo":"河南电视台",
					},
					{
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"zhuchirenName":"潘光源",
						"zhuchirenInfo":"河南电视台",
					},
				],
				lamuList:[
					{
						"id":"1",
						"title":"改革开放70周年",
						"intro":"为改革开放70周年。。。",
						"imgSrc":"../../static/imags/8165133.jpg"
					},
					{
						"id":"1",
						"title":"改革开放70周年",
						"intro":"为改革开放70周年。。。",
						"imgSrc":"../../static/imags/8165133.jpg"
					},
					{
						"id":"1",
						"title":"改革开放70周年",
						"intro":"为改革开放70周年。。。",
						"imgSrc":"../../static/imags/8165133.jpg"
					},
					{
						"id":"1",
						"title":"改革开放70周年",
						"intro":"为改革开放70周年。。。",
						"imgSrc":"../../static/imags/8165133.jpg"
					},
					
				],
				tabBars:[
					{id:"1",name:"精选"},
					{id:"2",name:"关注"},
					{id:"3",name:"主持人"},
					{id:"4",name:"体育"},
					{id:"5",name:"娱乐"},
					{id:"6",name:"游戏"}
				],
				tabIndex:0
			}
		},
		// 监控屏幕高度
		onLoad() {
			uni.getSystemInfo({
				success:(res) => {
					let height = res.windowHeight-uni.upx2px(100);
					this.swiperheight=height;
				}
			});
		},
		methods: {
			tabtap(index){
				this.tabIndex=index;
			},
			tabChange(e){
				this.tabIndex=e.detail.current;
			}
		}
	}
</script>

<style>
.viewzhanwei{
	border: 1upx solid #3B4144;
	height: 500upx;
	width: 100%;
}
.index-list{
	margin-top: 5%;
}
.index-list2>view:first-child{
	width: 82%;
	height: 20%;
	border-radius: 100upx;
	background: #F8F8F8;
	border: #F8F2F2 solid 1upx;
	margin: 0 30upx;
	font-size: 30upx;
	color: #DEDEDE;
	text-align: center;
}
.index-list3{
	width: 100%;
	height: 350upx;
	margin-top: 25upx;
}
.index-list4{
	width: 100%;
	height: 70upx;
	border: 1upx solid #3B4144;
}
.index-list5{	
	width: 100%;
	height: 120upx;
	border: 1upx solid #3B4144;
}
.index-list5>view{
	float: left;
	height: 30upx;
	width: 300upx;
	margin: 0upx 33upx;
	text-align: center;
	font-size: 20upx;
	
}
.index-list6{
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30upx;
	color: #AAAAAA;
}
.index-list7{
	margin: 0 29upx;
}
.index-list7>view:first-child{
	font-size: 32upx;
	font-weight: 700;
}
.index-list7>view:last-child{
	font-size: 40upx;
}
.scroll-list{
    width: 100%;
	height: 280upx;
	overflow: hidden;
 	white-space: nowrap;
	margin-left: 30upx;
}
.scroll-view{
	display: inline-block;
	width: 320upx;
	height: 280upx;
	margin-right: 15upx;
}
.scroll-view>image{
	height: 190upx;
	position: relative;
	width: 320upx;
	border-radius: 10upx;
}
.scroll-view>view:first-child{
	font-size: 23upx;
	font-weight:800
}
.scroll-view>view:last-child{
	font-size: 20upx;
	color: #E1DDDD;
}
</style>
