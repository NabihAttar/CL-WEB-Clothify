import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import About11 from "@/components/sections/About/About11";
import Brands1 from "@/components/sections/brands/Brands1";
import Cta1 from "@/components/sections/cta/Cta1";
import Features from "@/components/sections/features/Features";
import Funfact3 from "@/components/sections/funfacts/Funfact3";
import HeroInner from "@/components/sections/heros/HeroInner";
import Skills1 from "@/components/sections/Skills/Skills1";
import Team8 from "@/components/sections/teams/Team8";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Features7 from "@/components/sections/features/Features7";
import Team7 from "@/components/sections/teams/Team7";
import Cta2 from "@/components/sections/cta/Cta2";
import Cta3 from "@/components/sections/cta/Cta3";
import Cta4 from "@/components/sections/cta/Cta4";
import Cta5 from "@/components/sections/cta/Cta5";
import Cta6 from "@/components/sections/cta/Cta6";
import Cta7 from "@/components/sections/cta/Cta7";
export default function About() {
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner title={"About"} text={"About"} heroImage="/new-images/About-Page/AboutPage-HeroSection.png" />
				<About11 />
				<Features type={2} />
				<Funfact3 />
				{/* <Features7 /> */}
				<Team7 />

				{/* <Team8 /> */}
				<Skills1 />
				{/* <Testimonials2 type={3} /> */}
				{/* <Brands1 /> */}
				<Cta7 />
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
