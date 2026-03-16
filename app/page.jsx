'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FadeUp, FadeIn, SlideIn, Stagger, StaggerItem, ScaleIn } from '@/components/AnimatedSection'
import Image from 'next/image'

const stats = [
  { value: '2,200+', label: 'Cases Investigated' },
  { value: '$8M+', label: 'Assets Recovered' },
  { value: '94%', label: 'Client Satisfaction' },
  { value: '13+', label: 'Countries Served' },
]

const steps = [
  { n: '01', title: 'Submit Your Case', desc: 'Complete our secure intake form with incident details — transaction hashes, wallet addresses, platform names, and any communications from perpetrators.' },
  { n: '02', title: 'Blockchain Investigation', desc: 'Our forensic analysts trace assets across multiple blockchains, identify wallet clusters, attribute exchanges, and build a complete picture of the asset trail.' },
  { n: '03', title: 'Recovery Assistance', desc: 'We coordinate with exchanges, legal authorities, and institutions to pursue recovery using documented forensic evidence.' },
]

const services = [
  { title: 'Cryptocurrency Tracking', desc: 'Advanced on-chain analytics to follow digital assets across Bitcoin, Ethereum, and 50+ blockchain networks. We map transaction flows and identify wallet clusters.', img: '/home/crpto.jpg', href: '/services/crypto-tracking' },
  { title: 'Asset & Fund Recovery', desc: 'Structured recovery combining forensics, exchange coordination, and legal support to reclaim stolen or defrauded digital assets through every available channel.', img: '/home/asset.jpg', href: '/services/fund-recovery' },
  { title: 'Cyber Intelligence', desc: 'OSINT-driven intelligence and dark web monitoring to identify, profile, and expose threat actors operating in the cryptocurrency space.', img: '/home/cyber.jpg', href: '/services/cyber-intelligence' },
]

