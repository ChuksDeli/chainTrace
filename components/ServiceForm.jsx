'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLock } from "react-icons/fa";

export default function ServiceForm({ serviceName, fields }) {
  const [values, setValues] = useState({})
  const [status, setStatus] = useState('idle')
  const [errMsg, setErrMsg] = useState('')

  const handle = e => setValues(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service: serviceName, ...values }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
      setErrMsg('Something went wrong. Please email chaintrace1@gmail.com directly.')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-14 px-6 bg-navy-50 border border-navy-100 rounded-sm"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 20 }}
          className="w-14 h-14 bg-navy-700 rounded-full flex items-center justify-center mx-auto mb-5"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
        <h3 className="font-display text-2xl font-semibold text-navy-900 mb-3">Request Submitted</h3>
        <p className="font-sans text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
          Our investigation team will review your <strong className="text-navy-700">{serviceName}</strong> case
          and contact you within 24–48 hours.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5">
      {/* Always: name + email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="field-label">Full Name <span className="text-red-400 normal-case font-normal">*</span></label>
          <input name="name" required onChange={handle} placeholder="John Anderson" className="input-field" />
        </div>
        <div>
          <label className="field-label">Email Address <span className="text-red-400 normal-case font-normal">*</span></label>
          <input name="email" type="email" required onChange={handle} placeholder="john@example.com" className="input-field" />
        </div>
      </div>

      {/* Always: phone number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="field-label">
            Phone Number <span className="text-slate-400 normal-case font-normal">(optional)</span>
          </label>
          <input
            name="phone"
            type="tel"
            onChange={handle}
            placeholder="+1 (555) 000-0000"
            className="input-field"
          />
        </div>
      </div>

      {/* Service-specific fields rendered in a 2-col grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {fields.map(f => <Field key={f.name} field={f} onChange={handle} />)}
      </div>

      {/* File upload */}
      <div>
        <label className="field-label">Upload Evidence <span className="font-normal normal-case text-slate-400">(optional)</span></label>
        <div className="border-2 border-dashed border-slate-200 rounded-sm p-6 text-center bg-slate-50
                        hover:border-navy-300 hover:bg-navy-50/30 transition-colors cursor-pointer group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
               className="mx-auto mb-2 text-slate-400 group-hover:text-navy-500 transition-colors">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="font-sans text-sm text-slate-500">
            Drag & drop or <span className="text-navy-600 font-medium">browse files</span>
          </p>
          <p className="font-sans text-xs text-slate-400 mt-1">PDF, PNG, JPG, CSV up to 25 MB</p>
          <input type="file" multiple className="hidden" />
        </div>
      </div>

      {status === 'error' && (
        <p className="font-sans text-sm text-red-500 bg-red-50 border border-red-100 px-4 py-3 rounded-sm">
          {errMsg}
        </p>
      )}

      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="btn-primary w-full justify-center py-4 text-[0.92rem] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2.5" strokeDasharray="40" strokeDashoffset="10"/>
            </svg>
            Submitting Request…
          </>
        ) : (
          <>
            Submit Investigation Request
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </>
        )}
      </motion.button>

      <p className="text-center font-sans text-xs flex items-center justify-center gap-3 text-slate-400">
        <FaLock />
           <p>End-to-end encrypted · Strict confidentiality · NDA protected</p>
      </p>
    </form>
  )
}

function Field({ field, onChange }) {
  const isFullWidth = field.fullWidth === true

  const label = (
    <label className="field-label">
      {field.label}{' '}
      {field.required
        ? <span className="text-red-400 normal-case font-normal">*</span>
        : <span className="text-slate-400 normal-case font-normal">(optional)</span>
      }
    </label>
  )

  let input
  if (field.type === 'select') {
    input = (
      <select name={field.name} required={field.required} onChange={onChange} className="input-field bg-white">
        <option value="">Select an option…</option>
        {(field.options || []).map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    )
  } else if (field.type === 'textarea') {
    input = (
      <textarea
        name={field.name}
        required={field.required}
        onChange={onChange}
        placeholder={field.placeholder}
        rows={5}
        className="input-field resize-y"
        style={{ fontFamily: 'inherit' }}
      />
    )
  } else {
    input = (
      <input
        name={field.name}
        type={field.type || 'text'}
        required={field.required}
        onChange={onChange}
        placeholder={field.placeholder}
        className="input-field"
      />
    )
  }

  return (
    <div className={isFullWidth ? 'sm:col-span-2' : ''}>
      {label}
      {input}
    </div>
  )
}
