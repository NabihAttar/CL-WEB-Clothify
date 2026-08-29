import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const cacheDir = process.env.CLOTHIFY_NEXT_CACHE
	? path.resolve(process.env.CLOTHIFY_NEXT_CACHE)
	: path.join(projectRoot, ".next");

const distDir = path.relative(projectRoot, cacheDir).split(path.sep).join("/") || ".next";

const nextConfig: NextConfig = {
	distDir,
	eslint: {
		ignoreDuringBuilds: true,
	},
	reactStrictMode: false,
	turbopack: {
		root: projectRoot,
	},
};

export default nextConfig;
