<template>
	<view class="main">
	
	<!--top area begin-->
	<view class="upside upside-shadow" bindtap="url" data-url="{{user?'../edit/my_edit':'../reg/my_reg'}}">
	  <view class="user-bar">
	    <view class="detail">
	      <view class="name text-cut">欢迎您，已登录！</view>
	      <view class="desc">
	        <view class="text-cut">云南省第一人民医院新昆华医院睡眠检测</view>
	      </view>
	    </view>
	    <view class="avatar">
	    <view style="border: none; padding-top: 15rpx;" plain="true">
	      <image mode="aspectFit" src="../../static/images/tabbar/my_cur.png" />
	    </view>
	    </view>
	  </view>
	</view>
	
	<view wx:if="{{isLogin}}" class="down padding-project">
	
	  <view class="comm-list menu card-project shadow-project">
	    <view  class="item arrow" bindtap="url" data-url="../edit/my_edit">
	      <view class="content">
	        <text class="icon-edit my-icon-project text-green"></text>
	        <text class="text-black">修改个人资料</text>
	      </view>
	    </view> 
	
	    <view class="item arrow" bindtap="url">
	      <view class="content">
	        <text class="icon-activity my-icon-project text-project"></text>
	        <text class="text-black">预约挂号</text>
	      </view>
	    </view>
	
	    <view class="item arrow" bindtap="url">
	      <view class="content">
	        <text class="icon-footprint my-icon-project text-green"></text>
	        <text class="text-black">充值记录</text>
	      </view>
	    </view>
	
	    <view class="item arrow" bindtap="url">
	      <view class="content">
	        <text class="icon-squarecheck my-icon-project text-project"></text>
	        <text class="text-black">设备用法</text>
	      </view>
	    </view>
	
	    <view class="item arrow" bindtap="url">
	      <view class="content">
	        <text class="icon-favor my-icon-project text-green"></text>
	        <text class="text-black">待补充</text>
	      </view>
	    </view>
	  </view>
	
	  <view class="comm-list menu card-project shadow-project">
	
	    <view class="item arrow" bindtap="url" data-url="../../about/index/about_index?key=SETUP_CONTENT_ABOUT">
	      <view class="content">
	        <text class="icon-service my-icon-project text-purple"></text>
	        <text class="text-black">关于我们</text>
	      </view>
	    </view>
	    <view class="item arrow" @click="bindSetTap">
	      <view class="content">
	        <text class="icon-settings my-icon-project text-grey"></text>
	        <text class="text-black">设置</text>
	      </view>
	    </view>
	
	  </view>
	  <!--sys end -->
	
	</view>
	<!--down area end-->
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin:true
			}
		},
		methods: {
			bindSetTap(){
				let itemList = ['清除缓存', '退出登录'];
				wx.showActionSheet({
					itemList,
					success: async res => {
						let idx = res.tapIndex;
						if (idx == 0) {
							
						}
						if (idx == 1) {
							
						}
		
					},
					fail: function (res) {
						
					}
				})
			}
		}
	}
</script>

<style>
	@import url("my.css");
</style>
