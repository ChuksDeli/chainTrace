'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FadeUp, Stagger, StaggerItem } from '@/components/AnimatedSection'

const services = [
  { n:'01', title:'Cryptocurrency Tracking', desc:'Advanced on-chain analysis to trace digital assets across Bitcoin, Ethereum, and 50+ blockchains. We map transaction flows, identify wallet clusters, and produce court-ready reports.', items:['Multi-chain transaction tracing','Wallet cluster identification','Exchange attribution','Court-admissible reports','Real-time wallet alerts'], img:'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=85', href:'/services/crypto-tracking' },
  { n:'02', title:'Asset & Fund Recovery', desc:'Structured recovery combining blockchain forensics, exchange coordination, and legal support to maximize the chances of reclaiming stolen digital assets.', items:['Stolen crypto recovery','Exchange freeze requests','International legal coordination','Insurance claim support','End-to-end case management'], img:'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=85', href:'/services/fund-recovery' },
  { n:'03', title:'Binary Options Scam Investigation', desc:'Comprehensive investigations into fraudulent binary options and forex platforms that steal client funds through deceptive and manipulative trading practices.', items:['Platform operator identification','Financial flow mapping','Regulatory complaint preparation','Chargeback documentation','Legal action support'], img:'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=85', href:'/services/binary-options-scam' },
  { n:'04', title:'Cyber Intelligence', desc:'OSINT-driven investigation and dark-web monitoring to identify threat actors, phishing operations, and fraudulent entities in the cryptocurrency landscape.', items:['Threat actor profiling','Dark web monitoring','Phishing investigation','Social engineering analysis','Intelligence reporting'], img:'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=85', href:'/services/cyber-intelligence' },
  { n:'05', title:'Digital Asset Investigation', desc:'Full-spectrum digital forensics for businesses and legal professionals requiring authoritative analysis of digital asset portfolios, suspicious transactions, and financial fraud.', items:['DeFi & NFT tracing','Corporate fraud audit','Portfolio forensics','Expert witness reports','Regulatory compliance review'], img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85', href:'/services/digital-investigation' },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 md:py-24">
        <div className="container-wide">
          <FadeUp><span className="section-label mb-3">What We Offer</span></FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-5 tracking-tight">
              Investigation Services
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-sans text-base text-slate-500 leading-relaxed max-w-xl">
              A comprehensive suite of blockchain forensic and cybercrime investigation services, tailored to the specific nature of each case.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container-wide flex flex-col gap-20 md:gap-28">
          {services.map((svc, i) => (
            <div
              key={svc.href}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center
                          ${i % 2 !== 0 ? 'lg:[direction:rtl]' : ''}`}
            >
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.19,1,0.22,1] }}
                className="lg:[direction:ltr] overflow-hidden"
              >
                <motion.img
                  src={svc.img}
                  alt={svc.title}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-64 md:h-[380px] object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="lg:[direction:ltr]"
              >
                <span className="section-label mb-3">Service {svc.n}</span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-4 leading-tight">
                  {svc.title}
                </h2>
                <p className="font-sans text-sm text-slate-500 leading-relaxed mb-6">{svc.desc}</p>
                <ul className="flex flex-col gap-2 mb-8">
                  {svc.items.map(item => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 bg-navy-500 rounded-full flex-shrink-0" />
                      <span className="font-sans text-sm text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={svc.href} className="btn-primary">
                  Learn More & Submit Request
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 border-t border-slate-100 py-16 md:py-24 text-center">
        <div className="container-wide max-w-2xl mx-auto">
          <FadeUp>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Not Sure Which Service Fits Your Case?
            </h2>
          </FadeUp>
          <FadeUp delay={0.05}>
            <p className="font-sans text-slate-500 text-sm leading-relaxed mb-8">
              Contact our team for a free, confidential consultation. We'll assess your situation and recommend the most effective approach.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link href="/contact" className="btn-primary mx-auto">Free Consultation</Link>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
