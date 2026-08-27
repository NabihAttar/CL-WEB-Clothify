"use client";

import { useLayoutEffect, useState } from "react";

const CONSENT_KEY = "clothify-cookie-consent-v2";

const acceptCookies = () => {
	localStorage.setItem(CONSENT_KEY, "accepted");
	document.cookie =
		"clothify_cookie_consent=accepted; path=/; max-age=31536000; SameSite=Lax";
};

const CookieIcon = () => (
	<svg
		className="cookie-consent__icon-svg"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			d="M12 2C8.5 2 5.5 4.2 4.3 7.4C3.5 7.1 2.7 7 2 7.1C2 7.1 1 12 5 15.5C7.5 17.5 10 18 12 18C17 18 22 14 22 9C22 5.1 17.4 2 12 2Z"
			fill="currentColor"
			opacity="0.15"
		/>
		<path
			d="M12 2C8.5 2 5.5 4.2 4.3 7.4C3.5 7.1 2.7 7 2 7.1C2 7.1 1 12 5 15.5C7.5 17.5 10 18 12 18C17 18 22 14 22 9C22 5.1 17.4 2 12 2Z"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinejoin="round"
		/>
		<circle cx="8" cy="10" r="1" fill="currentColor" />
		<circle cx="12" cy="8" r="1" fill="currentColor" />
		<circle cx="15" cy="11" r="1" fill="currentColor" />
		<circle cx="10" cy="14" r="1" fill="currentColor" />
		<circle cx="14" cy="14" r="1" fill="currentColor" />
	</svg>
);

const CookieConsent = () => {
	const [visible, setVisible] = useState(false);

	useLayoutEffect(() => {
		try {
			const hasConsent = localStorage.getItem(CONSENT_KEY);
			setVisible(!hasConsent);
		} catch {
			setVisible(true);
		}
	}, []);

	const handleChoice = () => {
		acceptCookies();
		setVisible(false);
	};

	if (!visible) {
		return null;
	}

	return (
		<div
			className="cookie-consent"
			role="dialog"
			aria-live="polite"
			aria-label="Cookie consent"
		>
			<div className="cookie-consent__bar">
				<div className="cookie-consent__accent" aria-hidden="true" />

				<div className="cookie-consent__inner">
					<div className="cookie-consent__content">
						<div className="cookie-consent__icon-wrap">
							<CookieIcon />
						</div>

						<div className="cookie-consent__body">
							<span className="cookie-consent__badge">Cookie Notice</span>
							<h3 className="cookie-consent__title">
								We value your privacy
							</h3>
							<p className="cookie-consent__text">
								We use cookies to enhance your browsing experience and analyze
								site traffic. Choose an option below to continue.
							</p>
						</div>
					</div>

					<div className="cookie-consent__actions">
						<button
							type="button"
							className="cookie-consent__btn cookie-consent__btn--reject"
							onClick={handleChoice}
						>
							Reject
						</button>
						<button
							type="button"
							className="cookie-consent__btn cookie-consent__btn--accept"
							onClick={handleChoice}
						>
							Accept
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CookieConsent;
