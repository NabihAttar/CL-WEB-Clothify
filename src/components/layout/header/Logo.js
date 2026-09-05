"use client";

import Link from "next/link";

const Logo = () => {
	return (
		<div className="site-logo">
			<Link className="logo" href="/">
				<img
					src="/new-images/Clothify-Logo/clothify_logo_header.svg"
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
