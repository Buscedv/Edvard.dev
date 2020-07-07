import Vue from 'vue'
import VueRouter from 'vue-router'

// Views
const Home = () => import('../views/Home.vue')
const Privacy = () => import('../views/Privacy.vue')
const Cookie = () => import('../views/Cookie.vue')

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
