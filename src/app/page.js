import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import About9 from "@/components/sections/About/About9";
import Blogs9 from "@/components/sections/blogs/Blogs9";
import Brands4 from "@/components/sections/brands/Brands4";
import Contact2 from "@/components/sections/contacts/Contact2";
import Cta8 from "@/components/sections/cta/Cta8";
import SonicWaveHero from "@/components/sections/heros/SonicWaveHero";
import Portfolios9 from "@/components/sections/portfolios/Portfolios9";
import Process5 from "@/components/sections/process/Process5";
import Services9 from "@/components/sections/services/Services9";
import Team6 from "@/components/sections/teams/Team6";
import Testimonials8 from "@/components/sections/testimonials/Testimonials8";
import FeatureMarquee from "@/components/shared/marquee/FeatureMarquee";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Features6 from "@/components/sections/features/Features6";
import Footer4 from "@/components/layout/footer/Footer4";
import Footer3 from "@/components/layout/footer/Footer3";
import Footer10 from "@/components/layout/footer/Footer10";
import Contact1 from "@/components/sections/contacts/Contact1";
import Contact3 from "@/components/sections/contacts/Contact3";
import Cta7 from "@/components/sections/cta/Cta7";
export default function Home() {
	return (
		<div>
			<Header headerType={9} isHeaderTop={true} topbarType={2} />
			<Header isStickyHeader={true} headerType={9} />
			<main style={{ overflow: "clip" }}>
				<SonicWaveHero />
				<Features6 />

				<Services9 />
				<About9 />
				<Process5 />
				<Portfolios9 />
				{/* <Brands4 /> */}
				{/* <Team6 /> */}
				<FeatureMarquee />

				<Contact3 />
				<Cta7 />
			</main>
			<Footer10 />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
