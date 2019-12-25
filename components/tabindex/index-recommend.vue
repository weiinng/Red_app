<template>
	<view>
		<!-- 直播视频的位置 -->
		<view class="index-list3">
			<new-topic-swiper :carouselList="top_imgs"></new-topic-swiper>
		</view>
		<!-- end -->
		
		
		<!-- 标题 -->
		<view class="index-list4">
			<an-notice-bar :text="noticeMsg"></an-notice-bar>
		</view>
		<!-- end -->
		
		<!-- 节目单 -->
		<view class="index-list5 u-f-wrap">
			<block v-for="(val,index) in programList" :key='index'>
				<view class="pro_list u-f-ajsb">
					<view>{{val.body}}</view>
					<view>{{val.time}}</view>
				</view>
			</block>
		</view>
			<!-- 判断是否大于4则隐藏 -->
		<template v-if="programList.length ==4">
			<view class="index-list6 icon iconfont icon-Group" @tap="addProgram"></view>
		</template>
		<!-- end -->
		
		<!-- 栏目大全star -->
		<uni-headertitle :headerTitle="columnObj.columntitle" ></uni-headertitle>
		<view class="index-list8">
			<scroll-view scroll-x="true" class="scroll-list">
				<block v-for="(val,index) in columnObj.coumnlist" :key='index'>
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
		<uni-headertitle :headerTitle="compereObj.comperetitle"></uni-headertitle>
		<view class="index-list9">
			<zhuchiren-list :zhuchiren="compereObj.comperelist"></zhuchiren-list>
		</view>
		<!-- end -->
		
		<!-- 视频板块 -->
		<block v-for="(item,columnIndex) in columnList" :key="columnIndex">
			<view>
				<!-- four video -->
				<uni-headertitle :headerTitle="item.headerTitle" :plateId="item.plateId"></uni-headertitle>
				<!-- 只接受四条信息 -->
				<uni-fourvideo :fourList="item.bodyList"></uni-fourvideo>
			</view>
		</block>
		<!-- end -->
		<load-more loadtext="没有更多了"></load-more>
	</view>
</template>

<script>
	// 轮播图 顶部
	import newTopicSwiper from "@/components/common/new-topic-swiper.vue";
	// 滚动标题
	import AnNoticeBar from '@/components/an-notice-bar/an-notice-bar.vue';
	// 标题
	import uniHeadertitle from "@/components/common/uni-header-title.vue";
	// 主持人
	import zhuchirenList from "@/components/index/zhuchiren-list.vue";
	// 四个视频
	import uniFourvideo from "@/components/common/uni-four-video.vue";
	// 没有更多了
	import loadMore from "@/components/common/load-more.vue";
	
	
	export default {
		components:{
			newTopicSwiper,
			AnNoticeBar,
			uniHeadertitle,
			zhuchirenList,
			uniFourvideo,
			loadMore,
			
		},
		data() {
			return {
				top_imgs:[
					{	id:"",
						img:"../../static/imags/7089841.jpg",
					},
					{
						img:"../../static/imags/7089841.jpg",
					},
					{
						img:"../../static/imags/7089841.jpg",
					},
					{
						img:"../../static/imags/7089841.jpg",
					},
					{
						img:"../../static/imags/7089841.jpg",
					},
					{
						img:"../../static/imags/7089841.jpg",
					},
					{
						img:"../../static/imags/7089841.jpg",
					}
				],
				noticeMsg:"央视融媒《童星梦栏目》正在播出！|中国与世界展示中国精彩，传颂世界文化!|纵观世界奇石，汇聚世界英才。",	
				programList:[
					{
						body:"童星梦",
						time:"15:00-15:30"
					},
					{
						body:"中国与世界",
						time:"16:00-16:30"
					},
					{
						body:"赏石之路",
						time:"17:00-17:30"
					},
					{
						body:"今日中国",
						time:"20:00-20:30"
					},
				],
				columnObj:{
					columntitle:"栏目大全",
					coumnlist:[
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
					]
				},
				compereObj:{
					comperetitle:"名人主持",
					comperelist:[
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
						}
					]
				},
				columnList:[
						{
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
					{
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
					}
				],
			}
		},
		methods: {
			addProgram(){
				var addProgram = [
					{
						body:"童星梦",
						time:"15:00-15:30"
					},
					{
						body:"中国与世界",
						time:"16:00-16:30"
					},
					{
						body:"赏石之路",
						time:"17:00-17:30"
					},
					{
						body:"今日中国",
						time:"20:00-20:30"
					},
				]
				this.programList = this.programList.concat(addProgram)
			},
		}
	}
</script>

<style scoped>
.index-list3{
	width: 100%;
}
.index-list4{
	width: 100%;
}
.index-list5{	
	width: 100%;
}
.index-list5>view{
	height: 30upx;
	width: 300upx;
	margin: 10upx 33upx;
	text-align: center;
}
.pro_list>view{
	font-size: 23upx;
}
.index-list6{
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30upx;
	color: #AAAAAA;
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
