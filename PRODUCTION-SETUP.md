# 🎯 Production Setup - Quick Guide

## Server Hosting (Railway - Easiest)

### Step 1: Railway Setup
1. https://railway.app par jao
2. **New Project** → **Deploy from GitHub repo**
3. **Root Directory**: `server` select karo
4. **Environment Variables** add karo:
   ```
   CONTACT_EMAIL=xlitewalletindia@gmail.com
   SMTP_USER=xlitewalletindia@gmail.com
   SMTP_PASSWORD=<YOUR_GMAIL_APP_PASSWORD>
   PORT=3001
   NODE_ENV=production
   ALLOWED_ORIGINS=https://xlitepay.in,https://www.xlitepay.in
   ```
5. Deploy → Server URL mil jayega (jaise: `https://xlite-api.railway.app`)

### Step 2: Frontend Hosting (Vercel)
1. https://vercel.com par jao
2. **Import Project** → GitHub repo select karo
3. **Environment Variables** add karo:
   ```
   VITE_API_URL=https://xlite-api.railway.app
   ```
4. Deploy → Frontend URL mil jayega

### Step 3: Update Server CORS
Railway dashboard mein `ALLOWED_ORIGINS` update karo:
```
ALLOWED_ORIGINS=https://your-frontend.vercel.app
```

## ✅ Done!

Ab dono alag-alag host ho chuke hain:
- **Frontend**: Vercel (Static)
- **Server**: Railway (API)

Forms ab production mein kaam karenge! 🎉
