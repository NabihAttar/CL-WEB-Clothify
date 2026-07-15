import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import HeroInner from "@/components/sections/heros/HeroInner";
import Services1 from "@/components/sections/services/Services1";
import Services2 from "@/components/sections/services/Services2";
import Services3 from "@/components/sections/services/Services3";
import Services4 from "@/components/sections/services/Services4";
import Services5 from "@/components/sections/services/Services5";
import Services6 from "@/components/sections/services/Services6";
import Services7 from "@/components/sections/services/Services7";
import Services8 from "@/components/sections/services/Services8";
import Services9 from "@/components/sections/services/Services9";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Brands3 from "@/components/sections/brands/Brands3";
import Faq3 from "@/components/sections/faq/Faq3";
import Cta7 from "@/components/sections/cta/Cta7";

export default function Services() {
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner
					title={"Services"}
					text={"Services"}
					heroImage="/new-images/Services-Page/ServicesPage-HeroSection.png"
				/>
				<Services5 />


				<Brands3 />

				<Services7 />
				{/* <Services6 /> */}
				{/* <Services4 /> */}
				{/* <Services3 /> */}
				<Services2 />
				{/* <Services6 /> */}
				{/* <Services4 /> */}
				{/* <Services3 /> */}
				{/* <Services8 /> */}
				<Faq3 />
				<Cta7 />

				{/* <Services1 /> */}
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
