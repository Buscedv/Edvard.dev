<template>
	<nav data-aos="slide-down" class="row" id="nav">
		<div class="col-xs-12" id="navbar-inner">
			<div class="row">
				<div class="col-xs-3 navbar-item">
					<div class="row navbar-row">
						<div class="col-xs-12 navbar-item">
							<a class="navbar-link navbar-img-icon"><img src="../assets/logo.png" alt="Edvard Busck-Nielsen"></a>
						</div>
					</div>
				</div>

				<div class="col-xs-6 navbar-item">
					<div class="row navbar-row">
						<div class="col-xs-3 navbar-item">
							<a class="navbar-link" href="#"><p>Home</p></a>
						</div>
						<div class="col-xs-3 navbar-item">
							<a class="navbar-link" href="#about"><p>About</p></a>
						</div>
						<div class="col-xs-3 navbar-item">
							<a class="navbar-link" href="#portfolio"><p>Portfolio</p></a>
						</div>
						<div class="col-xs-3 navbar-item">
							<a class="navbar-link" href="#contact"><p>Contact</p></a>
						</div>
					</div>
				</div>

				<div class="col-xs-3 navbar-item">
					<div class="row navbar-row">
						<div class="col-xs-12 navbar-item">
							<a class="navbar-link navbar-img-icon"><i class="fas fa-bars"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'Navbar',
	}
</script>

<style scoped>
	nav {
		width: 100%;
		height: 6vh;
		position: fixed;
		left: 0;
		top: 0;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		align-items: center;
		text-align: center;
		box-shadow: 1px 1px 3px var(--dark);
		background-color: var(--black);
		z-index: 99;
	}

	.navbar-item {
		display: flex;
		align-items: center;
	}

	.navbar-row {
		width: 100%;
		height: 100%;
	}

	.navbar-link {
		color: var(--secondary-hover);
		text-decoration: none;
		font-size: 1.3em;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.navbar-link p {
		width: 100%;
	}

	.navbar-link:hover {
		color: var(--accent);
		cursor: pointer;
	}

	.navbar-img-icon {
		display: flex;
		align-items: center;
	}

	.navbar-img-icon * {
		margin-left: auto;
		margin-right: auto;
	}

	.navbar-img-icon img {
		height: 4vh;
	}
</style>
