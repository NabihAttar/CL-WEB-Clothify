import { getFaqSchema } from "@/lib/seo";

export default function FaqJsonLd({ items }) {
	const schema = getFaqSchema(items);

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema),
			}}
		/>
	);
}
