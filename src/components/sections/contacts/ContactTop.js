import Link from "next/link";

const ContactTop = () => {
	return (
		<section className="tj-contact-area section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								CONTACT US
							</span>
							<h2 className="sec-title text-anim">Our contact information</h2>
						</div>
					</div>
				</div>
				<div className="row rg-30 justify-content-center contact-info-grid">
					<div className="col-xl-4 col-lg-5 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay="0.1s"
						>
							<div className="contact-icon">
								<i className="tji-email"></i>
							</div>
							<h3 className="contact-title">Email us</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:info@clothify-leb.com">info@clothify-leb.com</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-4 col-lg-5 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay="0.3s"
						>
							<div className="contact-icon">
								<i className="tji-phone"></i>
							</div>
							<h3 className="contact-title">Call us</h3>
							<ul className="contact-list">
								<li>
									<Link href="tel:+96171186106">+96171186106</Link>
								</li>
								<li>
									<Link href="tel:+96176158980">+96176158980</Link>
								</li>
								<li>
									<Link href="tel:+96171201021">+96171201021</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactTop;
