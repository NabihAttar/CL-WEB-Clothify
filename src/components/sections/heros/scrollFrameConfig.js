export const DESKTOP_FRAME_CONFIG = {
	id: "desktop",
	folder: "/frames",
	frameCount: 300,
	scrollHeightVh: 420,
};

export const MOBILE_FRAME_CONFIG = {
	id: "mobile",
	folder: "/responsiveFramers",
	frameCount: 300,
	scrollHeightVh: 420,
};

export const MOBILE_FRAME_BREAKPOINT = 768;

export const getFrameSrc = (config, index) =>
	`${config.folder}/ezgif-frame-${String(index + 1).padStart(3, "0")}.png`;
