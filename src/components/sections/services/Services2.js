"use client";
import ServiceCard2 from "@/components/shared/cards/ServiceCard2";
import {
	FiCode,
	FiSmartphone,
	FiDatabase,
	FiCreditCard,
	FiMonitor,
	FiSettings,
} from "react-icons/fi";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Services2 = () => {
	const services = [
		{
			id: "website-development",
			title: "Website Development",
			desc: "We build modern, responsive, and SEO-friendly websites that help businesses attract customers, improve user experience, and grow online.",
			icon: FiCode,
			bgImg: "/new-images/Services-Page/ServicesPage-WebsiteDevelopment.png",
		},
		{
			id: "mobile-app-development",
			title: "Mobile Applications",
			desc: "We create user-friendly mobile apps for businesses that need smooth performance, clean design, and reliable functionality.",
			icon: FiSmartphone,
			bgImg: "/new-images/Services-Page/ServicesPage-MobileApplications.png",
		},
		{
			id: "erp-systems",
			title: "ERP Systems",
			desc: "We develop ERP systems that help businesses manage operations, inventory, finance, sales, and workflows in one organized platform.",
			icon: FiDatabase,
			bgImg: "/new-images/Services-Page/ServicesPage-ERPSystems.png",
		},
		{
			id: "pos-systems",
			title: "POS Systems",
			desc: "We build smart POS systems for retail, restaurants, and companies that need faster sales, payment tracking, and accurate reports.",
			icon: FiCreditCard,
			bgImg: "/new-images/Services-Page/ServicesPage-POSSystems.png",
		},
		{
			id: "desktop-applications",
			title: "Desktop Applications",
			desc: "We create secure and reliable desktop software for internal operations, data management, and business productivity.",
			icon: FiMonitor,
			bgImg: "/new-images/Services-Page/ServicesPage-DesktopApplications.png",
		},
		{
			id: "business-automation",
			title: "Business Automation",
			desc: "We help businesses reduce manual work, automate daily tasks, improve workflows, and save time through smart digital solutions.",
			icon: FiSettings,
			bgImg: "/new-images/Services-Page/ServicesPage-BusinessAutomation.png",
		},
	];

	return (
		<section className="tj-service-section-two section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2">
							<div className="sec-text">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									// Transformative solution
								</span>
								<h2 className="sec-title text-anim">
									Get our comprehensive service offerings
								</h2>
							</div>
							<div
								className="swiper_navigations service-navigation d-none d-md-inline-flex wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<div className="navigation slider-prev">
									<i className="tji-arrow-left"></i>
								</div>
								<div className="navigation slider-next">
									<i className="tji-arrow-right"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<Swiper
							spaceBetween={24}
							slidesPerView={1}
							loop={true}
							speed={1000}
							pagination={{
								el: ".service-pagination",
								clickable: true,
							}}
							navigation={{ nextEl: ".slider-next", prevEl: ".slider-prev" }}
							autoplay={{
								delay: 5000,
								disableOnInteraction: true,
							}}
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								992: {
									slidesPerView: 3,
								},
							}}
							modules={[Pagination, Navigation, Autoplay]}
							className="swiper-container tj-service-slider"
							wrapperClass="rightSwipeWrap"
						>
							{services?.length
								? services?.map((service, idx) => (
										<SwiperSlide key={idx} className="right-swipe">
											<ServiceCard2 service={service} idx={idx} />
										</SwiperSlide>
								  ))
								: ""}
							<div className="swiper_pagination service-pagination"></div>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services2;
