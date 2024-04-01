<template>
	<view class="main">
		<view class="page-card-box">
		    <view class="bg-blue-gradient shadow-blur page-card-view">
		      <view style="font-weight: bold;" class="left-view">
		        <view class="text-bold text-lg">设备序列号：ASD6735373
		        </view>
		        <view class="text-bold text-lg">激活日期：2024年5月1日
		        </view>
		      </view>
		      <view class="right-view">
		        <image src="/static/images/chuanganqi.png"  mode="widthFix" />
		        <view style="font-weight: bold;" class="text-sm text">蓝牙已连接</view>
		      </view>
		    </view>
		  </view>
	</view>
</template>

<script>
	export default {
		name:"device_info",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	@import url("device_info.css");
</style>