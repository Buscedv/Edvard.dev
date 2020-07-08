<template>
	<div id="main">
		<div id="inner" class="row">
			<div id="text">
				<h1 class="col-xs-12">404</h1>
				<p>Page not found<mark>.</mark></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'FourOhFour',
	}
</script>

<style scoped>
	#main {
		height: 100vh;
		width: 100%;
	}

	#inner {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
	}

	h1 {
		color: var(--accent);
		font-size: 15rem;
	}

	#text {
		margin-left: auto;
		margin-right: auto;
		width: fit-content;
		height: fit-content;
	}

	p {
		color: var(--secondary-hover);
		text-align: right;
		width: 90%;
		font-size: 1.4rem;
	}

	@media screen and (max-width: 530px) {
		h1 {
			font-size: 10rem;
		}
	}

	@media screen and (max-width: 360px) {
		h1 {
			font-size: 5rem;
		}

		p {
			font-size: 1rem;
		}
	}
</style>
