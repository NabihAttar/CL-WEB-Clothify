import fs from "fs";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const localCache = path.join(
	process.env.LOCALAPPDATA || path.join(os.homedir(), "AppData", "Local"),
	"clothify-solvior-next"
);

for (const dir of [path.join(projectRoot, ".next"), localCache]) {
	try {
		fs.rmSync(dir, { recursive: true, force: true });
		console.log(`Removed: ${dir}`);
	} catch (error) {
		console.log(`Skipped: ${dir} (${error.message})`);
	}
}
