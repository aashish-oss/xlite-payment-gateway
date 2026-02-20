# Server Setup Guide - Forms ko Fix Karne Ke Liye

## Quick Start (3 Steps)

### Step 1: Server Dependencies Install Karo
```bash
cd server
npm install
```

### Step 2: Gmail App Password Setup
1. Gmail account kholo: https://myaccount.google.com/
2. Security → 2-Step Verification enable karo (agar nahi hai)
3. App Passwords → Generate → "Mail" select karo
4. Password copy karo (16 characters ka hoga)

### Step 3: .env File Update Karo
`server/.env` file mein yeh paste karo (App Password apna daalna):
```
CONTACT_EMAIL=xlitewalletindia@gmail.com
SMTP_USER=xlitewalletindia@gmail.com
SMTP_PASSWORD=<YOUR_16_CHAR_APP_PASSWORD>
PORT=3001
```

### Step 4: Server Start Karo

**Option 1: Sirf Server**
```bash
npm run server
```

**Option 2: Frontend + Server Dono Ek Saath**
```bash
npm run dev:all
```

**Option 3: Alag Terminals Mein**
Terminal 1:
```bash
npm run server
```

Terminal 2:
```bash
npm run dev
```

## ✅ Test Karo

1. Browser mein http://localhost:5173 kholo (ya jo port Vite ne diya)
2. Contact page par jao
3. Contact form fill karo aur submit karo
4. Complaint form fill karo aur submit karo
5. Check karo xlitewalletindia@gmail.com inbox mein email aayi ya nahi

## Troubleshooting

**"Failed to fetch" error:**
- Server running hai ya nahi check karo (Terminal mein "Contact API running on http://localhost:3001" dikhna chahiye)
- Server start karo: `npm run server`

**"Contact form is not configured" error:**
- `.env` file mein `SMTP_PASSWORD` set karo
- Gmail App Password sahi hai ya nahi check karo

**Email nahi ja rahi:**
- Gmail App Password sahi hai ya nahi verify karo
- Spam folder check karo
- Server logs check karo (terminal mein error dikhega agar koi problem hai)
