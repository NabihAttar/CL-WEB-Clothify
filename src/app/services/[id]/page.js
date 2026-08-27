import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import ServiceDetailsMain from "@/components/layout/main/ServiceDetailsMain";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getALlServices from "@/libs/getALlServices";
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
const items = getALlServices();

export async function generateMetadata({ params }) {
	const { id } = await params;
	const item = items?.find(({ id: itemId }) => itemId === parseInt(id));

	if (!item) {
		return createMetadata({ title: "Service Not Found", noIndex: true });
	}

	return createMetadata({
		title: item.title,
		description: item.shortDesc || item.desc,
		path: `/services/${id}`,
		image: item.img || item.bgImg,
		imageAlt: `${item.title} - Clothify service image`,
	});
}

export default async function ServiceDetails({ params }) {
	const { id } = await params;

	const isExistItem = items?.find(({ id: id1 }) => id1 === parseInt(id));
	if (!isExistItem) {
		notFound();
	}
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<ServiceDetailsMain currentItemId={parseInt(id)} />
				<Cta1 />
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
export async function generateStaticParams() {
	return items?.map(({ id }) => ({ id: id.toString() }));
}
