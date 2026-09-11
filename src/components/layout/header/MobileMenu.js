import Link from "next/link";

const MobileMenu = () => {
	return (
		<>
			<div className="body-overlay"></div>
			<div className="hamburger-area" data-lenis-prevent>
				<div className="hamburger_bg"></div>
				<div className="hamburger_wrapper">
					<div className="hamburger_top d-flex align-items-center justify-content-between">
						<div className="hamburger_logo">
							<Link href="/" className="mobile_logo">
									<img src="/new-images/Clothify-Logo/clothify_logo_header.svg" alt="Clothify logo" className="header-logo-img" />
							</Link>
						</div>
						<div className="hamburger_close">
							<button className="hamburger_close_btn hamburgerCloseBtn">
								<i className="fa-thin fa-times"></i>
							</button>
						</div>
					</div>
					<div className="hamburger_menu">
						<div className="mobile_menu"></div>
					</div>

					<div className="hamburger-infos">
						<h4 className="hamburger-title">Contact info</h4>
						<div className="contact-info">
							<div className="contact_item">
								<span className="subtitle">Email</span>
								<div className="text">
									<Link className="link" href="mailto:info@clothify-leb.com">
										info@clothify-leb.com
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MobileMenu;
