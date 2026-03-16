import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function buildEmailHtml(data) {
  const { service, name, email, ...rest } = data

  const rows = Object.entries(rest)
    .filter(([, v]) => v && String(v).trim())
    .map(([k, v]) => {
      const label = k
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, s => s.toUpperCase())
        .replace(/_/g, ' ')
      return `
        <tr>
          <td style="padding:10px 16px;background:#f8f9fc;font-size:12px;font-weight:700;
                     color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;
                     white-space:nowrap;border-bottom:1px solid #e5e7eb;width:35%">
            ${label}
          </td>
          <td style="padding:10px 16px;font-size:13px;color:#1f2937;
                     border-bottom:1px solid #e5e7eb;line-height:1.6;word-break:break-word">
            ${String(v).replace(/\n/g, '<br>')}
          </td>
        </tr>`
    }).join('')

  return `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif">
  <div style="max-width:620px;margin:40px auto;background:#ffffff;border-radius:4px;
              overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
    <div style="background:#0d1a45;padding:36px 40px">
      <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.2em;
                text-transform:uppercase;color:#93b4e8">ChainTrace</p>
      <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;line-height:1.2">
        New ${service} Request
      </h1>
    </div>
    <div style="padding:28px 40px;border-bottom:2px solid #e5e7eb;background:#fafbff">
      <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.15em;
                text-transform:uppercase;color:#9ca3af">Client</p>
      <p style="margin:0 0 4px;font-size:20px;font-weight:700;color:#0d1a45">${name}</p>
      <a href="mailto:${email}" style="color:#3360a3;font-size:14px;text-decoration:none">${email}</a>
    </div>
    <div style="padding:28px 40px">
      <p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:0.15em;
                text-transform:uppercase;color:#9ca3af">Submitted Details</p>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb">
        ${rows}
      </table>
    </div>
    <div style="padding:20px 40px;background:#f8fafc;border-top:1px solid #e5e7eb">
      <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.6">
        Submitted via ChainTrace website.
        Reply to this email to contact the client at ${email}.
      </p>
    </div>
  </div>
</body>
</html>`
}

export async function POST(request) {
  try {
    const data = await request.json()
    console.log('[ChainTrace] Form submission received:', data.service, data.email)

    if (!data.name || !data.email) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('[ChainTrace] ERROR: EMAIL_USER or EMAIL_PASS not set in .env.local')
      return NextResponse.json(
        { success: false, error: 'Server email configuration missing' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.verify()
    console.log('[ChainTrace] SMTP connection verified')

    const info = await transporter.sendMail({
      from: `"ChainTrace Website" <${process.env.EMAIL_USER}>`,
      to: 'chaintrace1@gmail.com',
      replyTo: data.email,
      subject: `[ChainTrace] ${data.service} — ${data.name}`,
      html: buildEmailHtml(data),
    })

    console.log('[ChainTrace] Email sent. Message ID:', info.messageId)
    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('[ChainTrace] Email error:', error.message)
    console.error('[ChainTrace] Error code:', error.code)

    let userMessage = 'Failed to send email. Please try again.'
    if (error.code === 'EAUTH') {
      userMessage = 'Email authentication failed. Check your App Password in .env.local.'
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      userMessage = 'Could not connect to email server.'
    }

    return NextResponse.json(
      { success: false, error: userMessage },
      { status: 500 }
    )
  }
}