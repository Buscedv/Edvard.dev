<template>
	<div class="section container-fluid" id="contact">
		<div class="row inner">
			<div class="col-xs-12">
				<h2 data-aos="fade-in">Contact<mark>.</mark></h2>
				<div data-aos="flip-left" data-aos-delay="50" class="line"></div>

				<div class="holder">
					<div id="social">

						<div class="row" id="contact-inner">
							<div class="col-sm-6 col-xs-12 social-parent">
								<div class="social-holder">
									<div class="row" data-aos="fade-in" data-aos-delay="25">
										<div class="col-xs-5">
											<a aria-label="GitHub profile" href="https://github.com/Buscedv" target="_blank" rel="noreferrer noopener"><i class="fab fa-github"></i></a>
										</div>
										<div class="col-xs-7 label-holder">
											<p><a href="https://github.com/Buscedv" target="_blank" rel="noreferrer noopener">@Buscedv</a></p>
										</div>
									</div>

									<div class="row" data-aos="fade-in" data-aos-delay="50">
										<div class="col-xs-5">
											<a aria-label="LinkedIn page" href="https://linkedin.com/in/edvard-busck-nielsen" target="_blank" rel="noreferrer noopener"><i class="fab fa-linkedin"></i></a>
										</div>
										<div class="col-xs-7 label-holder">
											<p><a href="https://linkedin.com/in/edvard-busck-nielsen" target="_blank" rel="noreferrer noopener">LinkedIn</a></p>
										</div>
									</div>

									<div class="row" data-aos="fade-in" data-aos-delay="75">
										<div class="col-xs-5">
											<a aria-label="Email" href="mailto:me@edvard.dev"><i class="fas fa-envelope"></i></a>
										</div>
										<div class="col-xs-7 label-holder">
											<p>me@edvard.dev</p>
										</div>
									</div>
								</div>
							</div>

							<div class="col-sm-6 col-xs-12">
								<div id="form-area">
									<form method="POST" action="https://formspree.io/xdowaqkv">
										<label for="name"><p>Name</p></label><br/>
										<input type="text" name="name" id="name"><br/>

										<label for="email"><p>Email</p></label><br/>
										<input type="email" name="email" id="email"><br/>

										<label for="message"><p>Message</p></label><br/>
										<textarea name="message" rows="5" id="message"></textarea><br/>

										<input type="submit" value="Send" class="button">
									</form>
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
		name: 'Contact',
	}
</script>

<style scoped>
	h2 {
		width: 100%;
		text-align: center;
	}

	.line {
		margin-left: auto;
		margin-right: auto;
	}

	.holder {
		margin-left: auto;
		margin-right: auto;
		width: fit-content;
		padding-top: 10px;
	}

	#social {
		padding-top: 5vh;
		width: 80vw;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
	}

	.social-parent {
		display: flex;
		align-items: center;
	}

	.social-holder {
		width: 100%;
	}

	.label-holder {
		display: flex;
		align-items: center;
	}

	#contact-inner {
		width: 100%;
	}

	#social p {
		padding: 0;
		width: 100%;
	}

	#social a {
		color: var(--accent);
		font-size: 5vw;
		padding-left: 5px;
		padding-right: 5px;
		text-decoration: none;
	}

	#social a:hover, #social p:hover a {
		color: var(--accent-hover);
	}

	#social p a {
		color: inherit;
		font-size: inherit;
		padding: inherit;
	}

	#form-area {
		width: 100%;
		height: 100%;
	}

	form {
		background-color: var(--dark);
		padding: 20px;
		border-radius: 5px;
		margin-left: auto;
		margin-right: auto;
	}

	form br {
		content: '';
	}

	form label p {
		color: var(--light);

	}

	form textarea, form input {
		padding: 5px;
		font-size: 1.3em;
		width: 80%;
		background-color: var(--light);
		color: var(--dark);
		border: none;
		border-radius: 5px;
		outline: none !important;
	}

	form .button {
		background-color: var(--accent);
		color: var(--light);
		margin-bottom: 20px;

	}

	@media screen and (max-width: 900px) {
		#social a {
			font-size: 12vw;
		}

		form {
			margin-top: 20px;
		}
	}
</style>
