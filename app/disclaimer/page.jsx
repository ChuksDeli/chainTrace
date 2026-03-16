'use client'
import { FadeUp } from '@/components/AnimatedSection'

const sections = [
  { title: 'General Information Only', body: 'The information provided on the ChainTrace website is for general informational purposes only. While we strive to keep all information accurate, current, and complete, we make no representations or warranties of any kind regarding the completeness, accuracy, reliability, or suitability of the information for any particular purpose.' },
  { title: 'Not Legal or Financial Advice', body: 'Nothing on this website constitutes legal, financial, investment, tax, or professional advice of any kind. ChainTrace is a digital asset investigation and recovery services firm — not a law firm, financial institution, or licensed financial advisor. All legal and financial decisions should be made in consultation with appropriately qualified and licensed professionals.' },
  { title: 'No Guarantee of Results', body: 'Any case studies, statistics, testimonials, or results referenced on this website reflect outcomes achieved under specific circumstances and should not be interpreted as typical results or guarantees of future performance. Every case is unique, and outcomes vary significantly based on the specific facts, timeliness, jurisdiction, and third-party cooperation involved.' },
  { title: 'Cryptocurrency Risks', body: 'Cryptocurrency transactions are irreversible by their technical nature. ChainTrace provides investigation and recovery assistance services, but we cannot undo, reverse, or cancel blockchain transactions. Our services are investigative and do not include or imply direct access to any blockchain, exchange, or third-party system.' },
  { title: 'Third-Party Links & Services', body: 'Our website may contain links to third-party websites, tools, or resources. These links are provided for informational convenience only. ChainTrace has no control over the content, accuracy, or privacy practices of those sites and accepts no responsibility for any loss or damage that may arise from your use of them.' },
  { title: 'Professional Standards', body: 'ChainTrace operates in accordance with applicable laws and regulations. Our analysts hold relevant professional certifications including Certified Blockchain Analyst (CBA) and Certified Fraud Examiner (CFE) credentials. All investigations are conducted ethically and within the bounds of applicable law.' },
  { title: 'Contact', body: 'For questions about this Disclaimer or our services, please contact us at: chaintrace1@gmail.com.' },
]

export default function DisclaimerPage() {
  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-100 py-16 md:py-24">
        <div className="container-wide">
          <FadeUp><span className="section-label mb-3">Legal</span></FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-3 tracking-tight">
              Disclaimer
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-sans text-sm text-slate-400">Last updated: January 1, 2025</p>
          </FadeUp>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide max-w-3xl">
          <div className="flex flex-col gap-10">
            {sections.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.04}>
                <div>
                  <h2 className="font-display text-xl sm:text-2xl font-semibold text-navy-900 mb-4 pb-3 border-b border-slate-100">
                    {s.title}
                  </h2>
                  <p className="font-sans text-sm text-slate-500 leading-relaxed">{s.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
