import { absoluteUrl, siteConfig } from "@/lib/seo";

const demoRoutes = [
	"/home-02",
	"/home-03",
	"/home-04",
	"/home-05",
	"/home-06",
	"/home-07",
	"/home-08",
	"/home-09",
	"/home-10",
	"/blog-grid",
	"/blog-sidebar",
	"/shop",
	"/cart",
	"/checkout",
	"/wishlist",
	"/login",
	"/password",
	"/error",
];

export default function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: demoRoutes,
		},
		sitemap: absoluteUrl("/sitemap.xml"),
		host: siteConfig.url.replace(/\/$/, ""),
	};
}
