<template>
	<view>
		<!-- 自定义导航栏 -->
		<video-tab-bar 
		:tabBars="tabBars" 
		:tabIndex="tabIndex"
		@change-tab="changTab">
		</video-tab-bar>
		
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<!-- 推荐 -->
				<swiper-item>
					<scroll-view scroll-y class="list" @scrolltolower="loadmore">
						<template v-if="videoList.list.length>0">
							<!-- 图文列表 -->
							<block v-for="(val,index1) in videoList.list" :key='index1'>
								<index-list :val="val" :index="index1"></index-list>
							</block>
							<!-- 上拉加载 -->
							<load-more :loadtext="videoList.loadtext"></load-more>
						</template>
						<template v-else>
							<noThing></noThing>
						</template>
					</scroll-view>
				</swiper-item>
				<!-- 关注 -->
				<swiper-item>
					<scroll-view scroll-y class="list">
						<!-- 判断用户关注了多少人-->
						 <template v-if="userInfo.userAttention.height == 0">
							 <!-- 没有关注返回的信息1 -->
							 <not-attention></not-attention>
							 <view class="tuijian">为您推荐:</view>
							 <view class="u-f-wrap">
								 <block v-for="(val,index) in guanzhuBodyList" :key="index">
									<guanzhu-list :guanzhuObj="val"></guanzhu-list>
								 </block>
							 </view>
						 </template>
						 <template v-else>
							 <!-- 展示内容 -->
							 <!-- 用户有关注的信息,判断用户关注的人是否大于2,如果大于2个则直接推荐视频-->
							 <template v-if="userInfo.userAttention.height <= 2">
								 <!-- 返回用户关注的内容，不能超过两个 -->
								 <view class="borderxian">我的关注:</view>
								<view class="u-f-wrap">
									<block v-for="(val,index) in userInfo.userAttention" :key="index">
										<guanzhu-list :guanzhuObj="val"></guanzhu-list>
									</block>
								</view>
								<!-- 为用户推荐的内容 -->
								<view class="borderxian">推荐关注:</view>
								<view class="u-f-wrap">
									<block v-for="(val,index) in userInfo.userAttention" :key="index">
										<guanzhu-list :guanzhuObj="val"></guanzhu-list>
									</block>
								</view>
								<!-- 关注对象的视频 -->
								<view class="borderxian">推荐视频:</view>
								<block v-for="(val,index1) in yonghuGuanzhu.userVideo.list" :key='index1'>
									<index-list :val="val" :index="index1"></index-list>
								</block>
								<!-- 上拉加载 -->
								<load-more :loadtext="yonghuGuanzhu.userVideo.loadtext"></load-more>
							 </template>
							 
							 <!-- 加载用户所有的推荐视频 -->
							 <template v-else>
								 <block v-for="(val,index1) in userInfo.userVideo.list" :key='index1'>
								 	<index-list :val="val" :index="index1"></index-list>
								 </block>
								 <!-- 上拉加载 -->
								 <load-more :loadtext="userInfo.userVideo.loadtext"></load-more>
							 </template>
						 </template>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	
	</view>
</template>

