<template>
	<div class="row">
		<div class="col-xs-12 part">
			<PrivacyPolicy></PrivacyPolicy>
		</div>
	</div>
</template>

<script>
	const PrivacyPolicy = () => import('../components/PrivacyPolicy.vue')
	export default {
		name: 'Privacy',
		components: {PrivacyPolicy},
	}
</script>
