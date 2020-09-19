<template>
	<div class="home">
		<div class="header">
			<van-nav-bar :title="titles" left-text="返回" right-text="分享" left-arrow @click-left="onClickLeft" @click-right="showShare = true" />
			<van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
		</div>
		<div class="content">
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
				
				<router-view :lists = "lists"></router-view>
			</van-pull-refresh>
		</div>

		<div class="footer">
			<navBar></navBar>
		</div>

	</div>
</template>

<script>
	import { listApi } from './server/api.js'
	import navBar from "./client/navBar.vue"

	
	import {
		Toast
	} from "vant"
	export default {
		name: "home",
		data() {
			return {
				titles: "商品列表",
				showShare: false,
				isLoading: false,
				lists:[],
				options: [{
						name: '微信',
						icon: 'wechat'
					},
					{
						name: '微博',
						icon: 'weibo'
					},
					{
						name: '复制链接',
						icon: 'link'
					},
					{
						name: '分享海报',
						icon: 'poster'
					},
					{
						name: '二维码',
						icon: 'qrcode'
					},
				],
			}
		},
		methods: {
			onClickLeft() {
				Toast('返回');
			},
			onSelect(option) {
				Toast(option.name);
				this.showShare = false;
			},
			onRefresh() {
				setTimeout(() => {
					Toast('刷新成功');
					
					this.isLoading = false;
					listApi.getList().then(res => {
						this.lists = res;
						console.log(res);
					})

				}, 1000);
			},
		},
		mounted() {
			listApi.getList().then(res => {
				this.lists = res;
				
				
			});
			
			
		},

		components: {
			navBar,
			// list
		},
		watch: {
			//监听路由变化
			"$route.path": function(newValue, oldValue) {
				// console.log(newValue);
				switch (newValue) {

					case "/active":
						this.titles = "活动";
						
						break
					case "/cart":
						this.titles = "购物车";
						
						break
					case "/mine":
						this.titles = "个人中心";
					
						break
					case "/list":
						this.titles = "商品列表";
						
						break


				}
			}
		},
		computed:{
		
			
		}
	}
</script>

<style lang="less" scoped>
	// .van-nav-bar{
	// 	height:.7rem;
	// }
	.van-pull-refresh{
			 height:100%;
			 width:100%;
			  overflow:auto;
	}
	.home {
		width: 100%;
		height: 100%;
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;

		.header {
			height: .7rem;

		}

		.content {
			font-size: 20px;
			width: 100%;
			flex: 1;
			overflow-y: auto;
			padding: .1rem;
		}

		.footer {
			height: .7rem;

		}


	}
</style>
