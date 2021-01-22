<template>
	<div id="resume">
		<div id="open-btn" @click="toggle()">
			<p>Read My Resumé</p>
			<font-awesome-icon :icon="['fas', chevron]"/>
		</div>
		<div data-aos="fade-in" data-aos-duration="500" id="resume-content" v-if="resume">
			<div class="row">
				<div class="col-md-6 col-xs-12">
					<h3>Experience</h3>
					<div class="edu-exp-cards">
						<div class="edu-exp-card">
							<div class="edu-exp-card-inner">
								<p class="edu-exp-title">Software Engineer</p>
								<p class="edu-exp-date">December 2020 - Current</p>
								<p class="edu-exp-description">Software development consultant at <mark>PHZ Full Stack Oy</mark>.</p>
							</div>
						</div>

						<div class="edu-exp-card">
							<div class="edu-exp-card-inner">
								<p class="edu-exp-title">Software Engineer Trainee</p>
								<p class="edu-exp-date">Oct 2020 - November 2020</p>
								<p class="edu-exp-description">Internship at <mark>PHZ Full Stack Oy</mark>, as part of my vocational education (vocational qualification in information and communications technology), software development. Developed an email crawler (Python) as well as a Vue.js web interface for interacting with it. Built various full stack applications.</p>
							</div>
						</div>

						<div class="edu-exp-card">
							<div class="edu-exp-card-inner">
								<p class="edu-exp-title">Customer Support Consultant</p>
								<p class="edu-exp-date">May 2020 - Present</p>
								<p class="edu-exp-description">Customer support with technical problems/questions, freelance. <mark>KSF Media Ab</mark>.</p>
							</div>
						</div>

						<div class="edu-exp-card">
							<div class="edu-exp-card-inner">
								<p class="edu-exp-title">Light Entrepreneur</p>
								<p class="edu-exp-date">April 2020 - Present</p>
								<p class="edu-exp-description">Freelancing.</p>
							</div>
						</div>

						<div class="edu-exp-card">
							<div class="edu-exp-card-inner">
								<p class="edu-exp-title">Software Engineer Trainee</p>
								<p class="edu-exp-date">Feb 2020 - Apr 2020</p>
								<p class="edu-exp-description">Internship at <mark>KSF Media Ab</mark> as part of my vocational education (vocational qualification in information and communications technology), software development. Built a embeddable, sortable, and searchable list solution with Google Sheets as the backend. Worked on a web dashboard for managing Firebase. Improved websites and helped out in technical support.</p>
							</div>
						</div>

						<div class="edu-exp-card">
							<div class="edu-exp-card-inner">
								<p class="edu-exp-title">Summer Intern</p>
								<p class="edu-exp-date">Jun 2019 - Jul 2019</p>
								<p class="edu-exp-description">Assisted in product development. Worked on internal tools for the CS (customer support) team at <mark>Supermetrics Oy</mark>. <br/> Vue.js, Bootstrap, PHP & Git</p>
							</div>
						</div>

						<div class="edu-exp-card">
							<div class="edu-exp-card-inner">
								<p class="edu-exp-title">Product Development Assistant</p>
								<p class="edu-exp-date">February 2019 - April 2019</p>
								<p class="edu-exp-description">Gathered API documentation. <mark>Supermetrics Oy</mark></p>
							</div>
						</div>

						<div class="edu-exp-card">
							<div class="edu-exp-card-inner">
								<p class="edu-exp-title">Trainee</p>
								<p class="edu-exp-date">Novemeber 2018 - November 2018</p>
								<p class="edu-exp-description">TET/PRAO (work experience program) at <mark>Supermetrics Oy</mark> <br/> <br/>
									Python programming, API integrations, documentation and Google Dialogflow work. <br/> <br/>
									Graded: 3/3, "Quick to start working, works well independently, managed to do more than planned, shown interest in learning new".</p>
							</div>
						</div>

					</div>
				</div>
				<div class="col-md-6 col-xs-12">
					<h3>Education</h3>

					<div class="edu-exp-card">
						<div class="edu-exp-card-inner">
							<p class="edu-exp-title">Vocational College</p>
							<p class="edu-exp-date">August 2019 - Present</p>
							<p class="edu-exp-description">Vocational qualification in Information and Communications Technology. Studying software development. <mark>Prakticum vocational college</mark>.</p>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Resume',
		props: ['resume'],
		data() {
			return {
				chevron: 'chevron-down',
			}
		},
		methods: {
			toggle() {
				if (this.resume) {
					this.chevron = 'chevron-down';
				} else {
					this.chevron = 'chevron-up';
				}
				this.$emit('toggle')
			}
		}
	}
</script>

<style scoped>
	#resume {
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 10px;
	}

	#open-btn {
		width: 100%;
		text-align: center;
		background-color: var(--accent);
		margin-top: 3vh;
	}

	#open-btn:hover {
		cursor: pointer;
	}

	#open-btn:hover *:not(p) {
		color: var(--black);
	}

	#open-btn p {
		padding: 0;
		font-size: 1.2vw;
	}

	#open-btn *:not(p) {
		color: var(--dark);
		padding-bottom: 5px;
	}

	#resume-content {
		padding-top: 20px;
		padding-left: 30px;
		padding-right: 30px;
		padding-bottom: 20px;
	}

	#resume-content h3 {
		color: var(--accent);
	}

	.edu-exp-card {
		padding: 10px;
		width: 75%;
		display: flex;
		align-items: center;
		border-left: 3px solid var(--accent);
		border-radius: 2px;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.edu-exp-card-inner {
		width: 100%;
		height: 100%;
		background-color: var(--dark);
		border-radius: 3px;
		padding: 0.5vw;
	}

	.edu-exp-card-inner:hover {
		box-shadow: 0 2px 1px var(--secondary);
	}

	.edu-exp-title {
		color: var(--accent);
		font-size: 1.5vw;
		padding-top: 0 !important;
		font-family: 'Open Sans', 'Roboto', 'Jost', sans-serif;
		font-weight: bold;
	}

	.edu-exp-date {
		color: var(--secondary-hover);
		font-size: 1vw;
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	}

	.edu-exp-card p {
		padding: 5px;
	}

	.edu-exp-card p mark {
		color: var(--accent);
		font-family: 'Open Sans', 'Roboto', 'Jost', sans-serif;
		font-weight: 600;
	}

	@media screen and (max-width: 900px) {
		#resume-content {
			padding-left: 0;
			padding-right: 0;
		}

		.edu-exp-card {
			width: 90%;
		}
	}
</style>
