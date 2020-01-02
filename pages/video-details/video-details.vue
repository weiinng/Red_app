<template>
	<view>
		<!-- 顶部导航栏 -->
		<view class="posif posi-tlr0 bgf8 z500">
			<video 
			class="video-player" 
			src="http://qiniu.weiinng.cn/c65d5928902c6157879296d8a57edb3c.mp4"
			poster=""
			:controls="true"
			:page-gesture="true"></video>
		</view>
		
		<mescroll-uni :top="400" :bottom="90" :down="{use:false}" @down="downCallback" :up="upOption" @up="upCallback" >
			<!-- <view> @down, @up 必须配置 </view> -->
			<!-- <view> :down, :up 可省略 </view> -->
			<!-- <view v-for="data in dataList"> 数据列表... </view> -->
			<!-- 基本 -->
			<view class="mb18r bgwhite">
				<!-- 中心内容 -->
				<view class="plr18r">
					<!-- 标题 -->
					<view class="f36r c111 fbold pt18r">
					{{videoInfoData.Title}}
					</view>
					<!-- 时间 -->
					<view class="f24r cgray mb18r">
					2019年12月27日
					</view>
					<!-- 内容 -->
					<view class="f28r c555 fword">
					{{videoInfoData.Describe}}
					</view>
				</view>
				<!-- 用户信息 -->
				<view class="flex plr18r ptb18r">
					<user-avatar :src="calUserAvater" :tag="calUser.AuthenticateCode || ''" size="md"></user-avatar>
					<view class="flexc-jsa ml18r mr18r flex-gitem w128r">
						<view>
							<text class="f28r fbold mr18r">{{calUser.NickName || '#'}}</text>
							<i-icon :type="calUser.Gender == '男' ?'nan':'nv' " size="28" :color="calUser.Gender == '男' ?'#479bd4':'#FF6699'"></i-icon>
						</view>
						<!-- 描述 -->
						<view class="f24r cgray ellipsis">{{calUser.Describe || '该同袍还不知道怎么描述寄己 (╯▽╰)╭'}}</view>
					</view>
					<view class="ball2r-ctheme f28r ctheme fcenter w128r br8r ptb8r flex-asc">{{ calUser.UserAtte?'已关注':'关注'}}</view>
				</view>
				<!-- 点赞列表 -->
				<view class="flexr-jfe flex-aic pt18r plr18r bts2r br18r">
					<block v-for="(item,index) in topListData" :key="index">
						<view class="mr18r">
							<user-avatar 
							v-if="item" 
							:src="item.User.HeadUrl +'_100x100.jpg'" 
							:tag="item.User.AuthenticateCode"
							size="sm"
							@click="fnUserInfo(item.User)"></user-avatar>
						</view>
					</block>
					<view 
					class="f24r c111 fcenter bgf8 w128r ptb18r" 
					@tap="fnTopList">
						赞 
						<text class="f24r cbrown ml18r">
							{{videoInfoData.TopCount}}
						</text>
					</view>
					
				</view>
			</view>
			<!-- 评论区 -->
			<view class="plr18r ptb28r f32r fbold c111 bbs2r bgwhite">评论（{{videoInfoData.CommCount || 0}}）</view>
			<block v-for="(commData,index) in commentListData" :key="index">
			  <comm-cell :info-data="commData" @user="fnUserInfo" @top="fnTopComm" @comm="fnComm" @more="fnMoreComm"></comm-cell>
			</block>
		</mescroll-uni>
		
		<!-- 固定底部评论点赞收藏分享 -->
		<view class="posif posi-blr0 flexr-jsa plr18r ptb18r bts2r z5 bgwhite">
		  <view class="br8r bgf8 plr18r mr8r flex-fitem" @tap="fnCommOpen">
		    <i-icon type="bianji" size="36" color="#8F8F94"></i-icon>
		    <text class="f28r cgray ml8r">想说点什么？</text>
		  </view>
		  <view class="plr28r bls2r brs2r" @tap="fnTop">
		    <i-icon type="dianzan" size="48" :color="videoInfoData.UserTop?'#FF6699':'#8F8F94'"></i-icon>
		    <text class="f28r cgray ml8r">{{videoInfoData.TopCount || 0}}</text>
		  </view>
		  <view class="plr28r" @tap="fnSave">
		    <i-icon type="shoucang" size="48" :color="videoInfoData.UserSave?'#FF6699':'#8F8F94'"></i-icon>
		    <text class="f28r cgray ml8r">{{videoInfoData.SaveCount || 0}}</text>
		  </view>
		  <view class="pl28r pr8r bls2r" @tap="fnShare">
		    <i-icon type="fenxiang" size="48" color="#8F8F94"></i-icon>
		  </view>
		</view>
		
		<!-- 分享弹出层 -->
		<share-popup ref="share"></share-popup>
		<!-- 评论输入弹出层 -->
		<comm-input ref="comm" @send="fnCommSend"></comm-input>
	</view>
