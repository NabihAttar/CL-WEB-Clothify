import useActiveLink from "@/hooks/useActiveLink";
import Link from "next/link";

const navLinks = [
	{ name: "Home", path: "/" },
	{ name: "About Us", path: "/about" },
	{ name: "Services", path: "/services" },
	{ name: "Portfolio", path: "/portfolios" },
	{ name: "Contact", path: "/contact" },
];

const Navbar = ({ headerType, isStickyHeader }) => {
	const makeActiveLink = useActiveLink();

	return (
		<div
			className={`mainmenu ${
				(headerType === 3 || headerType == 4) && !isStickyHeader ? "menu-3" : ""
			}  d-lg-block d-none`}
			id={isStickyHeader ? "mainmenu" : "main-menu"}
		>
			<ul>
				{navLinks.map((item) => {
					const link = makeActiveLink(item);

					return (
						<li
							key={item.path}
							className={link?.isActive ? "current-menu-item" : ""}
						>
							<Link href={link?.path ? link.path : "#"}>{link?.name}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Navbar;
