<template>
    <view class="page" :style="{ height: height }">
		<swiper
			class="swiper"
			:vertical="true"
			@change="changeCurrent"
			:current="index">
			<swiper-item v-for="(item, idx) in videoList" :key="idx" class="swiper-item">
					<block v-if="Math.abs(index-idx)<=1" class="video-box">
						<chunlei-video class="video" :src="item.src"  :height="height" :width="width" 
							:play="item.flag" v-if="Math.abs(index-idx)<=1" :gDuration="item.duration"
							:initialTime="item.initialTime" @pause="pauseVideo" :objectFit="item.objectFit"
						>
						</chunlei-video>
						<cover-view class="cover-view-marks">
							<view :style="{ height: height,width: width }" @click.stop="clickVideo" @touchmove="ListTouchMove" @touchend.stop="ListTouchEnd"
							@touchstart="ListTouchStart">
							</view>
						</cover-view>
						<cover-view class="cover-view-left">
							<text class="view-left-text"  v-if="item.title">{{item.title}}</text>
							<view class="view-left-text-content" v-if="item.content">
								<text class="text-content-text">{{item.content}}</text>
							</view>
						</cover-view>
						<cover-view class="cover-view-right">
							<cover-image :src="item.avater" class="avater img" @click.stop="tapAvater"></cover-image>
							<text class="right-follow">+</text>
							<cover-image :src="item.check?'../../static/img/axc.png':'../../static/img/bed.png' " class="img-left" @click.stop="tapLove"></cover-image>
							<!-- <text class="iconfont " :class="item.check?'right-checkLove':'right-iconfont'" @click.stop="tapLove">&#xe757;</text> -->
							<text class="right-text">{{item.like}}</text>
							<cover-image src="../../static/img/ay2.png" style="height: 80upx;"  class="img-left" @click.stop="tapMsg"></cover-image>
							<!-- <text class="iconfont right-iconfont" @click.stop="tapMsg">&#xe612;</text> -->
							<text class="right-text">{{item.comment}}</text>
							<cover-image  src="../../static/img/b6p.png" style="height: 76upx;"  class="img-left" @click.stop="tapShare"></cover-image>
							<!-- <text class="iconfont right-iconfont" @click.stop="tapShare">&#xe627;</text> -->
							<text class="right-text"></text>
							<cover-image src="../../static/changpian.png" class="musicIcon img"></cover-image>
						</cover-view>
						
					</block>
			</swiper-item>
		</swiper>
    </view>
</template>
<script>
	import chunleiVideo from '../../components/chunlei-video/chunlei-video.vue'
    export default { 
		components:{
			chunleiVideo
		},
        data() {
            return {
				sysheight:0,
				translateX:'10',
				height:'667px',
				index:0,
				width:'',
				oldIndex:0,
				videoList:[
					
					{
						src:'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=129764&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss',
						content:'广告有反转：危机感十足！一辆车都比你靠谱',   //内容
						flag:false,    
						check:true,
						like:'7w',
						comment:'1045',  
						avater:'http://img.kaiyanapp.com/e44ed5fcfa424ba35761ce5f1339bc16.jpeg?imageMogr2/quality/60/format/jpg',
						initialTime:0,
						at:'欧美广告精选',
						duration:149
					},
					{
						src:'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=164016&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss',
						content:'无辣不欢，你没见过小龙虾的大场面',
						flag:false,
						check:false,
						like:'7w',
						comment:'1045',
						avater:'http://img.kaiyanapp.com/7af2bb1bc134fb1115d48f05e9d317f0.jpeg?imageMogr2/quality/60/format/jpg',
						initialTime:0,
						at:'世界美食荟萃',
						duration:1162
					},
				]
			}
        },
		created(){
			//#ifdef APP-PLUS
			plus.screen.lockOrientation("portrait-primary")
			//#endif
			this.sysheight = uni.getSystemInfoSync().windowHeight
			this.height = `${this.sysheight}px` 
			let width = uni.getSystemInfoSync().windowWidth 
			this.width = `${width}px` 
		},
		async mounted() {
			setTimeout(() =>{
				this.videoPlay(this.index)
			}, 200);
			await this.pushVideoList()
			
		},
		onHide(){
			for (let item of this.videoList) {
				item.flag = false
			}
		},
        methods: {
			changeCurrent(e){
				this.index = e.detail.current;
				for (let item of this.videoList) {
					item.flag = false
				}
				this.videoList[this.index].flag = !this.videoList[this.index].flag
			},
			pushVideoList(){
				let promise = new Promise((resolve,reject)=>{
					uni.request({
						url: 'https://api.apiopen.top/videoRecommend?id=127397',
						success: (res) => {
							let videoGroup = []
							for (let item of res.data.result) {
								if(item.type == 'videoSmallCard'){
									videoGroup.push({
										src:item.data.playUrl,
										content:item.data.title,
										flag:false,
										check:false,
										like:'7w',
										comment:'1045',
										at:item.data.author.name,
										avater:item.data.author.icon,
										initialTime:0,
										duration:item.data.duration
									})
								}
							}
							this.videoList = [...this.videoList,...videoGroup]
							this.videoList = [...this.videoList,...videoGroup]
							this.videoList = [...this.videoList,...videoGroup]
							resolve()
						}
					})
				}) 
				return promise
			},
			tapLove(){
				this.videoList[this.index].check = !this.videoList[this.index].check
				this.videoList = [...this.videoList]
				
			},
			tapAvater(){
				uni.showToast({
					icon:'none',
					title:`点击索引为${this.index}的头像`
				})
			},
			tapMsg(){
				uni.showToast({
					icon:'none',
					title:`查看索引为${this.index}的评论`
				})
			},
			tapShare(){
				uni.showToast({
					icon:'none',
					title:`分享索引为${this.index}的视频`
				})
			},
			videoPlay(index){
				let promise = new Promise((resolve,reject)=>{
					resolve()
				})
				promise.then(res=>{
					this.videoList[index].flag = !this.videoList[index].flag
				})
			},
			pauseVideo(val){
				if(typeof this.videoList[this.oldIndex].initialTime !='undefined') this.videoList[this.oldIndex].initialTime = val
			},
			clickVideo(){
				this.videoList[this.index].flag = !this.videoList[this.index].flag
			}
        },
		watch:{
			index(newVal,oldVal){
				this.oldIndex = oldVal
			}
		}
    }
