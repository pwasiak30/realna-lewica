import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const dir = "public/ustawy";
if (!existsSync(dir)) process.exit(0);
for (const name of readdirSync(dir)) {
  if (!name.endsWith(".pdf.b64")) continue;
  const src = join(dir, name);
  const dest = join(dir, name.slice(0, -4));
  writeFileSync(dest, Buffer.from(readFileSync(src, "utf8"), "base64"));
  console.log("ustawy: decoded", name, "->", name.slice(0, -4));
}
