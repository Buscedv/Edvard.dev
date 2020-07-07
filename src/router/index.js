import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Privacy from "../views/Privacy";
import Cookie from "../views/Cookie";

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/privacy',
		name: 'Privacy',
		component: Privacy
	},
	{
		path: '/cookies',
		name: 'Cookies',
		component: Cookie
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router