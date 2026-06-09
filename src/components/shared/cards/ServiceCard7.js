const ServiceCard7 = ({ service, idx, lastItem }) => {
	const { title, iconName, icon: Icon, desc } = service || {};
	return (
		<div className="service-style-3 no-action-layout wow fadeInUp" data-wow-delay="0.1s">
			<div className="service-title">
				<div className="service-icon">
					<span>
						{Icon ? <Icon /> : <i className={iconName ? iconName : "tji-optimization"}></i>}
					</span>
				</div>
				<h4 className="title">
					{title}
				</h4>
			</div>
			<div className="service-right no-action">
				<div className="desc">
					<p>{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard7;
