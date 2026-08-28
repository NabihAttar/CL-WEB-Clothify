"use client";

import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";
import PortfolioDetailsGallery from "./PortfolioDetailsGallery";

const PortfolioDetailsPrimary = ({ option }) => {
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } = option || {};
	const {
		title,
		titleLarge,
		imgLarge,
		showcase,
		client,
		service,
		category,
		categoryLabel,
		date,
		shareLinks,
		tags,
		projectIntroduction,
		projectOverview,
		overviewPoints,
		finalResult,
		statusItem,
		descItems,
		shortDesc,
	} = currentItem || {};

	const infoRows = [
		{ label: "Client", value: client },
		{ label: "Service", value: service },
		{ label: "Category", value: categoryLabel || category },
		{ label: "Date", value: date },
	].filter((row) => row.value);

	const extraStatusItems = (statusItem || []).filter(
		(item) =>
			!infoRows.some(
				(row) => row.label.toLowerCase() === item.title.toLowerCase()
			)
	);

	const desktopImage = showcase?.desktop || imgLarge;
	const mobileImage = showcase?.mobile;
	const galleryImages = showcase?.gallery || [];

	const getShareIconClass = (icon) => {
		if (!icon) return "fa-solid fa-link";
		if (icon.includes(" ")) return icon;

		const solidIcons = new Set([
			"fa-globe",
			"fa-link",
			"fa-arrow-up-right-from-square",
			"fa-earth-americas",
		]);

		return solidIcons.has(icon) ? `fa-solid ${icon}` : `fa-brands ${icon}`;
	};

	return (
		<section className="portfolio-details portfolio-details--no-banner section-space">
			<div className="container">
				<nav
					className="portfolio-details__breadcrumb wow fadeInUp"
					data-wow-delay="0.05s"
					aria-label="Breadcrumb"
				>
					<Link href="/">Home</Link>
					<span>/</span>
					<Link href="/portfolios">Portfolio</Link>
					<span>/</span>
					<span>{title || "Project"}</span>
				</nav>

				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="portfolio-details__main">
							<div
								className="portfolio-details__hero wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<div className="portfolio-details__hero-accent" />
								<div className="portfolio-details__hero-frame">
									<PortfolioDetailsGallery
										title={title}
										desktopImage={desktopImage}
										mobileImage={mobileImage}
										galleryImages={galleryImages}
									/>
								</div>
							</div>

							<div
								className="portfolio-details__meta wow fadeInUp"
								data-wow-delay="0.15s"
							>
								{tags?.length
									? tags.map((tag, idx) => (
											<span
												key={idx}
												className="portfolio-details__tag"
											>
												{tag}
											</span>
									  ))
									: (
										<span className="portfolio-details__tag">
											{categoryLabel || category || "Project"}
										</span>
									)}
							</div>

							<h1 className="portfolio-details__title text-anim">
								{titleLarge || title || "Project Overview"}
							</h1>

							{shortDesc ? (
								<p className="portfolio-details__lead wow fadeInUp">
									{shortDesc}
								</p>
							) : null}

							<div className="portfolio-details__content">
								<div
									className="portfolio-details__section wow fadeInUp"
									data-wow-delay="0.1s"
								>
									<h4 className="portfolio-details__section-title">
										Introduction
									</h4>
									<p>{projectIntroduction}</p>
								</div>

								<div
									className="portfolio-details__section wow fadeInUp"
									data-wow-delay="0.2s"
								>
									<h4 className="portfolio-details__section-title">
										Project overview
									</h4>
									<p>{projectOverview}</p>
									{overviewPoints?.length ? (
										<ul className="portfolio-details__points">
											{overviewPoints.map((point, index) => (
												<li key={index}>
													<i className="tji-double-check"></i>
													<span>{point}</span>
												</li>
											))}
										</ul>
									) : null}
								</div>

								{descItems?.length
									? descItems.map((item, index) => (
											<div
												key={index}
												className="portfolio-details__section wow fadeInUp"
												data-wow-delay={`${0.25 + index * 0.05}s`}
											>
												<h4 className="portfolio-details__section-title">
													{item.title}
												</h4>
												<p>{item.desc}</p>
											</div>
									  ))
									: null}

								<div
									className="portfolio-details__result wow fadeInUp"
									data-wow-delay="0.35s"
								>
									<h4 className="portfolio-details__section-title">
										Final result
									</h4>
									<p>{finalResult}</p>
								</div>
							</div>

							<div
								className="portfolio-details__nav wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<div
									className="portfolio-details__nav-item"
									style={{
										visibility: isPrevItem ? "visible" : "hidden",
									}}
								>
									<Link
										href={isPrevItem ? `/portfolios/${prevId}` : "#"}
										className="portfolio-details__nav-link"
									>
										<i className="tji-arrow-left"></i>
										<span>Previous project</span>
									</Link>
								</div>

								<Link
									href="/portfolios"
									className="portfolio-details__nav-grid"
									title="All projects"
								>
									<i className="tji-square-cube"></i>
								</Link>

								<div
									className="portfolio-details__nav-item portfolio-details__nav-item--next"
									style={{
										visibility: isNextItem ? "visible" : "hidden",
									}}
								>
									<Link
										href={isNextItem ? `/portfolios/${nextId}` : "#"}
										className="portfolio-details__nav-link"
									>
										<span>Next project</span>
										<i className="tji-arrow-right"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4">
						<aside className="portfolio-details__sidebar">
							<div
								className="portfolio-details__info-card wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<div className="portfolio-details__info-header">
									<h5>Project information</h5>
								</div>
								<ul className="portfolio-details__info-list">
									{infoRows.map((row) => (
										<li key={row.label}>
											<span className="portfolio-details__info-label">
												{row.label}
											</span>
											<span className="portfolio-details__info-value">
												{row.value}
											</span>
										</li>
									))}
									{extraStatusItems.map((item, idx) => (
										<li key={`status-${idx}`}>
											<span className="portfolio-details__info-label">
												{item.title}
											</span>
											<span className="portfolio-details__info-value">
												{item.desc}
											</span>
										</li>
									))}
								</ul>

								{shareLinks?.length ? (
									<div className="portfolio-details__share">
										<span className="portfolio-details__share-label">
											Share project
										</span>
										<div className="portfolio-details__share-links">
											{shareLinks.map((link, idx) => (
												<Link
													href={link.href}
													target="_blank"
													rel="noreferrer"
													title={link.label}
													key={idx}
													className="portfolio-details__share-btn"
												>
													<i className={getShareIconClass(link.icon)}></i>
												</Link>
											))}
										</div>
									</div>
								) : null}
							</div>

							<div
								className="portfolio-details__cta wow fadeInUp"
								data-wow-delay="0.2s"
							>
								<CtaSidebar variant="green" />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortfolioDetailsPrimary;
