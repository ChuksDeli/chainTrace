'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const getReply = (msg) => {
  const m = msg.toLowerCase()
  if (m.match(/^hi|^hello|^hey/)) return "Hello! I'm ChainTrace's support assistant. How can I help with your case today?"
  if (m.includes('track') || m.includes('transaction') || m.includes('hash')) return "Visit our Crypto Tracking service under Services. Enter the transaction hash, wallet address, and blockchain network — our analysts will begin the trace immediately."
  if (m.includes('recover') || m.includes('lost') || m.includes('stolen')) return "Our Asset & Fund Recovery service covers this. The process: (1) Case intake & evidence review, (2) On-chain forensic tracing, (3) Exchange coordination, (4) Legal support. Submit your case via the Services page."
  if (m.includes('scam') || m.includes('fraud') || m.includes('binary') || m.includes('broker')) return "Stop all contact with the platform. Document everything — emails, screenshots, transaction IDs. Then submit a case via our Binary Options Scam Investigation service immediately."
  if (m.includes('cost') || m.includes('fee') || m.includes('price') || m.includes('charge')) return "Initial consultation is completely free. Investigation fees are case-specific and discussed after our team reviews your situation. Contact us for a no-obligation assessment."
  if (m.includes('time') || m.includes('how long') || m.includes('duration') || m.includes('fast')) return "Timelines vary: transaction tracing 24–72 hours; complex recovery cases 2–8 weeks depending on jurisdiction and exchange cooperation."
  if (m.includes('confidential') || m.includes('private') || m.includes('safe')) return "Absolutely. All cases operate under NDA and military-grade encryption. Your identity is never disclosed to any third party without your explicit written consent."
  return "Thank you for reaching out. A senior investigator will respond shortly. For priority cases, email chaintrace1@gmail.com directly."
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState([
    { from: 'agent', text: "Hello! I'm ChainTrace's assistant. How can I help with your cryptocurrency investigation today?" }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef(null)

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, open])

  const send = () => {
    const txt = input.trim()
    if (!txt) return
    const next = [...msgs, { from: 'user', text: txt }]
    setMsgs(next)
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMsgs([...next, { from: 'agent', text: getReply(txt) }])
    }, 900 + Math.random() * 600)
  }

  return (
    <>
      {/* Bubble button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-6 right-6 z-50 w-[54px] h-[54px] rounded-full bg-navy-700 border-0
                   flex items-center justify-center shadow-lg shadow-navy-700/40 cursor-pointer"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.svg key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </motion.svg>
          ) : (
            <motion.svg key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }} width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.19, 1, 0.22, 1] }}
            className="fixed bottom-[5.2rem] right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)]
                       bg-white shadow-2xl shadow-navy-900/20 rounded overflow-hidden
                       flex flex-col font-sans"
          >
            {/* Header */}
            <div className="bg-navy-800 px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="white" opacity=".85"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-[0.88rem] leading-none mb-0.5">ChainTrace Support</p>
                <p className="text-white/55 text-xs">● Online · AI-assisted</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 h-[260px] overflow-y-auto p-4 flex flex-col gap-3 bg-slate-50/60">
              {msgs.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[82%] px-3.5 py-2.5 text-[0.835rem] leading-snug shadow-sm ${
                    m.from === 'user'
                      ? 'bg-navy-700 text-white rounded-2xl rounded-br-sm'
                      : 'bg-white text-slate-700 rounded-2xl rounded-bl-sm'
                  }`}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center shadow-sm">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-slate-100 flex gap-2 bg-white">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Ask a question…"
                className="flex-1 border border-slate-200 rounded-sm px-3 py-2 text-[0.84rem]
                           text-slate-700 outline-none focus:border-navy-400 placeholder:text-slate-400 font-sans"
              />
              <motion.button
                onClick={send}
                whileTap={{ scale: 0.93 }}
                className="w-9 h-9 bg-navy-700 flex-shrink-0 flex items-center justify-center
                           rounded-sm border-0 cursor-pointer hover:bg-navy-600 transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
