<template>
	<swiper class="swiper-new-list" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item>
			<image src="../../static/imags/4862230.jpg" mode="widthFix" lazy-load></image>
		</swiper-item>
		<swiper-item>
			<image src="../../static/imags/6675719.jpg" mode="widthFix" lazy-load></image>
		</swiper-item>
		<swiper-item>
			<image src="../../static/imags/23_1920x1200.jpg" mode="widthFix" lazy-load></image>
		</swiper-item>
		<swiper-item>
			<image src="../../static/imags/5116923.jpg" mode="widthFix" lazy-load></image>
		</swiper-item>
		<swiper-item>
			<image src="../../static/imags/8318125.jpg" mode="widthFix" lazy-load></image>
		</swiper-item>
		<swiper-item>
			<image src="../../static/imags/8165133.jpg" mode="widthFix" lazy-load></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props:{
			
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.swiper-new-list{
	padding: 0 20upx 20upx 20upx;
	
}
.swiper-new-list image{
	width: 100%;
}
.swiper-new-list swiper-item{
	height: 400upx;
}
</style>
