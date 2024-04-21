<!-- 蓝色登录页面2 -->
<template>
	<view style="height:100vh;background: #fff;">
		<view class="img-a">
			<view class="t-b">
				您好，
				<br />
				欢迎使用睡眠医疗检测设备
			</view>
		</view>
		<view class="login-view" style="">
			<view class="t-login">
				<form class="cl">
					<view class="t-a">
						<text class="txt">手机号</text>
						<input type="number" name="phone" placeholder="请输入您的手机号" maxlength="11" v-model="phone" />
					</view>
					<view class="t-a">
						<text class="txt">密码</text>
						<input type="password" name="code" maxlength="18" placeholder="请输入您的密码" v-model="pwd" />
					</view>
					<button class="loginBtn" type="primary" @click="login()">登 录</button>
					<view class="reg" @click="reg()">注 册</view>
				</form>
			</view>
		</view>
	</view>
</template>
<script>
	import { request } from "/utils/httpUtils.js";
	import {showToast} from "/utils/ui.js";
	export default {
		data() {
			return {
				// 测试所用
				phone: '13438620732', //手机号码
				pwd: 'wsl123258.' //密码
			};
		},
		onLoad() {},
		methods: {
			//当前登录按钮操作
			login() {
				var that = this;
				if (!that.phone) {
					uni.showToast({ title: '请输入您的手机号', icon: 'none' });
					return;
				}
				if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(that.phone)) {
					uni.showToast({ title: '请输入正确手机号', icon: 'none' });
					return;
				}
				if (!that.pwd) {
					uni.showToast({ title: '请输入您的密码', icon: 'none' });
					return;
				}
				
				let obj = {
				  method: "POST",
				  showLoading: true,
				  url:`/user/userLogin`,
				  data:{
					  username:this.phone,
					  password:this.pwd
				  },
				  message:"正在登录"
				}
				request(obj).then(res=>{
					let token = res.data
					uni.setStorageSync('token',token)
					uni.setStorageSync('isLogin',true)
					uni.switchTab({
						url:"/pages/index/index"
					})
				}).catch(err=>{
					showToast("账号或密码错误！",1500)
				});
			},
			//注册按钮点击
			reg() {
				uni.showToast({ title: '请前往医院录入信息', icon: 'none' });
			},
		}
	};
</script>
<style>
	@import "login.css";
</style>

