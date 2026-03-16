'use client'
import Link from 'next/link'
import { FadeUp, SlideIn } from '@/components/AnimatedSection'
import ServiceForm from '@/components/ServiceForm'

export default function FundRecoveryPage() {
  const fields = [
    { name:'assetType', label:'Type of Asset Lost', type:'select', required:true,
      options:['Bitcoin (BTC)','Ethereum (ETH)','USDT (Tether)','USDC','BNB','Multiple Assets','Other Cryptocurrency'] },
    { name:'estimatedValue', label:'Estimated Value Lost (USD)', type:'text', required:true, placeholder:'e.g. $25,000' },
    { name:'platform', label:'Exchange / Platform Where Loss Occurred', type:'text', required:true,
      placeholder:'e.g. Binance, Coinbase, MetaMask, Unknown Exchange' },
    { name:'methodOfLoss', label:'How the Loss Occurred', type:'select', required:true,
      options:['Hack / Unauthorized Account Access','Investment Scam / Rug Pull','Exchange Collapse / Exit Scam','Phishing Attack','Fraudulent Transfer','Wallet Compromise','Other'] },
    { name:'dateOfIncident', label:'Date of Incident', type:'date', required:true },
    { name:'walletAddresses', label:'Relevant Wallet Addresses', type:'text', required:false,
      placeholder:'0x... or multiple addresses separated by commas', fullWidth:true },
    { name:'txIds', label:'Transaction IDs / Hashes', type:'text', required:false,
      placeholder:'Paste known transaction hashes here', fullWidth:true },
    { name:'priorActions', label:'Have You Reported This Elsewhere?', type:'select', required:false,
      options:['No, first report','Reported to exchange','Reported to police / law enforcement','Reported to financial regulator','Multiple reports filed'] },
    { name:'description', label:'Full Description of What Happened', type:'textarea', required:true,
      placeholder:'Please provide a detailed account of the incident — include dates, how you believe access was gained, communications received, and any other relevant details…', fullWidth:true },
  ]

  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="container-wide pt-14 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
            <div className="pb-12 md:pb-16">
              <div className="flex items-center gap-2 text-sm font-sans text-slate-400 mb-4">
                <Link href="/services" className="hover:text-navy-600 transition-colors">Services</Link>
                <span>/</span><span className="text-slate-600">Asset & Fund Recovery</span>
              </div>
              <FadeUp><span className="section-label mb-3">Recovery Operations</span></FadeUp>
              <FadeUp delay={0.05}>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-5 leading-tight tracking-tight">
                  Asset & Fund Recovery
                </h1>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="font-sans text-base text-slate-500 leading-relaxed max-w-lg">
                  We combine blockchain forensics, legal coordination, and exchange partnerships to pursue
                  the recovery of stolen or defrauded digital assets through every available channel.
                </p>
              </FadeUp>
            </div>
            <SlideIn from="right">
              <img src="/home/asset.jpg"
                   alt="Fund Recovery" className="w-full h-[380px] md:h-[420px] object-cover" />
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
                  { t:'End-to-End Recovery Management', d:'We handle every step from investigation through to fund repatriation on your behalf.' },
                  { t:'Exchange Freeze Requests', d:'Established relationships with major exchanges to expedite freeze and seizure orders.' },
                  { t:'International Jurisdiction', d:'Recovery operations across 40+ countries with local legal partner networks.' },
                  { t:'Insurance Claim Assistance', d:'Forensic reports prepared to support cyber insurance and fraud claim submissions.' },
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
                  { t:'Case Intake & Viability Assessment', d:'We review all available evidence and assess recovery viability before proceeding.' },
                  { t:'Forensic Blockchain Tracing', d:'Full investigation mapping asset movements to identify where funds currently reside.' },
                  { t:'Exchange Coordination', d:'We submit documented freeze requests to exchanges backed by our forensic findings.' },
                  { t:'Legal Support Preparation', d:'Court-ready reports and coordination with specialist crypto legal counsel.' },
                  { t:'Recovery Execution', d:'Coordinated action across exchanges, regulators, and legal channels.' },
                ].map((step,i,arr)=>(
                  <div key={i} className="flex gap-4 pb-7">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 bg-navy-900 flex items-center justify-center flex-shrink-0 z-10">
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
            <FadeUp delay={0.05}><h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-3">Begin Your Recovery Case</h2></FadeUp>
            <FadeUp delay={0.1}><p className="font-sans text-sm text-slate-500 max-w-md mx-auto leading-relaxed">Our team will assess your case and respond within 24–48 hours.</p></FadeUp>
          </div>
          <FadeUp delay={0.15} className="bg-white border border-slate-100 p-6 sm:p-10 shadow-sm">
            <ServiceForm serviceName="Asset & Fund Recovery" fields={fields} />
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
