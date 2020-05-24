<template>
	<header class="row">
			<div class="col-xs-12">
				<h1 data-aos="fade-in" data-aos-duration="900" data-aos-delay="25"><mark>Edvard</mark> <br/> Busck-Nielsen <br/> <mark>Portfolio</mark>.</h1>
			</div>
	</header>
</template>

<script>
	export default {
		name: 'Header',
	}
</script>

<style scoped>
	header {
		height: 100vh;
		background: var(--black);
		padding-left: 1vw;
		padding-right: 1vw;
		display: flex;
		align-items: center;
	}

	h1 {
		font-size: 10vw;
		color: var(--light);
	}

	h1 mark {
		background: none;
		color: var(--accent);
	}


	@media screen and (max-width: 410px) {
		header {
			padding-left: 0;
			padding-right: 0;
		}
	}

	@media screen and (max-width: 300px) {
		h1 {
			font-size: 15vw;
		}
	}

	@media screen and (max-width: 240px) {
		h1 {
			font-size: 10vw;
		}
	}
</style>
