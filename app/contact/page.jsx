'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeUp, SlideIn } from '@/components/AnimatedSection'
import { IoIosMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'' })
  const [status, setStatus] = useState('idle')

  const onSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service: 'General Inquiry', ...form }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-100 py-16 md:py-24">
        <div className="container-wide">
          <FadeUp><span className="section-label mb-3">Get In Touch</span></FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-5 tracking-tight">Contact Us</h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-sans text-base text-slate-500 leading-relaxed max-w-xl">
              Our investigation specialists are available to discuss your case. Initial consultations are
              free, confidential, and without obligation.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Info */}
            <SlideIn from="left" className="lg:col-span-2">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-8">
                  How to Reach Us
                </h2>

                <div className="flex flex-col divide-y divide-slate-100">
                  {[
                    { icon: <IoIosMail />, label:'Email', value:'chaintrace1@gmail.com', sub:'Response within 4 hours', link:'mailto:chaintrace1@gmail.com' },
                    { icon: <AiFillMessage />, label:'Live Chat', value:'Available 24 / 7', sub:'Use the chat widget below', link:null },
                  ].map(item => (
                    <div key={item.label} className="flex gap-4 py-5">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <p className="font-sans text-[0.68rem] font-bold tracking-[0.15em] uppercase text-slate-400 mb-1">{item.label}</p>
                        {item.link
                          ? <a href={item.link} className="font-sans text-base font-semibold text-navy-900 hover:text-navy-600 transition-colors">{item.value}</a>
                          : <p className="font-sans text-base font-semibold text-navy-900">{item.value}</p>
                        }
                        <p className="font-sans text-xs text-slate-400 mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-navy-50 border border-navy-100 p-5">
                  <div className="font-sans text-sm font-semibold text-navy-800 mb-2"> <FaLock /> <p>
                    Confidentiality Guarantee
                    </p></div>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    All communications are encrypted and handled under strict NDA. Your identity
                    and case details are never shared without your explicit consent.
                  </p>
                </div>
              </div>
            </SlideIn>

            {/* Form */}
            <FadeUp delay={0.1} className="lg:col-span-3">
              <div className="bg-white border border-slate-100 p-7 sm:p-10 shadow-sm">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-14 h-14 bg-navy-700 rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-navy-900 mb-3">Message Sent</h3>
                    <p className="font-sans text-sm text-slate-500 leading-relaxed">
                      Thank you for reaching out. A member of our team will respond within 4 business hours.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="font-display text-xl font-semibold text-navy-900 mb-7">Send a Message</h3>
                    <form onSubmit={onSubmit} className="flex flex-col gap-5">

                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="field-label">Full Name *</label>
                          <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}
                                 placeholder="John Anderson" className="input-field" />
                        </div>
                        <div>
                          <label className="field-label">Email *</label>
                          <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}
                                 placeholder="john@example.com" className="input-field" />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="field-label">
                            Phone <span className="font-normal normal-case text-slate-400">(optional)</span>
                          </label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={e=>setForm({...form,phone:e.target.value})}
                            placeholder="+1 (555) 000-0000"
                            className="input-field"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="field-label">Subject *</label>
                        <select required value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} className="input-field bg-white">
                          <option value="">Select a topic…</option>
                          <option>General Inquiry</option>
                          <option>Cryptocurrency Tracking</option>
                          <option>Asset Recovery</option>
                          <option>Binary Options Scam</option>
                          <option>Cyber Intelligence</option>
                          <option>Digital Asset Investigation</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="field-label">Message *</label>
                        <textarea required rows={5} value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
                                  placeholder="Describe your situation or inquiry…"
                                  className="input-field resize-y" style={{ fontFamily:'inherit' }} />
                      </div>

                      {status === 'error' && (
                        <p className="text-sm text-red-500 font-sans bg-red-50 border border-red-100 px-4 py-3 rounded-sm">
                          Something went wrong. Please email chaintrace1@gmail.com directly.
                        </p>
                      )}

                      <motion.button
                        type="submit"
                        disabled={status === 'loading'}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="btn-primary w-full justify-center py-4 disabled:opacity-60"
                      >
                        {status === 'loading' ? (
                          <><svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2.5" strokeDasharray="40" strokeDashoffset="10"/></svg>Sending…</>
                        ) : (
                          <>Send Message <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></>
                        )}
                      </motion.button>

                    </form>
                  </>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  )
}