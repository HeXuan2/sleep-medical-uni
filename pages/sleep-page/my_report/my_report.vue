<template>
	<view class="content">
	  <view class="mt-5 text-grey">
	      <text class='reason_txt text-xsBlue'>{{date}}睡眠健康报告</text>
	  </view>
	  <view class="bt_dash_line"></view>
	  <view class="card"  v-if="isLoadingState">
	  <view class="load text-grey">睡眠状态</view>
	  <sleep_proportion :proportionList="proportionList_state"></sleep_proportion>
	  <sleep_analysis :stateInfo="stateInfo"> </sleep_analysis>
	  <sleep_time :stateTime="stateTime"></sleep_time>
	  <evaluate_box :diagnosis="diagnosis_state"></evaluate_box>
	  </view>
	  <view class="bt_dash_line"></view>
	  <view class="card" v-if="isLoadingHeart">
	    <view class="load text-grey">心率</view>
		<heart_rate_analysis :overnightHeart="overnightHeart"></heart_rate_analysis>
		<heart_rate_period :awake="awake" :deepSleep="deepSleep" :lightSleep="lightSleep" :rem="rem"> </heart_rate_period>
		<heart_rate_time :heartTime="heartTime"></heart_rate_time>
		<evaluate_box :diagnosis="diagnosis_heart"></evaluate_box>
	  </view>
	  <view class="bt_dash_line"></view>
	  <view class="card" v-if="isLoadingBreathe">
	    <view class="load text-grey">呼吸</view>
		<breathe_analysis :breatheStop="breatheStop"></breathe_analysis>
		<breathe_ahi :ahi="ahi"></breathe_ahi>
		<breathe_stop_time :breatheStopTime="breatheStopTime"></breathe_stop_time>
		<evaluate_box :diagnosis="diagnosis_breathe"></evaluate_box>
	  </view>
	  <view class="bt_dash_line"></view>
	  <view class="card" v-if="isLoadingSnore">
	    <view class="load text-grey">鼾声</view>
	    <snore_analysis_chart :snoreInfo="snoreInfo"></snore_analysis_chart>
	    <snore_time_chart :snoreTime="snoreTime"></snore_time_chart>
	    <evaluate_box :diagnosis="diagnosis_snore"></evaluate_box>
	  </view>
	  <view class="bt_dash_line"></view>
	  <view class="card" v-if="isLoadingPosition">
	    <view class="load text-grey">体位体动</view>
		<sleep_position_radar :proportionList="proportionList"></sleep_position_radar>
		<position_time_chart :positionTime="positionTime"></position_time_chart>
		<body_move_chart :moveExtent="moveExtent"></body_move_chart>
		<evaluate_box :diagnosis="diagnosis_position"></evaluate_box>
	  </view>
	  <view class="bt_dash_line"></view>
	  <view class="card" v-if="isLoadingDiagnosis">
	    <view class="load text-grey">医生诊断意见</view>
		<final_diagnosis :diagnosis="diagnosis"></final_diagnosis>
	  </view>
	</view>
</template>

