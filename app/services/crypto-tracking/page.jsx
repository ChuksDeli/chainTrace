'use client'
import Link from 'next/link'
import { FadeUp, SlideIn } from '@/components/AnimatedSection'
import ServiceForm from '@/components/ServiceForm'

export default function CryptoTrackingPage() {
  const fields = [
    { name:'blockchain', label:'Blockchain Network', type:'select', required:true,
      options:['Bitcoin (BTC)','Ethereum (ETH)','BNB Smart Chain','Tron (TRX)','Solana (SOL)','Polygon (MATIC)','Avalanche (AVAX)','Litecoin (LTC)','Ripple (XRP)','Other'] },
    { name:'txHash', label:'Transaction Hash(es)', type:'text', required:true,
      placeholder:'0x3d9a4f… (separate multiple with commas)', fullWidth:true },
    { name:'senderWallet', label:'Sender Wallet Address', type:'text', required:false, placeholder:'0x...' },
    { name:'recipientWallet', label:'Recipient Wallet Address', type:'text', required:false, placeholder:'0x...' },
    { name:'amount', label:'Approximate Amount', type:'text', required:false, placeholder:'e.g. 2.5 ETH / $5,000 USD' },
    { name:'txDate', label:'Date of Transaction', type:'date', required:false },
    { name:'description', label:'Description of Incident', type:'textarea', required:true,
      placeholder:'Describe what happened, including how the funds were moved and any relevant context…', fullWidth:true },
  ]

  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="container-wide pt-14 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
            <div className="pb-12 md:pb-16">
              <div className="flex items-center gap-2 text-sm font-sans text-slate-400 mb-4">
                <Link href="/services" className="hover:text-navy-600 transition-colors">Services</Link>
                <span>/</span>
                <span className="text-slate-600">Cryptocurrency Tracking</span>
              </div>
              <FadeUp><span className="section-label mb-3">On-Chain Forensics</span></FadeUp>
              <FadeUp delay={0.05}>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-5 leading-tight tracking-tight">
                  Cryptocurrency Tracking
                </h1>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="font-sans text-base text-slate-500 leading-relaxed max-w-lg">
                  Advanced blockchain forensic techniques to follow your digital assets across any network —
                  from Bitcoin to Ethereum, DeFi protocols, and beyond — producing court-ready evidence chains.
                </p>
              </FadeUp>
            </div>
            <SlideIn from="right">
              <img src="/home/crpto.jpg"
                   alt="Cryptocurrency Tracking" className="w-full h-[380px] md:h-[420px] object-cover" />
            </SlideIn>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            <FadeUp>
              <span className="section-label mb-3">What's Included</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-5 leading-tight">Service Capabilities</h2>
              <div className="flex flex-col divide-y divide-slate-100">
                {[
                  { t:'Bitcoin, Ethereum & 50+ Chains', d:'Full cross-chain tracing including Solana, Tron, BSC, Polygon, Avalanche, and all major networks.' },
                  { t:'Exchange Attribution', d:'Identify when and where stolen funds were deposited at regulated KYC-compliant exchanges.' },
                  { t:'Court-Ready Forensic Reports', d:'All findings documented in formats accepted by legal and law enforcement authorities.' },
                  { t:'Real-Time Wallet Alerts', d:'Get notified the moment traced wallets execute new transactions or receive funds.' },
                ].map((b,i) => (
                  <div key={i} className="py-4 flex gap-3 items-start">
                    <div className="w-6 h-6 bg-navy-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-sm text-slate-800 mb-0.5">{b.t}</p>
                      <p className="font-sans text-xs text-slate-500 leading-relaxed">{b.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <span className="section-label mb-3">Investigation Process</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-6 leading-tight">Step-by-Step Approach</h2>
              <div className="flex flex-col">
                {[
                  { t:'Transaction Input Collection', d:'You provide the transaction hash(es), wallet address(es), and any identifiers related to the funds.' },
                  { t:'Multi-Chain Analysis', d:'We trace funds across all relevant blockchains, identifying bridge transactions, exchange deposits, and mixing usage.' },
                  { t:'Wallet Cluster Mapping', d:'Using proprietary heuristics, we identify wallets controlled by the same entity.' },
                  { t:'Exchange Attribution', d:'We identify exchange deposits and prepare formal law enforcement data requests.' },
                  { t:'Forensic Report Delivery', d:'Court-admissible report with transaction maps, timeline, and supporting documentation.' },
                ].map((step, i, arr) => (
                  <div key={i} className="flex gap-4 pb-7 relative">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 bg-navy-900 flex items-center justify-center flex-shrink-0 z-10">
                        <span className="font-sans text-xs font-bold text-white">{String(i+1).padStart(2,'0')}</span>
                      </div>
                      {i < arr.length-1 && <div className="w-px bg-slate-100 flex-1 mt-1" />}
                    </div>
                    <div className="pt-1.5">
                      <h4 className="font-display text-base font-semibold text-navy-900 mb-1">{step.t}</h4>
                      <p className="font-sans text-xs text-slate-500 leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-100 section-pad">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <FadeUp><span className="section-label mb-3">Submit a Request</span></FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-3">Begin Your Investigation</h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="font-sans text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                Our team will review your case and respond within 24–48 hours.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.15} className="bg-white border border-slate-100 p-6 sm:p-10 shadow-sm">
            <ServiceForm serviceName="Cryptocurrency Tracking" fields={fields} />
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
