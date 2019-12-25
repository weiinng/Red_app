<template>
	<view>
		<uni-nav-bar :statusBar="true" @click-right="openSearch" :border="false" :fixed="true">
			<!-- 左边 -->
			<block slot="left">
				<view class="nav-left">
					<view>Logo</view>
				</view>
			</block>
			<!-- 中间 -->
			<view class="nav-tab-bar u-f-ajc">
				<block v-for="(tab,index) in tabBars" :key="index">
					<view class="u-f-ajc" :class="{'active':tabIndex==index}" @tap="changeTab(index)">
						{{tab.name}}
						<view  v-if="(tabIndex==index)" class="nav-tab-bar-link"></view>
					</view>
				</block>
			</view>
			<!-- 右边 -->
			<block slot="right">
				<view class="nav-right">
					<view class="icon iconfont icon-sousuo">
					</view>
				</view>
			</block> 
		</uni-nav-bar>
	</view>
</template>

<script>
	// 自定义导航栏
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue";
	
	export default {
		components:{
			uniNavBar
		},
		props:{
			tabBars:Array,
			tabIndex:Number
		},
		data() {
			return {
				
			}
		},
		methods: {
			openSearch(){
				uni.navigateTo({
					url:"../../pages/search/search"
				})
			},
			changeTab(index){
				this.$emit('change-tab',index);
			}
		}
	}
</script>

<style scoped>
.nav-left,.nav-right{
}
.nav-left>view,.nav-right>view{
	font-size: 32upx;
}
.nav-left{
	margin-left: 16upx;
}
.nav-right{
	font-weight: bold;
	margin-left: 10upx;
}
.nav-tab-bar{
	width: 100%;
	margin-left: -7upx;
}
.nav-tab-bar>view{
	font-size: 35upx;
	padding: 0 15upx;
	font-weight: bold;
	color: #969696;
}
.active{
	color: #333333 !important;
}
.nav-tab-bar-link{
	border-bottom: 5upx solid #FD7575;
	border-top: 5upx solid #FD7575;
	width: 70upx;
	border-radius: 20upx;
	position: absolute;
	bottom: 12upx;
}
</style>
