<template>
	<view class="uni-tab-bar">
		<scroll-view scroll-x class="uni-swiper-tab">
			<block v-for="(tab,index) in tabBars" :key="tab.id">
				<view class="swiper-tab-list" :class="{'active':tabIndex==index}" @tap="tabtap(index)">
					{{tab.name}}
				</view>
			</block>
		</scroll-view>
	</view> 
</template>

<script>
	export default {
		props:{
			tabBars:Array,
			tabIndex:Number
		},
		methods: {
			tabtap(index){
				this.$emit('tabtap',index)  //组件传值，定义名称，传入的信息  
			}
		}
	}
</script>

<style>
	.uni-swiper-tab{
		border-bottom: 0;
	}
	.swiper-tab-list{
		font-weight: 700;
		width: 110upx;
		margin-left: 20upx;
		margin-right: 20upx;
		
	}
	.uni-tab-bar .active{
		color: #DF7885;
		font-size: 45upx;
		font-weight: bold;
	}
</style>
