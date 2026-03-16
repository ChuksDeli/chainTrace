<!-- # ChainTrace — Cryptocurrency Investigation & Recovery Website

Professional Next.js website for a digital asset investigation and recovery service.

## Tech Stack
- **Next.js 14** (App Router, JSX)
- **Tailwind CSS** (custom navy palette, utility-first)
- **Framer Motion** (page animations, stagger effects, micro-interactions)
- **Nodemailer** (form → email to chaintrace1@gmail.com)
- **Google Fonts** — Cormorant Garamond + Manrope

## Setup

```bash
npm install
cp .env.local.example .env.local
```

Edit `.env.local`:
```
EMAIL_USER=chaintrace1@gmail.com
EMAIL_PASS=your_gmail_app_password
```

> **Getting a Gmail App Password:**
> 1. Enable 2FA on chaintrace1@gmail.com
> 2. Go to Google Account → Security → App Passwords
> 3. Create a new app password (select "Mail")
> 4. Paste the 16-character password (no spaces) into EMAIL_PASS

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages
| Route | Page |
|-------|------|
| `/` | Homepage |
| `/services` | All services |
| `/services/crypto-tracking` | Cryptocurrency Tracking |
| `/services/fund-recovery` | Asset & Fund Recovery |
| `/services/binary-options-scam` | Binary Options Scam Investigation |
| `/services/cyber-intelligence` | Cyber Intelligence |
| `/services/digital-investigation` | Digital Asset Investigation |
| `/about` | About Us |
| `/contact` | Contact |
| `/privacy-policy` | Privacy Policy |
| `/terms-of-service` | Terms of Service |
| `/disclaimer` | Disclaimer |
| `/api/contact` | Email API route |

## Features
- Fully responsive (mobile / tablet / desktop)
- Service-specific form fields per service
- All forms submit to chaintrace1@gmail.com
- Live chat widget with AI auto-replies
- Framer Motion scroll animations throughout
- Animated navbar with mobile hamburger
- Scroll-to-top on navigation
- No phone number or location on site -->



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
