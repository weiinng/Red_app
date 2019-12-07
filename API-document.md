# 接口文档

## microFilm.vue

### 顶部导航栏

```json
tabBars:[
					{id:"1",name:"精选"},
					{id:"2",name:"关注"},
					{id:"3",name:"主持人"},
					{id:"4",name:"体育"},
					{id:"5",name:"娱乐"},
					{id:"6",name:"游戏"}				],
```

### 页面展示的数据

```json
newList:[
            {	
                loadtext:"上拉加载更多",        //固定的
                list:[           //list数量要和上面的分类对应
                        { 
                            "videoId":"",
                            "authorImg":"../../static/logo.png",
                            "author":"潘光源",
                            "isAttention":false,         //是否关注
                            "videoImg":"../../static/imags/5001669.jpg",
                            "videoSrc":"https://video.pearvideo.com/mp4/third/20191120/cont-1624765-12719568-193805-hd.mp4",
                            "commetNum":3000
                        },    //每一个字典代表一个电影
                    ]
            }
        ]
```

### 默认展示那个分类

```josn
tabIndex:0,
```

### 视口的高度

```
swiperheight:500
```



## personalCenter.vue

### 用户信息

```josn
userInfo:{
					"userName":"weiinng.cn",
					"userImg":"../../static/imags/5001669.jpg",    //用户头像
					"userId":"",
					"userHistoryList":[            //用户观看过的视频列表
						{
							"imgId":"",
							"imgSrc":"../../static/imags/6675719.jpg",
							"imgTime":""
						},
						{
							"imgId":"",
							"imgSrc":"../../static/imags/6675719.jpg",
							"imgTime":""
						},
						{
							"imgId":"",
							"imgSrc":"../../static/imags/6675719.jpg",
							"imgTime":""
						},
						{
							"imgId":"",
							"imgSrc":"../../static/imags/6675719.jpg",
							"imgTime":""
						},
					]
					
				}
```

