# Ahmad Jawad | Applied AI & MLOps Engineer

Personal portfolio for Ahmad Jawad, focused on trustworthy AI systems, agentic products, and production-minded machine learning.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy on Vercel

Import this repository into Vercel. The default Next.js settings are sufficient:

- Framework preset: Next.js
- Build command: `next build`
- Output directory: default
- Node.js: 20 or newer

### Optional AI concierge

The assistant works with a safe offline handoff by default. To enable intelligent
GPT-style replies, add `OPENAI_API_KEY` and optionally `OPENAI_MODEL` in the
Vercel project environment variables. Never commit the real key; use `.env.example`
as the template.

For local development, create `.env.local` in the project root and add:

```env
OPENAI_API_KEY=your-new-key
OPENAI_MODEL=gpt-4o-mini
```

Restart the dev server after changing environment variables. If PowerShell blocks
`npm`, use `npm.cmd` or start Next.js directly with the Node.js executable.

### Deploy to Vercel

1. Revoke any API key shared in chat, email, or source control, then create a new key.
2. Sign in to Vercel with GitHub and choose **Add New > Project**.
3. Import `ahmad-jawad-portfolio` from GitHub and keep the detected Next.js settings.
4. Add `OPENAI_API_KEY` and `OPENAI_MODEL` under Environment Variables for Production, Preview, and Development.
5. Click **Deploy**. Future pushes to `master` deploy automatically.

Never put the key in `page.tsx`, `NEXT_PUBLIC_*`, or any committed file.

## Featured work

- [Proof of Trust](https://github.com/ahmedjawad24/proof-of-trust)
- [Credit Card Fraud Detection](https://github.com/ahmedjawad24/credit-card-fraud-detection)
- [Explainable Retinal Disease Detection](https://github.com/ahmedjawad24/Explainable-retinal-disease-detection)
- [PEL Electronic Intelligence](https://github.com/ahmedjawad24/PEL-Electronic-Intelligence)
- [Agentic AI Hackathon](https://github.com/ahmedjawad24/agentic_ai_hackathon)

## Positioning

**Applied AI & MLOps Engineer** building AI that can be evaluated, deployed, operated, and trusted.

Contact: `ahmed.jawadcs@gmail.com` · `+92 348 2991158`
