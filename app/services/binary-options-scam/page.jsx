'use client'
import Link from 'next/link'
import { FadeUp, SlideIn } from '@/components/AnimatedSection'
import ServiceForm from '@/components/ServiceForm'

export default function BinaryOptionsScamPage() {
  const fields = [
    { name:'platformName', label:'Platform / Broker Name', type:'text', required:true, placeholder:'e.g. TradePro24, BitBroker, etc.' },
    { name:'platformUrl', label:'Platform Website URL', type:'text', required:true, placeholder:'https://...' },
    { name:'accountEmail', label:'Your Account Email on the Platform', type:'email', required:false, placeholder:'email used to register' },
    { name:'totalDeposited', label:'Total Amount Deposited (USD)', type:'text', required:true, placeholder:'e.g. $15,000' },
    { name:'totalLost', label:'Total Amount Lost (USD)', type:'text', required:true, placeholder:'e.g. $15,000' },
    { name:'depositMethod', label:'How Did You Deposit?', type:'select', required:true,
      options:['Bitcoin / Cryptocurrency','Bank Wire Transfer','Credit / Debit Card','PayPal / E-Wallet','Multiple Methods'] },
    { name:'firstDepositDate', label:'Date of First Deposit', type:'date', required:true },
    { name:'lastActivityDate', label:'Date of Last Transaction / Contact', type:'date', required:false },
    { name:'withdrawalAttempted', label:'Did You Attempt a Withdrawal?', type:'select', required:true,
      options:['Yes — was refused','Yes — was asked to pay a fee','Yes — partially allowed then blocked','No withdrawal attempted'] },
    { name:'brokerName', label:'Name of "Broker" or Agent You Dealt With', type:'text', required:false, placeholder:'Name or alias used' },
    { name:'description', label:'Detailed Description of the Scam', type:'textarea', required:true,
      placeholder:'Describe exactly what happened — how you found the platform, what promises were made, how they communicated, when you realized it was a scam, and any other relevant details…', fullWidth:true },
  ]

  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="container-wide pt-14 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="pb-12 md:pb-16">
              <div className="flex items-center gap-2 text-sm font-sans text-slate-400 mb-4">
                <Link href="/services" className="hover:text-navy-600 transition-colors">Services</Link>
                <span>/</span><span className="text-slate-600">Binary Options Scam</span>
              </div>
              <FadeUp><span className="section-label mb-3">Fraud Investigation</span></FadeUp>
              <FadeUp delay={0.05}>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-5 leading-tight tracking-tight">
                  Binary Options Scam Investigation
                </h1>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="font-sans text-base text-slate-500 leading-relaxed max-w-lg">
                  We investigate fraudulent binary options, forex, and investment platforms that steal client funds —
                  providing the documentation needed to pursue legal recourse and financial chargebacks.
                </p>
              </FadeUp>
            </div>
            <SlideIn from="right">
              <img src="/home/binary.jpg"
                   alt="Scam Investigation" className="w-full h-[380px] md:h-[420px] object-cover" />
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
                  { t:'Platform Operator Identification', d:'OSINT techniques to identify the real people behind anonymous fraud platforms and trace their infrastructure.' },
                  { t:'Financial Flow Mapping', d:'Trace how your deposited funds moved through the platform and to final destinations.' },
                  { t:'Regulator Complaint Filing', d:'Pre-formatted submissions for FCA, SEC, CFTC, ASIC, and other major regulators worldwide.' },
                  { t:'Chargeback Documentation', d:'Evidence packages specifically tailored for bank fraud, credit card chargeback, and wire recall claims.' },
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
                  { t:'Platform Deep Investigation', d:'OSINT investigation into the platform — identifying operators, servers, and corporate structures.' },
                  { t:'Financial Flow Mapping', d:'Trace deposited funds through the platform infrastructure to final recipient wallets.' },
                  { t:'Perpetrator Identification', d:'Build a comprehensive intelligence dossier on the individuals behind the scam.' },
                  { t:'Regulatory Complaint Preparation', d:'Prepare submissions for financial regulators with full supporting evidence.' },
                  { t:'Chargeback & Legal Support', d:'Documentation packages for bank chargebacks and civil litigation.' },
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
            <FadeUp delay={0.05}><h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-3">Report a Scam Platform</h2></FadeUp>
            <FadeUp delay={0.1}><p className="font-sans text-sm text-slate-500 max-w-md mx-auto leading-relaxed">Complete the form with as much detail as possible. Our team will respond within 24–48 hours.</p></FadeUp>
          </div>
          <FadeUp delay={0.15} className="bg-white border border-slate-100 p-6 sm:p-10 shadow-sm">
            <ServiceForm serviceName="Binary Options Scam Investigation" fields={fields} />
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
