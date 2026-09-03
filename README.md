# Ahmad Jawad — Applied AI & Machine Learning Engineer

> A clean, responsive portfolio showcasing real-world machine learning systems, computer vision applications, helpful AI assistants, and reliable web applications.

---

## ⚡ Live Preview & Tech Stack

- **Framework**: Next.js 15 (App Router, Standalone Output)
- **UI & Styling**: React 19, Tailwind CSS v4, Lucide Icons, Canvas Confetti
- **AI Integration**: Google Gemini / Built-in Local Fallback Assistant with SSE Streaming
- **Language**: TypeScript 5

---

## 🚀 Quickstart (Local Development)

```bash
# 1. Clone repository
git clone https://github.com/ahmedjawad24/ahmad-jawad-portfolio.git
cd ahmad-jawad-portfolio

# 2. Install dependencies
npm install

# 3. (Optional) Configure environment variables
cp .env.example .env.local
# Add your GEMINI_API_KEY (optional, helpful built-in fallback is included)

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚢 Deployment Guide

### Option A: Vercel (Recommended)

1. Push your code to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. (Optional) Add `GEMINI_API_KEY` under **Environment Variables**.
5. Click **Deploy**.

### Option B: Docker / Cloud Run

The repository includes `output: 'standalone'` in `next.config.ts`, making it ready for minimal multi-stage Docker builds.

```dockerfile
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
COPY .next/standalone ./
COPY .next/static ./.next/static
COPY public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## 📂 Featured Applications

1. **[Proof of Trust](https://github.com/ahmedjawad24/proof-of-trust)**: An AI accountability system that double-checks AI answers across multiple models and records tamper-proof verification.
2. **[Eye Disease Detection AI](https://github.com/ahmedjawad24/Explainable-retinal-disease-detection)**: A clinical computer vision tool that detects eye diseases from retinal photos and highlights the exact problem areas for doctors (96.2% accuracy).
3. **[FraudLens](https://github.com/ahmedjawad24/credit-card-fraud-detection)**: A smart fraud prevention platform tuned for rare fraud cases, reducing false alarms by 34% for real customers.
4. **[CareBridge](https://github.com/ahmedjawad24/agentic_ai_hackathon)**: A friendly patient check-in assistant that collects medical symptoms and creates neat summaries for doctors.
5. **[PEL Equipment Intelligence](https://github.com/ahmedjawad24/PEL-Electronic-Intelligence)**: Predictive maintenance dashboard that forecasts machine breakdowns up to 48 hours early.
6. **[Soil & Crop Advisory App](https://github.com/ahmedjawad24/soil_crop_predictor)**: A simple tool that recommends the best crops to plant based on soil nutrients and local weather.

---

## 📬 Contact & Connect

- **Email**: [ahmed.jawadcs@gmail.com](mailto:ahmed.jawadcs@gmail.com)
- **Phone / WhatsApp**: [+92 348 2991158](tel:+923482991158)
- **GitHub**: [github.com/ahmedjawad24](https://github.com/ahmedjawad24)
- **LinkedIn**: [linkedin.com/in/ahmad-jawad-248870267](https://www.linkedin.com/in/ahmad-jawad-248870267)
