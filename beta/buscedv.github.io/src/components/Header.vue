<template>
	<header class="row">
			<div class="col-xs-12">
				<h1 data-aos="fade-in" data-aos-duration="900" data-aos-delay="50"><mark>Edvard</mark> <br/> Busck-Nielsen <br/> <mark>Portfolio</mark>.</h1>
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

	@media screen and (max-width: 900px) {
		h1 {
			font-size: 10vh;
		}
	}

	@media screen and (max-width: 410px) {
		header {
			padding-left: 0.3vw;
			padding-right: 0.3vw;
		}

		h1 {
			font-size: 7vh;
		}
	}

	@media screen and (max-width: 315px) {
		header {
			padding-left: 0.1vw;
			padding-right: 0.1vw;
		}

		h1 {
			font-size: 4vh;
		}
	}
</style>
