<template>
	<nav class="row"lol>
		<div class="col-xs-3 navbar-item">
			<a class="navbar-link" href="#"><i class="fas fa-home"></i></a>
		</div>
		<div class="col-xs-3 navbar-item">
			<a class="navbar-link" href="#about"><i class="fas fa-user"></i></a>
		</div>
		<div class="col-xs-3 navbar-item">
			<a class="navbar-link" href="#portfolio"><i class="fas fa-cube"></i></a>
		</div>
		<div class="col-xs-3 navbar-item">
			<a class="navbar-link" href="#contact"><i class="fas fa-envelope"></i></a>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'MobileNavbar',
	}
</script>

<style scoped>
	nav {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 6vh;
		display: flex;
		align-items: center;
		text-align: center;
		box-shadow: 1px 1px 3px var(--dark);
		margin-left: auto;
		margin-right: auto;
		background-color: var(--black);
		z-index: 99;
	}

	.navbar-link {
		color: var(--secondary-hover);
		text-decoration: none;
		font-size: 1.4em;
		width: 100%;
		height: 100%;
	}

	.navbar-link:hover {
		color: var(--accent);
		cursor: pointer;
	}
</style>
