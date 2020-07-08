<template>
	<div id="app" class="container-fluid">
		<a href="#" id="to-top" aria-label="scroll to top"><font-awesome-icon :icon="['fas', 'chevron-up']"/></a>

		<main>
			<Navbar id="navbar"></Navbar>
			<MobileNavbar id="mobile-navbar"></MobileNavbar>

			<router-view></router-view>

			<div class="row">
				<div class="col-xs-12 part">
					<Footer></Footer>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	const Navbar = () => import('./components/Navbar.vue')
	const MobileNavbar = () => import('./components/MobileNavbar.vue')
	const Footer = () => import('./components/Footer.vue')
	export default {
		name: 'App',
		components: {Footer, MobileNavbar, Navbar},
	}
</script>

<style>
	:root {
		--accent: #006E46;
		--accent-hover: #13503F;

		--secondary: #2D4234;
		--secondary-hover: #5A6462;

		--dark: #1a222b;
		--light: #BAB9BA;
		--black: #0C111A;
		--white: #E9F2F2;
	}

	html {
		scroll-behavior: smooth;
	}


	* {
		margin: 0;
		padding: 0;
	}

	html, body {
		padding: 0;
		margin: 0;
	}

	#app {
		background-color: var(--black);
	}

	main {
		padding-left: 1vw;
		padding-right: 1vw;
	}

	h1, h2, h3 {
		font-family: 'Roboto', 'Jost', sans-serif;
	}

	h1 {
		line-height: 1;
		letter-spacing: 2px;
	}

	h2, h3 {
		color: var(--accent);
	}

	h2 {
		margin-top: 8vh;
	}

	h2 mark, h3, mark {
		color: var(--light);
		background: none;
	}

	a, p, li {
		font-family: 'Jost', 'Roboto', sans-serif;
	}

	p, li {
		letter-spacing: 0.1px;
	}

	/* Navbar */
	#mobile-navbar {
		visibility: hidden;
	}

	@media screen and (max-width: 950px) {
		#mobile-navbar {
			visibility: visible;
		}

		#navbar {
			visibility: hidden;
		}
	}

	.section {
		min-height: 100vh;
		display: flex;
		align-items: center;
		margin-left: auto;
		margin-right: auto;
		padding-left: 0 !important;
		padding-right: 0 !important;
	}

	.inner {
		width: 100%;
		margin-left: auto !important;
		margin-right: auto !important;
	}

	.section h2 {
		font-size: 3.5vw;
	}

	.section p {
		padding-top: 3vh;
		font-size: 1.4vw;
		color: var(--light);
	}

	.section ul {
		padding: 0;
		margin: 0;
	}

	.section li {
		list-style-type: none;
		padding-top: 0.2vh;
		font-size: 1.3vw;
		color: var(--secondary-hover);
	}

	.section ul li:before {
		content: '-';
		padding-left: 0;
		padding-right: 8px;
		margin: 0;
	}

	.section h3 {
		font-size: 2.4vw;
		padding-bottom: 5px;
	}

	.section .button {
		font-size: 1vw;
		-webkit-appearance: button;
		-webkit-writing-mode: horizontal-tb !important;
		text-rendering: auto;
		letter-spacing: normal;
		word-spacing: normal;
		text-transform: none;
		text-indent: 0;
		text-shadow: none;
		display: inline-block;
		text-align: center;
		align-items: flex-start;
		cursor: default;
		box-sizing: border-box;
		margin: 0;

		padding-left: 2vw;
		padding-right: 2vw;
		padding-top: 1vh;
		padding-bottom: 1vh;
		background-color: var(--accent);
		color: var(--dark);
		border: none;
		border-radius: 2px;
		margin-top: 2vh;
		text-decoration: none;
	}
	
	.section .button:hover {
		background-color: var(--accent-hover);
		cursor: pointer;
	}

	.line {
		width: 6vw;
		height: 0.3vh;
		background-color: var(--dark);
		margin: 0;
		padding: 0;
	}

	#to-top {
		position: fixed;
		bottom: 10px;
		right: 20px;
		z-index: 98;
		color: var(--secondary-hover);
		font-size: 1.5vw;
	}

	#to-top:hover {
		cursor: pointer;
		color: var(--accent);
	}

	@media screen and (max-width: 900px) {
		main {
			padding-left: 0;
			padding-right: 0;
		}

		.section h2 {
			font-size: 8vw !important;
		}

		.section p {
			font-size: 5vw !important;
		}

		.section li {
			font-size: 4.9vw !important;
		}

		.section h3 {
			font-size: 5.5vw !important;
		}

		.section .button {
			font-size: 4vw !important;
		}

		#to-top {
			display: none;
		}
	}

	@media screen and (max-width: 400px) {
		.section h2 {
			font-size: 9vw !important;
			margin-left: auto !important;
			margin-right: auto !important;
		}

		.section p {
			font-size: 6.3vw !important;
			margin-left: auto !important;
			margin-right: auto !important;
		}

		.section li {
			font-size: 6.2vw !important;
			margin-left: auto !important;
			margin-right: auto !important;
		}

		.section h3 {
			font-size: 6.5vw !important;
		}

		.section .button {
			font-size: 3vw !important;
		}
	}
</style>
