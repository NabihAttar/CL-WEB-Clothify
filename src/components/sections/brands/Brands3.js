import Link from "next/link";
import {
	SiNextdotjs,
	SiReact,
	SiElectron,
	SiJavascript,
	SiNodedotjs,
	SiMongodb,
} from "react-icons/si";

const Brands3 = () => {
	const services = [
		{ title: "Next.js", icon: SiNextdotjs },
		{ title: "React", icon: SiReact },
		{ title: "Electron", icon: SiElectron },
		{ title: "Node.js", icon: SiNodedotjs },
		{ title: "JavaScript", icon: SiJavascript },
		{ title: "MongoDB", icon: SiMongodb },
	];

	return (
		<section
			className="tj-brand section-space"
			style={{ backgroundImage: "url('/images/brand/h7-brand-bg.png')" }}
		>
			<div className="container">
				<div className="row align-items-center flex-column-reverse flex-lg-row">
					<div className="col-12 col-lg-6 col-xl-8">
						<div className="tj-brand-inner wow fadeInUp" data-wow-delay="0.3s">
							{services?.length
								? services?.map(({ title, icon: Icon }, idx) => (
										<div key={idx} className="brand-logo">
											<Link href="/services" className="clothify-service-logo">
												<Icon className="icon-svg" aria-hidden="true" />
												<span>{title}</span>
											</Link>
										</div>
								  ))
								: ""}
						</div>
					</div>
					<div className="col-12 col-lg-6 col-xl-4">
						<div className="sec-heading h7-section-heading">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
							OUR TECHNOLOGIES
							</span>
							<h2 className="sec-title text-anim">
							Technologies We Use to Build Powerful Digital Solutions
							</h2>
							<p className="desc wow fadeInUp" data-wow-delay="0.3s" style={{ color: 'white' }}>
							At Clothify, we use modern technologies like Next.js, React, Electron, Node.js, JavaScript, MongoDB and more to build fast, scalable, and reliable websites, mobile apps, ERP systems, POS systems, and desktop applications.

							</p>

							<Link className="service-button text-btn" href="/services">
								Explore Services <i className="tji-angle-right"></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Brands3;
