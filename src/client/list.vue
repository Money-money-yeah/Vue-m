<template>
	<div class="list">
		
		 <van-card v-for="(item,index) in lists" 
		   :key="item.id"
		   :price="item.price" 
		   :desc="item.info" 
		   :title="item.goodname"
		    :thumb="item.goodimg" >
		 >
		   
		   <template #footer>
		    <van-button type="warning" @click="addStore(item)">加入购物车</van-button>
		   </template>
		 </van-card>
		  
	</div>
</template>


<script>
	import {mapActions,mapState} from "vuex"
	export default {
		name: "list",
		props:{
			lists:{
				type:Array,
				default:() => {}
			}
		},
		data() {
			return {
				
			}
		},
		methods:{
			...mapActions(["addStore"])
		},
		computed:{
			...mapState(["goodsList"])
			
		}
		
	}
</script>

<style>
</style>