<script>
	import sleep_position_radar from '../../../components/position/sleep_position_radar/sleep_position_radar.vue'
	import position_time_chart from '../../../components/position/position_time_chart/position_time_chart.vue';
	import evaluate_box from '../../../components/evaluate_box/evaluate_box.vue';
	import body_move_chart from '../../../components/position/body_move_chart/body_move_chart.vue';
	
	import final_diagnosis from '../../../components/final_diagnosis/final_diagnosis.vue';
	
	import snore_analysis_chart from '../../../components/snore/snore_analysis_chart/snore_analysis_chart.vue'
	import snore_time_chart from '../../../components/snore/snore_time_chart/snore_time_chart.vue'
	
	import sleep_analysis from '../../../components/sleep_state/sleep_analysis/sleep_analysis.vue'
	import sleep_proportion from '../../../components/sleep_state/sleep_proportion/sleep_proportion.vue'
	import sleep_time from '../../../components/sleep_state/sleep_time/sleep_time.vue'
	
	import heart_rate_analysis from '../../../components/heart/heart_rate_analysis/heart_rate_analysis.vue'
	import heart_rate_period from '../../../components/heart/heart_rate_period/heart_rate_period.vue'
	import heart_rate_time from '../../../components/heart/heart_rate_time/heart_rate_time.vue'
	
	import breathe_ahi from '../../../components/breathe/breathe_ahi/breathe_ahi.vue'
	import breathe_analysis from '../../../components/breathe/breathe_analysis/breathe_analysis.vue'
	import breathe_stop_time from '../../../components/breathe/breathe_stop_time/breathe_stop_time.vue'
	
	import { request } from "/utils/httpUtils.js";
	import {showToast} from "/utils/ui.js";
	export default {
		components:{
			sleep_position_radar,
			position_time_chart,
			evaluate_box,
			body_move_chart,
			final_diagnosis,
			snore_analysis_chart,
			snore_time_chart,
			sleep_analysis,
			sleep_proportion,
			sleep_time,
			heart_rate_analysis,
			heart_rate_period,
			heart_rate_time,
			breathe_ahi,
			breathe_analysis,
			breathe_stop_time
		},
		data() {
			return {
				reportId:'',
				date:'',
				diagnosis_position:{},
				proportionList:[],
				positionTime:{},
				moveExtent:{},
				diagnosis:{},
				diagnosis_snore: {},
				snoreInfo: {},
				snoreTime: {},
				diagnosis_state:{},
				proportionList_state:[],
				stateTime:{},
				stateInfo:{},
				
				diagnosis_heart:{},
				overnightHeart:{},
				awake:{},
				deepSleep:{},
				lightSleep:{},
				rem:{},
				heartTime:{},
				isLoadingHeart:false,
				
				isLoadingState:false,
				isLoadingPosition:false,
				isLoadingDiagnosis:false,
				isLoadingSnore:false,
				
				diagnosis_breathe:{},
				ahi:0,
				breatheStop:{},
				breatheStopTime:{},
				isLoadingBreathe:false
			}
		},
		methods: {
			// 获取体位体动信息
			getPositionData(){
				let obj = {
				  method: "GET",
				  showLoading: true,
				  url:`/position/getData`,
				  data:{
					reportId:this.reportId
				  },
				  message:"正在获取数据"
				}
				request(obj).then(res=>{
					let resData = res.data
					this.proportionList = resData.proportionList
					this.moveExtent = resData.moveExtent
					this.positionTime = resData.positionTime
					this.diagnosis_position.msg = resData.evaluation
					this.diagnosis_position.title = "体位体动"
					this.isLoadingPosition = true
				}).catch(err=>{
				  showToast("请稍后重试！",1500)
				});
			},
			// 获取医生诊断信息
			getDiagnosis(){
			// 获取鼾声信息
				let obj = {
				  method: "GET",
				  showLoading: true,
				  url:`/report/getDiagnosis`,
				  data:{
					reportId:this.reportId
				  },
				  message:"正在获取数据"
				}
				request(obj).then(res=>{
					this.diagnosis = res.data
					this.isLoadingDiagnosis = true
				}).catch(err=>{
				  showToast("请稍后重试！",1500)
				});
			},
			getSnoreData() {
				let obj = {
					method: "GET",
					showLoading: true,
					url: `/snore/getData`,
					data: {
						reportId: this.reportId
					},
					message: "正在获取数据"
				}
				request(obj).then(res => {
					let resData = res.data
					this.snoreInfo = resData.snoreInfo
					this.snoreTime = resData.snoreTime
					this.diagnosis_snore.msg = resData.evaluation
					this.diagnosis_snore.title = "鼾声"
					this.isLoadingSnore = true
				}).catch(err => {
					showToast("请稍后重试！", 1500)
				});
			},
			getStateData(){
				let obj = {
				  method: "GET",
				  showLoading: true,
				  url:`/state/getData`,
				  data:{
					reportId:this.reportId
				  },
				  message:"正在获取数据"
				}
				request(obj).then(res=>{
					let resData = res.data
					this.proportionList_state = resData.proportionList
					this.stateInfo = resData.stateInfo
					this.stateTime = resData.stateTime
					this.diagnosis_state.msg = resData.evaluation
					this.diagnosis_state.title = "睡眠状态"
					this.isLoadingState = true
				}).catch(err=>{
				  showToast("请稍后重试！",1500)
				});
			},
			getHeartData(){
				let obj = {
				  method: "GET",
				  showLoading: true,
				  url:`/heart/getData`,
				  data:{
					reportId:this.reportId
				  },
				  message:"正在获取数据"
				}
				request(obj).then(res=>{
					let resData = res.data
					this.overnightHeart = resData.overnightHeart
					this.awake = resData.awake
					this.deepSleep = resData.deepSleep
					this.lightSleep = resData.lightSleep
					this.rem = resData.rem
					this.heartTime = resData.heartTime
					this.diagnosis_heart.msg = resData.evaluation
					this.diagnosis_heart.title = "心率"
					this.isLoadingHeart = true
				}).catch(err=>{
				  showToast("请稍后重试！",1500)
				});
			},
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
					this.diagnosis_breathe.msg = resData.evaluation
					this.diagnosis_breathe.title = "呼吸"
					this.isLoadingBreathe = true
				}).catch(err=>{
				  showToast("请稍后重试！",1500)
				});
			}
		},
		onLoad(getData) {
			this.reportId = getData.reportId
			this.date = getData.date
			this.getPositionData()
			this.getDiagnosis()
			this.getSnoreData()
			this.getStateData()
			this.getHeartData()
			this.getBreatheData()
		}
	}
</script>

<style>
	@import "my_report.css"
</style>
