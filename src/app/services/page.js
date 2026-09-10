import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

import HeroInner from "@/components/sections/heros/HeroInner";
import Services2 from "@/components/sections/services/Services2";
import Services5 from "@/components/sections/services/Services5";
import Services7 from "@/components/sections/services/Services7";

import Brands3 from "@/components/sections/brands/Brands3";
import Faq3 from "@/components/sections/faq/Faq3";
import Cta7 from "@/components/sections/cta/Cta7";

import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("services");

export default function Services() {
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />

			<main>
				<HeroInner
					title="Services"
					text="Services"
					heroImage="/new-images/Services-Page/ServicesPage-HeroSection.png"
				/>

				<Services5 />

				<Brands3 />

				<Services7 />

				<Services2 />

				<Faq3 />

				<Cta7 hideIcon contactHref="https://wa.me/96176158980" />
			</main>

			<Footer footerType="inner" />

			<ClientWrapper />

			<TjMagicCursor />
		</div>
	);
}
