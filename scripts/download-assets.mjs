import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

/* TODO: Replace with Simon's asset CDN */
const CDN = "https://pub-0c00865d02c1476494008dbb74525b2a.r2.dev";

const assets = {
  "public/images": [
    "dex.png",
    "daylight.png",
    "workmate.png",
    "slingshot.png",
    "patreon.png",
    "about-light.jpg",
    "about-dark.jpg",
    "testimonial-5.png",
    "testimonial-3.png",
    "testimonial-2.png",
    "natasha-awasthi-1.webp",
    "sandeep-rajan-1.jpg",
    "tanuj-lalwani-1.jpg",
  ],
  "public/images/logos": [
    "National Design Studio.svg",
    "facebook.svg",
    "patreon.svg",
    "Daylight.svg",
    "Google Ventures.svg",
    "Slingshot AI.svg",
    "SuperMe.svg",
    "World Playground.svg",
    "workmate.svg",
  ],
  "public/seo": [
    "favicon.png",
    "apple touch icon.png",
    "social-preview-1.png",
  ],
};

async function download(url, dest) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    console.log(`✓ ${dest}`);
  } catch (e) {
    console.error(`✗ ${dest}: ${e.message}`);
  }
}

async function main() {
  for (const [dir, files] of Object.entries(assets)) {
    if (!existsSync(dir)) await mkdir(dir, { recursive: true });
  }

  const tasks = [];
  for (const [dir, files] of Object.entries(assets)) {
    for (const file of files) {
      const url = `${CDN}/${encodeURIComponent(file).replace(/%20/g, "%20")}`;
      const dest = path.join(dir, file);
      tasks.push({ url, dest });
    }
  }

  // Download 4 at a time
  for (let i = 0; i < tasks.length; i += 4) {
    const batch = tasks.slice(i, i + 4);
    await Promise.all(batch.map((t) => download(t.url, t.dest)));
  }

  console.log("\nDone!");
}

main();
