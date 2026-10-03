import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "Start free with 2M memory tokens and 10,000 recalls a month. Pro is $15/month, Scale $199/month, and Enterprise for volume and compliance.",
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
    return children
}
