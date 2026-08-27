"use client";

import Link from "next/link";

const Logo = () => {
	return (
		<div className="site-logo">
			<Link className="logo" href="/">
				<img
					src="/images/logos/clothify-logo-green.png"
					alt="Clothify logo - business consulting brand"
					className="header-logo-img"
					height={44}
					width={180}
				/>
			</Link>
		</div>
	);
};

export default Logo;
