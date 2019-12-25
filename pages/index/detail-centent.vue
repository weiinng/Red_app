<template>
	<view>
		<!-- 首页的视频 -->
		<view class="list1">
			<video src="http://img.cdn.qiniu.dcloud.net.cn/wap2appvsnative.mp4" controls></video>
		</view>
		<!-- info -->
		<view class="list2">
			<!-- 标题 -->
			<view class="title">
				匠心行中国
			</view>
			<!-- 爱心的数量 -->
			<view class="love">
				
			</view>
			<!-- 集数 -->
			<view class="number">
				
			</view>
			<!-- 标签 -->
			<view class="tags u-f-wrap">
				<view>自制</view>
				<view>自制</view>
				<view>自制</view>
				<view>自制</view>
				<view>自制</view>
				<view>自制</view>
				<view>自制</view>
				
			</view>
			<!-- bigV -->
			<view>
				<zhuchiren-header :zhuchiren="zhuchiren">
					
				</zhuchiren-header>
			</view>
		</view>
		<!-- 水平线 -->
		<view class="hr-tag"></view>
		<!-- 简介 -->
		<view class="list3">
			<view>简介</view>
			<view>
				简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容
				简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容
				简介内容简介内容简介内容简介内容简介内容简介内容
				简介内容简介内容简介内容简介内容
				简介内容简介内容
			</view>
		</view>
		<!-- 水平线 -->
		<view class="hr-tag"></view>
		<!-- 相关视频 -->
		<view class="list4">
			<view>相关视频</view>
			<view>
				<block v-for="(val,index) in xiangguanlist" :key="index">
					<tuijian-info :val="val"></tuijian-info>
				</block>
				<view class="load-more" @tap="loadlanmu">点击加载更多</view>
			</view>
		</view>
		
		<!-- 水平线 -->
		<view class="hr-tag"></view>
		<!-- 为您推荐 -->
		<!-- <view class="list5">
			<view>为你推荐</view>
			<view></view>
		</view> -->
	</view>
</template>

<script>
	import zhuchirenHeader from "../../components/index/zhuchiren-header.vue";
	import tuijianInfo from "../../components/common/tuijian-info.vue";
	 
	export default {
		components:{
			zhuchirenHeader,
			tuijianInfo
		},
		data() {
			return {
				xiangguanlist:[
					{
						"img":"../../static/demo/datapic/1.jpg",
						name:"很多信息。",
					},
					{
						"img":"../../static/demo/datapic/1.jpg",
						name:"很多信息。",
					},
					{
						"img":"../../static/demo/datapic/1.jpg",
						name:"很多信息。",
					},
					{
						"img":"../../static/demo/datapic/1.jpg",
						name:"很多信息。",
					}
				],
				zhuchiren:[
					{	
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":"导演"
					},
					{
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":"女主"
					},
					{	
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":""
					},
					{	
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":""
					},
					{
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":""
					},
					{
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":""
					},
					{	
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":""
					},
					{
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":""
					},
					{
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":""
					},
					{	
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":""
					},
					{
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":""
					},
					{
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":""
					},
					{	
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":""
					},
					{
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":""
					},
					{
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":""
					},
					{	
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":""
					},
					{
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":""
					},
					{
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":""
					},
					{	
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":""
					},
					{
						"zhuchirenId":"0",
						"zhuchirenImg":"../../static/imags/8165133.jpg",
						"tag":""
					}
				]
			}
		},
		methods: {
			loadlanmu(){
				setTimeout(() =>{
					let lanmuList = [
						{
							"img":"../../static/demo/datapic/1.jpg",
							name:"很多信息。",
						},
						{
							"img":"../../static/demo/datapic/1.jpg",
							name:"很多信息。",
						},
						{
							"img":"../../static/demo/datapic/1.jpg",
							name:"很多信息。",
						},
					]
					this.xiangguanlist = this.xiangguanlist.concat(lanmuList)
				},1000)
			}
		}
	}
</script>

<style scoped>
.load-more{
	text-align: center;
	color: #AAAAAA;
	padding: 15upx;
}
.hr-tag{
	width: 95%;
	height: 2upx;
	background: #EEEEEE ;
	margin: 0 auto;
	margin-top: 20upx;
}
.list1,.list2,.list3,.list4,.list5{
	margin-left: 30upx;
}

.list1{
	
}
.list1>video{
	width: 100%;
	height: 500upx;
}
.list2{
	
}
.title{
	font-size: 37upx;
	font-weight: 600;
}
.number{
	
}
.tags>view{
	margin-right: 15upx;
	font-size: 25upx;
	margin-right: 30upx;
	
}
.tags>view:first-child{
	color: #B38563;
	font-weight: 600;
}

.love{
	
}
.list3{
	margin-top: 30upx;
}
.list3>view:first-child{
	font-size: 25upx;
	font-weight: 600;
}
.list3>view:last-child{
	margin-top: 15upx;
	font-size: 22upx;
}
.list4>view:first-child,.list5>view:first-child{
	font-weight: 600;
}

</style>
