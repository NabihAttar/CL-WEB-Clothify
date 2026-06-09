"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard5 from "@/components/shared/cards/ServiceCard5";
import {
	FiSearch,
	FiClipboard,
	FiPenTool,
	FiCode,
	FiCheckCircle,
	FiUploadCloud,
	FiLifeBuoy,
} from "react-icons/fi";
import { useState } from "react";

const Services5 = () => {
	const services = [
		{
			title: "Discovery",
			desc: "We start by understanding your business, goals, challenges, and project requirements to define the right solution.",
			link: "/contact",
			icon: FiSearch,
		},
		{
			title: "Planning",
			desc: "We organize the project scope, features, timeline, and technical approach to create a clear roadmap.",
			link: "/contact",
			icon: FiClipboard,
		},
		{
			title: "UI/UX Design",
			desc: "We design user-friendly interfaces and smooth experiences that make your product modern, intuitive, and engaging.",
			link: "/contact",
			icon: FiPenTool,
		},
		{
			title: "Development",
			desc: "We build your website, app, ERP, POS, or custom software using modern technologies and clean code.",
			link: "/contact",
			icon: FiCode,
		},
		{
			title: "Testing",
			desc: "We test functionality, performance, responsiveness, and usability to make sure everything works properly.",
			link: "/contact",
			icon: FiCheckCircle,
		},
		{
			title: "Launch",
			desc: "Once everything is ready, we deploy the project and make it live with a smooth and secure launch process.",
			link: "/contact",
			icon: FiUploadCloud,
		},
		{
			title: "Support",
			desc: "After launch, we provide updates, fixes, and ongoing support to keep your system running at its best.",
			link: "/contact",
			icon: FiLifeBuoy,
		},
	];
	const [currentIndex, setCurrentIndex] = useState(1);
	const handleCurrentIndex = idx => {
		setCurrentIndex(idx);
	};
	return (
		<section className="tj-service-section-four section-space clothify-process-compact">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<div className="sec-heading style-4">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									OUR PROCESS
								</span>
								<h2 className="sec-title text-anim">
									How We Turn Ideas into Digital Solutions
								</h2>
							</div>

							<div className="desc">
								At Clothify, we follow a clear step-by-step process to design,
								develop, test, and launch digital products that are reliable,
								scalable, and built around your business goals.
							</div>
							<ButtonPrimary text={"Start Your Project"} url={"/contact"} />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="h5-service-wrap wow fadeInUp" data-wow-delay="0.3s">
							{services?.length
								? services?.map((service, idx) => (
										<ServiceCard5
											key={idx}
											service={service}
											handleCurrentIndex={handleCurrentIndex}
											currentIndex={currentIndex}
											idx={idx}
										/>
								  ))
								: ""}
						</div>
					</div>
				</div>
				<div className="row d-lg-none">
					<div className="col">
						<div className="services-btn text-center">
							<a href="/services" className="tj-primary-btn">
								<div className="btn_inner">
									<div className="btn_icon">
										<span>
											<i className="tji-arrow-right"></i>
											<i className="tji-arrow-right"></i>
										</span>
									</div>
									<div className="btn_text">
										<span>Start Your Project</span>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services5;
