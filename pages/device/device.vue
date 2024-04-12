<template>
	<view class="main">
		<!-- <view class="bbf panel-between">
		  <view v-for="(item,index) in tag" class='bbf-item ' @click='changeTag(index)' bindtap='changeTag'>
		    <view :class="['fo-28', 'lh-90', 'text-center', index === flag ? 'bold fo-t' : 'fo-g']">{{item}}</view>
		    <view class='botn' v-if="index == flag"></view>
		  </view>
		</view> -->
		<view>
			<device_info></device_info>
		</view>
		<button class="addDevice" type="primary" @click="scanCode">添加设备</button>
	</view>
</template>

<script>
	import device_info from '../../components/device_info/device_info.vue';
	import {showToast} from "/utils/ui.js";
	export default {
		components:{
			device_info
		},
		data() {
			return {
				tag:['已连接','已绑定','申请绑定'],
				flag:0,
				isLoading:false,
			}
		},
		methods: {
			changeTag(index) {
				this.flag = index
			},
			scanCode(){
				uni.scanCode({
					onlyFromCamera: true,
					success: function (res) {
							console.log('条码类型：' + res.scanType);
							console.log('条码内容：' + res.result);
							uni.showToast({
								title: '添加成功',
								//将值设置为 success 或者直接不用写icon这个参数
								icon: 'success',
								//显示持续时间为 2秒
								duration: 2000
							}) 
						}
				})
			}
		}
	}
</script>

<style>
	@import "device.css";
</style>
