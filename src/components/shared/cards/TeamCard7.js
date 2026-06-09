import Link from "next/link";

const TeamCard7 = ({ teamMember, idx, currentIndex, handleCurrentIndex }) => {
	const { name, desig, img, desc, label } = teamMember || {};
	return (
		<div
			className={`h10-team-item  wow fadeInLeftBig ${
				currentIndex === idx ? "active" : ""
			}`}
			onMouseEnter={() => handleCurrentIndex(idx)}
			data-wow-delay={`0.${idx + 2}s`}
		>
			<div className="team-images">
				<img src={img ? img : "/images/team/team-1.webp"} alt="Images" />
			</div>
			<div className="team-content">
				<div className="team-content-inner">
					<div className="team-text">
						<h5 className="title">
								<Link href="/services">{name}</Link>
						</h5>
						<span className="sub-title">{desig}</span>
					</div>
						<p className="desc">{desc}</p>
					<div className="team-share">
							<span className="sub-title">{label}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamCard7;
