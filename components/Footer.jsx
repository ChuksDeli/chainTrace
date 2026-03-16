import Link from 'next/link'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
]
const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Disclaimer', href: '/disclaimer' },
]
const serviceLinks = [
  { label: 'Cryptocurrency Tracking', href: '/services/crypto-tracking' },
  { label: 'Asset & Fund Recovery', href: '/services/fund-recovery' },
  { label: 'Binary Options Scam', href: '/services/binary-options-scam' },
  { label: 'Cyber Intelligence', href: '/services/cyber-intelligence' },
  { label: 'Digital Asset Investigation', href: '/services/digital-investigation' },
]

function FooterLink({ href, label }) {
  return (
    <li>
      <Link
        href={href}
        className="font-sans text-sm text-slate-400 hover:text-white transition-colors duration-200 leading-relaxed"
      >
        {label}
      </Link>
    </li>
  )
}

export default function Footer() {
  return (
    <footer className="bg-navy-950">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="white" opacity=".8"/>
                </svg>
              </div>
              <span className="font-display text-[1.2rem] font-bold text-white">
                Chain<span className="text-navy-300">Trace</span>
              </span>
            </div>
            <p className="font-sans text-sm text-slate-400 leading-relaxed max-w-[230px]">
              Professional blockchain investigation and digital asset recovery for individuals and institutions worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-[0.68rem] font-bold tracking-[0.18em] uppercase text-navy-300 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(l => <FooterLink key={l.href} {...l} />)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-[0.68rem] font-bold tracking-[0.18em] uppercase text-navy-300 mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map(l => <FooterLink key={l.href} {...l} />)}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-sans text-[0.68rem] font-bold tracking-[0.18em] uppercase text-navy-300 mb-5">
              Contact
            </h4>
            <div className="mb-6">
              <p className="font-sans text-xs text-slate-500 mb-1 uppercase tracking-wider">Email</p>
              <a href="mailto:chaintrace1@gmail.com" className="font-sans text-sm text-white hover:text-navy-200 transition-colors">
                chaintrace1@gmail.com
              </a>
            </div>

            <h4 className="font-sans text-[0.68rem] font-bold tracking-[0.18em] uppercase text-navy-300 mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map(l => <FooterLink key={l.href} {...l} />)}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-5">
        <div className="container-wide flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="font-sans text-xs text-slate-600 text-center sm:text-left">
            © {new Date().getFullYear()} ChainTrace. All rights reserved.
          </p>
          <p className="font-sans text-xs text-slate-600">
            Professional digital asset investigation services
          </p>
        </div>
      </div>
    </footer>
  )
}
