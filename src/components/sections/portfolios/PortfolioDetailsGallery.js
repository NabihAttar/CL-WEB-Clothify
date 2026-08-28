import Image from "next/image";

const PortfolioDetailsGallery = ({
	title,
	desktopImage,
	mobileImage,
	galleryImages = [],
}) => {
	const desktopSrc =
		desktopImage || "/images/project/tj-project-1.webp";
	const hasMobile = Boolean(mobileImage);
	const extraGallery = galleryImages?.filter(Boolean) || [];

	return (
		<div className="portfolio-details__showcase-wrap">
			<div
				className={`portfolio-details__showcase ${
					hasMobile ? "portfolio-details__showcase--dual" : ""
				}`}
			>
				<div className="portfolio-details__showcase-desktop">
					<Image
						src={desktopSrc}
						alt={
							title
								? `${title} desktop project preview`
								: "Portfolio desktop preview"
						}
						fill
						sizes="(max-width: 991px) 100vw, 66vw"
						className="portfolio-details__showcase-desktop-img"
						style={{ objectFit: "cover", objectPosition: "center top" }}
						priority
					/>
				</div>

				{hasMobile ? (
					<div className="portfolio-details__showcase-mobile">
						<div className="portfolio-details__phone">
							<div className="portfolio-details__phone-shell">
								<div className="portfolio-details__phone-screen">
									<Image
										src={mobileImage}
										alt={
											title
												? `${title} mobile project preview`
												: "Portfolio mobile preview"
										}
										fill
										sizes="(max-width: 991px) 240px, 27vw"
										className="portfolio-details__phone-img"
										style={{ objectFit: "cover", objectPosition: "center top" }}
									/>
								</div>
							</div>
						</div>
					</div>
				) : null}
			</div>

			{extraGallery.length ? (
				<div className="portfolio-details__gallery">
					{extraGallery.map((image, index) => (
						<div key={`${image}-${index}`} className="portfolio-details__gallery-item">
							<Image
								src={image}
								alt={
									title
										? `${title} gallery image ${index + 1}`
										: `Portfolio gallery image ${index + 1}`
								}
								fill
								sizes="(max-width: 767px) 100vw, 50vw"
								className="portfolio-details__gallery-img"
							/>
						</div>
					))}
				</div>
			) : null}
		</div>
	);
};

export default PortfolioDetailsGallery;
