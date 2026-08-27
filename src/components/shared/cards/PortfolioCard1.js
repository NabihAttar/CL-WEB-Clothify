import Image from "next/image";
import Link from "next/link";

const PortfolioCard1 = ({ portfolio, variant = "default" }) => {
	const {
		title,
		img,
		shortDesc,
		id,
		tags,
		categoryLabel,
		category,
	} = portfolio ? portfolio : {};

	if (variant === "page") {
		return (
			<article className="portfolio-card wow fadeInUp">
				<div className="portfolio-card__media">
					<Link href={`/portfolios/${id}`} className="portfolio-card__media-link">
						<Image
							src={img ? img : "/images/project/h1-project-1.webp"}
							alt={title ? `${title} portfolio project` : "Portfolio project"}
							width={449}
							height={561}
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								objectPosition: "center top",
							}}
						/>
					</Link>
					{(categoryLabel || category) && (
						<span className="portfolio-card__category">
							{categoryLabel || category}
						</span>
					)}
				</div>

				<div className="portfolio-card__body">
					<h3 className="portfolio-card__title">
						<Link href={`/portfolios/${id}`}>{title}</Link>
					</h3>

					{shortDesc ? (
						<p className="portfolio-card__desc">{shortDesc}</p>
					) : null}

					{tags?.length ? (
						<div className="portfolio-card__tags">
							{tags.slice(0, 3).map((tag, idx) => (
								<span key={idx} className="portfolio-card__tag">
									{tag}
								</span>
							))}
						</div>
					) : null}

					<Link href={`/portfolios/${id}`} className="portfolio-card__link">
						View project
						<i className="tji-arrow-right" />
					</Link>
				</div>
			</article>
		);
	}

	return (
		<div className="project-item">
			<div className="project-image">
				<Link className="cursor-hide" href={`/portfolios/${id}`}>
					<Image
						src={img ? img : "assets/images/project/h1-project-1.webp"}
						alt="Images"
						width={449}
						height={561}
						style={{ width: "100%", height: "100%" }}
					/>
				</Link>
			</div>
			<div className="project-content">
				<div className="project-title">
					<h4 className="title">
						<Link href={`/portfolios/${id}`}>
							{title}
							<i className="tji-arrow-right"></i>
						</Link>
					</h4>
				</div>
				<div className="tag-list">
					{tags?.length
						? tags?.map((tag, idx) => (
								<Link key={100 + idx} href={`/portfolios`}>
									{tag}
								</Link>
						  ))
						: ""}
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard1;
