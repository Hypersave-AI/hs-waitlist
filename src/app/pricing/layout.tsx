import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "Start free on Hypersave. Pro is $29/month for production apps. Enterprise for volume, compliance, and dedicated support.",
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
    return children
}
