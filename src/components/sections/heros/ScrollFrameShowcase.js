"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { Inter } from "next/font/google";
import { useCallback, useEffect, useRef, useState } from "react";
import { getFrameSrc } from "./scrollFrameConfig";
import "./sonic-wave.css";

const inter = Inter({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-inter",
	display: "swap",
});

const BG_COLOR = "#050505";

const ScrollFrameShowcase = ({ config }) => {
	const { frameCount, scrollHeightVh } = config;
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
	const configRef = useRef(config);
	const [isReady, setIsReady] = useState(false);
	const [loadProgress, setLoadProgress] = useState(0);
	const [loadError, setLoadError] = useState(null);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

	configRef.current = config;

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

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

		const scale = Math.max(width / img.naturalWidth, height / img.naturalHeight);
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
		const pct = Math.round((loadedCountRef.current / frameCount) * 100);
		setLoadProgress(pct);
	}, [frameCount]);

	const loadFrame = useCallback(
		(index) => {
			if (imagesRef.current[index]?.naturalWidth) {
				return Promise.resolve(imagesRef.current[index]);
			}

			const existing = loadPromisesRef.current.get(index);
			if (existing) return existing;

			const promise = new Promise((resolve, reject) => {
				const src = getFrameSrc(configRef.current, index);
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
				const src = getFrameSrc(configRef.current, index);
				const response = await fetch(src);
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
		imagesRef.current = new Array(frameCount).fill(null);
		loadPromisesRef.current.clear();
		loadedCountRef.current = 0;
		frameRef.current = 0;
		setIsReady(false);
		setLoadProgress(0);
		setLoadError(null);

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
				for (let i = 1; i < frameCount; i += batchSize) {
					if (disposed) return;
					const batch = [];
					for (let j = i; j < Math.min(i + batchSize, frameCount); j += 1) {
						batch.push(loadFrameRef.current(j).catch(() => null));
					}
					await Promise.all(batch);
				}
			} catch {
				if (!disposed) {
					setLoadError(
						`Could not load animation frames. Check that ${config.folder} contains ezgif-frame-001.png through frame ${frameCount}.`,
					);
				}
			}
		};

		boot();

		return () => {
			disposed = true;
		};
	}, [config.id, config.folder, frameCount]);

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
				frameCount - 1,
				Math.max(0, Math.round(progress * (frameCount - 1))),
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
			frameRef.current = frameCount - 1;
			drawFrame(frameCount - 1);
		}
	}, [isReady, prefersReducedMotion, drawFrame, frameCount]);

	return (
		<section
			ref={containerRef}
			className={`sonic-wave-hero sonic-wave-hero--${config.id} ${inter.variable}`}
			style={{
				height: `${scrollHeightVh}vh`,
				backgroundColor: BG_COLOR,
			}}
			aria-label="Interactive scroll animation showcase"
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
			</div>
		</section>
	);
};

export default ScrollFrameShowcase;
