<template>
	<div class="section container-fluid" id="portfolio">
		<div class="row inner">
			<div class="col-xs-12">
				<h2 data-aos="fade-in">Portfolio<mark>.</mark></h2>
				<div data-aos="flip-left" data-aos-delay="50" class="line"></div>

				<div class="row" id="portfolio-items">
					<div class="col-md-3 col-sm-6 col-xs-12 portfolio-item" data-aos="fade-in" data-aos-delay="25">
						<div class="portfolio-item-inner">
							<h3>Enkelt</h3>
							<p>The worlds first programming language that uses a swedish syntax.</p>
							<div class="row">
								<div class=" col-sm-6 col-xs-12">
									<a class="button" href="https://enkelt.io" target="_blank">Learn more</a>
								</div>
								<div class=" col-sm-6 col-xs-12">
									<a class="button" href="https://github.com/Enkelt/Enkelt" target="_blank">Source code</a>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12 portfolio-item" data-aos="fade-in" data-aos-delay="50">
						<div class="portfolio-item-inner">
							<h3>Berlinerfunk.fi</h3>
							<p>Website design for the funk/jazz/rock band Berlinerfunk.</p>
							<div class="row">
								<div class="col-xs-12">
									<a class="button" href="https://berlinerfunk.fi" target="_blank">Visit</a>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12 portfolio-item" data-aos="fade-in" data-aos-delay="75">
						<div class="portfolio-item-inner">
							<h3>Abnex</h3>
							<p>Abnormal Expressions, an alternative to Regular Expressions (regex).</p>
							<div class="row">
								<div class="col-xs-12">
									<a class="button" href="https://github.com/Buscedv/Abnormal-Expressions" target="_blank">Source code</a>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12 portfolio-item" data-aos="fade-in" data-aos-delay="100">
						<div class="portfolio-item-inner">
							<h3>Tasks</h3>
							<p>A tasks/to-do list web-app using Firebase Authentication & Firestore.</p>
							<div class="row">
								<div class=" col-sm-6 col-xs-12">
									<a class="button" href="https://tasks.edvard.dev" target="_blank">Visit</a>
								</div>
								<div class=" col-sm-6 col-xs-12">
									<a class="button" href="https://github.com/Buscedv/Tasks" target="_blank">Source code</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Portfolio',
	}
</script>

<style scoped>
	#portfolio-items {
		margin-left: auto;
		margin-right: auto;
		width: 100%;
		text-align: center;
		margin-top: 3vh;
	}

	.portfolio-item {
		padding: 10px;
		width: 100%;
		display: flex;
		align-items: center;
	}

	.portfolio-item-inner {
		width: 100%;
		height: 100%;
		background-color: var(--dark);
		border-radius: 3px;
		padding: 0.5vw;
		box-shadow: 1px 2px 1px var(--secondary);
	}

	.portfolio-item-inner:hover {
		box-shadow: 1px 2px 1px var(--secondary-hover);
	}

	.portfolio-item h3 {
		padding-top: 5px;
		color: var(--accent);
	}

	.portfolio-item p {
		padding: 0.4vw;
		text-align: center;
		color: var(--light);
		line-height: 1.1;
	}

	.portfolio-item .button {
		padding-left: 2vw;
		padding-right: 2vw;
		padding-top: 1vh;
		padding-bottom: 1vh;
		background-color: var(--accent);
		color: var(--dark);
		border: none;
		border-radius: 2px;
		margin-top: 2vh;
	}

	.portfolio-item .button:hover {
		background-color: var(--accent-hover);
		cursor: pointer;
	}
</style>
