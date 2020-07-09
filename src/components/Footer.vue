<template>
	<div id="footer">
		<div class="row footer-section" id="icons">
			<div class="col-xs-4">
				<a href="https://github.com/Buscedv" rel="noopener noreferrer" target="_blank"><i class="fab fa-github"></i></a>
			</div>
			<div class="col-xs-4">
				<a href="https://linkedin.com/in/edvard-busck-nielsen" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin"></i></a>
			</div>
			<div class="col-xs-4">
				<a href="mailto:me@edvard.io" target="_blank"><i class="fas fa-envelope"></i></a>
			</div>
		</div>

		<div class="row footer-section" id="links">
			<div class="col-xs-4">
				<a href="/privacy">Privacy Policy</a>
			</div>
			<div class="col-xs-4">
				<a href="/cookies">Cookie Policy</a>
			</div>
			<div class="col-xs-4">
				<a @click="$emit('openConsentBanner')">Cookie Preferences</a>
			</div>
		</div>

		<div class="row footer-section" id="copyright">
			<div class="col-xs-12">
				<p v-html="'&copy; Edvard Busck-Nielsen ' + year"></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Footer',
		data() {
			return {
				year: ''
			}
		},
		mounted() {
			const date = new Date();
			this.year = date.getFullYear();
		},
	}
</script>

<style scoped>
	#footer {
		width: 100%;
		text-align: center;
		padding-top: 10vh;
		margin-left: auto;
		margin-right: auto;
	}

	.footer-section {
		padding-top: 10px;
		padding-bottom: 10px;
		margin-left: auto;
		margin-right: auto;
	}

	#icons {
		width: fit-content;
	}

	#icons a {
		color: var(--accent);
		font-size: 1.5rem;
	}

	#icons a:hover {
		color: var(--accent-hover);
	}

	#links {
		width: 50vw;
	}

	#links a {
		color: var(--secondary-hover);
		text-decoration: none;
	}

	#links a:hover {
		color: var(--accent);
		text-decoration: underline;
		cursor: pointer;
	}

	#copyright p {
		color: var(--light);
	}

	@media screen and (max-width: 710px) {
		#links {
			width: 100%;
		}
		#footer {
			padding-bottom: 8vh;
		}
	}
</style>