</template>


<script>
	// 分享弹出层组件
	import SharePopup from '@/components/share-popup/share-popup'
	// 评论列表单元组件
	import CommCell from '@/components/comm-cell/comm-cell'
	// 评论输入弹出层组件
	import CommInput from '@/components/comm-input/comm-input'
	
	export default {
		components: {
			SharePopup,
			CommCell,
			CommInput
		},
		data() {
			return {
				topListData:[
					{"ID":25244739,"User":{"Gender":"女","MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":470333,"UserName":null,"NickName":"想开店的辞语","HeadUrl":"https://pic.hanfugou.com/ios/2019/12/11/16/45/157605392265767.jpg"},"TrendID":2403021,"TopUserID":424381,"ObjectID":30932,"ObjectType":"video","Weight":1,"Datetime":"2019-12-23T22:49:13"},
					{"ID":25214844,"User":{"Gender":"女","MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":1677284,"UserName":null,"NickName":"曲柒蕊","HeadUrl":"https://pic.hanfugou.com//android/2019/11/19/f940eac37cfa400889aa8bf010e8ee44.jpg"},"TrendID":2403021,"TopUserID":424381,"ObjectID":30932,"ObjectType":"video","Weight":0,"Datetime":"2019-12-22T22:25:50"},
					{"ID":25069949,"User":{"Gender":"女","MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":1674068,"UserName":null,"NickName":"紫晶梦若纨","HeadUrl":"https://pic.hanfugou.com/android/2019/11/13/8c10a319a4c2414da5933344a749b607.jpg"},"TrendID":2403021,"TopUserID":424381,"ObjectID":30932,"ObjectType":"video","Weight":3,"Datetime":"2019-12-18T21:20:19"},
					{"ID":24904589,"User":{"Gender":"女","MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":1110854,"UserName":null,"NickName":"慕~梓","HeadUrl":"https://pic.hanfugou.com/android/2019/4/15/5e65d25c070a4ab99374e9dfc29576d7.jpg"},"TrendID":2403021,"TopUserID":424381,"ObjectID":30932,"ObjectType":"video","Weight":3,"Datetime":"2019-12-14T12:18:52"},
					{"ID":24889682,"User":{"Gender":"女","MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":168817,"UserName":null,"NickName":"苏与秦","HeadUrl":"https://pic.hanfugou.com/android/2019/2/6/41b23c0f8bec4a2c9b75e6d0b5c83558.jpg"},"TrendID":2403021,"TopUserID":424381,"ObjectID":30932,"ObjectType":"video","Weight":0,"Datetime":"2019-12-13T23:27:19"},
					{"ID":24801342,"User":{"Gender":"女","MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":1653359,"UserName":null,"NickName":"PASTRY","HeadUrl":"https://pic.hanfugou.com/android/2019/11/1/440fe220ebe14308acc0c6e9c472ac74.jpg"},"TrendID":2403021,"TopUserID":424381,"ObjectID":30932,"ObjectType":"video","Weight":0,"Datetime":"2019-12-10T17:17:24"},
					{"ID":24792249,"User":{"Gender":"女","MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":1651081,"UserName":null,"NickName":"祈歌婉华","HeadUrl":"https://pic.hanfugou.com//android/2019/11/6/0f2187ecbaae4e62ae226bb2595ba95f.jpg"},"TrendID":2403021,"TopUserID":424381,"ObjectID":30932,"ObjectType":"video","Weight":4,"Datetime":"2019-12-10T06:17:13"},
					{"ID":24683846,"User":{"Gender":"女","MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":1189254,"UserName":null,"NickName":"、、、、、M","HeadUrl":"https://pic.hanfugou.com/android/2019/5/2/f530f0777e264a25a88fdc952aa6d9b8.jpg"},"TrendID":2403021,"TopUserID":424381,"ObjectID":30932,"ObjectType":"video","Weight":1,"Datetime":"2019-12-06T23:26:10"},
					{"ID":24583671,"User":{"Gender":"女","MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":1042109,"UserName":null,"NickName":"饴糖x","HeadUrl":"https://pic.hanfugou.com/android/2019/4/3/d47b74e305cb4c1199eabf90996718d8.jpg"},"TrendID":2403021,"TopUserID":424381,"ObjectID":30932,"ObjectType":"video","Weight":0,"Datetime":"2019-12-02T19:06:52"},
					{"ID":24106454,"User":{"Gender":"女","MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":1184259,"UserName":null,"NickName":"开物·咕咕","HeadUrl":"https://pic.hanfugou.com/ios/2019/6/2/2/30/155941381976228.jpg"},"TrendID":2403021,"TopUserID":424381,"ObjectID":30932,"ObjectType":"video","Weight":4,"Datetime":"2019-11-17T02:13:28"}
				],
				commentListData:[
					{
						"ID":8477419,"User":{
							"Gender":"女","MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":883192,"UserName":null,"NickName":"Dilraba Dilmurat","HeadUrl":"https://pic.hanfugou.com/android/2019/5/24/844fb384d950478f8d34880799d52b02.jpg"},
						"TrendID":2403021,"ObjectID":30932,"ObjectType":"video","Content":"都不用上高光粉，好羡慕","ParentID":0,"TopParentID":0,"ReplyUser":{
							"Gender":null,"MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":0,"UserName":null,"NickName":null,"HeadUrl":null
							},
							"TopCount":6,"ChildCount":0,"UserTop":false,"CommentChilds":null,"Images":null,"Datetime":"2019-07-15T07:43:47"},
					{
						"ID":8515412,"User":{
							"Gender":"女","MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":1347509,"UserName":null,"NickName":"菊深.（簪娘）","HeadUrl":"https://pic.hanfugou.com/android/2019/6/16/785c49b0d5c5470daee4f3147326076e.jpg"},"TrendID":2403021,"ObjectID":30932,"ObjectType":"video","Content":"女友腹","ParentID":0,"TopParentID":0,"ReplyUser":{"Gender":null,"MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":0,"UserName":null,"NickName":null,"HeadUrl":null},"TopCount":2,"ChildCount":0,"UserTop":false,"CommentChilds":null,"Images":null,"Datetime":"2019-07-17T07:41:45"
					},
					{
						"ID":8515398,"User":{"Gender":"女","MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":1347509,"UserName":null,"NickName":"菊深.（簪娘）","HeadUrl":"https://pic.hanfugou.com/android/2019/6/16/785c49b0d5c5470daee4f3147326076e.jpg"},"TrendID":2403021,"ObjectID":30932,"ObjectType":"video","Content":"小姐姐你能不能画个錦鯉妆？","ParentID":0,"TopParentID":0,"ReplyUser":{"Gender":null,"MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":0,"UserName":null,"NickName":null,"HeadUrl":null},"TopCount":2,"ChildCount":0,"UserTop":false,"CommentChilds":null,"Images":null,"Datetime":"2019-07-17T07:41:01"
					},
					{"ID":8515389,"User":{"Gender":"女","MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":1347509,"UserName":null,"NickName":"菊深.（簪娘）","HeadUrl":"https://pic.hanfugou.com/android/2019/6/16/785c49b0d5c5470daee4f3147326076e.jpg"},"TrendID":2403021,"ObjectID":30932,"ObjectType":"video","Content":"富婆","ParentID":0,"TopParentID":0,"ReplyUser":{"Gender":null,"MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":0,"UserName":null,"NickName":null,"HeadUrl":null},"TopCount":1,"ChildCount":0,"UserTop":false,"CommentChilds":null,"Images":null,"Datetime":"2019-07-17T07:40:20"},
					{"ID":8475885,"User":{"Gender":"女","MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":1341115,"UserName":null,"NickName":"南下阿木(汉服安利","HeadUrl":"https://pic.hanfugou.com/android/2019/6/14/22b097358cd049558c5788fcb2853292.jpg"},"TrendID":2403021,"ObjectID":30932,"ObjectType":"video","Content":"已收藏！！！！","ParentID":0,"TopParentID":0,"ReplyUser":{"Gender":null,"MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":0,"UserName":null,"NickName":null,"HeadUrl":null},"TopCount":1,"ChildCount":0,"UserTop":false,"CommentChilds":null,"Images":null,"Datetime":"2019-07-15T00:36:21"},
					{"ID":8475855,"User":{"Gender":"女","MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":904683,"UserName":null,"NickName":"流年|楼萱","HeadUrl":"https://pic.hanfugou.com/android/2019/3/11/fbb4719ec84c4ecb91b4e03c7a5fb2bd.jpg"},"TrendID":2403021,"ObjectID":30932,"ObjectType":"video","Content":"好看","ParentID":0,"TopParentID":0,"ReplyUser":{"Gender":null,"MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":0,"UserName":null,"NickName":null,"HeadUrl":null},"TopCount":1,"ChildCount":0,"UserTop":false,"CommentChilds":null,"Images":null,"Datetime":"2019-07-15T00:33:32"},
					{"ID":8474858,"User":{"Gender":"男","MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":318278,"UserName":null,"NickName":"和哥哥作对的面面","HeadUrl":"https://pic.hanfugou.com/android/2018/9/29/068209b9da6545d2a99a5189a17cff25.jpg"},"TrendID":2403021,"ObjectID":30932,"ObjectType":"video","Content":"啊啊啊啊啊啊大人还是一样的好看","ParentID":0,"TopParentID":0,"ReplyUser":{"Gender":null,"MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":0,"UserName":null,"NickName":null,"HeadUrl":null},"TopCount":1,"ChildCount":0,"UserTop":false,"CommentChilds":null,"Images":null,"Datetime":"2019-07-14T23:45:30"},
					{"ID":9171682,"User":{"Gender":"女","MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":1184028,"UserName":null,"NickName":"℃白","HeadUrl":"https://pic.hanfugou.com/android/2019/5/1/d9e342d7ac6a4e94984a9d37edfcd9db.jpg"},"TrendID":2403021,"ObjectID":30932,"ObjectType":"video","Content":"好看","ParentID":0,"TopParentID":0,"ReplyUser":{"Gender":null,"MainBgPic":null,"AuthenticateCode":null,"AuthenticateName":null,"AuthenticateID":0,"CityNames":null,"Describe":null,"AtteCount":0,"ViolationCount":0,"FansCount":0,"UserAtte":false,"GoodAlbumCount":0,"Popularity":0,"UseHanbi":0,"Close":false,"Black":false,"NoteName":null,"ID":0,"UserName":null,"NickName":null,"HeadUrl":null},"TopCount":0,"ChildCount":0,"UserTop":false,"CommentChilds":null,"Images":null,"Datetime":"2019-08-23T12:35:54"}
				],
				videoInfoData:{
					Title: "视觉十二时辰",
					Describe: "展示属于你的巅峰视觉盛宴。",
					FaceSrc: "https://pic.hanfugou.com/android/2019/8/26/a464c0d7478b40e2b71a96fff8a9dec5.jpg",
					Source: null,
					VideoUrl: "http://av.hanfugou.com/video/android/2019/8/26/5a35a207d0f4424a958ed88b1ccc8f6d.mp4",
					WhenLong: 268,
					Width: 960,
					Height: 540,
					TrendShops: [],
					TaskId: "c930058868a044a1b43e678542b3018e",
					Datetime: "2019-09-26T22:54:06",
					ID: 38885,
					User: {
						Gender: "女",
						MainBgPic: null,
						AuthenticateCode: null,
						AuthenticateName: null,
						AuthenticateID: 0,
						CityNames: "江苏,南京",
						Describe: "微博名: 野生同袍-青衣     日常推广安利汉服，汉文化",
						AtteCount: 0,
						ViolationCount: 0,
						FansCount: 0,
						UserAtte: false,
						GoodAlbumCount: 0,
						Popularity: 0,
						UseHanbi: 0,
						Close: false,
						Black: false,
						NoteName: null,
						ID: 19494,
						UserName: "1021507133",
						NickName: "青衣（汉文化安利）",
						HeadUrl: "https://pic.hanfugou.com/android/2019/5/9/24d77b14325649e297630f5cc1ef5398.jpg",
						},
					TopCount: 139,
					CommCount: 9,
					SaveCount: 20,
					UserTop: false,
					UserSave: false,
					Hot: true,
					Huiba: {ID: 7172, Name: "汉服MV", PublicShow: false},
					Huibas: null,
				},
				// 下拉刷新的常用配置
				downOption: { 
					use: true, // 是否启用下拉刷新; 默认true
					auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
				},
				// 上拉加载的常用配置
				upOption: {
					use: true, // 是否启用上拉加载; 默认true
					auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
					page: {
						num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
						size: 10 // 每页数据的数量,默认10
					},
					noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
					empty: {
						tip: '暂无相关数据'
					}
				},
				// 列表数据
				dataList: []
			}
		},
		computed: {
		  // // 视频信息
		  // videoInfoData() {
		  //   return this.$store.getters['video/getVideoInfoData']
		  // },
		  // // 视频播放地址信息
		  // videoUrlData() {
		  //   return this.$store.getters['video/getVideoUrlData']
		  // },
		  // // 动态点赞列表数据
		  // topListData() {
		  //   return this.$store.getters['interact/getTopListData']
		  // },
		  // // 动态评论列表数据
		  // commentListData() {
		  //   return this.$store.getters['interact/getCommentListData']
		  // },
		  // 计算是否得到用户信息
		  calUser() {
		    return this.videoInfoData.User || false
		  },
		  /// 计算显示用户头像
		  calUserAvater() {
		    return !!this.calUser ? this.calUser.HeadUrl + '_200x200.jpg' : '/static/default_avatar.png'
		  },
		  /// 计算显示视频封面
		  calVideoCover() {
		    let cover = '/static/default_image.png'
		    let suffix = '_850x300.jpg/format/webp'
		    if (this.videoInfoData.FaceSrc) cover = this.videoInfoData.FaceSrc + suffix
		    return cover
		  },
		  /// 计算格式友好时间 几天前
		  calDatetime() {
		    let timestamp = new Date(this.videoInfoData.Datetime || '2020-01-01 01:01').getTime();
		    return fnFormatDate(timestamp);
		  },
		  //
		},
		methods: {
			/// 跳转用户信息页
			fnUserInfo(e) {
			  uni.navigateTo({
			    url: `/pages/user-info/user-info?id=${e.ID}`
			  })
			},
			// 评论页
			fnShare() {
			  this.videoInfoData.ObjectID = this.videoID
			  this.videoInfoData.ObjectType = 'video'
			  this.$refs.share.open(this.videoInfoData);
			},
			
			/// 显示评论输入框
			fnCommOpen() {
			  this.$refs.comm.open({
			    type: 'comment',
			    // content: this.$store.getters['getCommContentData'],
			    objectid: this.videoID,
			    objecttype: 'video',
			  });
			},
			
			
			
			/*下拉刷新的回调, 有三种处理方式: */
			downCallback(mescroll){
				// 第1种: 请求具体接口
				uni.request({
					url: 'xxxx',
					success: () => {
						// 成功隐藏下拉加载状态
						mescroll.endSuccess()
					},
					fail: () => {
						// 失败隐藏下拉加载状态
						mescroll.endErr()
					}
				})
				// 第2种: 下拉刷新和上拉加载调同样的接口, 那以上请求可删, 直接用mescroll.resetUpScroll()代替
				mescroll.resetUpScroll(); 
				// 重置列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
				// 第3种: 下拉刷新什么也不处理, 可直接调用或者延时一会调用 mescroll.endSuccess() 结束即可
				mescroll.endSuccess()
				
				// 若兼容其他小程序平台,建议使用ref的写法. 点此查看详情 > 
			},
			/*上拉加载的回调*/
			upCallback(mescroll) {
				// 此时mescroll会携带page的参数:
				let pageNum = mescroll.num; // 页码, 默认从1开始
				let pageSize = mescroll.size; // 页长, 默认每页10条
				uni.request({
					url: 'xxxx?pageNum='+pageNum+'&pageSize='+pageSize,
					success: (data) => {
						// 接口返回的当前页数据列表 (数组)
						let curPageData = data.xxx; 
						// 接口返回的总页数 (比如列表有26个数据,每页10条,共3页; 则totalPage值为3)
						let totalPage = data.xxx; 
						// 接口返回的总数据量(比如列表有26个数据,每页10条,共3页; 则totalSize值为26)
						let totalSize = data.xxx; 
						// 接口返回的是否有下一页 (true/false)
						let hasNext = data.xxx; 
						
						//设置列表数据
						if(mescroll.num == 1) this.dataList = []; //如果是第一页需手动置空列表
						this.dataList = this.dataList.concat(curPageData); //追加新数据
						
						// 成功隐藏下拉加载状态
						//方法一(推荐): 后台接口有返回列表的总页数 totalPage
						// mescroll.endByPage(curPageData.length, totalPage); 
						
						//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
						//mescroll.endBySize(curPageData.length, totalSize); 
						
						//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
						//mescroll.endSuccess(curPageData.length, hasNext); 
						
						//方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.
						//如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据
						//如果传了hasNext,则翻到第二页即可显示无更多数据.
						//mescroll.endSuccess(curPageData.length);
						
						// 如果数据较复杂,可等到渲染完成之后再隐藏下拉加载状态: 如
						// this.$nextTick(()=>{
						// 	mescroll.endSuccess(curPageData.length)
						// })
						
						//curPageData.length必传的原因:
						// 1. 使配置的noMoreSize 和 empty生效
						// 2. 判断是否有下一页的首要依据: 
						//    当传的值小于page.size时(说明不满页了),则一定会认为无更多数据;
						//    比传入的totalPage, totalSize, hasNext具有更高的判断优先级;
						// 3. 当传的值等于page.size时,才会取totalPage, totalSize, hasNext判断是否有下一页
						// 传totalPage, totalSize, hasNext目的是避免方法四描述的小问题
					},
					fail: () => {
						// 失败隐藏下拉加载状态
						mescroll.endErr()
					}
				})
			}
		}
	}
</script>




<style scoped>
  /* 视频控件 */
  .video-player {
    display: block;
    width: 100%;
    height: 400rpx;
  }
</style>