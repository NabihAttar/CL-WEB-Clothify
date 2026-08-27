import { siteConfig } from "@/lib/seo";

export default function JsonLd() {
	const organizationSchema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: siteConfig.name,
		url: siteConfig.url,
		logo: `${siteConfig.url.replace(/\/$/, "")}${siteConfig.ogImage}`,
		description: siteConfig.description,
	};

	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: siteConfig.name,
		url: siteConfig.url,
		description: siteConfig.description,
		publisher: {
			"@type": "Organization",
			name: siteConfig.name,
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(organizationSchema),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(websiteSchema),
				}}
			/>
		</>
	);
}
