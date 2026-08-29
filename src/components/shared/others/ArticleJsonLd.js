import { getArticleSchema } from "@/lib/seo";

export default function ArticleJsonLd({ item, id }) {
	if (!item) {
		return null;
	}

	const schema = getArticleSchema(item, id);

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema),
			}}
		/>
	);
}
