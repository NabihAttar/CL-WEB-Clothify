import Accordion from "@/components/shared/accordion/Accordion";

const Faq3 = () => {
	const faqs = [
		{
			question: "What services does Clothify provide?",
			answer:
				"Clothify provides website development, mobile app development, ERP systems, POS systems, desktop applications, and business automation solutions tailored to your needs.",
		},
		{
			question: "Can you build a custom system for my business?",
			answer:
				"Yes. We build custom software based on your workflow, business goals, and required features, whether you need an ERP, POS, dashboard, or internal management system.",
		},
		{
			question: "How long does it take to complete a project?",
			answer:
				"The timeline depends on the project size and features. A simple website may take a few weeks, while ERP, POS, or custom systems require more planning, development, and testing.",
		},
		{
			question: "Do you provide support after launch?",
			answer:
				"Yes. After launch, we can provide technical support, updates, improvements, bug fixes, and maintenance to keep your system running smoothly.",
		},
		{
			question: "How can I start a project with Clothify?",
			answer:
				"You can contact us through the website, share your project idea or business problem, and we will discuss the best solution, timeline, and next steps.",
		},
	];

	return (
		<section className="tj-faq-area section-space">
			<div className="container">
				<div className="row rg-50 justify-content-between">
					<div className="col-xl-5 col-lg-5">
						<div className="sec-heading mb-0 tj-sticky-top">
							<h2 className="sec-title text-anim">
								Have questions about your project? We&apos;ve got answers.
							</h2>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6">
						<Accordion>
							<div className="tj-faq">
								<div
									className="accordion tj-faq-style style-2"
									id="accordionExample"
								>
									{faqs.map((faq, idx) => (
										<div
											key={faq.question}
											className="accordion-item wow fadeInUp"
											data-wow-delay={`0.${idx * 2 + 1}s`}
										>
											<h2 className={`accordion-header ${idx === 0 ? "active" : ""}`}>
												<button
													className={`accordion-button ${idx === 0 ? "" : "collapsed"}`}
													data-bs-toggle="collapse"
													data-bs-target={`#collapseOne-${idx + 1}`}
													aria-expanded={idx === 0 ? "true" : "false"}
												>
													{faq.question}
												</button>
											</h2>
											<div
												id={`collapseOne-${idx + 1}`}
												className={`accordion-collapse collapse ${
													idx === 0 ? "show" : ""
												}`}
												data-bs-parent="#accordionExample"
											>
												<div className="accordion-body">
													<p>{faq.answer}</p>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq3;
