<template>
	<div class="row">
		<div class="col-xs-12 part">
			<Header></Header>
		</div>
		<div class="col-xs-12 part">
			<About></About>
		</div>
		<div class="col-xs-12 part">
			<WhatIDo></WhatIDo>
		</div>
		<div class="col-xs-12 part">
			<Contact></Contact>
		</div>
	</div>
</template>

<script>
  const Header = () => import('../components/Header.vue')
	const About = () => import('../components/About.vue')
	const WhatIDo = () => import('../components/./WhatIDo')
	const Contact = () => import('../components/Contact.vue')
	export default {
		name: 'Home',
		components: {WhatIDo, Contact, About, Header},
	}
</script>
