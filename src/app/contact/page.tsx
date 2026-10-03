"use client"

import { Container, Section, Reveal, Button, Pill } from "../../components/site/ui"

const CHANNELS = [
    { title: "Sales and plans", body: "Volume pricing, Enterprise, or anything about your account.", email: "sales@hypersave.io" },
    { title: "Support", body: "Help with the API, SDKs, MCP, or the dashboard.", email: "hello@hypersave.io" },
    { title: "Security", body: "Report a vulnerability. See our security page for how we handle reports.", email: "hello@hypersave.io" },
]

export default function ContactPage() {
    return (
        <main className="bg-white">
            <section className="relative px-6 pb-8 pt-36 md:pt-44">
                <div className="hairline-grid mask-fade-b pointer-events-none absolute inset-0 opacity-70" />
                <Container className="relative">
                    <Reveal>
                        <Pill>Contact</Pill>
                    </Reveal>
                    <Reveal delay={0.06}>
                        <h1 className="mt-6 max-w-4xl font-display text-[2.75rem] leading-[1.04] text-zinc-950 md:text-7xl">
                            Talk to a <span className="text-accent">human</span>.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.12}>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">
                            We read every email and usually reply within one business day.
                        </p>
                    </Reveal>
                </Container>
            </section>

            <Section className="border-t border-zinc-200">
                <Container>
                    <div className="grid gap-6 md:grid-cols-3">
                        {CHANNELS.map((c) => (
                            <Reveal key={c.title}>
                                <div className="flex h-full flex-col rounded-2xl border border-zinc-200 p-8">
                                    <h3 className="text-lg font-semibold text-zinc-950">{c.title}</h3>
                                    <p className="mt-3 flex-1 leading-relaxed text-zinc-500">{c.body}</p>
                                    <div className="mt-6">
                                        <Button href={`mailto:${c.email}`} arrow>{c.email}</Button>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    )
}
