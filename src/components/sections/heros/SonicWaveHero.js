"use client";

import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "framer-motion";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import "./sonic-wave.css";

const inter = Inter({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-inter",
	display: "swap",
});

const FRAME_COUNT = 240;
const BG_COLOR = "#050505";
const SCROLL_HEIGHT_VH = 420;

const frameSrc = (index) =>
	`/frames/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;

const SonicWaveHero = () => {
	const containerRef = useRef(null);
	const canvasRef = useRef(null);
	const imagesRef = useRef([]);
	const frameRef = useRef(0);
	const rafRef = useRef(null);
	const loadPromisesRef = useRef(new Map());
	const loadedCountRef = useRef(0);
	const drawFrameRef = useRef(null);
	const resizeCanvasRef = useRef(null);
	const loadFrameRef = useRef(null);
	const [isReady, setIsReady] = useState(false);
	const [loadProgress, setLoadProgress] = useState(0);
	const [loadError, setLoadError] = useState(null);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	const introOpacity = useTransform(scrollYProgress, [0, 0.08, 0.14], [1, 1, 0]);
	const introY = useTransform(scrollYProgress, [0, 0.14], [0, -40]);
	const taglineOpacity = useTransform(
		scrollYProgress,
		[0.18, 0.28, 0.42, 0.52],
		[0, 1, 1, 0],
	);
	const taglineY = useTransform(scrollYProgress, [0.18, 0.52], [48, -32]);
	const productOpacity = useTransform(
		scrollYProgress,
		[0.48, 0.58, 0.72, 0.82],
		[0, 1, 1, 0],
	);
	const productY = useTransform(scrollYProgress, [0.48, 0.82], [56, -24]);
	const ctaOpacity = useTransform(scrollYProgress, [0.78, 0.88, 1], [0, 1, 1]);
	const ctaY = useTransform(scrollYProgress, [0.78, 1], [40, 0]);
	const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

	const drawFrame = useCallback((index) => {
		const canvas = canvasRef.current;
		const img = imagesRef.current[index];
		if (!canvas || !img || !img.naturalWidth) return;

		const ctx = canvas.getContext("2d", { alpha: false });
		if (!ctx) return;

		const rect = canvas.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;

		ctx.fillStyle = BG_COLOR;
		ctx.fillRect(0, 0, width, height);

		const scale = Math.min(width / img.naturalWidth, height / img.naturalHeight);
		const drawW = img.naturalWidth * scale;
		const drawH = img.naturalHeight * scale;
		const offsetX = (width - drawW) / 2;
		const offsetY = (height - drawH) / 2;

		ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
	}, []);

	const resizeCanvas = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		const rect = canvas.getBoundingClientRect();
		canvas.width = Math.floor(rect.width * dpr);
		canvas.height = Math.floor(rect.height * dpr);

		const ctx = canvas.getContext("2d", { alpha: false });
		if (ctx) {
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.scale(dpr, dpr);
		}

		drawFrame(frameRef.current);
	}, [drawFrame]);

	drawFrameRef.current = drawFrame;
	resizeCanvasRef.current = resizeCanvas;

	const markFrameLoaded = useCallback(() => {
		loadedCountRef.current += 1;
		const pct = Math.round((loadedCountRef.current / FRAME_COUNT) * 100);
		setLoadProgress(pct);
	}, []);

	const loadFrame = useCallback(
		(index) => {
			if (imagesRef.current[index]?.naturalWidth) {
				return Promise.resolve(imagesRef.current[index]);
			}

			const existing = loadPromisesRef.current.get(index);
			if (existing) return existing;

			const promise = new Promise((resolve, reject) => {
				const src = frameSrc(index);
				const img = new Image();

				const finish = (success) => {
					if (success && img.naturalWidth) {
						imagesRef.current[index] = img;
						markFrameLoaded();
						resolve(img);
					} else {
						reject(new Error(`Failed to load frame ${index + 1}`));
					}
				};

				const timeoutId = window.setTimeout(() => finish(false), 20000);

				img.onload = () => {
					window.clearTimeout(timeoutId);
					finish(true);
				};
				img.onerror = () => {
					window.clearTimeout(timeoutId);
					finish(false);
				};

				img.src = src;
			}).catch(async () => {
				const response = await fetch(frameSrc(index));
				if (!response.ok) throw new Error(`HTTP ${response.status}`);
				const blob = await response.blob();
				const objectUrl = URL.createObjectURL(blob);
				return new Promise((resolve, reject) => {
					const img = new Image();
					img.onload = () => {
						URL.revokeObjectURL(objectUrl);
						imagesRef.current[index] = img;
						markFrameLoaded();
						resolve(img);
					};
					img.onerror = () => {
						URL.revokeObjectURL(objectUrl);
						reject(new Error(`Failed to load frame ${index + 1}`));
					};
					img.src = objectUrl;
				});
			});

			loadPromisesRef.current.set(index, promise);
			return promise;
		},
		[markFrameLoaded],
	);

	loadFrameRef.current = loadFrame;

	useEffect(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const update = () => setPrefersReducedMotion(mq.matches);
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, []);

	useEffect(() => {
		let disposed = false;
		imagesRef.current = new Array(FRAME_COUNT).fill(null);
		loadPromisesRef.current.clear();
		loadedCountRef.current = 0;

		const boot = async () => {
			try {
				setLoadProgress(1);
				await loadFrameRef.current(0);
				if (disposed) return;

				setIsReady(true);
				setLoadError(null);
				requestAnimationFrame(() => {
					resizeCanvasRef.current?.();
					drawFrameRef.current?.(0);
				});

				const batchSize = 16;
				for (let i = 1; i < FRAME_COUNT; i += batchSize) {
					if (disposed) return;
					const batch = [];
					for (let j = i; j < Math.min(i + batchSize, FRAME_COUNT); j += 1) {
						batch.push(loadFrameRef.current(j).catch(() => null));
					}
					await Promise.all(batch);
				}
			} catch {
				if (!disposed) {
					setLoadError(
						"Could not load animation frames. Check that /public/frames exists.",
					);
				}
			}
		};

		boot();

		return () => {
			disposed = true;
		};
	}, []);

	useEffect(() => {
		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);
		return () => window.removeEventListener("resize", resizeCanvas);
	}, [resizeCanvas, isReady]);

	useMotionValueEvent(scrollYProgress, "change", (progress) => {
		if (!isReady || prefersReducedMotion) return;

		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		rafRef.current = requestAnimationFrame(() => {
			const frame = Math.min(
				FRAME_COUNT - 1,
				Math.max(0, Math.round(progress * (FRAME_COUNT - 1))),
			);
			if (frame === frameRef.current) return;

			frameRef.current = frame;

			if (imagesRef.current[frame]?.naturalWidth) {
				drawFrame(frame);
				return;
			}

			loadFrame(frame).then(() => {
				if (frameRef.current === frame) drawFrame(frame);
			});
		});
	});

	useEffect(() => {
		if (isReady && prefersReducedMotion) {
			frameRef.current = FRAME_COUNT - 1;
			drawFrame(FRAME_COUNT - 1);
		}
	}, [isReady, prefersReducedMotion, drawFrame]);

	return (
		<section
			ref={containerRef}
			className={`sonic-wave-hero ${inter.variable}`}
			style={{
				height: `${SCROLL_HEIGHT_VH}vh`,
				backgroundColor: BG_COLOR,
			}}
			aria-label="SonicWave Pro interactive product showcase"
		>
			<div
				className="sonic-wave-hero__sticky"
				style={{ backgroundColor: BG_COLOR }}
			>
				<canvas
					ref={canvasRef}
					className="sonic-wave-hero__canvas"
					aria-hidden="true"
				/>

				{!isReady && (
					<div
						className="sonic-wave-hero__loader"
						style={{ backgroundColor: BG_COLOR }}
						role="status"
						aria-live="polite"
						aria-busy={!loadError}
					>
						<div className="sonic-wave-hero__loader-bar">
							<div
								className="sonic-wave-hero__loader-fill"
								style={{ width: `${Math.max(loadProgress, 2)}%` }}
							/>
						</div>
						<p className="sonic-wave-hero__loader-text">
							{loadError ||
								(loadProgress > 0
									? `Loading experience ${loadProgress}%`
									: "Loading experience…")}
						</p>
					</div>
				)}

				<div className="sonic-wave-hero__overlay">
					<motion.div
						style={{ opacity: introOpacity, y: introY }}
						className="sonic-wave-hero__intro"
					>
						<p className="sonic-wave-hero__eyebrow">Premium Wireless Audio</p>
						<h1 className="sonic-wave-hero__title">SonicWave Pro</h1>
					</motion.div>

					<div className="sonic-wave-hero__center">
						<motion.p
							style={{ opacity: taglineOpacity, y: taglineY }}
							className="sonic-wave-hero__tagline"
						>
							Sound Redefined
						</motion.p>
						<motion.div
							style={{ opacity: productOpacity, y: productY }}
							className="sonic-wave-hero__product"
						>
							<p className="sonic-wave-hero__eyebrow">Engineered Inside</p>
							<p className="sonic-wave-hero__product-title">
								Every component, perfected.
							</p>
							<p className="sonic-wave-hero__product-desc">
								Scroll through the architecture of adaptive drivers, spatial
								processing, and acoustic chambers — precision you can see.
							</p>
						</motion.div>
					</div>

					<motion.div
						style={{ opacity: ctaOpacity, y: ctaY }}
						className="sonic-wave-hero__cta"
					>
						<div>
							<p className="sonic-wave-hero__cta-title">
								Experience SonicWave Pro
							</p>
							<p className="sonic-wave-hero__cta-sub">
								From $349 · Free express shipping
							</p>
						</div>
						<div className="sonic-wave-hero__cta-actions">
							<Link
								href="/contact"
								className="sonic-wave-hero__btn sonic-wave-hero__btn--primary"
							>
								Pre-order Now
							</Link>
							<Link
								href="/shop"
								className="sonic-wave-hero__btn sonic-wave-hero__btn--ghost"
							>
								Explore Specs
							</Link>
						</div>
					</motion.div>

					<motion.div
						style={{ opacity: scrollHintOpacity }}
						className="sonic-wave-hero__scroll-hint"
						aria-hidden={!isReady}
					>
						<span className="sonic-wave-hero__scroll-label">
							Scroll to Explore
						</span>
						<div className="sonic-wave-hero__scroll-mouse">
							<div className="sonic-scroll-line" />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default SonicWaveHero;
