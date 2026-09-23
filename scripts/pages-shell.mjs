import { copyFileSync, writeFileSync } from "node:fs";

copyFileSync("dist/client/_shell.html", "dist/client/index.html");
copyFileSync("dist/client/_shell.html", "dist/client/404.html");
writeFileSync("dist/client/.nojekyll", "");
