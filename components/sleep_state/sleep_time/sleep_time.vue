<template>
	<view class="container">
	  <view class="title">睡眠分期图:</view>
	  <view class="charts">
		  <l-echart ref="chart" @finished="initChart"></l-echart>
	  </view>
	</view> 
</template>

<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			generateFixedYValues(timeArray) {
			  const data = [];
			  const sleepStages = ['觉醒', '浅睡', '熟睡', 'REM'];
			  for (let i = 0; i < timeArray.length; i++) {
			    // 固定在 50 到 70 之间的随机数
			    const randomIndex = Math.floor(Math.random() * 4);
			    data.push([timeArray[i], sleepStages[randomIndex]]);
			  }
			  return data;
			},
			generateTimeArray() {
			
			  const startTime = new Date();
			  startTime.setHours(22, 0, 0, 0);
			
			  const endTime = new Date();
			  endTime.setDate(endTime.getDate() + 1);
			  endTime.setHours(6, 0, 0, 0);
			
			  const timeArray = [];
			
			  let currentTime = startTime;
			  while (currentTime <= endTime) {
			    const formattedTime = echarts.format.formatTime('hh:mm', currentTime);
			    timeArray.push(formattedTime);
			    currentTime = new Date(currentTime.getTime() + 480 * 1000); // 每次增加一分钟
			  }
			  return timeArray;
			},
			init() {
			  this.$refs.chart.init(echarts, chart => {
				  const timeArray = this.generateTimeArray();
				  const randomData = this.generateFixedYValues(timeArray);
				  const option = {
				      grid: {
				        left: '10%',   // 左边距
				        right: '5%',  // 右边距
				        top: '5%',    // 上边距
				        bottom: '12%'  // 下边距
				      },
				      xAxis: {
				        type: 'category',
				        data: timeArray
				      },
				      yAxis: {
				        type: 'category', // 设置 y 轴类型为分类
				        data: ['熟睡', '浅睡', 'REM', '觉醒']
				      },
				      series: [{
				        type: 'line',
				        step: 'start', // 设置阶梯型
				        symbol: 'none',
				        lineStyle: {   // 设置线条的样式
				          color: '#0099CC' // 修改线条颜色为红色
				        },
				        data: randomData // 这里设置你的具体数据，使用二维数组表示 x 和 y 的对应关系
				      }]
				    }
			        chart.setOption(option);
				});
			}
		},
		mounted() {
			this.init()
		}
	}
</script>

<style>
	@import "sleep_time.css"
</style>
