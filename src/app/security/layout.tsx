import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Security",
    description:
        "How Hypersave protects your memory: encryption, per-user isolation, hashed API keys, EU-hosted infrastructure, backups, and how to report a vulnerability.",
}

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
    return children
}
