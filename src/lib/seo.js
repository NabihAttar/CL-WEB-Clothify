export const siteConfig = {
	name: "Clothify",
	title: "Clothify | Business Consulting & Digital Solutions",
	description:
		"Clothify helps businesses grow with strategic consulting, digital transformation, and tailored solutions for lasting success.",
	url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.clothify.com",
	locale: "en_US",
	ogImage: "/images/logos/header-logo.png",
	ogImageAlt: "Clothify logo on light background",
	ogImageWidth: 1200,
	ogImageHeight: 630,
	keywords: [
		"Clothify",
		"business consulting",
		"digital solutions",
		"strategy consulting",
		"brand growth",
	],
};

export const pageSeo = {
	home: {
		title: "Clothify | Business Consulting & Digital Solutions",
		description:
			"Partner with Clothify for business consulting, digital strategy, and growth solutions built for modern companies.",
		path: "/",
	},
	about: {
		title: "About Clothify",
		description:
			"Learn about Clothify, our mission, team, and the consulting approach we use to help businesses succeed.",
		path: "/about",
	},
	services: {
		title: "Our Services",
		description:
			"Explore Clothify consulting services including strategy, optimization, branding, and digital transformation.",
		path: "/services",
	},
	portfolios: {
		title: "Portfolio",
		description:
			"Browse Clothify project portfolio and case studies showcasing results for clients across industries.",
		path: "/portfolios",
	},
	blogs: {
		title: "Blog & Insights",
		description:
			"Read Clothify articles on business strategy, branding, growth, and industry insights.",
		path: "/blogs",
	},
	team: {
		title: "Our Team",
		description:
			"Meet the Clothify team of consultants and specialists dedicated to client success.",
		path: "/team",
	},
	contact: {
		title: "Contact Us",
		description:
			"Get in touch with Clothify for consultations, project inquiries, and business support.",
		path: "/contact",
	},
	faq: {
		title: "FAQ",
		description:
			"Find answers to frequently asked questions about Clothify services, process, and support.",
		path: "/faq",
	},
	careers: {
		title: "Careers",
		description:
			"Discover career opportunities at Clothify and join our consulting team.",
		path: "/careers",
	},
	pricing: {
		title: "Pricing Plans",
		description:
			"Review Clothify pricing plans and choose the consulting package that fits your business.",
		path: "/pricing-plan",
	},
	history: {
		title: "Our History",
		description:
			"Explore the history and milestones behind Clothify's growth as a consulting partner.",
		path: "/history",
	},
};

export function absoluteUrl(path = "") {
	const base = siteConfig.url.replace(/\/$/, "");
	if (!path) {
		return `${base}/`;
	}

	return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createMetadata({
	title,
	description,
	path = "",
	image,
	imageAlt,
	imageWidth,
	imageHeight,
	keywords,
	noIndex = false,
} = {}) {
	const pageTitle = title || siteConfig.title;
	const pageDescription = description || siteConfig.description;
	const canonicalPath = path || "/";
	const ogImagePath = image || siteConfig.ogImage;
	const ogImageAlt = imageAlt || siteConfig.ogImageAlt;

	return {
		title: pageTitle,
		description: pageDescription,
		keywords: keywords || siteConfig.keywords,
		alternates: {
			canonical: canonicalPath,
		},
		robots: noIndex
			? { index: false, follow: false }
			: {
					index: true,
					follow: true,
					googleBot: {
						index: true,
						follow: true,
						"max-image-preview": "large",
						"max-snippet": -1,
						"max-video-preview": -1,
					},
				},
		openGraph: {
			type: "website",
			locale: siteConfig.locale,
			url: canonicalPath,
			siteName: siteConfig.name,
			title: pageTitle,
			description: pageDescription,
			images: [
				{
					url: ogImagePath,
					width: imageWidth || siteConfig.ogImageWidth,
					height: imageHeight || siteConfig.ogImageHeight,
					alt: ogImageAlt,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: pageTitle,
			description: pageDescription,
			images: [
				{
					url: ogImagePath,
					alt: ogImageAlt,
				},
			],
		},
	};
}

export function createPageMetadata(pageKey, overrides = {}) {
	const page = pageSeo[pageKey];

	if (!page) {
		return createMetadata(overrides);
	}

	return createMetadata({
		title: page.title,
		description: page.description,
		path: page.path,
		...overrides,
	});
}
