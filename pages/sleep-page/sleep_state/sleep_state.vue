<template>
	<view class="main">
		<view class="mt-5 text-grey">
		      <text class='reason_txt text-xsBlue'>{{date}}睡眠状态统计</text>
		</view>
		<view class="card">
			<sleep_proportion></sleep_proportion>
			<sleep_analysis> </sleep_analysis>
			<sleep_time></sleep_time>
			<evaluate_box :diagnosis="diagnosis"></evaluate_box>
		</view>
	</view>
</template>

<script>
	import sleep_analysis from '../../../components/sleep_state/sleep_analysis/sleep_analysis.vue'
	import sleep_proportion from '../../../components/sleep_state/sleep_proportion/sleep_proportion.vue'
	import sleep_time from '../../../components/sleep_state/sleep_time/sleep_time.vue'
	import evaluate_box from '../../../components/evaluate_box/evaluate_box.vue'
	export default {
		components:{
			sleep_analysis,
			sleep_proportion,
			sleep_time,
			evaluate_box
		},
		data() {
			return {
				reportId:'',
				date:'',
				diagnosis:{
					title:"睡眠状态",
					msg:"在整夜的睡眠测试中,睡眠效率为78.8%,睡眠综合评分为73.7,睡眠的评估结果为“整夜睡眠质量欠佳。"
				}
			}
		},
		methods: {
			
		},
		onLoad() {
			this.reportId = this.$route.query.reportId
			this.date = this.$route.query.date
		}
	}
</script>

<style>
	@import "sleep_state.css";
</style>
