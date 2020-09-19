<template>
	<div class="cart">
		<div v-if="goodsList.length>0">
			<div class="cartList">
				<van-button type="danger" @click="clearCart">清空购物车</van-button>
			
				<van-card v-for="(item,value) in goodsList " :key="item.id" :num="item.goodsNum" :price="item.price" :desc="item.info"
				 :title="item.goodname" :thumb="item.goodimg">
			
					<template #footer>
						<van-stepper v-model="item.goodsNum" />
						<van-checkbox class="aaa" v-model="item.checked" @click="oneChecked"> </van-checkbox>
					</template>
				</van-card>
			
			</div>
			<!-- 总价 -->
			<van-submit-bar :price="getMoney" button-text="提交订单" @submit="onSubmit">
				<van-checkbox v-model="checked" @click="allChecked">全选</van-checkbox>
			
			
			</van-submit-bar>
		</div>
		<div v-else>
			 <van-empty
			        class="custom-image"
			        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
			        description="购物车空空如也"
			      />
		</div>


		</router-view>
	</div>
</template>


<script>
	import {
		mapState,
		mapActions,
		mapGetters
	} from "vuex"
	export default {
		name: "cart",
		data() {
			return {
				checked: false,
				value: 1,
			}
		},
		methods: {
			onSubmit() {

			},
			...mapActions(["clearCart"]),
			allChecked(){
			
				this.goodsList.forEach(item => {
					
					if(this.checked){
						item.checked = true;
					}else{
						item.checked = false;
					}				
					
				});
			},
			oneChecked(){
				
				let a = this.goodsList.some(item =>  item.checked == false  );
				//console.log(a);//返回true/false				 				
					if(a){
						this.checked = false;
					}else{
						this.checked = true;
					}
		
			}
		},
		computed: {
			...mapState(["goodsList"]),
			...mapGetters(["getMoney"])
			// getPrice(){
			// 	let money = 0;
			// 	this.goodsList.forEach(item => {
			// 		if(item.checked ){
			// 			money += Number(item.goodsNum * item.price * 100);
			// 		}
			// 	});
			// 	return money;
			// }
		},

	}
</script>

<style lang="less" scoped>
	.van-checkbox__label {
		width: 3.2rem;
		display: inline-block;
	}

	.van-card {
		width: 3.2rem;
		left: .3rem;
	}

	.van-stepper {
		margin-left: 60%;

	}

	.aaa {
		position: absolute;
		top: 40%;
		left: -25px;
	}


	.cart {
		width: 100%;
		height: 100%;

		.cartList {
			width: 100%;
			height: 100%;

		}

		.van-submit-bar {
			bottom: .6rem;
		}
	}
</style>
