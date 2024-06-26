<template>
	<view class="ec-container">
		<view class="charts">
			<l-echart ref="chart" @finished="initChart"></l-echart>
		</view>
	</view>
</template>

<script>
	import * as echarts from 'echarts';

	export default {
		props: {
			snoreTime: {
				type: Object,
				default: () => ({})
			}
		},
		data() {
			return {
				// 初始化时可能需要的其他数据
			}
		},
		methods: {
			generateChartArrays() {
				// 确保 snoreTime 和 snoreLables 都已定义
				if (!this.snoreTime || !this.snoreTime.snoreLabels) {
					return {
						timeArray: [],
						data: []
					};
				}

				const startTime = new Date(this.snoreTime.startTime);
				const frequency = this.snoreTime.frequency;
				const snoreLabels = this.snoreTime.snoreLabels;
				const timeArray = [];
				const data = snoreLabels;

				for (let i = 0; i < snoreLabels.length; i++) {
					let currentTime = new Date(startTime.getTime() + i * frequency);
					timeArray.push(currentTime.toLocaleTimeString('it-IT').slice(0, 5));
				}

				return {
					timeArray,
					data
				};
			},
			init() {
				this.$refs.chart.init(echarts, chart => {
					const {
						timeArray,
						data
					} = this.generateChartArrays();
					const option = {
						title: {
							text: '鼾声分时图',
							left: 'center',
							top:'10',
							padding: [0, 0, 0, 0],
						},
						tooltip: {
							trigger: 'axis',
							formatter: function(params) {
								params = params[0];
								return `${params.name}: ${params.value ? '打鼾' : '未打鼾'}`;
							}
						},
						grid: {
						        left: '9%',
						        right: '9%',
						        top: '1%', // 减少顶部边距值以使图表上移
						        bottom: '30%', // 可以适当调整底部边距以改变图表整体高度
						        containLabel: true
						      },
						xAxis: {
							type: 'category',
							boundaryGap: true, // 为柱状图提供空间
							data: timeArray,
							axisTick: {
								show: false // 隐藏刻度线
							},
							axisLine: {
								show: true // 隐藏轴线
							},
							axisLabel: {
								show: true,
								interval: (index, value) => {
									if (index === 0 || index === timeArray.length - 1) {
										return true; // 总是显示第一个和最后一个标签
									}
									const timeParts = value.split(':');
									const hour = parseInt(timeParts[0], 10);
									// 每两小时显示一次，即检查小时数是否为偶数
									return hour % 2 === 0 && timeParts[1] === '00';
								},
								formatter: (value, index) => {
									const timeParts = value.split(':');
									// 显示整点时间，特别是第一个标签和最后一个标签
									if (index === 0 || index === timeArray.length - 1 || (timeParts[1] ===
											'00' && parseInt(timeParts[0], 10) % 2 === 0)) {
										return value;
									}
									return '';
								}
							},
						},


						yAxis: {
							type: 'value',
							boundaryGap: [0, '100%'],
							min: 0,
							max: 1,
							axisLabel: {
								show: false
							},
							axisTick: {
								show: false
							},
							splitLine: {
								show: false
							}
						},
						series: [{
						  name: '打鼾记录',
						  type: 'bar',
						  data: data.map((val) => val * 0.5), // 假设您想要的高度是原来的一半
						  barWidth: '80%', // 设置柱子宽度，以填充时间间隔
						  itemStyle: {
						    color: '#FBC295',
						  }
						}],

					};
					chart.setOption(option);
				});
			}
		},
		watch: {
			snoreTime: {
				deep: true,
				handler() {
					this.init();
					console.log(this.snoreTime.snoreLabels)
				}
			}
		},
		mounted() {
			if (this.snoreTime && Object.keys(this.snoreTime).length > 0) {
				this.init();
			}
		}
	}
</script>

<style>
	@import "snore_time_chart.css";
</style>