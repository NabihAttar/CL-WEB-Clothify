"use client";

import { useEffect, useState } from "react";
import ScrollFrameShowcase from "./ScrollFrameShowcase";
import {
	DESKTOP_FRAME_CONFIG,
	MOBILE_FRAME_BREAKPOINT,
	MOBILE_FRAME_CONFIG,
} from "./scrollFrameConfig";

const SonicWaveHero = () => {
	const [frameConfig, setFrameConfig] = useState(DESKTOP_FRAME_CONFIG);

	useEffect(() => {
		const mq = window.matchMedia(`(max-width: ${MOBILE_FRAME_BREAKPOINT - 1}px)`);
		const update = () => {
			setFrameConfig(mq.matches ? MOBILE_FRAME_CONFIG : DESKTOP_FRAME_CONFIG);
		};

		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, []);

	return <ScrollFrameShowcase key={frameConfig.id} config={frameConfig} />;
};

export default SonicWaveHero;
