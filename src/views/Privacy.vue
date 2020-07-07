<template>
	<div class="row">
		<div class="col-xs-12 part">
			<PrivacyPolicy></PrivacyPolicy>
		</div>
	</div>
</template>

<script>
	import PrivacyPolicy from "../components/PrivacyPolicy";
	export default {
		name: 'Privacy',
		components: {PrivacyPolicy},
	}
</script>
