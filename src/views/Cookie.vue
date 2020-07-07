<template>
	<div class="row">
		<div class="col-xs-12 part">
			<CookiePolicy></CookiePolicy>
		</div>
	</div>
</template>

<script>
	const CookiePolicy = () => import('../components/CookiePolicy.vue')
	export default {
		name: 'Cookie',
		components: {CookiePolicy},
	}
</script>