const trust = [
  { icon: '🔍', title: 'Forensic-Grade Analysis', desc: 'We use Chainalysis and proprietary tooling to build airtight, court-ready evidence chains.' },
  { icon: '🔒', title: 'Strict Confidentiality', desc: 'Every case is handled under NDA with end-to-end encryption protecting all client data.' },
  { icon: '⚖️', title: 'Legal Compliance', desc: 'Our reports are court-admissible. We collaborate with law enforcement and specialist legal counsel.' },
  { icon: '🌐', title: 'Global Network', desc: 'Exchange partnerships and regulatory contacts across 40+ countries for cross-border recovery.' },
]

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="container-wide pt-16 pb-0 md:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div className="pb-12 md:pb-16">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="section-label mb-4"
              >
                Blockchain Forensics & Recovery
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.19,1,0.22,1] }}
                className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-navy-900
                           leading-[1.15] tracking-tight mb-6 text-balance"
              >
                Professional Cryptocurrency{' '}
                <span className="text-navy-500 italic">Investigation</span>{' '}
                and Recovery Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-sans text-base sm:text-lg text-slate-500 leading-relaxed mb-8 max-w-xl"
              >
                ChainTrace deploys advanced blockchain forensics and cyber intelligence to investigate
                stolen, lost, or fraudulently obtained digital assets — helping victims recover what
                is rightfully theirs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <Link href="/services" className="btn-primary">
                  Explore Services
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/contact" className="btn-outline">Free Consultation</Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-wrap gap-5"
              >
                {['Chainalysis Certified', 'ISO 27001', 'GDPR Compliant'].map(b => (
                  <span key={b} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-navy-500 rounded-full" />
                    <span className="font-sans text-xs text-slate-500 font-medium">{b}</span>
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.19,1,0.22,1] }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[500px] overflow-hidden">
               <Image src="/home/blockchain.jpg" height={900} width={600} alt="blockchain tracking"  className="w-full h-full object-cover"></Image>          
                
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-navy-900 py-10">
        <div className="container-wide">
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
            {stats.map(s => (
              <StaggerItem key={s.label}>
                <p className="font-display text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</p>
                <p className="font-sans text-xs text-slate-400 tracking-wider uppercase">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <FadeUp><span className="section-label mb-3">Our Process</span></FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">How ChainTrace Works</h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="font-sans text-slate-500 text-base max-w-lg mx-auto leading-relaxed">
                A structured, evidence-based approach to blockchain investigation and asset recovery.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {steps.map((step, i) => (
              <FadeUp key={step.n} delay={i * 0.1}>
                <div className="px-6 md:px-10 py-8 md:py-0">
                  <div className="flex gap-5 items-start">
                    <span className="font-display text-4xl md:text-5xl font-bold text-slate-100 leading-none flex-shrink-0 select-none">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">{step.title}</h3>
                      <p className="font-sans text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section-pad bg-slate-50">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <FadeUp><span className="section-label mb-2">What We Do</span></FadeUp>
              <FadeUp delay={0.05}>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900">Investigation Services</h2>
              </FadeUp>
            </div>
            <FadeUp>
              <Link href="/services" className="font-sans text-sm font-medium text-navy-500 flex items-center gap-1.5 hover:text-navy-700 transition-colors">
                View All Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </FadeUp>
          </div>

          <div className="flex flex-col gap-px">
            {services.map((svc, i) => (
              <FadeIn key={svc.href} delay={i * 0.08}>
                <div className={`grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden group
                                 ${i % 2 !== 0 ? 'md:[direction:rtl]' : ''}`}>
                  <div className="md:[direction:ltr] h-56 md:h-[320px] overflow-hidden">
                    <motion.img
                      src={svc.img}
                      alt={svc.title}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:[direction:ltr] p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="font-display text-2xl md:text-[1.6rem] font-semibold text-navy-900 mb-4">{svc.title}</h3>
                    <p className="font-sans text-sm text-slate-500 leading-relaxed mb-6">{svc.desc}</p>
                    <Link
                      href={svc.href}
                      className="font-sans text-sm font-semibold text-navy-700 flex items-center gap-2
                                 group-hover:gap-3 transition-all duration-200"
                    >
                      Learn More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section-pad bg-white overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <SlideIn from="left">
              <div>
                <span className="section-label mb-4">Why ChainTrace</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-6 leading-tight">
                  Investigation-Grade Security and Professionalism
                </h2>
                <p className="font-sans text-slate-500 text-sm leading-relaxed mb-10">
                  Every ChainTrace investigation is led by certified blockchain forensic analysts with backgrounds in
                  cybersecurity, financial crime, and law enforcement. Our methods meet international evidentiary standards.
                </p>
                <div className="flex flex-col gap-6">
                  {trust.map(t => (
                    <div key={t.title} className="flex gap-4">
                      <span className="text-2xl flex-shrink-0 mt-0.5">{t.icon}</span>
                      <div>
                        <h4 className="font-display text-base font-semibold text-navy-900 mb-1">{t.title}</h4>
                        <p className="font-sans text-sm text-slate-500 leading-relaxed">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>

            <SlideIn from="right">
              <div className="relative">
                <img
                  src="/home/investigation.jpg"
                  alt="Investigation team"
                  className="w-full h-[460px] object-cover"
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -top-5 -right-5 bg-navy-900 px-7 py-6 hidden sm:block"
                >
                  <p className="font-display text-4xl font-bold text-white mb-1">94%</p>
                  <p className="font-sans text-xs text-slate-400 max-w-[110px] leading-relaxed">Client satisfaction across all cases</p>
                </motion.div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20 md:py-28">
        <div className="container-wide text-center">
          <FadeUp>
            <span className="section-label text-navy-300 mb-4">Get Started</span>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 text-balance">
              Ready to Investigate Your Case?
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-sans text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Our certified blockchain forensic analysts are ready to review your case. Initial consultation is free and fully confidential.
            </p>
          </FadeUp>
          <FadeUp delay={0.15} className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-navy-900 hover:bg-slate-50 hover:shadow-white/20">
              Start Free Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/services" className="btn-ghost-white">View All Services</Link>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
