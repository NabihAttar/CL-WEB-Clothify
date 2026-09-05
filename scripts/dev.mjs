import { execSync, spawn } from "child_process";
import fs from "fs";
import path from "path";
import { setTimeout } from "timers/promises";
import { fileURLToPath } from "url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sessionCache = path.join(projectRoot, `.next-${Date.now()}`);
const nextBin = path.join(projectRoot, "node_modules", "next", "dist", "bin", "next");
const extraArgs = process.argv.slice(2);

function stopExistingDevServers() {
	if (process.platform !== "win32") {
		return;
	}

	const projectName = path.basename(projectRoot).toLowerCase();

	for (const port of [3000, 3001, 3002]) {
		try {
			execSync(
				`powershell -NoProfile -Command "$procs = Get-NetTCPConnection -LocalPort ${port} -State Listen -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique; foreach ($pid in $procs) { $cmd = (Get-CimInstance Win32_Process -Filter \"ProcessId = $pid\" -ErrorAction SilentlyContinue | Select-Object -ExpandProperty CommandLine); if (-not $cmd) { continue }; $cmdLower = $cmd.ToLower(); if ($cmdLower.Contains('node_modules\\next') -or $cmdLower.Contains('next dev') -or $cmdLower.Contains('${projectName}')) { Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue } }"`,
				{ stdio: "ignore" }
			);
		} catch {
			// Port is free or no matching server was found.
		}
	}
}

function cleanOldCaches() {
	try {
		for (const name of fs.readdirSync(projectRoot)) {
			if (!name.startsWith(".next")) {
				continue;
			}

			const cachePath = path.join(projectRoot, name);
			if (cachePath === sessionCache) {
				continue;
			}

			try {
				fs.rmSync(cachePath, { recursive: true, force: true });
				console.log(`Removed old cache: ${name}`);
			} catch {
				// Old cache may still be locked; skip it.
			}
		}
	} catch {
		// Ignore cleanup failures.
	}
}

console.log("Stopping existing dev servers...");
stopExistingDevServers();
await setTimeout(1500);

console.log("Cleaning old Next.js caches...");
cleanOldCaches();

console.log(`Using cache: ${path.basename(sessionCache)}`);
console.log("Starting Next.js dev server...\n");

const child = spawn(process.execPath, [nextBin, "dev", ...extraArgs], {
	cwd: projectRoot,
	stdio: "inherit",
	env: {
		...process.env,
		CLOTHIFY_NEXT_CACHE: sessionCache,
		NEXT_TELEMETRY_DISABLED: "1",
	},
});

child.on("exit", (code) => {
	process.exit(code ?? 0);
});