<script>
	//导航栏
	import videoTabBar from "../../components/video/video-tab-bar.vue"
	// 小视频列表
	import indexList from "../../components/microFilm/index-list.vue";
	// 下拉加载
	import loadMore from "../../components/common/load-more.vue";
	import noThing from "../../components/common/no-thing.vue";
	import notAttention from "../../components/attention/not-attention.vue";
	
	// 关注列表
	import guanzhuList from "../../components/attention/guanzhu-list.vue"
	export default {
		components:{
			indexList,
			loadMore,
			noThing,
			videoTabBar,
			notAttention,
			guanzhuList
		},
		data() {
			return {
				
				userInfo:{
					userAttention:[
						{	id:1,
							img:"../../static/headerImg/10.jpg",
							title:"童星梦",
							is_attention:false,
						}
					],
					tuijianGuanzhu:[
						{	id:1,
							img:"../../static/headerImg/6.jpg",
							title:"中国梦想秀",
							is_attention:true,
						},
						{	id:1,
							img:"../../static/headerImg/5.jpg",
							title:"赏石之路",
							is_attention:true,
						},
						{	id:1,
							img:"../../static/headerImg/4.jpg",
							title:"梦想歌声",
							is_attention:false,
						},
						{	id:1,
							img:"../../static/headerImg/3.jpg",
							title:"中国与世界",
							is_attention:true,
						},
						{	id:1,
							img:"../../static/headerImg/2.jpg",
							title:"今日中国",
							is_attention:true,
						},
						{	id:1,
							img:"../../static/headerImg/1.jpg",
							title:"创业之路",
							is_attention:false,
						},
					],
					userVideo:{
						loadtext:"上拉加载更多",
						list:[
							{
								"videoId":"",
								"authorImg":"../../static/logo.png",
								"author":"潘光源",
								"isAttention":true,         //是否关注
								"videoImg":"../../static/imags/5001669.jpg",
								"videoSrc":"https://video.pearvideo.com/mp4/third/20191120/cont-1624765-12719568-193805-hd.mp4",
								"commetNum":3000
							},
							{
								"videoId":"",
								"authorImg":"../../static/logo.png",
								"author":"潘光源",
								"isAttention":false,         //是否关注
								"videoImg":"../../static/imags/5001669.jpg",
								"videoSrc":"https://video.pearvideo.com/mp4/third/20191120/cont-1624765-12719568-193805-hd.mp4",
								"commetNum":3000
							},
							{
								"videoId":"",
								"authorImg":"../../static/logo.png",
								"author":"潘光源",
								"isAttention":false,         //是否关注
								"videoImg":"../../static/imags/5001669.jpg",
								"videoSrc":"https://video.pearvideo.com/mp4/third/20191120/cont-1624765-12719568-193805-hd.mp4",
								"commetNum":3000
							},
							{
								"videoId":"",
								"authorImg":"../../static/logo.png",
								"author":"潘光源",
								"isAttention":false,         //是否关注
								"videoImg":"../../static/imags/5001669.jpg",
								"videoSrc":"https://video.pearvideo.com/mp4/third/20191120/cont-1624765-12719568-193805-hd.mp4",
								"commetNum":3000
							},
							{
								"videoId":"",
								"authorImg":"../../static/logo.png",
								"author":"潘光源",
								"isAttention":false,         //是否关注
								"videoImg":"../../static/imags/5001669.jpg",
								"videoSrc":"https://video.pearvideo.com/mp4/third/20191120/cont-1624765-12719568-193805-hd.mp4",
								"commetNum":3000
							},
							{
								"videoId":"",
								"authorImg":"../../static/logo.png",
								"author":"潘光源",
								"isAttention":false,         //是否关注
								"videoImg":"../../static/imags/5001669.jpg",
								"videoSrc":"https://video.pearvideo.com/mp4/third/20191120/cont-1624765-12719568-193805-hd.mp4",
								"commetNum":3000
							},
							{
								"videoId":"",
								"authorImg":"../../static/logo.png",
								"author":"潘光源",
								"isAttention":false,         //是否关注
								"videoImg":"../../static/imags/5001669.jpg",
								"videoSrc":"https://video.pearvideo.com/mp4/third/20191120/cont-1624765-12719568-193805-hd.mp4",
								"commetNum":3000
							},
						]
					}
					
					
				},
					
				guanzhuBodyList:[
					{	id:1,
						img:"../../static/headerImg/10.jpg",
						title:"童星梦",
						is_attention:false,
					},
					{	id:1,
						img:"../../static/headerImg/10.jpg",
						title:"童星梦",
						is_attention:true,
					},
					{	id:1,
						img:"../../static/headerImg/10.jpg",
						title:"童星梦",
						is_attention:true,
					},
					{	id:1,
						img:"../../static/headerImg/10.jpg",
						title:"童星梦",
						is_attention:false,
					}
				],
				swiperheight:500,
				tabIndex:0,
				tabBars:[
					{name:"推荐",id:"推荐"},
					{name:"关注",id:"guanzhu"}
				],
				videoList:{
					loadtext:"上拉加载更多",
					list:[]
				}
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success:(res) => {
					let height = res.windowHeight-uni.upx2px(100);
					this.swiperheight=height;
				}
			});
		},
		mounted() {
			this.gitTuijianVideo()
		},
		methods: {
			gitTuijianVideo(){
				uni.request({
					url: 'http://127.0.0.1:8000/video/micro_list', //接口地址
					method: 'GET', //请求方式
					//传参
					header: {
						'content-type': 'application/x-www-form-urlencoded' 
					},
					success:(res) => {
						//打印接口的数据
						// console.log(res.data.video_list);
						this.videoList.list = res.data.video_list
					}
				});
				
			},
			// 点击切换
			changTab(index){
				this.tabIndex = index;
			},
			// 滑动切换
			tabChange(e){
				this.tabIndex =e.detail.current;
			},
			// 上拉加载
			loadmore(index){
				if(this.videoList.loadtext!="上拉加载更多"){return;}
				this.videoList.loadtext="加载中.....";
				setTimeout(() => {
					let obj_list=[
						{
								"videoId":"",
								"authorImg":"../../static/logo.png",
								"author":"小张boy",
								"isAttention":true,         //是否关注
								"videoImg":"",
								"videoSrc":"https://video.pearvideo.com/mp4/third/20191120/cont-1624765-12719568-193805-hd.mp4",
								"commetNum":3000
							},
							{
								"videoId":"",
								"authorImg":"../../static/logo.png",
								"author":"小张boy",
								"isAttention":true,         //是否关注
								"videoImg":"../../static/imags/5001669.jpg",
								"videoSrc":"https://video.pearvideo.com/mp4/third/20191120/cont-1624765-12719568-193805-hd.mp4",
								"commetNum":3000
							}
					]
					this.videoList.list = this.videoList.list.concat(obj_list)
					this.videoList.loadtext = "上拉加载更多";
				},1000);
				this.newList[index].loadtext="没有更多数据了";
			}
		}
	}
</script>

<style scoped>
.tuijian,.borderxian{
	font-size: 30upx;
	color: #D8DAD7;
	margin-top: 15upx;
	margin-left: 15upx;
}
.borderxian{
	border-top: solid #D8DAD7 10upx;
	width: 95%;
}
</style>
	