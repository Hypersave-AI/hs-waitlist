import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact",
    description: "Reach the Hypersave team about sales, support, or security.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children
}
