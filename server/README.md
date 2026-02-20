# Xlite Contact API Server

Standalone server for handling contact and complaint forms.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables

`.env` file banao (`.env.example` se copy karo):

```env
CONTACT_EMAIL=xlitewalletindia@gmail.com
SMTP_USER=xlitewalletindia@gmail.com
SMTP_PASSWORD=<YOUR_GMAIL_APP_PASSWORD>
PORT=3001
NODE_ENV=production
ALLOWED_ORIGINS=https://xlitepay.in,https://www.xlitepay.in
```

### 3. Start Server

**Development:**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

## 📡 API Endpoints

- `POST /api/contact` - Submit contact form
- `POST /api/complaint` - Submit complaint form  
- `GET /api/health` - Health check

## 🌐 CORS Configuration

Production mein `ALLOWED_ORIGINS` environment variable mein frontend URLs add karo:

```env
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

## 📧 Email Configuration

Gmail App Password setup:
1. https://myaccount.google.com/security
2. Enable 2-Step Verification
3. App Passwords → Generate → Mail
4. Copy 16-character password
5. Add to `.env` as `SMTP_PASSWORD`

## 🚢 Deployment

See main `DEPLOYMENT.md` file for detailed deployment instructions.

**Recommended Platforms:**
- Railway (easiest)
- Render
- Fly.io
- Heroku

## 🔧 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `SMTP_PASSWORD` | Yes | Gmail App Password |
| `CONTACT_EMAIL` | No | Default: xlitewalletindia@gmail.com |
| `SMTP_USER` | No | Default: CONTACT_EMAIL |
| `PORT` | No | Default: 3001 |
| `ALLOWED_ORIGINS` | No | Comma-separated frontend URLs |
| `NODE_ENV` | No | production/development |
