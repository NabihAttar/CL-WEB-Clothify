import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import CareerDetails1 from "@/components/sections/careers/CareerDetails1";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getCareers from "@/libs/getCareers";
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
const items = getCareers();

export async function generateMetadata({ params }) {
	const { id } = await params;
	const item = items?.find(({ id: itemId }) => itemId === parseInt(id));

	if (!item) {
		return createMetadata({ title: "Career Not Found", noIndex: true });
	}

	return createMetadata({
		title: `${item.title} | Careers`,
		description: `${item.title} career opportunity at Clothify in ${item.location}.`,
		path: `/careers/${id}`,
		imageAlt: `${item.title} career opportunity at Clothify`,
	});
}

export default async function CareerDetails({ params }) {
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
				<HeroInner title={"Careers details"} text={"Careers details"} />
				<CareerDetails1 currentItemId={parseInt(id)} />
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
