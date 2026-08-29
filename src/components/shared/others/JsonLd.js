import {
	getOrganizationSchema,
	getProfessionalServiceSchema,
	getWebsiteSchema,
} from "@/lib/seo";

export default function JsonLd() {
	const schemas = [
		getOrganizationSchema(),
		getProfessionalServiceSchema(),
		getWebsiteSchema(),
	];

	return (
		<>
			{schemas.map((schema, index) => (
				<script
					key={index}
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(schema),
					}}
				/>
			))}
		</>
	);
}
