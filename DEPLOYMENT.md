# Ahmad Jawad — Portfolio Deployment Guide

This portfolio is built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. It is fully optimized for **zero-cost, 24/7 live standalone deployment** on Vercel, Netlify, Render, or any Node/Docker environment.

---

## 🚀 Option 1: Deploy to Vercel (Recommended — 100% Free & Fast)

Vercel provides native Next.js hosting with automatic SSL, global CDN, and 24/7 uptime.

### Steps:
1. Push your repository to **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ahmad-jawad-portfolio.git
   git push -u origin main
   ```
2. Go to **[vercel.com](https://vercel.com)** and sign in with GitHub.
3. Click **"Add New..."** → **"Project"** and select your `ahmad-jawad-portfolio` repository.
4. **Environment Variables** (Optional, for Live Gemini AI chat):
   - `GEMINI_API_KEY`: *(Your Google AI Studio Gemini API Key)*
   *(Note: If no key is provided, the built-in instant local fallback engine handles all visitor queries seamlessly without crashing!)*
5. Click **"Deploy"**. Your portfolio is live 24/7 with a free `*.vercel.app` domain and custom domain support!

---

## ⚡ Option 2: Deploy to Netlify (Free 24/7)

1. Go to **[netlify.com](https://netlify.com)** and sign in.
2. Click **"Add new site"** → **"Import an existing project"** → **GitHub**.
3. Select this repository.
4. Build Settings (auto-detected):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Click **"Deploy site"**.

---

## 🐳 Option 3: Deploy with Docker / Cloud Run / VPS

The project has `output: "standalone"` enabled in `next.config.ts`.

### Build & Run locally or on a VPS:
```bash
npm run build
npm run start
```
The server will run on port `3000` with high performance.

---

## ⚙️ Environment Variables Summary

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | Optional | Powers live real-time LLM answers in the interactive AI Guide. If omitted, built-in intelligent fallback rules respond instantly. |

---

## ✨ Features Included
- **4 Color Themes**:
  - Classic Emerald & Slate (Default)
  - Clean Minimal Light Mode (White & Soft Slate)
  - Cyber Midnight Blue
  - Deep Space & Solar Gold
- **Interactive Project Spotlight & Full-Screen Modals**
- **AI Portfolio Assistant with Smart Fallback Engine**
- **Full-Featured About Me & PAF-IAST Education Section**
- **Resume / Summary CV Interactive Modal**
- **One-Click Email & WhatsApp Direct Connect**
