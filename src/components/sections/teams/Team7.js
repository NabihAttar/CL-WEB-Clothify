"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TeamCard7 from "@/components/shared/cards/TeamCard7";
import { useState } from "react";

const Team7 = () => {
	const teamMembers = [
		{
			id: 1,
			name: "Web Development",
			desig: "Custom Websites",
			desc: "We create modern, responsive, and SEO-friendly websites that help businesses build a strong online presence and deliver a better user experience.",
			label: "Web Development",
			img: "/images/header/demo/home-7.webp",
		},
		{
			id: 2,
			name: "POS Systems",
			desig: "Smart Sales Solutions",
			desc: "Our POS systems help businesses manage sales, payments, inventory, and reports with speed, accuracy, and efficiency.",
			label: "POS Systems",
			img: "/images/header/demo/home-8.webp",
		},
		{
			id: 3,
			name: "ERP Systems",
			desig: "Business Management",
			desc: "We build ERP solutions that connect operations, finance, inventory, and workflows into one organized system for better control and productivity.",
			label: "ERP Systems",
			img: "/images/header/demo/home-9.webp",
		},
		{
			id: 4,
			name: "Mobile Apps",
			desig: "iOS & Android Apps",
			desc: "We develop user-friendly mobile applications that help businesses engage customers, improve accessibility, and support growth on the go.",
			label: "Mobile Apps",
			img: "/images/header/demo/home-10.webp",
		},
	];
	const [currentIndex, setCurrentIndex] = useState(0);
	const handleCurrentIndex = idx => {
		setCurrentIndex(idx);
	};
	return (
		<section className="h10-team-section section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<div className="sec-heading style-2">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									[ OUR CORE SERVICES ]
								</span>
								<h2 className="sec-title text-anim">
									Solutions Designed to Power Your Business
								</h2>
							</div>
							<div
								className="d-none d-lg-inline-flex wow fadeInUp"
								data-wow-delay="0.5s"
							>
								<ButtonPrimary
									text={"View All Services"}
									url={"/services"}
									className={"more_team"}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="row rg-30">
					<div className="col-12">
						<div className="h10-team-wrapper">
							{teamMembers?.length
								? teamMembers.map((teamMember, idx) => (
										<TeamCard7
											key={idx}
											teamMember={teamMember}
											idx={idx}
											handleCurrentIndex={handleCurrentIndex}
											currentIndex={currentIndex}
										/>
								  ))
								: ""}
						</div>
					</div>
				</div>
				<div className="row d-lg-none">
					<div className="col">
						<div className="teams_btn text-center">
							<ButtonPrimary text={"View All Services"} url={"/services"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team7;
