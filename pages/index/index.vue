<template>
	<view class="main">
		<view class="up">
	    <image mode="aspectFill" src="/static/images/3161706170864_.pic.jpg" />
		</view>
		<view class="down">
			<view class="menu card-project">
				<view @click="url(`/pages/sleep-page/sleep_state_index/sleep_state_index`)" class="item">
					<view class="item-inner">
						<view class="img bg1">
							<image src="../../static/images/menu/activity.png" />
						</view>
						<view class="title">睡眠状态</view>
					</view>
			</view>
				<view @click="url(`/pages/sleep-page/heart_rate_index/heart_rate_index`)" class="item">
					<view class="item-inner">
						<view class="img bg2">
							<image src="../../static/images/menu/rule.png" />
						</view>
						<view class="title">心率</view>
					</view>
				</view>
				<view @click="url(`/pages/sleep-page/snore_detail_index/snore_detail_index`)" class="item">
					<view class="item-inner">
						<view class="img bg3">
							<image src="../../static/images/menu/wei.png" />
						</view>
						<view class="title">鼾声</view>
					</view>
				</view>
				<view @click="url(`/pages/sleep-page/breathe_detail_index/breathe_detail_index`)" class="item">
					<view class="item-inner">
						<view class="img bg4">
							<image src="/static/images/menu/board.png" />
						</view>
						<view class="title">呼吸</view>
					</view>
			    </view>
	        <view @click="url(`/pages/sleep-page/sleep_position_index/sleep_position_index`)" class="item">
					<view class="item-inner">
						<view class="img bg-orange">
							<image src="/static/images/menu/vote.png" />
						</view>
						<view class="title">体位体动</view>
					</view>
				</view>
	       <!-- <view @click="url(`/pages/sleep-page/comprehensive-result_index/comprehensive-result_index`)" class="item">
					<view class="item-inner">
						<view class="img bg-cyan">
							<image src="/static/images/menu/chakan.png" />
						</view>
						<view class="title">综合评估</view>
					</view>
			</view> -->
	      <view @click="url(`/pages/sleep-page/my_report_index/my_report_index`)" class="item">
					<view class="item-inner">
						<view class="img bg-purple">
							<image src="../../static/images/menu/my.png" />
						</view>
						<view class="title">我的报告</view>
					</view>
				</view>
	
	      <!-- <view @click="url(`/pages/device/device`)" class="item">
					<view class="item-inner">
						<view class="img bg-grey">
							<image src="/static/images/menu/repair.png" />
						</view>
						<view class="title">设备管理</view>
					</view>
			</view> -->
		</view>	
	    <view class="cute">
				<view class="item" bindtap="url" data-url="../../about/index/about_index?key=SETUP_CONTENT_PHONE">
					<image class="loading" src="../../static/images/home/cute_3.jpg" mode="aspectFill" />
				</view>
				<view class="item" open-type="contact">
					<image class="loading" src="../../static/images/home/cute_4.jpg" mode="aspectFill" />
				</view>
			</view>
		</view>
		<view class="bt_dash_line"></view>
		<view class="news">
		    <view v-for="(item,key) in contentList" :key="key" class="mainSingle" bindtap="getDetail">
		    <!--文字-->
		    <view class="singleContent">
		      <view class="singleContentTitle">{{item.title}}</view>
		      <view class="singleTipsMain">
		        <view class="singleTips">{{item.tips}}</view>
		        <view style="float:right">{{item.utime}}</view>
		      </view>
		    </view>
		    <!--图片-->
		    <view class="singleImg">
		      <image src="/static/images/3161706170864_.pic.jpg" mode="scaleToFill"  />
		    </view>
		  </view>
		    </view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				contentList:[
				      {
				        title:'每周科普|安宁疗护，守护生命的最后一公里',
				        tips:'昆华医院睡眠健康中心',
				        utime:'2024-04-1 19:23:56',
				        cover:'https://mmbiz.qpic.cn/sz_mmbiz_png/9E2hJp33OI8rdROozjeETVUg8ylyRX4xGjms5mCy8VeGhcCrFBuHxaUzo8WuUg7dW1R4omLmcbWW9bJChiajRpQ/640?wx_fmt=png&from=appmsg&wxfrom=13'
				      },
				      {
				        title:'每周科普|胃镜下的钩虫，你好吗？',
				        tips:'昆华医院睡眠健康中心',
				        utime:'2024-03-14 13:20:14',
				        cover:'https://mmbiz.qpic.cn/sz_mmbiz_png/9E2hJp33OIibEYFuaicOoo3gnQVJ9QlwtibE8G8ibdcVjrR57La7ibEAnDQDMzhMpfjywecAJhHnk1WIia3kDt0smG6w/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1'
				      },
				      {
				        title:'每周科普|冬至的第一锅羊肉这样吃，既暖身又不上火~',
				        tips:'昆华医院睡眠健康中心',
				        utime:'2024-03-07 14:23:47',
				        cover:'https://mmbiz.qpic.cn/sz_mmbiz_png/9E2hJp33OI9d5fE5ibfoF1NicGhcsBMLsTt2mDyZ7CnMsbiaEgEv0mKzlgsb5gmuRDicNNG8I0c8Hss3lrQKyPKapA/640?wx_fmt=png&from=appmsg&wxfrom=13'
				      },
				    ]
			}
		},
		onLoad() {

		},
		methods: {
			url(data){
				uni.navigateTo({
					url:data
				})
			}
		}
	}
</script>
<style>
	@import "index.css";
</style>
