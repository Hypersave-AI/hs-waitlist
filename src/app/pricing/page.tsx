"use client"

import { Check } from "lucide-react"
import {
    Container,
    Section,
    SectionHeading,
    Button,
} from "../../components/site/ui"

const PLANS = [
    {
        name: "Free",
        price: "$0",
        period: "/mo",
        blurb: "Ship a first memory loop.",
        href: "https://platform.hypersave.io/signup",
        cta: "Get your API key",
        featured: false,
        items: [
            "1M tokens / month",
            "3 API keys",
            "Memory app — save, ask, inspect",
            "MCP + SDK quickstart",
        ],
    },
    {
        name: "Pro",
        price: "$29",
        period: "/mo",
        blurb: "Production apps that remember.",
        href: "mailto:sales@hypersave.io?subject=Hypersave%20Pro%20access",
        cta: "Request Pro",
        featured: true,
        items: [
            "5M tokens / month",
            "10 API keys",
            "Priority support",
            "Knowledge graph + analytics",
        ],
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        blurb: "Volume, compliance, a named owner.",
        href: "mailto:sales@hypersave.io",
        cta: "Talk to us",
        featured: false,
        items: [
            "10M tokens / month included",
            "100 API keys",
            "Dedicated support",
            "Compliance workflows + SLAs",
        ],
    },
]

export default function PricingPage() {
    return (
        <main className="bg-white">
            <Section className="pt-36 md:pt-44">
                <Container>
                    <SectionHeading
                        eyebrow="Pricing"
                        title={
                            <>
                                Start free.
                                <br />
                                Pay when memory is working.
                            </>
                        }
                        lead="Same API. Same Memory app. Upgrade when you outgrow the free tier — not before."
                    />

                    <div className="mt-16 grid gap-px border border-zinc-200 bg-zinc-200 md:grid-cols-3">
                        {PLANS.map((plan) => (
                            <div
                                key={plan.name}
                                className={`flex flex-col bg-white p-8 ${plan.featured ? "ring-2 ring-inset ring-zinc-950" : ""}`}
                            >
                                {plan.featured ? (
                                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                                        Most used
                                    </p>
                                ) : (
                                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                                        {plan.name}
                                    </p>
                                )}
                                <h2 className="mt-4 font-display text-2xl text-zinc-950">{plan.name}</h2>
                                <p className="mt-2 text-sm text-zinc-500">{plan.blurb}</p>
                                <p className="mt-8 font-display text-4xl text-zinc-950">
                                    {plan.price}
                                    {plan.period ? (
                                        <span className="text-base font-normal text-zinc-400">{plan.period}</span>
                                    ) : null}
                                </p>
                                <ul className="mt-8 flex-1 space-y-3">
                                    {plan.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-700">
                                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10">
                                    <Button
                                        href={plan.href}
                                        variant={plan.featured ? "primary" : "ghost"}
                                        arrow
                                    >
                                        {plan.cta}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    )
}
