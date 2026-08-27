import { absoluteUrl } from "@/lib/seo";
import getBlogs from "@/libs/getBlogs";
import getCareers from "@/libs/getCareers";
import getPortfolio from "@/libs/getPortfolio";
import getALlServices from "@/libs/getALlServices";
import getTeamMembers from "@/libs/getTeamMembers";

const staticPages = [
	{ path: "", priority: 1, changeFrequency: "weekly" },
	{ path: "/about", priority: 0.9, changeFrequency: "monthly" },
	{ path: "/services", priority: 0.9, changeFrequency: "weekly" },
	{ path: "/portfolios", priority: 0.8, changeFrequency: "weekly" },
	{ path: "/blogs", priority: 0.8, changeFrequency: "weekly" },
	{ path: "/team", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/contact", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/faq", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/careers", priority: 0.7, changeFrequency: "weekly" },
	{ path: "/pricing-plan", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/history", priority: 0.5, changeFrequency: "yearly" },
];

export default function sitemap() {
	const lastModified = new Date();

	const staticEntries = staticPages.map(({ path, priority, changeFrequency }) => ({
		url: absoluteUrl(path),
		lastModified,
		changeFrequency,
		priority,
	}));

	const serviceEntries = getALlServices().map(({ id }) => ({
		url: absoluteUrl(`/services/${id}`),
		lastModified,
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	const portfolioEntries = getPortfolio().map(({ id }) => ({
		url: absoluteUrl(`/portfolios/${id}`),
		lastModified,
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	const blogEntries = getBlogs().map(({ id }) => ({
		url: absoluteUrl(`/blogs/${id}`),
		lastModified,
		changeFrequency: "weekly",
		priority: 0.6,
	}));

	const teamEntries = getTeamMembers().map(({ id }) => ({
		url: absoluteUrl(`/team/${id}`),
		lastModified,
		changeFrequency: "monthly",
		priority: 0.5,
	}));

	const careerEntries = getCareers().map(({ id }) => ({
		url: absoluteUrl(`/careers/${id}`),
		lastModified,
		changeFrequency: "weekly",
		priority: 0.5,
	}));

	return [
		...staticEntries,
		...serviceEntries,
		...portfolioEntries,
		...blogEntries,
		...teamEntries,
		...careerEntries,
	];
}
