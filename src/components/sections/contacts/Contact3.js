import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";

const Contact3 = () => {
	return (
		<section className="contact-team-details" style={{ paddingTop: '100px' }}>
			<div className="container">
				<div className="contact-team-details__inner">
					<div className="row">
						{/* <!--  left --> */}
						<div className="col-12 col-lg-5 ">
							<div className="sec-heading style-2">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									// CONTACT CLOTHIFY
								</span>
								<h2 className="sec-title text-anim">
									Let’s Build Your Next Digital Solution
								</h2>
								<p className="desc wow fadeInUp" data-wow-delay="0.3s">
									Have an idea, project, or business challenge? Contact Clothify
									to discuss your website, mobile app, ERP, POS, or custom
									software needs.
								</p>
								<h6
									className="contact-team-details__message wow fadeInUp"
									data-wow-delay="0.5s"
								>
									<Link href="mailto:info@clothify-leb.com">
										{" "}
										<i className="tji-chat"></i>info@clothify-leb.com
									</Link>
								</h6>
							</div>
						</div>
						{/* <!-- right --> */}
						<div className="col-12 col-lg-7 ">
							<form
								action="https://formsubmit.co/info@clothify-leb.com"
								method="POST"
								className="contact-team-details__form wow fadeInUp"
								data-wow-delay="0.7s"
							>
								<input type="hidden" name="_subject" value="New Clothify contact request" />
								<input type="hidden" name="_captcha" value="false" />
								<input type="hidden" name="_template" value="table" />
								<div className="tj-input__wrapper">
									<input className="tj-input" name="name" placeholder="Full Name*" required />
								</div>
								<div className="tj-input__wrapper">
									<input className="tj-input" type="email" name="email" placeholder="Email Address*" required />
								</div>
								<div className="tj-input__wrapper">
									<input className="tj-input" type="tel" name="phone" placeholder="Phone Number*" required />
								</div>
								<div className="tj-input__wrapper tj-input__wrapper--message">
									<textarea
										className="tj-input"
										name="message"
										placeholder="Type your message"
										rows="6"
									/>
								</div>
								<div>
									<ButtonPrimary text={"Send Message"} type={"submit"} />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact3;