</script>
<style scoped>
	.musicIcon{margin-top: 40upx; }
	.img{
		height: 90upx;width: 90upx;margin-bottom: 60upx;opacity: 0.9;
	}
	.right-text{
		color: #FFFFFF;font-size: 11px;text-align: center;margin-bottom: 40upx;
	}
	.img-left{
		width: 80upx;height: 66upx;
	}
	.avater{
		border-radius: 45upx;
		border-width: 2px;
		border-style: solid;
		border-color: #FFFFFF;
	}
	.cover-view-right{
		position: absolute;
		bottom: 160upx;
		right: 20upx;
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		z-index: 9999;
	}
	.right-text-avater{
		position: absolute;
		font-size: 14px;
		top: 80upx;
		left: 30upx;
		height: 40upx;
		width: 40upx;
		background-color: #DD524D;
		color: #FFFFFF;
		border-radius: 50%;
		text-align: center;
		line-height: 40upx;
		z-index: 999;
	}
	.cover-view-left{
		position: absolute;
		margin-left: 10upx;
		width: 500upx;
		bottom: 120upx;
		z-index: 9999;
		font-size: 16px;
		color: #FFFFFF;
		/* #ifndef APP-PLUS */
		white-space: pre-wrap;
		text-overflow:ellipsis;
		overflow:hidden;
		/* #endif */
	}
	.right-follow{
		position: absolute;z-index:100;top: 70upx;left: 30upx;
		color: #FFFFFF;font-size: 16px;width:34upx;height:34upx;background-color: #F12F5B;text-align: center;line-height: 34upx;border-radius: 17upx;
	}
	.cover-view-marks{
		bottom: 20upx;
		margin-right: 20upx;
		right: 0;
		flex: 1;
		z-index: 9999;
	}
	.swiper{
		flex: 1;  
		background-color: #000;
	}
	
	.swiper-item {
	    flex: 1;
	}
    .video {
		flex: 1;
    }
	.video-box{
		flex: 1;
	}
	.cover-view-center{
		position: absolute;
		justify-content: center;
		align-items: center;
		opacity: 0.1;
		z-index: 999;
	}
	
	.left-view{
		margin-bottom: 20upx;
	}
	.left-text{
		font-size: 16px;
		color: #FFFFFF;
	}


	.avater-icon{
		height: 40upx;
		width: 40upx;
		
		color: #fff;
		background-color: #DD524D;
		border-radius: 50%;
		position: absolute;
		left: 30upx;
		top:-20upx;
	}
	
	.page{
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		flex: 1; 
	}
	
</style>