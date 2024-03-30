<template>
  <view class="container">
    <view class="title">睡眠占比：</view>
    <view class="charts">
      <l-echart ref="chart" @finished="initChart"></l-echart>
    </view>
    <view class="lable">
        <view class="square" style="background-color: #CC6699;"></view>
        <text class="fontset">熟睡:50%</text>
        <view class="square" style="background-color: #66B2FF;"></view>
        <text class="fontset">浅睡:30%</text>
        <view class="square" style="background-color: #666699;"></view>
        <text class="fontset">REM:20%</text>
    </view>
    <view class="illustrate">
      <text style="display: block;">
        <text style="color: red;">REM：</text>快速眼球运动状态，是一个睡眠的阶段，眼球在此阶段会呈现不由自主的快速移动
      </text>
    </view>
  </view>
</template>

<script>
	import * as echarts from 'echarts';

	export default {
	  data() {
		return {
		  sleepProportion: []
		};
	  },
	  methods: {
		init() {
		  this.$refs.chart.init(echarts, chart => {
				let labelName = ['浅睡','熟睡','REM']
				let labelVal = [0.30,0.50,0.20]
				const colors = ['#CC6699', '#66B2FF', '#666699', '#FFCC99', '#C2C2C2'];
				let sleepSateData = [];
				for (let i = 0; i < labelName.length; i++) {
							let sleepStateObj = {
							  name: labelName[i],
							  value: labelVal[i],
							};
							sleepSateData.push(sleepStateObj);
				}
				var option = {
					series: [{
					  label: {
						normal: {
						  fontSize: 10
						}
					  },
					  type: 'pie',
					  center: ['32%', '45%'],
					  radius: '55%',
					  selectedMode: 'single',
					  data: sleepSateData,
					  color: colors
					}],
				};
		        chart.setOption(option);
			});
		}
	  },
	  mounted() {
		this.init()
	  }
	};
</script>

<style>
	@import "sleep_proportion.css";
</style>
