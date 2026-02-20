# Xlite Payment Gateway

Payment gateway website with contact and complaint forms.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Gmail account with App Password

### Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   cd server
   npm install
   cd ..
   ```

2. **Configure Gmail App Password**
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification
   - Go to App Passwords → Generate → Select "Mail"
   - Copy the 16-character password

3. **Setup Server Environment**
   - Edit `server/.env` file:
   ```
   CONTACT_EMAIL=xlitewalletindia@gmail.com
   SMTP_USER=xlitewalletindia@gmail.com
   SMTP_PASSWORD=<YOUR_GMAIL_APP_PASSWORD>
   PORT=3001
   ```

### Running the Application

**Option 1: Using PowerShell Scripts (Windows)**
```powershell
# Start server only
.\start-server.ps1

# Start both frontend + server (in separate windows)
.\start-all.ps1
```

**Option 2: Using npm scripts**
```bash
# Start server only
npm run server

# Start frontend only
npm run dev

# Start both together
npm run dev:all
```

**Option 3: Manual (Separate Terminals)**
```bash
# Terminal 1 - Server
cd server
npm run dev

# Terminal 2 - Frontend
npm run dev
```

## 📧 Forms Setup

Both **Contact Form** and **Complaint Form** send emails to `xlitewalletindia@gmail.com`.

### Forms Workflow:
1. User fills form on website
2. Form submits to server API (`/api/contact` or `/api/complaint`)
3. Server sends email via Gmail SMTP
4. Email received at `xlitewalletindia@gmail.com`

### Troubleshooting Forms:

**"Failed to fetch" error:**
- Server is not running → Start server: `npm run server`
- Check server is running on http://localhost:3001

**"Contact form is not configured" error:**
- Gmail App Password not set → Update `server/.env` with `SMTP_PASSWORD`
- Verify App Password is correct (16 characters)

**Email not received:**
- Check spam folder
- Verify Gmail App Password is correct
- Check server terminal for error messages

## 🛠️ Tech Stack

- **Frontend:** Vite + React + TypeScript
- **UI:** shadcn-ui + Tailwind CSS
- **Backend:** Express.js + Node.js
- **Email:** Nodemailer + Gmail SMTP
- **Routing:** React Router

## 📁 Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components (Contact, Services, etc.)
│   └── ...
├── server/
│   ├── index.js       # Express server
│   ├── contactHandler.js  # Email sending logic
│   └── .env           # Environment variables
└── ...
```

## 📝 API Endpoints

- `POST /api/contact` - Submit contact form
- `POST /api/complaint` - Submit complaint form
- `GET /api/health` - Server health check

## 📖 Detailed Setup

See [SETUP.md](./SETUP.md) for detailed setup instructions.

## 🔧 Development

```bash
# Install dependencies
npm install
cd server && npm install && cd ..

# Start development
npm run dev:all
```

## 📄 License

Private project - Xlite Payments Pvt. Ltd.
