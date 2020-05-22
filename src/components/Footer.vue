<template>
	<footer><p v-html="'&copy; Edvard Busck-Nielsen ' + year"></p></footer>
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
		}
	}
</script>

<style scoped>
	footer {
		width: 100%;
		display: flex;
		align-items: center;
		text-align: center;
		padding: 0;
		margin-right: 0;
		margin-top: 20vh;
		padding-bottom: 1vh;
	}

	p {
		color: var(--secondary-hover);
		width: 100%;
	}

	@media screen and (max-width: 710px) {
		footer p {
			padding-bottom: 10vh;
		}
	}
</style>
