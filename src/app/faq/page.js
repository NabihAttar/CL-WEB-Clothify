import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Contact4 from "@/components/sections/contacts/Contact4";
import Cta1 from "@/components/sections/cta/Cta1";
import Faq3 from "@/components/sections/faq/Faq3";
import HeroInner from "@/components/sections/heros/HeroInner";
import FaqJsonLd from "@/components/shared/others/FaqJsonLd";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { createPageMetadata, faqItems } from "@/lib/seo";

export const metadata = createPageMetadata("faq");

export default function Faq() {
	return (
		<div>
			<FaqJsonLd items={faqItems} />
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner title={"FAQ"} text={"FAQ"} />
				<Contact4 />
				<Faq3 />
				<Cta1 />
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
