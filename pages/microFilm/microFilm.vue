<template>
	<view>
		<swiper-tab-header :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap">	
		</swiper-tab-header>
		
	
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in newList" :key="index">
					<scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
						<template v-if="items.list.length>0">
							<!-- 图文列表 -->
							<block v-for="(val,index1) in items.list" :key='index1'>
								<index-list :val="val" :index="index"></index-list>
							</block>
							<!-- 上拉加载 -->
							<load-more :loadtext="items.loadtext"></load-more>
						</template>
						<template v-else>
							<noThing></noThing>
						</template>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import indexList from "../../components/microFilm/index-list.vue";
	import swiperTabHeader from "../../components/models/swiper-tab-header.vue";
	import loadMore from "../../components/common/load_more.vue";
	import noThing from "../../components/common/no-thing.vue"
	export default {
		components:{
			indexList,
			swiperTabHeader,
			loadMore,
			noThing
		},
		onNavigationBarSearchInputClicked() {
			console.log("打开搜索页！");
			uni.navigateTo({
				url: "../search/search",
				
			})
		},
		data() {
			return {
				newList:[
					{	
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
					},
					{
						loadtext:"上拉加载更多",
						list:[
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
					},
					{
						loadtext:"上拉加载更多",
						list:[
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
					},
					{
						loadtext:"上拉加载更多",
						list:[
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
					},
					{
						loadtext:"上拉加载更多",
						list:[
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
					},
					{
						loadtext:"上拉加载更多",
						list:[
						]
					}
				],
				tabBars:[
					{id:"1",name:"精选"},
					{id:"2",name:"关注"},
					{id:"3",name:"主持人"},
					{id:"4",name:"体育"},
					{id:"5",name:"娱乐"},
					{id:"6",name:"游戏"}
				],
				tabIndex:0,
				swiperheight:500
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
			//上拉加载
			loadmore(index){
				if(this.newList[index].loadtext!="上拉加载更多"){return;}
				this.newList[index].loadtext="加载中.....";
				setTimeout(() => {
					let obj={
							"videoId":"",
							"authorImg":"../../static/logo.png",
							"author":"小张boy",
							"isAttention":true,         //是否关注
							"videoImg":"../../static/imags/5001669.jpg",
							"videoSrc":"https://video.pearvideo.com/mp4/third/20191120/cont-1624765-12719568-193805-hd.mp4",
							"commetNum":3000
						};
					this.newList[index].list.push(obj);
					this.newList[index].loadtext = "上拉加载更多";
				},1000);
				// this.newList[index].loadtext="没有更多数据了";
			},
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
	
</style>
