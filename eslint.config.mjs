import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  {
    ignores: [
      "dist/**/*",
      ".astro/**/*",
      "node_modules/**/*",
      "quer.js",
      "tailwind.config.js"
    ]
  }
];
