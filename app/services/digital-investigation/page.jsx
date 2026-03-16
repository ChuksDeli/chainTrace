'use client'
import Link from 'next/link'
import { FadeUp, SlideIn } from '@/components/AnimatedSection'
import ServiceForm from '@/components/ServiceForm'

export default function DigitalInvestigationPage() {
  const fields = [
    { name:'organizationName', label:'Organization / Company Name', type:'text', required:false, placeholder:'If representing a business or institution' },
    { name:'investigationType', label:'Type of Investigation Required', type:'select', required:true,
      options:['Portfolio Forensic Audit','Internal Fraud / Employee Misconduct','Disputed Transaction Resolution','DeFi / Smart Contract Exploit','NFT Fraud Investigation','Regulatory Compliance Review','Legal Discovery / Litigation Support','Estate / Inheritance Dispute','Other'] },
    { name:'platformsInvolved', label:'Platforms / Exchanges / Protocols Involved', type:'text', required:true,
      placeholder:'e.g. Binance, Uniswap, OpenSea, MetaMask, multiple CEXs', fullWidth:true },
    { name:'walletAddresses', label:'Wallet Addresses / Accounts Under Review', type:'text', required:false,
      placeholder:'List addresses separated by commas', fullWidth:true },
    { name:'timePeriod', label:'Time Period Under Review', type:'text', required:true,
      placeholder:'e.g. Jan 2023 – Dec 2023 or approx. 18 months' },
    { name:'estimatedAssets', label:'Approximate Value of Assets Under Review (USD)', type:'text', required:false, placeholder:'e.g. $500,000' },
    { name:'legalAction', label:'Has Legal Action Been Initiated?', type:'select', required:true,
      options:['No','Yes — civil litigation underway','Yes — criminal investigation underway','Planning to initiate legal action','Exploring options'] },
    { name:'urgency', label:'Required Turnaround', type:'select', required:true,
      options:['Standard (2–4 weeks)','Expedited (1–2 weeks)','Urgent (< 1 week — court deadline)','Ongoing / monitoring required'] },
    { name:'brief', label:'Detailed Investigation Brief', type:'textarea', required:true,
      placeholder:'Provide a comprehensive overview of what you need investigated, the context, parties involved, what you already know, and the outcome you are seeking (e.g. for litigation, insurance, internal audit)…', fullWidth:true },
  ]

  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="container-wide pt-14 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="pb-12 md:pb-16">
              <div className="flex items-center gap-2 text-sm font-sans text-slate-400 mb-4">
                <Link href="/services" className="hover:text-navy-600 transition-colors">Services</Link>
                <span>/</span><span className="text-slate-600">Digital Asset Investigation</span>
              </div>
              <FadeUp><span className="section-label mb-3">Full Spectrum Forensics</span></FadeUp>
              <FadeUp delay={0.05}>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-5 leading-tight tracking-tight">
                  Digital Asset Investigation
                </h1>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="font-sans text-base text-slate-500 leading-relaxed max-w-lg">
                  Comprehensive digital forensics for businesses, family offices, and legal professionals
                  requiring authoritative analysis of digital asset portfolios, suspicious transactions,
                  and financial fraud.
                </p>
              </FadeUp>
            </div>
            <SlideIn from="right">
              <img src="/home/digital.jpg"
                   alt="Digital Asset Investigation" className="w-full h-[380px] md:h-[420px] object-cover" />
            </SlideIn>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            <FadeUp>
              <span className="section-label mb-3">What's Included</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-5">Service Capabilities</h2>
              <div className="flex flex-col divide-y divide-slate-100">
                {[
                  { t:'DeFi Protocol & NFT Tracing', d:'Trace complex transactions through liquidity pools, bridges, decentralized exchanges, and NFT marketplaces.' },
                  { t:'Corporate Fraud Audit', d:'Internal investigations for businesses suspecting employee misconduct or unauthorized digital asset transactions.' },
                  { t:'Expert Witness Availability', d:'Our senior analysts can serve as qualified expert witnesses in legal proceedings and arbitration.' },
                  { t:'Regulatory Compliance Review', d:'Identify AML/KYC gaps, document suspicious activity, and prepare regulatory submission reports.' },
                ].map((b,i)=>(
                  <div key={i} className="py-4 flex gap-3 items-start">
                    <div className="w-6 h-6 bg-navy-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-6">Step-by-Step Approach</h2>
              <div className="flex flex-col">
                {[
                  { t:'Scope Definition & Briefing', d:'We work with your team to define investigation scope, objectives, deliverables, and timeline.' },
                  { t:'On-Chain Data Collection', d:'Systematic extraction of all on-chain data across relevant addresses, protocols, and time periods.' },
                  { t:'DeFi & NFT Analysis', d:'Specialized analysis of decentralized protocol interactions and token movements.' },
                  { t:'Financial Reconstruction', d:'Complete reconstruction of financial activity for accounting, legal, or regulatory purposes.' },
                  { t:'Expert Report Delivery', d:'Comprehensive report suitable for court, arbitration, or regulatory submission.' },
                ].map((step,i,arr)=>(
                  <div key={i} className="flex gap-4 pb-7">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 bg-navy-900 flex items-center justify-center flex-shrink-0">
                        <span className="font-sans text-xs font-bold text-white">{String(i+1).padStart(2,'0')}</span>
                      </div>
                      {i<arr.length-1 && <div className="w-px bg-slate-100 flex-1 mt-1"/>}
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
            <FadeUp delay={0.05}><h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-3">Begin Your Investigation</h2></FadeUp>
            <FadeUp delay={0.1}><p className="font-sans text-sm text-slate-500 max-w-md mx-auto leading-relaxed">Our forensics team will review your brief and respond within 24–48 hours.</p></FadeUp>
          </div>
          <FadeUp delay={0.15} className="bg-white border border-slate-100 p-6 sm:p-10 shadow-sm">
            <ServiceForm serviceName="Digital Asset Investigation" fields={fields} />
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
