import Link from "next/link";

const ServiceCard5 = ({
	service,
	idx,
	lastItem,
	handleCurrentIndex,
	currentIndex,
}) => {
	const { title, desc, id, iconName, link, icon: Icon } = service || {};
	const targetLink = link ? link : `/services/${id}`;
	return (
		<div
			className={`service-style-5 ${currentIndex === idx ? "active" : ""}`}
			onMouseEnter={() => handleCurrentIndex(idx)}
		>
			<div className="h5-service-content">
				<div className="h5-title-area">
					<h4 className="title">{title}</h4>
				</div>
				<div className="service-icon">
					<span>
						{Icon ? <Icon /> : <i className={iconName ? iconName : "tji-optimization"}></i>}
					</span>
				</div>
				<div className="h5-service-content-inner">
					<h4 className="title">
						<Link href={targetLink}>{title}</Link>
					</h4>
					<div className="desc">
						<p>{desc}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard5;
