import PortfolioDetailsPrimary from "@/components/sections/portfolios/PortfolioDetailsPrimary";
import getPortfolio from "@/libs/getPortfolio";
import getPreviousNextItem from "@/libs/getPreviousNextItem";

const PortfolioDetailsMain = ({ currentItemId }) => {
	const items = getPortfolio();
	const currentId = currentItemId;
	const option = getPreviousNextItem(items, currentId);

	return (
		<PortfolioDetailsPrimary option={option} />
	);
};

export default PortfolioDetailsMain;
