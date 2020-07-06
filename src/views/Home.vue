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
	import Header from "../components/Header";
	import About from "../components/About";
	import Portfolio from "../components/Portfolio";
	import Contact from "../components/Contact";
	export default {
		name: 'Home',
		components: {Contact, Portfolio, About, Header},
	}
</script>
