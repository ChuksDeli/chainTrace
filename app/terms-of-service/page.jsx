'use client'
import { FadeUp } from '@/components/AnimatedSection'

const sections = [
  { title: '1. Acceptance of Terms', body: 'By using ChainTrace\'s services or website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services. We reserve the right to update these terms at any time with notice posted on this page.' },
  { title: '2. Services Description', body: 'ChainTrace provides blockchain forensic investigation, cryptocurrency tracking, digital asset recovery assistance, binary options scam investigation, cyber intelligence, and related investigative services. Our services are investigative in nature and do not constitute legal advice, financial advice, or a guarantee of any specific outcome, including asset recovery.' },
  { title: '3. Client Responsibilities', body: 'Clients must provide accurate, complete, and truthful information to the best of their knowledge. Providing false or misleading information may result in immediate termination of services without refund. Clients must not use ChainTrace services for any unlawful purpose or in any way that may harm others.' },
  { title: '4. No Guarantee of Recovery', body: 'While ChainTrace employs best-in-class investigation techniques and maintains a strong track record, we cannot guarantee the recovery of any lost or stolen cryptocurrency. Recovery outcomes depend on many factors beyond our control, including exchange cooperation, legal jurisdiction, timeliness of reporting, and the actions of third parties.' },
  { title: '5. Fees and Payment', body: 'Investigation fees are outlined in your individual service agreement prior to work commencement. Certain recovery-based fee structures may be available for qualifying cases. All fees are clearly disclosed in writing before any chargeable work begins. Refund eligibility is governed exclusively by your signed service agreement.' },
  { title: '6. Confidentiality', body: 'Both parties agree to maintain strict confidentiality of all case-related information shared during the course of an engagement. ChainTrace will not disclose client information to any third party except as required by applicable law or as strictly necessary to perform the contracted services.' },
  { title: '7. Intellectual Property', body: 'All forensic methodologies, software tools, proprietary analytics, and report formats used or produced by ChainTrace remain the intellectual property of ChainTrace. Client reports are licensed to the client for their personal or business use and may not be resold or redistributed without written permission.' },
  { title: '8. Limitation of Liability', body: 'To the maximum extent permitted by applicable law, ChainTrace\'s total liability for any claim arising from services shall be limited to the fees paid for the specific service giving rise to the claim. We are not liable for indirect, incidental, consequential, or punitive damages of any kind.' },
  { title: '9. Governing Law', body: 'These Terms are governed by the laws of the State of New York, United States, without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration in New York, NY, in accordance with the rules of the American Arbitration Association.' },
  { title: '10. Contact', body: 'For questions about these Terms of Service, please contact us at: chaintrace1@gmail.com. We will respond to all legal inquiries within 5 business days.' },
]

export default function TermsPage() {
  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-100 py-16 md:py-24">
        <div className="container-wide">
          <FadeUp><span className="section-label mb-3">Legal</span></FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-3 tracking-tight">
              Terms of Service
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
