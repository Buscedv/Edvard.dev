<template>
	<div class="row">
		<div class="col-xs-12 part">
			<CookiePolicy></CookiePolicy>
		</div>
	</div>
</template>

<script>
	import CookiePolicy from "../components/CookiePolicy";
	export default {
		name: 'Cookie',
		components: {CookiePolicy},
	}
</script>
