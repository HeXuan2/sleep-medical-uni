<template>
	<view class="content">
	  <view class="mt-5 text-grey">
	      <text class='reason_txt text-xsBlue'>{{date}}睡眠健康报告</text>
	  </view>
	  <view class="bt_dash_line"></view>
	  <view class="card" >
	  <view class="load text-grey">睡眠状态</view>
	  </view>
	  <view class="bt_dash_line"></view>
	  <view class="card">
	    <view class="load text-grey">心率</view>
	  </view>
	  <view class="bt_dash_line"></view>
	  <view class="card">
	    <view class="load text-grey">呼吸</view>
	    
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
			snore_time_chart
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
				isLoadingPosition:false,
				isLoadingDiagnosis:false,
				isLoadingSnore:false,
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
			}
		},
		onLoad() {
			this.reportId = this.$route.query.reportId
			this.date = this.$route.query.date
			this.getPositionData()
			this.getDiagnosis()
			this.getSnoreData()
		}
	}
</script>

<style>
	@import "my_report.css"
</style>
