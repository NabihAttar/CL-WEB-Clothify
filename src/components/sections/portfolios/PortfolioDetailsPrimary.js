"use client";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";

const PortfolioDetailsPrimary = ({ option }) => {
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } = option || {};
	const {
		title,
		titleLarge,
		imgLarge,
		client,
		service,
		category,
		date,
		shareLinks,
		projectIntroduction,
		projectOverview,
		overviewPoints,
		finalResult,
	} = currentItem || {};

	return (
		<section className="tj-post-area section-space">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="tj-post-wrapper">
							<article className="tj-post-single-post">
								<div
									className="tj-post-thumb hover:shine wow fadeInUp"
									data-wow-delay="0.1s"
								>
									<Image
										src={imgLarge ? imgLarge : "/images/project/tj-project-1.webp"}
										alt={title || "project-image"}
										width={870}
										height={498}
										style={{ height: "auto" }}
									/>
								</div>
								<div
									className="tj-post-meta wow fadeInUp"
									data-wow-delay="0.1s"
								>
									<ul>
										<li>
											<Link href="#" className="active">
												{category || "Business"}
											</Link>
										</li>
										<li>
											<Link href="#">{service || "Growth"}</Link>
										</li>
									</ul>
								</div>
								<h3 className="tj-post-title text-anim">
									{titleLarge || title || "Project Overview"}
								</h3>
								<div className="tj-entry-content">
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										{projectIntroduction ||
											"We created a tailored digital solution to help the client improve operations, customer engagement, and long-term business performance."}
									</p>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										{projectOverview ||
											"The project focused on delivering an efficient, scalable, and user-friendly platform aligned with the client’s business goals."}
									</p>
									<div className="tj-check-list">
										<h4 className="text-anim">Project overview</h4>
										<p className="wow fadeInUp" data-wow-delay="0.5s">
											{projectOverview ||
												"The solution was designed to strengthen the client’s digital experience, streamline internal workflows, and support continued growth across their core business process."}
										</p>
										<ul className="ps-0 wow fadeInUp" data-wow-delay="0.6s">
											{(overviewPoints || []).map((point, index) => (
												<li key={index}>
													<i className="tji-double-check"></i> {point}
												</li>
											))}
										</ul>
									</div>
									<h4 className="text-anim">Final result</h4>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										{finalResult ||
											"The final product delivered a stronger digital presence and a more efficient operating model, helping the client improve customer experience and business performance."}
									</p>
								</div>
							</article>

							<div
								className="tj-post__navigation mb-0 wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<div
									className="tj-nav__post previous"
									style={{ visibility: isPrevItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav prev_post">
										<Link href={isPrevItem ? `/portfolios/${prevId}` : "#"}>
											<span>
												<i className="tji-arrow-left"></i>
											</span>
											Previous
										</Link>
									</div>
								</div>
								<Link href="/portfolios" className="tj-nav-post__grid">
									<i className="tji-square-cube"></i>
								</Link>
								<div
									className="tj-nav__post next"
									style={{ visibility: isNextItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav next_post">
										<Link href={isNextItem ? `/portfolios/${nextId}` : "#"}>
											Next
											<span>
												<i className="tji-arrow-right"></i>
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<aside className="tj-blog-sidebar">
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<h5 className="tj-sidebar-widget-title">
									Portfolio Information
								</h5>
								<div className="project_catagory">
									<ul>
										<li>
											<span className="first-child">Client</span>
											<span>{client || "Client"}</span>
										</li>
										<li>
											<span className="first-child">Service</span>
											<span>{service || "Custom Service"}</span>
										</li>
										<li>
											<span className="first-child">Category</span>
											<span>{category || "Business Solutions"}</span>
										</li>
										<li>
											<span className="first-child">Date</span>
											<span>{date || "Not specified"}</span>
										</li>
										<li>
											<span className="first-child">Share</span>
											<div className="share-socials">
												{(shareLinks || []).map((link, idx) => (
													<Link
														href={link.href}
														target="_blank"
														rel="noreferrer"
														title={link.label}
														key={idx}
													>
														<i className={`fa-brands ${link.icon}`}></i>
													</Link>
												))}
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<CtaSidebar />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortfolioDetailsPrimary;
