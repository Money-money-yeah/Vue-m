import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  goodsList:[]
  },
  mutations: {
	  AddStore(state,goodsObj){
		  // console.log(goodsObj);
		   //state.goodsList.push(goodsObj);
		   let record = state.goodsList.find(n => n.id == goodsObj.id);
		 // let record = state.goodsList.find(function(n){
			//   return n.id == goodsObj.id
			//   // console.log(n);
		 //  });
		   //console.log(record);
		  if(!record){
			  Vue.set(goodsObj ,"goodsNum", 1 );
			   Vue.set(goodsObj,"checked",false);
			  state.goodsList.push(goodsObj);
		  }else{
			  let obj = state.goodsList.map(function(item){
				  if(item.id == goodsObj.id){
					  item.goodsNum += 1;
				  }
				  return item;
			  })
			  Vue.set(state,"goodsList",obj);
			 
			  
		  }
	  },
	  ClearCart(state){
		  state.goodsList = [];
	  }
  },
  actions: {
	  addStore({commit},goodsObj){
		  commit("AddStore",goodsObj)
	  },
	  clearCart({commit}){
		  commit('ClearCart');
	  }
  },
  
  getters:{
	  //总数量
	  getTotal(state){
		  let n = 0;
		 state.goodsList.forEach(item =>{
			 n += item.goodsNum;
		 })
		 return n ;
	  },
	  //计算总价
	  getMoney(state){
		  let money = 0;
		  state.goodsList.forEach(item =>{
		  		if(item.checked){
					money += Number(item.goodsNum * item.price * 100);
				}
		  })
		  return money ;
	  }
  }
  
})
