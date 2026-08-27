import HeaderSearchForm from "@/components/layout/header/HeaderSearchForm";
import MobileMenu from "@/components/layout/header/MobileMenu";
import CookieConsent from "@/components/shared/others/CookieConsent";
import JsonLd from "@/components/shared/others/JsonLd";
import SmoothScroller from "@/components/shared/others/SmoothScroller";
import { createMetadata, siteConfig } from "@/lib/seo";
import { Lato, Libre_Franklin } from "next/font/google";
import "react-range-slider-input/dist/style.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "venobox/dist/venobox.min.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome-pro.min.css";
import "./assets/css/glightbox.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/odometer-theme-default.css";
import "./assets/css/solvior-icons.css";
import "./globals.css";
export const metadata = {
	metadataBase: new URL(siteConfig.url),
	...createMetadata(),
	applicationName: siteConfig.name,
	authors: [{ name: siteConfig.name, url: siteConfig.url }],
	creator: siteConfig.name,
	publisher: siteConfig.name,
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/images/logos/header-logo.png",
	},
};

const lato = Lato({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
	style: ["normal", "italic"],
	variable: "--font-lato", // optional: set a CSS variable
});

const libreFranklin = Libre_Franklin({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	variable: "--font-libre-franklin",
});
export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			data-scroll-behavior="smooth"
			className={`${lato.variable} ${libreFranklin.variable}`}
		>
			<body>
				<JsonLd />
				<HeaderSearchForm />
				<MobileMenu />
				{children}
				<SmoothScroller />
				<CookieConsent />
			</body>
		</html>
	);
}
