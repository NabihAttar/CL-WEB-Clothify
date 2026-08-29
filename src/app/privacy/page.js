import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata = createPageMetadata("privacy");

export default function Privacy() {
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner title="Privacy Policy" text="Privacy Policy" />
				<section className="section-space">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-8">
								<div className="sec-heading style-2 mb-4">
									<h2 className="sec-title">Privacy Policy</h2>
								</div>
								<p>
									This Privacy Policy explains how Clothify collects, uses, and
									protects information when you visit our website or contact us
									about software development services.
								</p>
								<h3 className="h5 mt-4">Information we collect</h3>
								<p>
									When you use our contact forms, newsletter signup, or project
									inquiry forms, we may collect information such as your name,
									email address, company name, and any details you choose to
									share about your project.
								</p>
								<h3 className="h5 mt-4">How we use information</h3>
								<p>
									We use submitted information to respond to inquiries, discuss
									project requirements, provide support, and improve our
									services. We do not sell personal information.
								</p>
								<h3 className="h5 mt-4">Cookies</h3>
								<p>
									Our website may use cookies and similar technologies to
									remember preferences and improve your browsing experience. You
									can manage cookies through your browser settings.
								</p>
								<h3 className="h5 mt-4">Contact</h3>
								<p>
									If you have questions about this Privacy Policy, contact us at{" "}
									<a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
								</p>
							</div>
						</div>
					</div>
				</section>
				<Cta1 />
			</main>
			<Footer footerType="inner" />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
