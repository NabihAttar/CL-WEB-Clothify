import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Contact3 from "@/components/sections/contacts/Contact3";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import TeamDetails1 from "@/components/sections/teams/TeamDetails1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getTeamMembers from "@/libs/getTeamMembers";
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
const items = getTeamMembers();

export async function generateMetadata({ params }) {
	const { id } = await params;
	const item = items?.find(({ id: itemId }) => itemId === parseInt(id));

	if (!item) {
		return createMetadata({ title: "Team Member Not Found", noIndex: true });
	}

	return createMetadata({
		title: `${item.name} | Team`,
		description: `${item.name} - ${item.desig} at Clothify.`,
		path: `/team/${id}`,
		image: item.imgLarge || item.img,
		imageAlt: `${item.name}, ${item.desig} at Clothify`,
	});
}

export default async function TeamDetails({ params }) {
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
				<HeroInner title={"Team details"} text={"Team details"} />
				<TeamDetails1 currentItemId={parseInt(id)} />
				<Contact3 />
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
