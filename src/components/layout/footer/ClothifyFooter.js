import BackToTop from "@/components/shared/others/BackToTop";
import Link from "next/link";

const ClothifyFooter = ({ showCta = false }) => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="clothify-footer">
			<div className="clothify-footer__accent" />

			{showCta ? (
				<div className="clothify-footer__cta">
					<div className="container">
						<div className="clothify-footer__cta-inner">
							<div>
								<span className="clothify-footer__eyebrow">Work with us</span>
								<h2 className="clothify-footer__cta-title">
									Ready to build your next digital product?
								</h2>
							</div>
							<Link href="/contact" className="clothify-footer__cta-btn">
								Start a project
								<i className="tji-arrow-right" />
							</Link>
						</div>
					</div>
				</div>
			) : null}

			<div className="clothify-footer__main">
				<div className="container">
					<div className="row clothify-footer__row rg-30">
						<div className="col-lg-3 col-md-6">
							<div className="clothify-footer__brand">
								<Link href="/" className="clothify-footer__logo">
									<img
										src="/images/logos/header-logo.png"
										alt="Clothify logo"
									/>
								</Link>
								<p className="clothify-footer__desc">
									Clothify builds websites, mobile apps, ERP systems, POS
									solutions, and custom software for modern businesses.
								</p>
								<div className="clothify-footer__social">
									<Link
										href="https://www.linkedin.com/"
										target="_blank"
										rel="noreferrer"
										aria-label="LinkedIn"
									>
										<i className="fa-brands fa-linkedin-in" />
									</Link>
									<Link
										href="https://www.instagram.com/"
										target="_blank"
										rel="noreferrer"
										aria-label="Instagram"
									>
										<i className="fa-brands fa-instagram" />
									</Link>
									<Link
										href="https://www.facebook.com/"
										target="_blank"
										rel="noreferrer"
										aria-label="Facebook"
									>
										<i className="fa-brands fa-facebook-f" />
									</Link>
								</div>
							</div>
						</div>

						<div className="col-lg-2 col-md-6">
							<div className="clothify-footer__column">
								<h4 className="clothify-footer__title">Company</h4>
								<ul className="clothify-footer__links">
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>
										<Link href="/about">About</Link>
									</li>
									<li>
										<Link href="/portfolios">Portfolio</Link>
									</li>
									<li>
										<Link href="/contact">Contact</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-2 col-md-6">
							<div className="clothify-footer__column">
								<h4 className="clothify-footer__title">Services</h4>
								<ul className="clothify-footer__links">
									<li>
										<Link href="/services">Website Development</Link>
									</li>
									<li>
										<Link href="/services">Mobile Applications</Link>
									</li>
									<li>
										<Link href="/services">ERP Systems</Link>
									</li>
									<li>
										<Link href="/services">POS Systems</Link>
									</li>
									<li>
										<Link href="/services">Business Automation</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-2 col-md-6">
							<div className="clothify-footer__column">
								<h4 className="clothify-footer__title">Contact</h4>
								<ul className="clothify-footer__contact">
									<li>
										<span className="clothify-footer__contact-icon">
											<i className="fa-solid fa-envelope" />
										</span>
										<Link href="mailto:info@clothify-leb.com">
											info@clothify-leb.com
										</Link>
									</li>
									<li>
										<span className="clothify-footer__contact-icon">
											<i className="fa-regular fa-clock" />
										</span>
										<span>Mon - Fri: 9:00 - 18:00</span>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="clothify-footer__newsletter">
								<div className="clothify-footer__newsletter-card">
									<div className="clothify-footer__newsletter-head">
										<span className="clothify-footer__newsletter-icon">
											<i className="fa-solid fa-envelope" />
										</span>
										<div>
											<h5 className="clothify-footer__newsletter-title">
												Newsletter
											</h5>
											<p className="clothify-footer__newsletter-text">
												Project tips and product updates
											</p>
										</div>
									</div>
									<form className="clothify-footer__newsletter-form">
										<label
											className="visually-hidden"
											htmlFor="footer-newsletter-email"
										>
											Email address
										</label>
										<input
											id="footer-newsletter-email"
											type="email"
											placeholder="Email address"
										/>
										<button type="submit">Subscribe</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="clothify-footer__bottom">
				<div className="container">
					<div className="clothify-footer__bottom-inner">
						<p>© {currentYear} Clothify. All rights reserved.</p>
						<div className="clothify-footer__legal">
							<Link href="/privacy">Privacy Policy</Link>
							<Link href="/contact">Terms & Conditions</Link>
						</div>
					</div>
				</div>
			</div>

			<BackToTop />
		</footer>
	);
};

export default ClothifyFooter;
