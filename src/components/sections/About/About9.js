import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const About9 = () => {
	return (
		<section className="tj-about-section-five h9-about" style={{ paddingBottom: '100px' }}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="about-wrapper-four h9-about-wrapper">
							<div
								className="about-images-group-three hover:shine wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<img src="/images/about/h9-about-banner.webp" alt="Images" />
							</div>
							<div className="about-content-five h9-about-content">
								<div className="sec-heading h9-section-heading style-4">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.3s"
									>
										 ABOUT CLOTHIFY 
									</span>
									<h2 className="sec-title text-anim">
										Building Digital Solutions That Help Businesses Grow
									</h2>
								</div>
								<div className="desc wow fadeInUp" data-wow-delay="0.4s">
									<p>
										Clothify helps businesses transform ideas into modern digital products. From websites and mobile apps to ERP, POS, and desktop systems, we build scalable software that improves operations and supports long-term growth.
									</p>
								</div>

								<div
									className="h9-about-list wow fadeInUp"
									data-wow-delay="0.5s"
								>
									<div className="h9-about-list-item">
										<h5 className="h9-about-list-title">
										Efficient Operations
										</h5>
										<p className="h9-about-list-desc">
										We create smart systems that reduce manual work, organize data, and improve daily business workflows.
										</p>
									</div>
									<div className="h9-about-list-item">
										<h5 className="h9-about-list-title">Strategic Development</h5>
										<p className="h9-about-list-desc">
										Every solution is planned around your goals, business needs, and future scalability.
										</p>
									</div>
								</div>
								<div className="btn-area wow fadeInUp" data-wow-delay="0.6s">
									<ButtonPrimary text="Know More About Us" href="/about" />
								</div>
							</div>
						</div>
					</div>
					{/* <div className="col-12">
						<div className="h9-about-bottom">
							<div className="h9-about-bottom-left ">
								<div className="h9-counter-wrapper">
									<div className="h9-counter-item">
										<FunfactSingle currentValue={93} symbol={"%"} />

										<span className="sub-title">
											Completed project growth and innovation
										</span>
									</div>
									<div className="h9-counter-item">
										<FunfactSingle currentValue={100} isSup={"+"} />
										<span className="sub-title">
											Awards archived, shaping future success
										</span>
									</div>
									<div className="h9-counter-item">
										<FunfactSingle currentValue={24/7} symbol={"M"} />
										<span className="sub-title">
											Awards archived, shaping future success
										</span>
									</div>
								</div>
							</div>
							<div
								className="about-statistics h9-about-statistics wow fadeInUp"
								data-wow-delay=".9s"
							>
								<img src="/images/about/h9-funfact-banner.webp" alt="Images" />
								<div className="about-circle h7-process-circle h9-about-circle">
									<div className="circle-wrap">
										<img
											className="rotate-image"
											src="/images/shapes/h9-about-circle.png"
											alt="image"
										/>
										<span className="logo-icon">
											<img src="/images/icons/logo-icon.svg" alt="" />
										</span>
									</div>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default About9;
