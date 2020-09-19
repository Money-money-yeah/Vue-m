<template>
	<div class="navBar">
		<van-tabbar v-model="active">
			<van-tabbar-item v-for="(item,index) in totalNum" :key="index" :icon="item.icon" :badge="item.amount"  >
				<router-link :to="item.path" >{{ item.alias }}</router-link>
			</van-tabbar-item>
		 <!-- <van-tabbar-item icon="home-o">首页</van-tabbar-item>
		  <van-tabbar-item icon="search">信息</van-tabbar-item>
		  <van-tabbar-item icon="friends-o">活动</van-tabbar-item>
		  <van-tabbar-item icon="setting-o">我的</van-tabbar-item> -->
		</van-tabbar>
		
	</div>
</template>


<script>
	import {mapState,mapGetters} from "vuex"
	export default{
		name:"navBar",
		data(){
			return{
				 active: 0,
				 routes:this.$router.options.routes[0].children,
				
				 
			}
		},
		computed:{
			...mapState(["goodsList"]),
			...mapGetters(["getTotal"]),
			totalNum(){
				//map不改变原数组，有return		
				 let arr = this.routes.map(item => {
					
					if(item.alias == "购物车"){
						this.$set(item,"amount",this.getTotal);
					}	
 					return item;
					
				})
				return arr;
			},
				
			
			
		},
		mounted(){
			this.totalNum;//调用计算属性不用加(),有缓存值，其实就是一个属性
			this.total = this.getTotal
			//console.log(this.getTotal);
		},
		
		
		
		
	}
</script>

<style>
</style>
