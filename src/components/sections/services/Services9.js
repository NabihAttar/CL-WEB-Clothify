"use client";
import ServiceCard9 from "@/components/shared/cards/ServiceCard9";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Services9 = () => {
	const services = [
		{
			title: "Website Development",
			id: "website-development",
			iconName: "tji-globe",
			desc: "Modern, responsive, and SEO-friendly websites built to attract visitors, improve user experience, and grow your online presence.",
			checks: [
				"Responsive design",
				"SEO-friendly structure",
				"Fast performance",
			],
		},
		{
			title: "Mobile Applications",
			id: "mobile-app-development",
			iconName: "tji-coments",
			desc: "Custom mobile applications designed for smooth performance, easy navigation, and real business value.",
			checks: [
				"Android & iOS solutions",
				"User-friendly interfaces",
				"Scalable app architecture",
			],
		},
		{
			title: "ERP Systems",
			id: "erp-systems",
			iconName: "tji-organize",
			desc: "Powerful ERP systems that help businesses manage operations, inventory, finance, sales, and daily workflows in one place.",
			checks: [
				"Business automation",
				"Inventory management",
				"Custom modules",
			],
		},
		{
			title: "POS Systems",
			id: "pos-systems",
			iconName: "tji-results",
			desc: "Smart POS systems for retail, restaurants, and businesses that need faster sales, accurate reports, and better control.",
			checks: ["Sales management", "Payment tracking", "Daily reports"],
		},
		{
			title: "Desktop Applications",
			id: "desktop-applications",
			iconName: "tji-square-cube",
			desc: "Secure and reliable desktop applications built to support internal operations, data management, and business productivity.",
			checks: [
				"Custom software tools",
				"Offline/online options",
				"Secure data handling",
			],
		},
		{
			title: "Business Automation",
			id: "business-automation",
			iconName: "tji-optimization",
			desc: "We help companies reduce manual work, improve processes, and save time through smart digital automation solutions.",
			checks: [
				"Workflow optimization",
				"Process automation",
				"Better efficiency",
			],
		},
	];

	return (
		<section className="h9-services-section section-space">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="sec-heading style-2 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								[ DIGITAL SOLUTIONS ]
							</span>
							<h2 className="sec-title text-anim">
								Explore Our Comprehensive Services
							</h2>
						</div>
						<div className="wow fadeInUp" data-wow-delay="0.3s">
							<Swiper
								spaceBetween={30}
								slidesPerView={1}
								loop={true}
								speed={1500}
								pagination={{
									el: ".service-pagination",
									clickable: true,
								}}
								autoplay={{
									delay: 5000,
								}}
								breakpoints={{
									768: {
										slidesPerView: 2,
									},
									992: {
										slidesPerView: 3,
									},
								}}
								modules={[Pagination, Autoplay]}
								className="h9-services-slider swiper-containe"
							>
								{services?.length
									? services?.map((service, idx) => (
											<SwiperSlide key={idx} className="h6-services-item">
												<ServiceCard9 service={service} idx={idx} />
											</SwiperSlide>
									  ))
									: ""}
								<div className="swiper_pagination service-pagination"></div>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services9;
