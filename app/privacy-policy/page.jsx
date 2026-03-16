'use client'
import { FadeUp } from '@/components/AnimatedSection'

const sections = [
  { title: '1. Introduction', body: 'ChainTrace ("we," "our," or "us") is committed to protecting the privacy and confidentiality of our clients and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website. By accessing our services, you agree to the terms outlined in this policy.' },
  { title: '2. Information We Collect', body: 'We may collect information you provide directly, including your full name, email address, wallet addresses, transaction hashes, and case-specific details submitted through our intake forms. We also collect technical information such as IP addresses, browser type, and pages visited through anonymised analytics tools.' },
  { title: '3. How We Use Your Information', body: 'We use the information we collect to provide investigation and recovery services, communicate with you about your case, comply with legal obligations, and improve our services. We do not sell, rent, or trade your personal information to third parties for marketing purposes under any circumstances.' },
  { title: '4. Confidentiality & Security', body: 'All case information is treated with the highest level of confidentiality. We employ industry-standard encryption protocols, strict access controls, and secure data storage. All staff are bound by confidentiality agreements and professional ethics guidelines. Case data is never disclosed to unauthorised third parties.' },
  { title: '5. Information Sharing', body: 'We may share your information with law enforcement agencies when required by law or necessary to pursue your case, legal counsel acting on your behalf, and blockchain analytics service providers under appropriate data processing agreements. Explicit consent will be obtained before any disclosure beyond these necessary channels.' },
  { title: '6. Data Retention', body: 'We retain client case files for a minimum of 7 years in accordance with legal and regulatory requirements. You may request deletion of your personal data at any time, subject to our legal retention obligations and any ongoing case requirements.' },
  { title: '7. Your Rights', body: 'Depending on your jurisdiction, you may have the right to access the personal information we hold, request correction of inaccurate data, request deletion of your data, object to processing, and lodge a complaint with a supervisory authority. To exercise these rights, contact us at chaintrace1@gmail.com.' },
  { title: '8. Contact', body: 'If you have questions or concerns about this Privacy Policy, please contact our team at: chaintrace1@gmail.com. We aim to respond to all privacy-related inquiries within 5 business days.' },
]

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-100 py-16 md:py-24">
        <div className="container-wide">
          <FadeUp><span className="section-label mb-3">Legal</span></FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-3 tracking-tight">
              Privacy Policy
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
