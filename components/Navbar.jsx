'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={`sticky top-0 z-50 transition-all bg-red-white duration-300 ${
        scrolled
          ? 'bg-white border-b border-slate-100 shadow-sm shadow-navy-900/5'
          : 'bg-white'
      }`}
    >
      <nav className="container-wide h-[72px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-navy-800 flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="white" opacity=".9"/>
              <path d="M9 12l2 2 4-4" stroke="#1a366e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-display text-[1.35rem] font-bold leading-none">
            <span className="text-navy-900">Chain</span>
            <span className="text-navy-500">Trace</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((l) => {
            const active = isActive(l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative font-sans text-[0.84rem] px-4 py-2 transition-colors duration-200 rounded-sm ${
                  active
                    ? 'text-navy-800 font-semibold'
                    : 'text-slate-500 hover:text-navy-700 font-normal'
                }`}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-navy-50 rounded-sm -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact" className="btn-primary text-[0.82rem] px-5 py-2.5">
            Start Investigation
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 flex flex-col justify-center gap-[5px]"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
            transition={{ duration: 0.25 }}
            className="block w-[22px] h-[2px] bg-slate-700 origin-center"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="block w-[22px] h-[2px] bg-slate-700"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
            transition={{ duration: 0.25 }}
            className="block w-[22px] h-[2px] bg-slate-700 origin-center"
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.19, 1, 0.22, 1] }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-100"
          >
            <div className="px-4 py-3 flex flex-col">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`font-sans text-[0.95rem] py-3 border-b border-slate-50 ${
                    isActive(l.href)
                      ? 'text-navy-800 font-semibold'
                      : 'text-slate-600 font-normal'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-3 bg-navy-700 text-white text-center py-3 font-sans font-medium text-sm rounded-sm"
              >
                Start Investigation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
