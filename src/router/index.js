import Vue from 'vue'
import VueRouter from 'vue-router'

// Views
import Home from '../views/Home.vue'
import Privacy from '../views/Privacy.vue'
import Cookie from '../views/Cookie.vue'
import FourOhFour from '../views/FourOhFour.vue'

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
	{
		path: '*',
		name: 'FourOhFour',
		component: FourOhFour
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
