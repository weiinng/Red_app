<template>
	<view class="content">
		<hj3-display-images :images="img" :vertical="false" :vtouch="true" @itap="tap" :autoplay="true" :clockwise="true" :interval="2000" :titleBottom="true" :background="back"></hj3-display-images>
		 <view class="" >
		 	点击图片的Index为:{{current}}
		 </view>
	</view>
</template>

<script>
	import hj3DisplayImages from '@/components/hj3-display-images/hj3-display-images.vue';
	
	export default {
		components:{
			hj3DisplayImages
		},
		data() {
			return {
				img:[
					{src:'http://image.zhangxinxu.com/image/study/s/s128/mm1.jpg',title:"mm1"},
					{src:'http://image.zhangxinxu.com/image/study/s/s128/mm8.jpg',title:"mm2"}, 
					{src:'http://image.zhangxinxu.com/image/study/s/s128/mm8.jpg',title:"mm2"},
					{src:'http://image.zhangxinxu.com/image/study/s/s128/mm8.jpg',title:"mm2"},
					{src:'http://image.zhangxinxu.com/image/study/s/s128/mm8.jpg',title:"mm2"},
					{src:'http://image.zhangxinxu.com/image/study/s/s128/mm8.jpg',title:"mm2"},
					{src:'http://image.zhangxinxu.com/image/study/s/s128/mm8.jpg',title:"mm2"},
					{src:'http://image.zhangxinxu.com/image/study/s/s128/mm8.jpg',title:"mm2"},
				],
				current:0,
				// back:'rgba(233,111,111,0.5)' ,
				back:'http://picm.bbzhi.com/fengjingbizhi/wubianyuzhoumeilixingkong/wubianyuzhoumeilixingkong_450321_m.jpg'
			};
		},
		methods: {
			tap:function (e) {
				console.log(1)
				this.current = e 
			}
		}
	}
</script>

<style scoped="">
	.content{
		display: flex;
		flex-direction: column;
	}
	
</style>