import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";
const Funfact3 = () => {
	return (
		<section className="tj-evolute-area">
			<div className="container-xxl-fluid  p-0 d-none d-xxl-block">
				<div className="row g-0">
					<div className="col-lg-7">
						<div className="tj-evolute">
							<span
								className="tj-evolute-title mb-30 wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<i className="tji-star-2"></i>✦ Our Evolution
							</span>
							<div className="desc mb-60 wow fadeInUp" data-wow-delay="0.3s">
								<p>
									Clothify started with a clear vision: to help businesses move
									from manual work to smart digital systems. We create websites,
									mobile apps, ERP systems, POS solutions, desktop applications,
									and custom software that make business operations faster, easier,
									and more organized.
								</p>
								<p>
									Our journey is built on innovation, clean development, and
									practical solutions tailored to each client&apos;s needs. We focus
									on delivering reliable technology that supports business growth
									today and scales for the future.
								</p>
							</div>
							<div className="tj-evolute-counter">
								<div className="counter-item">
									<FunfactSingle currentValue={6} isSup={"+"} />
									<span className="sub-title">Core Services</span>
								</div>
								<div className="counter-item">
									<FunfactSingle currentValue={100} symbol={"%"} />
									<span className="sub-title">Custom Built</span>
								</div>
								<div className="counter-item">
									<FunfactSingle currentValue={24} symbol={"/7"} />
									<span className="sub-title">Support Ready</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="tj-evolute-image hover:shine">
							<Image
								src="/new-images/About-Page/AboutPage-OurEvolution.png"
								alt="Our Evolution"
								width={715}
								height={650}
								style={{ height: "auto" }}
							/>
							
						</div>
					</div>
				</div>
			</div>
			<div className="container d-xxl-none">
				<div className="row rg-50 align-items-center">
					<div className="col-xl-6 col-12">
						<div className="tj-evolute">
							<span className="tj-evolute-title mb-30">
								<i className="tji-star-2"></i>✦ Our Evolution
							</span>
							<div className="desc mb-60">
								<p>
									Clothify started with a clear vision: to help businesses move
									from manual work to smart digital systems. We create websites,
									mobile apps, ERP systems, POS solutions, desktop applications,
									and custom software that make business operations faster, easier,
									and more organized.
								</p>
								<p>
									Our journey is built on innovation, clean development, and
									practical solutions tailored to each client&apos;s needs. We focus
									on delivering reliable technology that supports business growth
									today and scales for the future.
								</p>
							</div>
							<div className="tj-evolute-counter">
								<div className="counter-item">
									<FunfactSingle currentValue={6} isSup={"+"} />
									<span className="sub-title">Core Services</span>
								</div>
								<div className="counter-item">
									<FunfactSingle currentValue={100} symbol={"%"} />
									<span className="sub-title">Custom Built</span>
								</div>
								<div className="counter-item">
									<FunfactSingle currentValue={24} symbol={"/7"} />
									<span className="sub-title">Support Ready</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-12">
						<div className="tj-evolute-image">
							<img src="/new-images/About-Page/AboutPage-OurEvolution.png" alt="Our Evolution" />
							<div className="about-video-box style-2">
								<div className="video-box">
									<PopupVideo>
										<Link
											className="circle glightbox video-popup"
											href="https://www.youtube.com/watch?v=GGf1JjSAKP4"
										>
											<i className="fa-sharp fa-solid fa-play"></i>
										</Link>
									</PopupVideo>
								</div>
								<span className="sub-title">Click for watch</span>
								<h5 className="title">See our latest video</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Funfact3;
