import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const About11 = () => {
	return (
		<section className="tj-about-info section-space">
			<div className="container">
				<div className="row rg-30 justify-content-between">
					<div className="col-lg-6 col-md-12">
						<div className="pricing-left-content">
							<div className="sec-heading mb-0">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								 ABOUT CLOTHIFY 

								</span>
								<h2 className="sec-title text-anim">
								Building Smart Software Solutions for Modern Businesses

								</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="desc mb-30 wow fadeInUp" data-wow-delay="0.3s">
							<p>
							Clothify is a software agency focused on creating modern digital solutions that help businesses grow, automate operations, and improve customer experience.

							</p>
							<p>
							We develop websites, mobile apps, ERP systems, POS systems, desktop applications, and custom software tailored to each business need.

							</p>
						</div>
						<div className="about-btn wow fadeInUp" data-wow-delay="0.5s">
							<ButtonPrimary text={"Learn more"} url={"/services"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About11;
