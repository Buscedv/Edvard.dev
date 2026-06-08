<template>
	<div class="section container-fluid" id="what-i-do">
		<div class="row inner">
			<div class="col-xs-12">
				<h2 data-aos="fade-in">What I Do<mark>.</mark></h2>
				<div data-aos="flip-left" data-aos-delay="50" class="line"></div>

				<div class="row" id="what-i-do-items">
					<div class="col-md-4 col-sm-6 col-xs-12 what-i-do-item" data-aos="fade-in" data-aos-delay="25">
						<div class="what-i-do-item-inner">
							<h3>Frontend Software Engineering</h3>
							<p>I have many years of experience working with various frontend technologies, including: TypeScript, JavaScript, React.js, Vue.js, HTML, CSS</p>
						</div>
					</div>
          <div class="col-md-4 col-sm-6 col-xs-12 what-i-do-item" data-aos="fade-in" data-aos-delay="25">
            <div class="what-i-do-item-inner">
              <h3>Backend Software Engineering</h3>
              <p>I also have experience doing backend web development with e.g. Node.js, PHP, and Python</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 what-i-do-item" data-aos="fade-in" data-aos-delay="25">
            <div class="what-i-do-item-inner">
              <h3>Programming & Coding</h3>
              <p>My professional experience is mostly in web development, but I have built many personal projects outside of the web. E.g programming languages, command line tools, and mobile apps</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 what-i-do-item" data-aos="fade-in" data-aos-delay="25">
            <div class="what-i-do-item-inner">
              <h3>Drumming</h3>
              <p>I frequently play at various private events such as weddings, parties, etc. I also do recording session work. I have also done various theater and musical performances.</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 what-i-do-item" data-aos="fade-in" data-aos-delay="25">
            <div class="what-i-do-item-inner">
              <h3>Live Sound</h3>
              <p>I have both live-sound expertise and equipment. I have everything needed to run a full band performance at smaller events. I also have experience working as a stage hand, and doing live sound engineering.</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 what-i-do-item" data-aos="fade-in" data-aos-delay="25">
            <div class="what-i-do-item-inner">
              <h3>Studio</h3>
              <p>I'm always improving and making the recording process smoother at my personal studio. I have recorded drums, individual instruments, and also full bands. I also have experience with audio engineering.</p>
            </div>
          </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'WhatIDo',
	}
</script>

<style scoped>
	#what-i-do-items {
		margin-left: auto;
		margin-right: auto;
		width: 100%;
		text-align: center;
		margin-top: 3vh;
	}

	.what-i-do-item {
		padding: 20px;
		padding-left: 10px;
		padding-right: 10px;
		width: 100%;
		display: flex;
		align-items: center;
	}

	.what-i-do-item-inner {
		width: 100%;
		height: 100%;
		background-color: var(--dark);
		border-radius: 3px;
		padding: 0.5vw;
	}

	.what-i-do-item-inner:hover {
		box-shadow: 0 2px 1px var(--secondary);
	}

	.what-i-do-item h3 {
		padding-top: 5px;
		color: var(--accent);
	}

	.what-i-do-item p {
		padding: 0.4vw;
		text-align: center;
		color: var(--light);
		line-height: 1.1;
		margin-bottom: 2vh;
	}

	.what-i-do-item .button {
		padding-left: 1vw;
		padding-right: 1vw;
		padding-top: .5vh;
		padding-bottom: .5vh;
		background-color: var(--accent);
		color: var(--dark);
		border: none;
		border-radius: 2px;
		font-size: 1vw;
	}

	.what-i-do-item .button:hover {
		background-color: var(--accent-hover);
		cursor: pointer;
	}

	@media screen and (max-width: 900px) {
		.what-i-do-item .button {
			width: 80%;
		}

	}
</style>
