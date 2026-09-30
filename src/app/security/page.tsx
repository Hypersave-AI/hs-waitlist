"use client"

import { Container, Section, SectionHeading, SectionLabel, Reveal, Button, Pill } from "../../components/site/ui"

const CONTROLS = [
    {
        title: "Encrypted everywhere",
        body: "All traffic uses TLS. The database runs on encrypted storage, and every backup is encrypted with AWS KMS before it is stored.",
    },
    {
        title: "Isolated per user and namespace",
        body: "Every memory is scoped to its account and namespace. The scope is enforced inside the database write path, not only in the API, and covered by automated tests on every release.",
    },
    {
        title: "Keys never stored in plain text",
        body: "API keys are stored only as hashes and compared in constant time. Revoke a key from the dashboard and it stops working immediately.",
    },
    {
        title: "Resilient by default",
        body: "Hosted on AWS in Stockholm (eu-north-1). The database is replicated across two availability zones with 14 days of point-in-time recovery, plus nightly encrypted backups.",
    },
    {
        title: "You control deletion",
        body: "Delete a memory, a namespace, or everything with one API call. Full erasure removes the data and revokes pending work for that account.",
    },
    {
        title: "Models under enterprise terms",
        body: "Memory is processed by Microsoft Azure OpenAI (EU data zone) and Google Vertex AI under their enterprise API terms, which do not use customer data to train models.",
    },
]

export default function SecurityPage() {
    return (
        <main className="bg-white">
            <section className="relative px-6 pb-8 pt-36 md:pt-44">
                <div className="hairline-grid mask-fade-b pointer-events-none absolute inset-0 opacity-70" />
                <Container className="relative">
                    <Reveal>
                        <Pill>Security</Pill>
                    </Reveal>
                    <Reveal delay={0.06}>
                        <h1 className="mt-6 max-w-4xl font-display text-[2.75rem] leading-[1.04] text-zinc-950 md:text-7xl">
                            Your memory stays <span className="text-accent">yours</span>.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.12}>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">
                            How Hypersave protects the data you store, and how to reach us about a security issue.
                        </p>
                    </Reveal>
                </Container>
            </section>

            <Section className="border-t border-zinc-200">
                <Container>
                    <SectionLabel index="01 / 02">Controls</SectionLabel>
                    <SectionHeading title={<>What is in place <span className="text-accent">today</span>.</>} />
                    <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 md:grid-cols-2">
                        {CONTROLS.map((c) => (
                            <Reveal key={c.title}>
                                <div className="h-full bg-white p-8">
                                    <h3 className="text-lg font-semibold text-zinc-950">{c.title}</h3>
                                    <p className="mt-3 leading-relaxed text-zinc-500">{c.body}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section className="border-t border-zinc-200">
                <Container>
                    <SectionLabel index="02 / 02">Report an issue</SectionLabel>
                    <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                        <SectionHeading title={<>Found something? <span className="text-accent">Tell us</span>.</>} />
                        <Reveal>
                            <div className="space-y-6 text-lg leading-relaxed text-zinc-500">
                                <p>
                                    Email a description and steps to reproduce. We acknowledge reports within two
                                    business days and will keep you updated until the issue is resolved. Please do
                                    not access other users&apos; data or degrade the service while testing.
                                </p>
                                <p>
                                    Details on the providers that process data are in our{" "}
                                    <a className="text-zinc-900 underline" href="https://docs.hypersave.io/legal/privacy">privacy policy</a>.
                                </p>
                                <Button href="mailto:hello@hypersave.io?subject=Security%20report" size="lg" arrow>
                                    Report a vulnerability
                                </Button>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </Section>
        </main>
    )
}
