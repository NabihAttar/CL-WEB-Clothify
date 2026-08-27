import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const CtaSidebar = ({ variant = "default" }) => {
	const isGreen = variant === "green";

	return (
		<div
			className={`tj-sidebar-cta ${isGreen ? "tj-sidebar-cta--green" : ""}`}
			style={
				isGreen
					? undefined
					: { backgroundImage: "url('/images/blog/widget-cta.webp')" }
			}
		>
			<div className="content">
				<div className="icon">
					<img
						src={
							isGreen
								? "/images/logos/clothify-c-icon.png"
								: "/images/shapes/widget-cta-icon.png"
						}
						alt={isGreen ? "Clothify icon" : "Contact icon"}
						className={isGreen ? "tj-sidebar-cta__brand-icon" : ""}
					/>
				</div>
				<h3>
					Need help? <br /> Feel free to contact us
				</h3>
				<p>
					{isGreen
						? "Clothify helps businesses build websites, apps, ERP systems, and custom software."
						: "Our mission is to empowers businesses off all size in an businesses."}
				</p>
			</div>
			<div className="cta-btn">
				<ButtonPrimary
					text={"Get in touch"}
					url={"/contact"}
					className={isGreen ? "green-btn" : "white-btn"}
				/>

				<img
					className="shapes move-anim-2"
					src="/images/shapes/carrow.png"
					alt=""
				/>
			</div>
		</div>
	);
};

export default CtaSidebar;
