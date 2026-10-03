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
        blurb: "Everything you need to ship a first memory loop.",
        href: "https://platform.hypersave.io/signup",
        cta: "Get your API key",
        featured: false,
        items: [
            "2M memory tokens / month",
            "10,000 recalls / month",
            "3 API keys",
            "Facts, knowledge graph, timelines",
            "MCP server + SDKs",
        ],
    },
    {
        name: "Pro",
        price: "$15",
        period: "/mo",
        blurb: "Production apps that remember.",
        href: "https://platform.hypersave.io/signup",
        cta: "Start with Pro",
        featured: true,
        items: [
            "10M memory tokens / month",
            "250,000 recalls / month",
            "10 API keys",
            "10× higher request limits",
            "Priority support",
        ],
    },
    {
        name: "Scale",
        price: "$199",
        period: "/mo",
        blurb: "High-volume products and teams.",
        href: "mailto:sales@hypersave.io?subject=Hypersave%20Scale",
        cta: "Get Scale",
        featured: false,
        items: [
            "200M memory tokens / month",
            "5M recalls / month",
            "100 API keys",
            "30× higher request limits",
            "Dedicated support channel",
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
            "Custom token and recall volumes",
            "Custom data-processing terms (DPA)",
            "SLA and security review",
            "Dedicated support",
        ],
    },
]

const FAQ = [
    {
        q: "What is a memory token?",
        a: "Roughly four characters of text. You use tokens when you save content, and when Hypersave writes an answer for you (the memories it reads count). Plain searches do not use tokens.",
    },
    {
        q: "What is a recall?",
        a: "One search or question against your memory, whether you ask for a written answer or just the matching memories.",
    },
    {
        q: "How do I upgrade?",
        a: "Sign up free, then choose Upgrade in your dashboard. Billing is monthly through Stripe and you can cancel any time.",
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
                        lead="Generous free tier, honest limits, and every memory feature on every plan. Upgrade when you outgrow it — not before."
                    />

                    <div className="mt-16 grid gap-px border border-zinc-200 bg-zinc-200 md:grid-cols-2 lg:grid-cols-4">
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

                    <div className="mt-20 grid gap-10 md:grid-cols-3">
                        {FAQ.map((item) => (
                            <div key={item.q}>
                                <h3 className="text-base font-semibold text-zinc-950">{item.q}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    )
}
