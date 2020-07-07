<template>
	<div class="row">
		<div class="col-xs-12 part">
			<Header></Header>
		</div>
		<div class="col-xs-12 part">
			<About></About>
		</div>
		<div class="col-xs-12 part">
			<Portfolio></Portfolio>
		</div>
		<div class="col-xs-12 part">
			<Contact></Contact>
		</div>
	</div>
</template>

<script>
	import Header from '../components/Header.vue'
	const About = () => import('../components/About.vue')
	const Portfolio = () => import('../components/Portfolio.vue')
	const Contact = () => import('../components/Contact.vue')
	export default {
		name: 'Home',
		components: {Contact, Portfolio, About, Header},
	}
</script>
