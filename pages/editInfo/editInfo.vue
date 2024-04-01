<template>
  <view class="main">
    <view class="form-box shadow-project card-project" style="background-color: aliceblue;">
      <view class="form-group">
        <view class="title must">姓名</view>
        <input type="text" placeholder="填写您的姓名" placeholder-class="phc" maxlength="10" v-model="nickname">
      </view>

      <view class="form-group">
        <view class="title must">身高</view>
        <input type="number" placeholder="填写您的身高(cm)" placeholder-class="phc" maxlength="5" v-model="height">
      </view>
      
      <view class="form-group">
        <view class="title must">体重</view>
        <input type="number" placeholder="填写您的体重(kg)" placeholder-class="phc" maxlength="5" v-model="weight">
      </view>

      <view class="form-group">
        <view class="title must">出生日期</view>
        <picker mode="date" start="1900-01-01" end="2100-01-01" :value="date" @change="bindDateChange">
          <view class="picker">
            {{ date || '请选择出生日期' }}
          </view>
        </picker>
      </view>
    </view>
    <button type="primary" size="mini" @click="updateProfile">保存信息</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      nickname: '',
      height: '',
      weight: '',
      date: '',
    };
  },
  methods: {
    bindDateChange(event) {
      this.date = event.detail.value;
    },
    updateProfile() {
      // Implement your update logic here
    },
  },
};
</script>

<style>
	@import "editInfo.css"
</style>
