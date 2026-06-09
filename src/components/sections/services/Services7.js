"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard7 from "@/components/shared/cards/ServiceCard7";
import { FiShoppingBag, FiCoffee, FiBriefcase, FiUsers } from "react-icons/fi";

const Services7 = () => {
	const services = [
		{
			id: "retail-stores",
			title: "Retail & Stores",
			icon: FiShoppingBag,
			desc: "We build POS systems, inventory tools, e-commerce websites, and sales dashboards that help stores manage products, customers, and daily operations.",
		},
		{
			id: "restaurants-food-businesses",
			title: "Restaurants & Food Businesses",
			icon: FiCoffee,
			desc: "We create POS systems, menu platforms, ordering solutions, and management tools that help food businesses work faster and serve customers better.",
		},
		{
			id: "companies-enterprises",
			title: "Companies & Enterprises",
			icon: FiBriefcase,
			desc: "We develop ERP systems, internal dashboards, workflow automation, and custom software to help companies organize teams, data, and operations.",
		},
		{
			id: "ngos-organizations",
			title: "NGOs & Organizations",
			icon: FiUsers,
			desc: "We build websites, data management systems, reporting tools, and digital platforms that help organizations improve communication and project tracking.",
		},
	];
	return (
		<section className="tj-service-section-three h7-service-section section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<div className="sec-heading h7-section-heading style-4">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									OUR INDUSTRIES
								</span>
								<h2 className="sec-title text-anim">
									Digital Solutions for Every Business Sector
								</h2>
							</div>
							<div className="desc">
								We create websites, apps, ERP, POS, and automation systems for
								businesses that need smarter operations, better management, and
								faster growth.
							</div>
							<ButtonPrimary
								text={"Start Your Project"}
								url={"/contact"}
								className={"d-none d-lg-inline-flex"}
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="service-wrapper-two">
							{services?.length
								? services?.map((service, idx) => (
										<ServiceCard7 key={idx} service={service} idx={idx} />
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services7;
