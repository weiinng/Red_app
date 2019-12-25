<template>
	<view>
		<!-- 话题介绍 -->
		<guanzhu-info :item ="guanzhuinfo"></guanzhu-info>
		<!-- tabbar切换 -->
		<swiper-tab-head
		:tabBars="tabBars" 
		:tabIndex="tabIndex"
		@tabtap="tabtap"
		scrollItemStyle="width:50%;"
		scrollStyle="border-bottom:0;">
		</swiper-tab-head>
		<!-- 列表 -->
		<view class="topic-detail-list">
			<block v-for="(item,index) in tablist" :key="index">
				<template v-if="tabIndex==index">
					<!-- 列表 -->
					<block v-for="(list,listindex) in item.list" :key="listindex">
						<index-list :val="list" :index="listindex"></index-list>
					</block>
					<!-- 上拉加载 -->
					<load-more :loadtext="item.loadtext"></load-more>
				</template>
			</block>
		</view>
	</view>
</template>

<script>
	import guanzhuInfo from "../../components/attention/guanzhu-info.vue";
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import indexList from "../../components/microFilm/index-list.vue";
	import loadMore from "../../components/common/load-more.vue"
	
	export default {
		components:{
			swiperTabHead,
			guanzhuInfo,
			indexList,
			loadMore
		},
		data() {
			return {
				tabIndex:0,
				tabBars:[
					{ name:"默认",id:"moren" },
					{ name:"最新",id:"zuixin" },
				],
				guanzhuinfo:{
					titlepic:"../../static/demo/topicpic/13.jpeg",
					title:"追忆童星梦",
					desc:"我是描述",
					totalnum:1000,
					todaynum:1000,
				},
				tablist:[
					{
						loadtext:"上拉加载更多",
						list:[
							{	
								"title":"青春就他妈得放肆！",
								"videoId":"",
								"authorImg":"../../static/logo.png",
								"author":"潘光源",
								"isAttention":true,         //是否关注
								"videoImg":"../../static/imags/5001669.jpg",
								"videoSrc":"https://video.pearvideo.com/mp4/third/20191120/cont-1624765-12719568-193805-hd.mp4",
								"commetNum":3000
							},
							{
								"title":"青春就他妈得放肆！",
								"videoId":"",
								"authorImg":"../../static/logo.png",
								"author":"潘光源",
								"isAttention":true,         //是否关注
								"videoImg":"../../static/imags/5001669.jpg",
								"videoSrc":"https://video.pearvideo.com/mp4/third/20191120/cont-1624765-12719568-193805-hd.mp4",
								"commetNum":3000
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{	
								"title":"青春就他妈得放肆！",
								"videoId":"",
								"authorImg":"../../static/logo.png",
								"author":"潘光源",
								"isAttention":true,         //是否关注
								"videoImg":"../../static/imags/5001669.jpg",
								"videoSrc":"https://video.pearvideo.com/mp4/third/20191120/cont-1624765-12719568-193805-hd.mp4",
								"commetNum":3000
							},
							{
								"title":"青春就他妈得放肆！",
								"videoId":"",
								"authorImg":"../../static/logo.png",
								"author":"潘光源",
								"isAttention":true,         //是否关注
								"videoImg":"../../static/imags/5001669.jpg",
								"videoSrc":"https://video.pearvideo.com/mp4/third/20191120/cont-1624765-12719568-193805-hd.mp4",
								"commetNum":3000
							}
						]
					}
				]
			}
		},
		// 上拉触底事件
		onReachBottom() {
			// 上拉加载
			this.loadmore();
		},
		// 监听下拉刷新 
		onPullDownRefresh(){
			this.getdata();
		},
		methods: {
			getdata(){
				setTimeout(()=> {
					// 获取数据
					let arr=[
						{	
								"title":"青春就他妈得放肆！",
								"videoId":"",
								"authorImg":"../../static/logo.png",
								"author":"潘光源",
								"isAttention":true,         //是否关注
								"videoImg":"../../static/imags/5001669.jpg",
								"videoSrc":"https://video.pearvideo.com/mp4/third/20191120/cont-1624765-12719568-193805-hd.mp4",
								"commetNum":3000
							},
							{
								"title":"青春就他妈得放肆！",
								"videoId":"",
								"authorImg":"../../static/logo.png",
								"author":"潘光源",
								"isAttention":true,         //是否关注
								"videoImg":"../../static/imags/5001669.jpg",
								"videoSrc":"https://video.pearvideo.com/mp4/third/20191120/cont-1624765-12719568-193805-hd.mp4",
								"commetNum":3000
						}
					];
					// 赋值
					this.tablist[this.tabIndex].list=arr;
					// 关闭下拉刷新
					uni.stopPullDownRefresh();
				}, 2000);
			},
			loadmore(){
				if(this.tablist[this.tabIndex].loadtext!="上拉加载更多"){ return; }
				// 修改状态
				this.tablist[this.tabIndex].loadtext="加载中...";
				// 获取数据
				setTimeout(()=> {
					//获取完成
					let obj={
						"videoId":"",
						"authorImg":"../../static/logo.png",
						"author":"潘光源",
						"isAttention":false,         //是否关注
						"videoImg":"../../static/imags/5001669.jpg",
						"videoSrc":"https://video.pearvideo.com/mp4/third/20191120/cont-1624765-12719568-193805-hd.mp4",
						"commetNum":3000
							};
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].loadtext="上拉加载更多";
				}, 1000);
				//this.tablist[this.tabIndex].loadtext="没有更多数据了";
			},
			tabtap(index){
				this.tabIndex=index;
			},
			
		}
	}
</script>

<style>

</style>
