# Mahad's Profile

This repository has two independently deployable parts:

```
.
├── frontend/   → static portfolio site (HTML/CSS/JS)
└── backend/    → NestJS API that emails contact-form submissions
```

The two are deployed **separately** and talk to each other over HTTPS:

```
frontend (static host)  ──POST /api/contact──►  backend (Node host)  ──SMTP──►  inbox
```

## frontend/

Plain static site (no build step). Deploy the **`frontend/` folder** to any
static host:

- **GitHub Pages / Netlify / Vercel / Cloudflare Pages** — set the project root
  (or "publish directory") to `frontend`.

After deploying the backend, edit the contact form's `action` URL in
`frontend/index.html` to point at your live API, e.g.
`https://your-api.onrender.com/api/contact`.

## backend/

NestJS + Nodemailer API. Deploy the **`backend/` folder** to a Node host:

- **Render / Railway / Fly.io / a VPS** — build command `npm run build`,
  start command `npm run start:prod`.
- Set the environment variables from `backend/.env.example` in the host's
  dashboard (SMTP credentials, `MAIL_TO`, and `CORS_ORIGINS` = your deployed
  frontend origin).

See `backend/README.md` for full setup and local-development instructions.
