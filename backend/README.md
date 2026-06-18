# Portfolio Contact Backend (NestJS)

A small NestJS API that receives contact-form submissions from the portfolio
site (`name`, `email`, `subject`, `message`) and emails them to your inbox via
SMTP (Gmail by default).

```
Browser form  ──POST /api/contact──►  NestJS  ──SMTP──►  your inbox
```

## Features

- `POST /api/contact` endpoint with input validation (`class-validator`)
- Sends a formatted HTML + plain-text email via Nodemailer
- `replyTo` set to the visitor's email — just hit "Reply" to answer them
- Rate limiting (5 requests/min per IP) to fight spam
- Honeypot field (`botcheck`) to silently reject bots
- CORS locked to the origins you configure

## 1. Install

```bash
cd backend
npm install
```

## 2. Configure environment

```bash
cp .env.example .env
```

Then edit `.env` and fill in your values (see `.env.example` for all keys).

### Getting a Gmail App Password (recommended)

Gmail blocks normal-password SMTP login. Create an **App Password** instead:

1. Enable **2-Step Verification** on your Google account
   (https://myaccount.google.com/security).
2. Go to **App passwords** (https://myaccount.google.com/apppasswords).
3. Generate one for "Mail" → you'll get a 16-character password.
4. Put it in `.env` as `SMTP_PASS`, and your Gmail address as `SMTP_USER`.

Example `.env` for Gmail:

```env
PORT=3000
CORS_ORIGINS=http://localhost:5500,http://127.0.0.1:5500
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=mahad.dev3@gmail.com
SMTP_PASS=abcd efgh ijkl mnop
MAIL_TO=mahad.dev3@gmail.com
MAIL_FROM="Portfolio Contact <mahad.dev3@gmail.com>"
```

> Not on Gmail? Any SMTP provider works (Outlook, Zoho, SendGrid, Mailgun,
> Brevo, etc.) — just change `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` /
> `SMTP_USER` / `SMTP_PASS`.

## 3. Run

```bash
npm run start:dev     # development (auto-reload)
npm run build         # compile to dist/
npm run start:prod    # run compiled build
```

You should see: `Contact API running on http://localhost:3000/api`.

## 4. Test it

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","subject":"Hello","message":"This is a test message."}'
```

A successful response:

```json
{ "success": true, "message": "Your message has been sent. Thank you!" }
```

Check your inbox — the email should arrive within a few seconds.

## 5. Point the website at it

In `../frontend/assets/js/main.js`, the contact handler posts to the URL in the
form's `action` attribute (`frontend/index.html`). For local testing it's set to
`http://localhost:3000/api/contact`. When you deploy the backend, change that
`action` to your deployed API URL (e.g. `https://api.your-domain.com/api/contact`)
and add that site's origin to `CORS_ORIGINS`.

## Deploying

Host the API on any Node platform (Render, Railway, Fly.io, a VPS, etc.):

1. Set the same environment variables in the host's dashboard.
2. Build: `npm run build`. Start: `npm run start:prod`.
3. Update the front-end `action` URL and the backend `CORS_ORIGINS`.

> The static site (GitHub Pages/Netlify) and this API are deployed separately —
> the site just calls the API over HTTPS.
