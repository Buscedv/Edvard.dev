<template>
	<div id="app" class="container-fluid">
		<a href="#" id="to-top" aria-label="scroll to top"><font-awesome-icon :icon="['fas', 'chevron-up']"/></a>

		<main>
			<Navbar id="navbar"></Navbar>
			<MobileNavbar id="mobile-navbar"></MobileNavbar>

			<router-view></router-view>

			<div class="row">
				<div class="col-xs-12 part">
					<Footer @openConsentBanner="openConsentBanner()"></Footer>
				</div>
			</div>
		</main>

		<cookie-law theme="custom" @accept="enableCookies" @decline="disableCookies" ref="cookie">
			<div slot-scope="props">
				<div class="row">
					<div class="col-sm-12 col-xs-12">
						<p class="mobile-text">We use cookies to analyze website traffic. By clicking "Accept" you consent to our <a href="/cookies" target="_blank">Cookie Policy</a>.</p>
						<p class="text">We use cookies to analyze website traffic. By clicking "Accept" you consent to our <a href="/cookies" target="_blank">Cookie Policy</a>. You can change your preferences at any time by clicking "Cookie Preferences" in the footer.</p>
					</div>
					<div class="col-sm-12 col-xs-12">
						<div class="row" id="consent-button-row">
							<div class="col-xs-6">
								<button class="skew button" @click="props.accept">Accept</button>
							</div>
							<div class="col-xs-6">
								<button class="skew button" @click="props.decline">Decline</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</cookie-law>

	</div>
</template>

<script>
	const Navbar = () => import('./components/Navbar.vue')
	const MobileNavbar = () => import('./components/MobileNavbar.vue')
	const Footer = () => import('./components/Footer.vue')

	export default {
		name: 'App',
		components: {Footer, MobileNavbar, Navbar},
		methods: {
			enableCookies() {
				this.$ga.enable();
			},

			disableCookies() {
				this.$ga.disable();
			},
			openConsentBanner() {
				this.$refs.cookie.isOpen = true;
			},
		}
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

	@font-face {
		font-family: 'Open Sans';
		src: url("./assets/fonts/Open_Sans/OpenSans-Bold.ttf") format("truetype");
		font-weight: bold;
	}

	@font-face {
		font-family: 'Open Sans';
		src: url("./assets/fonts/Open_Sans/OpenSans-ExtraBold.ttf");
		font-weight: 800;
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
		padding-left: 0;
		padding-right: 0;
	}

	main {
		padding-left: 5vw !important;
		padding-right: 5vw !important;
		margin-left: 4vw;
		margin-right: 4vw;
		overflow-x: hidden;
	}

	h1, h2 {
		font-family: 'Open Sans', 'Roboto', 'Jost', sans-serif;
		font-weight: 800;
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

	h3 {
		font-family: 'Open Sans', 'Roboto', 'Jost', sans-serif;
		font-weight: bold;
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

	.button {
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

		padding-left: 2.1vw;
		padding-right: 2.1vw;
		padding-top: 1.1vh;
		padding-bottom: 1.1vh;
		background-color: var(--accent);
		color: var(--dark) !important;
		border: none;
		border-radius: 20px !important;
		margin-top: 2vh;
		text-decoration: none;
		font-family: 'Roboto', 'Jost', sans-serif;
	}
	
	.button:hover {
		background-color: var(--accent-hover) !important;
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

	/* Cookie Law Custom Theme */
	.Cookie--custom {
		max-width: 35vw;
		background-color: #1a222b;
		margin: 30px;
		margin-bottom: 5vh;
		border-radius: 5px;
		box-sizing: border-box;
		padding: 35px;
		box-shadow: 0 0 40px 0 rgba(0, 0, 0, .25);
		color: var(--light);
		font-family: 'Roboto', 'Jost', sans-serif;
		line-height: 1.5;
		letter-spacing: 1px;
		left: auto !important;
	}

	.Cookie--custom .mobile-text {
		display: none;
	}

	.Cookie--custom a {
		color: var(--accent-hover);
	}

	.Cookie--custom a:hover {
		color: var(--accent);
	}

	#consent-button-row {
		width: fit-content;
		margin-left: auto;
		margin-right: auto;
	}

	@media screen and (max-width: 950px) {
		.Cookie--custom {
			margin-bottom: 7vh;
			height: fit-content;
			padding-top: 10px;
			padding-bottom: 10px;
		}
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

		.button {
			font-size: 2.5vw !important;
			margin-bottom: 2vh;
		}

		#to-top {
			display: none;
		}
	}

	@media screen and (max-width: 700px) {
		.Cookie--custom {
			max-width: 100vw;
			border-radius: 0;
			margin-left: auto;
			margin-right: auto;
		}

		.Cookie--custom:first-child {
			margin: 0 !important;
		}

		.button {
			font-size: 4vw !important;
			margin-bottom: 2vh;
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

		.button {
			font-size: 5vw !important;
		}

		.Cookie--custom {
			padding-top: 0;
			padding-bottom: 0;
			padding-left: 8px;
			padding-right: 8px;
		}

		.Cookie--custom .button {
			width: 100%;
			padding-left: 1rem;
			padding-right: 1rem;
		}

		.Cookie--custom .mobile-text {
			display: block;
		}

		.Cookie--custom .text {
			display: none;
		}
	}
</style>
