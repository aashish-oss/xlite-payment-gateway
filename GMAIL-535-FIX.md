# Gmail "535 Username and Password not accepted" Error – Fix

Screenshot mein jo error aa raha hai:
**"Invalid login: 535-5.7.8 Username and Password not accepted"**

Yeh **Gmail App Password** galat ya missing hone ki wajah se aata hai. Normal Gmail password use mat karo.

---

## Step-by-step fix

### 1. Gmail App Password generate karo

1. Browser mein jao: **https://myaccount.google.com/apppasswords**
2. Agar "App Passwords" option nahi dikh raha:
   - Pehle **Security** → **2-Step Verification** enable karo
   - Phir wapas **App Passwords** par jao
3. **Select app** → **Mail** choose karo  
4. **Select device** → **Other** → naam daalo (jaise: Xlite Server)  
5. **Generate** dabao  
6. **16-character password** dikhega (jaise: `abcd efgh ijkl mnop`)  
7. Isko copy karo – yeh sirf ek baar dikhega

### 2. Server `.env` update karo

`server/.env` file mein:

```env
SMTP_USER=xlitewalletindia@gmail.com
SMTP_PASSWORD=abcdefghijklmnop
```

- `<YOUR_16_CHAR_APP_PASSWORD>` ki jagah **sirf woh 16-character password** paste karo  
- **Spaces hata do** (e.g. `abcd efgh ijkl mnop` → `abcdefghijklmnop`)  
- Normal Gmail password **mat** daalna

### 3. Server restart karo

- Local: server band karo, phir `npm run server` ya `npm start`  
- Production (Railway/Render): dashboard se **Redeploy** ya **Restart** karo  

### 4. Phir test karo

- xlitepay.in → Contact / Complaint form fill karke submit karo  
- Agar ab bhi 535 aaye to naya App Password generate karke step 2–3 dobara karo  

---

## Important

- **App Password** = 16-character code (Google ke "App Passwords" se)  
- **Normal password** = Gmail login wala password – SMTP ke liye use **nahi** karna  
- Domain xlitepay.in ke liye server CORS mein `https://xlitepay.in` aur `https://www.xlitepay.in` allow ho chuke hain (`.env` mein `ALLOWED_ORIGINS` check karo)

Is fix ke baad bhi error aaye to server logs / hosting dashboard ki error line bhej dena.
