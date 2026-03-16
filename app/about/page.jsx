'use client'
import Link from 'next/link'
import { FadeUp, SlideIn, Stagger, StaggerItem } from '@/components/AnimatedSection'

const values = [
  { n:'01', title: 'Integrity First', desc: 'We operate with full transparency and ethical conduct in every investigation. Our reputation is built on trust that is earned case by case.' },
  { n:'02', title: 'Evidence-Driven', desc: 'Every finding is supported by verifiable on-chain data, documented to meet the highest international evidentiary standards.' },
  { n:'03', title: 'Client Confidentiality', desc: 'We treat every case with the same discretion and security protocols used in the most sensitive institutional investigations.' },
  { n:'04', title: 'Relentless Pursuit', desc: 'We do not stop investigating until every available avenue has been exhausted on behalf of the clients we serve.' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="container-wide pt-14 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="pb-12 md:pb-16">
              <FadeUp><span className="section-label mb-3">Who We Are</span></FadeUp>
              <FadeUp delay={0.05}>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-6 leading-tight tracking-tight">
                  The ChainTrace Story
                </h1>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="font-sans text-base text-slate-500 leading-relaxed mb-4">
                  ChainTrace was founded in 2018 by a team of former law enforcement officers, intelligence analysts,
                  and financial crime investigators who recognised a growing crisis: cryptocurrency fraud victims had
                  nowhere to turn.
                </p>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="font-sans text-base text-slate-500 leading-relaxed">
                  Since then, we've grown into a globally recognised digital asset investigation firm — with a
                  dedicated team of 40+ certified analysts serving clients across 40 countries.
                </p>
              </FadeUp>
            </div>
            <SlideIn from="right">
              <img src="/home/about1.jpg"
                   alt="ChainTrace team" className="w-full h-64 md:h-[420px] object-cover" />
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <SlideIn from="left">
              <img src="/home/about2.jpg"
                   alt="Team at work" className="w-full h-64 md:h-[440px] object-cover" />
            </SlideIn>
            <div>
              <FadeUp><span className="section-label mb-3">Our Mission</span></FadeUp>
              <FadeUp delay={0.05}>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-6 leading-tight">
                  Restoring Justice in the Digital Economy
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="font-sans text-sm text-slate-500 leading-relaxed mb-4">
                  We believe the pseudonymous nature of cryptocurrency should not provide impunity for criminals.
                  With the right forensic tools, legal frameworks, and global coordination, stolen assets can be
                  traced and recovered.
                </p>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="font-sans text-sm text-slate-500 leading-relaxed mb-10">
                  Our mission is to bring investigative-grade professionalism to the crypto fraud recovery space —
                  giving victims access to the same quality of investigation previously reserved for banks and
                  government agencies.
                </p>
              </FadeUp>
              <Stagger className="grid grid-cols-2 gap-4">
                {[['2,200+','Cases Closed'],['$8M+','Recovered'],['94%','Satisfaction'],['13+','Countries']].map(([v,l])=>(
                  <StaggerItem key={l}>
                    <div className="p-5 bg-slate-50 border border-slate-100">
                      <p className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-1">{v}</p>
                      <p className="font-sans text-xs text-slate-500">{l}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-slate-50 border-t border-slate-100">
        <div className="container-wide">
          <div className="text-center mb-14">
            <FadeUp><span className="section-label mb-3">Core Values</span></FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900">What We Stand For</h2>
            </FadeUp>
          </div>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(v => (
              <StaggerItem key={v.n}>
                <div className="bg-white p-7 border border-slate-100 border-t-[3px] border-t-navy-700 h-full">
                  <div className="w-8 h-8 bg-navy-900 flex items-center justify-center mb-5">
                    <span className="font-sans text-xs font-bold text-white">{v.n}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-navy-900 mb-3">{v.title}</h3>
                  <p className="font-sans text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20 md:py-28 text-center">
        <div className="container-wide max-w-2xl mx-auto">
          <FadeUp>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">Work With Our Team</h2>
          </FadeUp>
          <FadeUp delay={0.05}>
            <p className="font-sans text-slate-400 text-base leading-relaxed mb-10">
              Speak directly with a senior investigator. Initial consultation is free and fully confidential.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link href="/contact" className="btn-primary bg-white text-navy-900 hover:bg-slate-50">
              Contact Our Team
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
