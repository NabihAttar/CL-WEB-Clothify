import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import PricingPlan4 from "@/components/sections/pricing-plan/PricingPlan4";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("pricing");

export default function PricingPlan() {
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner title={"Pricing plan"} text={"Pricing plan"} />
				<PricingPlan4 />
				<Cta1 />
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
