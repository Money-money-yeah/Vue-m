import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
	redirect:'list',
   component: () => import('../home.vue'),
	children:[
		{
			path:"list",
			name:"list",
			alias:"商品列表",
			icon:"home-o",		
			component:() => import('../client/list')
		},
		{
			path:"active",
			name:"active",
			alias:"活动",
			icon:"fire-o",		
			component:() => import('../client/active')
		},
		{
			path:"cart",
			name:"cart",
			alias:"购物车",
			icon:"cart-o",		
			component:() => import('../client/cart')
		},
		{
			path:"mine",
			name:"mine",
			alias:"个人中心",
			icon:"setting-o",		
			component:() => import('../client/mine')
		},
	]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
