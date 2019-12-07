<template>
	<view>
		<view>
			 <bw-swiper :swiperList="swiperList" style="width:100%"></bw-swiper>
		</view>
		<view style="margin: 10upx;" class="index-list">
			<navigator url="../shilu-login/reg">注册页面</navigator>
			<navigator url="../shilu-login/blog">blog</navigator>
			<navigator url="../shilu-login/forget">修改密码</navigator>
			<navigator url="../shilu-login/login">登录页面</navigator>
			<navigator url="../feedback/feedback">反馈</navigator>
			<navigator url="../memberCenter/memberCenter">会员中心</navigator>
			<navigator url="../posterList/posterList">海报</navigator>
			
		</view>
		<view>
			<topic-nav :navList="navList"></topic-nav>
		</view>
	</view>
</template>

<script>
	// 轮播图组件
	import bwSwiper from '../../components/common/bw-swiper.vue';
	
	// 分类-6个
	import topicNav from "../../components/common/topic-nav.vue";
	
	export default {
		components:{
			bwSwiper,
			topicNav
		},
		// 数据写在data
		data() {     
			return {
				navList:[
					{
						name:"热门",
						id:"",
					},
					{
						name:"热门",
						id:"",
					},
					{
						name:"热门",
						id:"",
					},
					{
						name:"热门",
						id:"",
					},
					{
						name:"热门",
						id:"",
					}
				],
				title:"不说",
				srcList:"https://video.pearvideo.com/mp4/third/20191202/cont-1628621-12719568-205304-hd.mp4",
				gDuration:300,
				srcImg:"http://b-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.jpeg",
				dataStr:"",
				swiperList:[
						{
							img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
							text:'加油',
						},
						{
							img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
							text:'加油',
						},
						{
							img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
							text:'加油',
						},
						{
							img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
							text:'加油',
						}
					]
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
