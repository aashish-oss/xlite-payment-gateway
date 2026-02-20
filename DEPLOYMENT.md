# 🚀 Production Deployment Guide

## Overview

Frontend aur Server dono alag-alag host karne hain:

- **Frontend**: Vercel, Netlify, Cloudflare Pages (Static hosting)
- **Server**: Railway, Render, Fly.io, Heroku (Node.js hosting)

---

## 📦 Server Deployment

### Option 1: Railway (Recommended - Easy)

1. **Railway account banaye**: https://railway.app
2. **New Project** → **Deploy from GitHub repo**
3. **Root Directory** set karo: `server`
4. **Environment Variables** add karo:
   ```
   CONTACT_EMAIL=xlitewalletindia@gmail.com
   SMTP_USER=xlitewalletindia@gmail.com
   SMTP_PASSWORD=<YOUR_GMAIL_APP_PASSWORD>
   PORT=3001
   NODE_ENV=production
   ALLOWED_ORIGINS=https://xlitepay.in,https://www.xlitepay.in
   ```
5. **Deploy** button dabao
6. Railway automatically server start kar dega
7. **Domain** mil jayega: `https://your-app.railway.app`

### Option 2: Render

1. **Render account**: https://render.com
2. **New** → **Web Service**
3. **Build Command**: `npm install`
4. **Start Command**: `npm start`
5. **Root Directory**: `server`
6. **Environment Variables** add karo (same as Railway)
7. **Deploy**

### Option 3: Fly.io

1. **Fly.io account**: https://fly.io
2. **Install Fly CLI**: `npm install -g @fly/cli`
3. **Login**: `fly auth login`
4. **Server folder mein**: `fly launch`
5. **Environment variables** set karo: `fly secrets set SMTP_PASSWORD=xxx`

---

## 🌐 Frontend Deployment

### Option 1: Vercel (Recommended)

1. **Vercel account**: https://vercel.com
2. **Import Project** → GitHub repo select karo
3. **Root Directory**: Leave empty (root)
4. **Build Command**: `npm run build`
5. **Output Directory**: `dist`
6. **Environment Variables** add karo:
   ```
   VITE_API_URL=https://your-server-domain.com
   ```
7. **Deploy**

### Option 2: Netlify

1. **Netlify account**: https://netlify.com
2. **Add new site** → **Import from Git**
3. **Build command**: `npm run build`
4. **Publish directory**: `dist`
5. **Environment Variables**:
   ```
   VITE_API_URL=https://your-server-domain.com
   ```

### Option 3: Cloudflare Pages

1. **Cloudflare account**: https://pages.cloudflare.com
2. **Create a project** → Connect GitHub
3. **Build command**: `npm run build`
4. **Build output directory**: `dist`
5. **Environment Variables**: Same as above

---

## ⚙️ Environment Variables Setup

### Frontend (.env.production)

Root folder mein `.env.production` file banao:

```env
VITE_API_URL=https://your-server-domain.railway.app
```

Ya Vercel/Netlify dashboard mein directly add karo.

### Server (.env)

Server hosting platform (Railway/Render) mein yeh variables add karo:

```env
CONTACT_EMAIL=xlitewalletindia@gmail.com
SMTP_USER=xlitewalletindia@gmail.com
SMTP_PASSWORD=<YOUR_GMAIL_APP_PASSWORD>
PORT=3001
NODE_ENV=production
ALLOWED_ORIGINS=https://xlitepay.in,https://www.xlitepay.in
```

**Important**: `ALLOWED_ORIGINS` mein frontend ka exact URL add karo (comma-separated).

---

## 🔧 Local Development Setup

### Frontend Only (Server Already Hosted)

```bash
# .env.local file banao root mein
echo "VITE_API_URL=https://your-server-domain.com" > .env.local

# Frontend start karo
npm run dev
```

### Server Only (Frontend Already Hosted)

```bash
cd server
npm install

# .env file mein production server URL add karo
echo "ALLOWED_ORIGINS=https://xlitepay.in,https://www.xlitepay.in" >> .env

npm start
```

---

## ✅ Testing After Deployment

1. **Frontend URL** kholo
2. **Contact page** par jao
3. **Form fill karo** aur submit karo
4. **Server logs** check karo (Railway/Render dashboard mein)
5. **Email check karo** - xlitewalletindia@gmail.com inbox mein

---

## 🔒 Security Checklist

- ✅ `SMTP_PASSWORD` environment variable mein hai (code mein nahi)
- ✅ `ALLOWED_ORIGINS` properly set hai
- ✅ `NODE_ENV=production` set hai
- ✅ Server logs mein sensitive data nahi print ho raha
- ✅ CORS properly configured hai

---

## 📝 Quick Commands

### Build Frontend
```bash
npm run build
```

### Start Server (Production)
```bash
cd server
NODE_ENV=production npm start
```

### Test Server Locally
```bash
cd server
npm run dev
```

---

## 🆘 Troubleshooting

**Frontend se "Failed to fetch":**
- Check `VITE_API_URL` environment variable sahi hai
- Server running hai ya nahi check karo
- CORS error ho to `ALLOWED_ORIGINS` check karo

**Server start nahi ho raha:**
- `SMTP_PASSWORD` set hai ya nahi check karo
- Port already in use ho to `PORT` change karo
- Logs check karo hosting platform ke dashboard mein

**Email nahi ja rahi:**
- Gmail App Password sahi hai ya nahi verify karo
- Server logs mein error check karo
- Spam folder check karo

---

## 📞 Support

Agar koi issue ho to:
1. Server logs check karo
2. Browser console mein errors check karo
3. Network tab mein API calls check karo
