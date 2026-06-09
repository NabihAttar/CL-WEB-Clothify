"use client";
import modifyNumber from "@/libs/modifyNumber";
import { useEffect, useRef } from "react";

const Process5 = () => {
	const containerRef = useRef(null);
	const lineRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		const lineActive = lineRef.current;
		const items = container?.querySelectorAll(".process-item");

		if (!container || !lineActive || !items?.length) return;

		const totalPortion = 100 / items.length;

		const handleEnter = (idx, item) => {
			items.forEach(el => el.classList.remove("active"));
			lineActive.style.left = `${totalPortion * idx}%`;
			item.classList.add("active");
		};

		items.forEach((item, idx) => {
			item.addEventListener("mouseenter", () => handleEnter(idx, item));
		});

		// Cleanup listeners on unmount
		return () => {
			items.forEach((item, idx) => {
				item.removeEventListener("mouseenter", () => handleEnter(idx, item));
			});
		};
	}, []);
	const process = [
		{
			id: 1,
			title: "Discovery & Analysis",
			img: "/images/process/h9-process-1.webp",
			desc: "We understand your business goals, challenges, workflows, and project requirements before planning the right solution.",
		},
		{
			id: 2,
			title: "Planning & Design",
			img: "/images/process/h9-process-2.webp",
			desc: "We create the project structure, user experience, features, and development roadmap based on your needs.",
		},
		{
			id: 3,
			title: "Development & Support",
			img: "/images/process/h9-process-3.webp",
			desc: "We build, test, launch, and support your website, app, ERP, POS, or custom software system.",
		},
	];
	return (
		<section className="h9-process section-space">
			<div className="container">
				<div className="row ">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								[ OUR WORKING PROCESS ]
							</span>
							<h2 className="sec-title text-anim">
								Three Steps to Build Your Digital Solution
							</h2>
						</div>
					</div>

					<div className="col-12">
						<div className="h9-process-inner">
							{process?.length
								? process?.map(({ id, title, desc, img, btnText }, idx) => (
										<div
											key={idx}
											className="h9-process-item wow fadeInLeft"
											data-wow-delay={`.${idx + 1 + 2}s`}
										>
											<div className="process-img">
												<img
													src={img ? img : "/images/process/h9-process-1.webp"}
													alt="Images"
												/>
											</div>
											<div className="process-content">
												<span className="step">{modifyNumber(idx + 1)}.</span>
												<h4 className="title">{title}</h4>
												<div className="desc">
													<p>{desc}</p>
												</div>
											</div>
											{idx >= process.length - 1 ? (
												""
											) : (
												<span className="step-text">STEPS.</span>
											)}
										</div>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process5;
