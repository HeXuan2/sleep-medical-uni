<template>
	<view class="main">
		<view class="bbf panel-between">
		  <view v-for="(item,index) in tag" class='bbf-item ' @click='changeTag(index)' bindtap='changeTag'>
		    <view :class="['fo-28', 'lh-90', 'text-center', index === flag ? 'bold fo-t' : 'fo-g']">{{item}}</view>
		    <view class='botn' v-if="index == flag"></view>
		  </view>
		</view>
		<!-- <view class="device">
		  <device_info> </device_info>
		</view> -->
	</view>
</template>

<script>
	import device_info from '../../components/device_info/device_info.vue'
	export default {
		components:{
			device_info
		},
		data() {
			return {
				tag:['已连接','已绑定','申请绑定'],
				flag:0,
			}
		},
		methods: {
			changeTag(index) {
				this.flag = index
			  },
		}
	}
</script>

<style>
	@import "device.css";
</style>
