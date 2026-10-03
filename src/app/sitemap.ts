import type { MetadataRoute } from "next"

const BASE = "https://hypersave.io"
const PAGES = ["", "/features", "/how-it-works", "/developers", "/pricing", "/about", "/security", "/contact"]

export default function sitemap(): MetadataRoute.Sitemap {
    return PAGES.map((path) => ({ url: `${BASE}${path}`, changeFrequency: "weekly", priority: path === "" ? 1 : 0.7 }))
}
