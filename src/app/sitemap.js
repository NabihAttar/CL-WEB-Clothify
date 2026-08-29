import { absoluteUrl, getBlogLastModified, sitemapStaticPages } from "@/lib/seo";
import getBlogs from "@/libs/getBlogs";
import getPortfolio from "@/libs/getPortfolio";

export default function sitemap() {
	const staticEntries = sitemapStaticPages.map(
		({ path, priority, changeFrequency }) => ({
			url: absoluteUrl(path),
			changeFrequency,
			priority,
		})
	);

	const portfolioEntries = getPortfolio().map(({ id }) => ({
		url: absoluteUrl(`/portfolios/${id}`),
		changeFrequency: "monthly",
		priority: 0.75,
	}));

	const blogEntries = getBlogs().map(({ id, date }) => {
		const entry = {
			url: absoluteUrl(`/blogs/${id}`),
			changeFrequency: "weekly",
			priority: 0.6,
		};
		const lastModified = getBlogLastModified(date);

		if (lastModified) {
			entry.lastModified = lastModified;
		}

		return entry;
	});

	return [...staticEntries, ...portfolioEntries, ...blogEntries];
}
