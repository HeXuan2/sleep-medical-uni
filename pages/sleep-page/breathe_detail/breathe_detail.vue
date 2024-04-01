<template>
	<view class="main">
		<view class="mt-5 text-grey">
		      <text class='reason_txt text-xsBlue'>{{date}}呼吸统计</text>
		</view>
		<view class="card" v-if="isLoading">
			<breathe_analysis :breatheStop="breatheStop"></breathe_analysis>
			<breathe_ahi :ahi="ahi"></breathe_ahi>
			<breathe_stop_time :breatheStopTime="breatheStopTime"></breathe_stop_time>
			<evaluate_box :diagnosis="diagnosis"></evaluate_box>
		</view>
	</view>
</template>

<script>
	import breathe_ahi from '../../../components/breathe/breathe_ahi/breathe_ahi.vue'
	import breathe_analysis from '../../../components/breathe/breathe_analysis/breathe_analysis.vue'
	import breathe_stop_time from '../../../components/breathe/breathe_stop_time/breathe_stop_time.vue'
	import evaluate_box from '../../../components/evaluate_box/evaluate_box.vue'
	import { request } from "/utils/httpUtils.js";
	import {showToast} from "/utils/ui.js";
	export default {
		components:{
			breathe_ahi,
			breathe_analysis,
			breathe_stop_time,
			evaluate_box
		},
		data() {
			return {
				reportId:'',
				date:'',
				diagnosis:{},
				ahi:0,
				breatheStop:{},
				breatheStopTime:{},
				isLoading:false
			}
		},
		methods: {
			getBreatheData(){
				let obj = {
				  method: "GET",
				  showLoading: true,
				  url:`/breathe/getData`,
				  data:{
					reportId:this.reportId
				  },
				  message:"正在获取数据"
				}
				request(obj).then(res=>{
					let resData = res.data
					this.ahi = resData.ahi
					this.breatheStop = resData.breatheStop
					this.breatheStopTime = resData.breatheStopTime
					this.diagnosis.msg = resData.evaluation
					this.diagnosis.title = "呼吸"
					this.isLoading = true
				}).catch(err=>{
				  showToast("请稍后重试！",1500)
				});
			}
		},
		onLoad() {
			this.reportId = this.$route.query.reportId
			this.date = this.$route.query.date
			this.getBreatheData()
		}
	}
</script>

<style>
	@import "breathe_detail.css";
</style>
