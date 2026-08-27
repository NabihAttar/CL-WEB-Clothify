import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import PortfoliosPrimary from "@/components/sections/portfolios/PortfoliosPrimary";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("portfolios");

export default function Portfolios() {
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner
					title={"Our Digital Work"}
					text={"Portfolio"}
					heroImage="/new-images/Portfolio-Page/PortfolioPage-HeroSection.png"
				/>
				<PortfoliosPrimary />
				<Cta1 />
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
