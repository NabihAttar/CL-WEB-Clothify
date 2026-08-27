"use client";

import PortfolioCard1 from "@/components/shared/cards/PortfolioCard1";
import Paginations from "@/components/shared/others/Paginations";
import usePagination from "@/hooks/usePagination";
import getPortfolio from "@/libs/getPortfolio";

const PortfoliosPrimary = () => {
	const items = getPortfolio()?.slice(0, -1);
	const limit = 6;
	const {
		currentItems,
		currentpage,
		setCurrentpage,
		paginationItems,
		currentPaginationItems,
		totalPages,
		handleCurrentPage,
		firstItem,
		lastItem,
	} = usePagination(items, limit);
	const totalItems = items?.length;
	const totalItemsToShow = currentItems?.length;

	return (
		<section className="portfolio-page section-space">
			<div className="container">
				<div className="portfolio-page__header text-center">
					<span
						className="portfolio-page__eyebrow wow fadeInUp"
						data-wow-delay="0.1s"
					>
						Our Digital Work
					</span>
					<h2
						className="portfolio-page__title wow fadeInUp"
						data-wow-delay="0.15s"
					>
						Software Development Projects
					</h2>
					<p
						className="portfolio-page__lead wow fadeInUp"
						data-wow-delay="0.2s"
					>
						Explore websites, mobile apps, ERP systems, and custom software
						built by Clothify for businesses across industries.
					</p>
					{totalItems ? (
						<p
							className="portfolio-page__count wow fadeInUp"
							data-wow-delay="0.25s"
						>
							{totalItems} featured projects
						</p>
					) : null}
				</div>

				<div className="row rg-30 portfolio-page__grid">
					{currentItems?.length
						? currentItems.map((item, idx) => (
								<div
									key={item.id ?? idx}
									className="col-xl-4 col-md-6"
									data-wow-delay={`${0.1 + idx * 0.05}s`}
								>
									<PortfolioCard1 portfolio={item} variant="page" />
								</div>
						  ))
						: ""}
				</div>

				{totalItemsToShow < totalItems ? (
					<div className="portfolio-page__pagination">
						<Paginations
							paginationDetails={{
								currentItems,
								currentpage,
								setCurrentpage,
								paginationItems,
								currentPaginationItems,
								totalPages,
								handleCurrentPage,
								firstItem,
								lastItem,
							}}
						/>
					</div>
				) : null}
			</div>
		</section>
	);
};

export default PortfoliosPrimary;
