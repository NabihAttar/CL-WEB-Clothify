import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Contact5 = () => {
	return (
		<section className="tj-contact-area section-bottom-space">
			<div className="container">
				<div className="row rg-50 justify-content-center contact-form-layout">
					{/* <!-- contact form --> */}
					<div className="col-xl-8 col-lg-10">
						<div
							className="contact-form-one style-2 wow fadeInUp"
							data-wow-delay="0.1s"
						>
							<h3 className="title text-anim">
								Feel free to <span>get in touch</span> with our team.
							</h3>
							<form
								action="https://formsubmit.co/info@clothify-leb.com"
								method="POST"
							>
								<input type="hidden" name="_subject" value="New Clothify contact request" />
								<input type="hidden" name="_captcha" value="false" />
								<input type="hidden" name="_template" value="table" />
								<div className="row">
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="text"
												id="first"
												name="name"
												placeholder="Full name*"
												required=""
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="email"
												id="emailOne"
												name="email"
												placeholder="Email address*"
												required=""
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="tel"
												id="tel"
												name="tel"
												placeholder="Phone number*"
												required=""
											/>
										</div>
									</div>
									<div className="col-12">
										<div className="form-input input-textarea">
											<textarea
												id="message"
												name="message"
												placeholder="Type message"
											></textarea>
										</div>
									</div>
									<div className="submit-button">
										<ButtonPrimary text={"Send message"} type="submit" />
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact5;
