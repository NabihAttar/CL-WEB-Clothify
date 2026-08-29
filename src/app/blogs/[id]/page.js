import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BlogDetailsMain from "@/components/layout/main/BlogDetailsMain";
import Cta1 from "@/components/sections/cta/Cta1";
import ArticleJsonLd from "@/components/shared/others/ArticleJsonLd";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getBlogs from "@/libs/getBlogs";
import { createBlogMetadata, createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
const items = getBlogs();

export async function generateMetadata({ params }) {
	const { id } = await params;
	const item = items?.find(({ id: itemId }) => itemId === parseInt(id));

	if (!item) {
		return createMetadata({
			title: "Blog Post Not Found | Clothify",
			description: "The requested Clothify blog article could not be found.",
			path: `/blogs/${id}`,
			noIndex: true,
		});
	}

	return createBlogMetadata(item, id);
}

export default async function BlogDetails({ params }) {
	const { id } = await params;
	const currentItem = items?.find(({ id: id1 }) => id1 === parseInt(id));
	if (!currentItem) {
		notFound();
	}
	return (
		<div>
			<ArticleJsonLd item={currentItem} id={id} />
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<BlogDetailsMain currentItemId={parseInt(id)} />
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
