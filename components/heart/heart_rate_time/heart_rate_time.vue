<template>
	<view class="container">
	  <view class="title">心率时分图:</view>
	  <view class="charts"> 
		<l-echart ref="chart"></l-echart>
	  </view>
	</view> 
</template>

<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {
				positionTimeData: [],
				timeStrings: []
			}
		},
		props:{
			heartTime: {
			  type: Object,
			  default: () => ({})
			}
		},
		methods: {
			dataProcess(){
				var times = []
				for(var i=0;i<this.heartTime.heartValues.length;i++){
					var time = this.heartTime.frequency * i + this.heartTime.startTime
					times.push(time)
				}
				this.timeStrings = times.map(timestamp => {
				  const date = new Date(timestamp);
				  const hours = date.getHours().toString().padStart(2, '0'); // 转换为两位数的小时
				  const minutes = date.getMinutes().toString().padStart(2, '0'); // 转换为两位数的分钟
				  return `${hours}:${minutes}`; // 将小时和分钟拼接为字符串
				});
				// console.log(this.timeStrings)
				this.positionTimeData = this.heartTime.heartValues.map((value, index) => {
				  return [this.timeStrings[index], value];
				})
				// console.log(this.positionTimeData)
			},
			init(){
				this.dataProcess()
				const option = {
				    grid: {
				      left: '10%',   // 左边距
				      right: '5%',  // 右边距
				      top: '10%',    // 上边距
				      bottom: '12%'  // 下边距
				    },
				    xAxis: {
				      type: 'category',
				      data:this.timeStrings,
				    },
				    yAxis: {
				      type: 'value',
				      scale: true
				    },
				    series: [{
				      type: 'line',
				      data: this.positionTimeData,
				      smooth: true,
				      symbol: 'none',
				      sampling: 'lttb',
				      itemStyle: {
				        color: 'rgb(255, 70, 131)'
				      }
				    }]
				};
				this.$refs.chart.init(echarts, chart => {
					chart.setOption(option);
				});
			}
		},
		mounted() {
		  this.init();
		}
	}
</script>

<style>
@import "heart_rate_time.css";
</style>
