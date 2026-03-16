'use client'
import Link from 'next/link'
import { FadeUp, SlideIn } from '@/components/AnimatedSection'
import ServiceForm from '@/components/ServiceForm'

export default function CyberIntelligencePage() {
  const fields = [
    { name:'organization', label:'Organization / Company', type:'text', required:false, placeholder:'If representing a business' },
    { name:'threatType', label:'Nature of the Threat', type:'select', required:true,
      options:['Phishing / Social Engineering Attack','Impersonation / Identity Fraud','Ransomware / Malware','Dark Web Activity Targeting You','Crypto Drainer Attack','SIM Swap Attack','Account Takeover','Doxxing / Privacy Violation','Other'] },
    { name:'targetDetails', label:'What Is Being Targeted?', type:'text', required:true,
      placeholder:'e.g. your wallet, website, brand, personal identity', fullWidth:true },
    { name:'threatActorInfo', label:'Known Threat Actor Information', type:'text', required:false,
      placeholder:'Usernames, wallet addresses, email addresses, websites, etc.', fullWidth:true },
    { name:'dateFirstNoticed', label:'Date Threat Was First Noticed', type:'date', required:true },
    { name:'urgency', label:'Urgency Level', type:'select', required:true,
      options:['Low — monitoring / awareness','Medium — active threat, not immediate','High — active attack ongoing','Critical — immediate intervention needed'] },
    { name:'currentStatus', label:'Current Status of the Threat', type:'select', required:false,
      options:['Resolved but needs investigation','Ongoing — need active monitoring','Escalating — getting worse','Unknown'] },
    { name:'description', label:'Detailed Description', type:'textarea', required:true,
      placeholder:'Describe the full nature of the threat, how it was discovered, evidence you have, potential suspects, and the impact it has had or may have…', fullWidth:true },
  ]

  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="container-wide pt-14 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="pb-12 md:pb-16">
              <div className="flex items-center gap-2 text-sm font-sans text-slate-400 mb-4">
                <Link href="/services" className="hover:text-navy-600 transition-colors">Services</Link>
                <span>/</span><span className="text-slate-600">Cyber Intelligence</span>
              </div>
              <FadeUp><span className="section-label mb-3">Intelligence Operations</span></FadeUp>
              <FadeUp delay={0.05}>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-5 leading-tight tracking-tight">
                  Cyber Intelligence
                </h1>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="font-sans text-base text-slate-500 leading-relaxed max-w-lg">
                  OSINT-driven intelligence operations and dark web monitoring to identify, profile, and expose
                  threat actors targeting your assets, identity, or organization.
                </p>
              </FadeUp>
            </div>
            <SlideIn from="right">
              <img src="/home/cyber.jpg"
                   alt="Cyber Intelligence" className="w-full h-[380px] md:h-[420px] object-cover" />
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
                  { t:'Deep Web & Dark Web Monitoring', d:'Continuous monitoring of threat actor activity in hard-to-access spaces including TOR networks and closed forums.' },
                  { t:'Threat Actor Profiling', d:'Comprehensive intelligence profiles of individuals and organizations posing threats to you or your business.' },
                  { t:'Phishing & Impersonation Investigation', d:'Identify and document operations targeting your brand, wallets, employees, or customers.' },
                  { t:'Ongoing Intelligence Subscription', d:'Regular threat intelligence briefings with proactive monitoring for your specific threat landscape.' },
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
                  { t:'Threat Scoping & Requirements', d:'We define intelligence requirements, threat actors of interest, and success criteria with you.' },
                  { t:'OSINT Collection', d:'Systematic gathering across social media, forums, paste sites, domain records, and public databases.' },
                  { t:'Dark Web Monitoring', d:'Monitoring closed forums and communication channels for threat-relevant activity.' },
                  { t:'Actor Attribution', d:'Correlating digital identities across platforms to build actionable threat actor profiles.' },
                  { t:'Intelligence Report Delivery', d:'Structured reports with actionable findings, evidence, and recommended next steps.' },
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
            <FadeUp delay={0.05}><h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-3">Report a Cyber Threat</h2></FadeUp>
            <FadeUp delay={0.1}><p className="font-sans text-sm text-slate-500 max-w-md mx-auto leading-relaxed">Our intelligence team will review your case and respond within 24–48 hours.</p></FadeUp>
          </div>
          <FadeUp delay={0.15} className="bg-white border border-slate-100 p-6 sm:p-10 shadow-sm">
            <ServiceForm serviceName="Cyber Intelligence" fields={fields} />
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
