<template>
	<header class="row">
		<div class="col-sm-6 col-xs-12">
			<h1 data-aos="fade-in" data-aos-duration="900" data-aos-delay="25"><mark>Edvard</mark> <br/> Busck-Nielsen <br/> <mark>Portfolio</mark>.</h1>
		</div>
		<div class="col-sm-6 col-xs-12" id="logo">
			<img data-aos="fade-in" data-aos-delay="200" src="../assets/icon.svg" alt="Edvard Busck-Nielsen" height="200vw">
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
		display: flex;
		align-items: center;
		margin-left: auto;
		margin-right: auto;
		width: 90%;
	}

	h1 {
		font-size: 5.2vw;
		color: var(--light);
	}

	h1 mark {
		color: var(--accent);
	}

	h2 {
		color: var(--secondary-hover);
		font-size: 2vw;
		font-family: 'Roboto', 'Jost', sans-serif;
		padding: 0;
		margin: 0;
	}

	#logo {
		border-left: 2px solid var(--dark);
		height: 80%;
		display: flex;
		align-items: center;
	}

	#logo img {
		margin-left: auto;
		margin-right: auto;
	}

	@media screen and (max-width: 800px) {
		#logo {
			display: none;
		}

		header {
			width: 100%;
			padding: 0;
			margin: 0;
		}

		h1 {
			font-size: 15vw;
		}

		.col-xs-12 {
			padding: 0;
		}

	}
</style>
