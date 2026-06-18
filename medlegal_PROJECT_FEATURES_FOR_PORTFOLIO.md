# Project Overview

**Med Legal Safe Keep 2.0** is a secure digital health-record platform that lets individuals and families store, organize, and selectively share their medical information. Each account holder can keep detailed health records — for themselves and for dependents such as children or elderly relatives — including medical history, medications, vaccinations, insurance, lifestyle details, and uploaded documents.

Beyond personal record-keeping, the platform connects patients with healthcare providers (clinics/organizations) through a consent-based access system: a provider can *request* access to specific parts of a patient's records, and the patient decides exactly what to grant and whether the provider may view only or also edit. The system also includes emergency-access features that allow first responders or trusted contacts to reach critical medical information quickly, even on the patient's behalf.

The application is the backend/API powering web and mobile clients, with subscription billing, automated reminders, multi-language support, and full audit tracking built in.

---

# Key Features

### Accounts & Security
- Phone-number registration with SMS one-time-passcode (OTP) verification.
- Login by email or phone with password, plus an optional numeric **PIN login**.
- Password reset via emailed secure link, account lockout after repeated failed attempts, and request rate-limiting to prevent abuse.
- Session tracking with automatic expiry, and the ability to log out of all sessions.
- Referral-code system: providers have referral codes; patients can sign up under a provider, and provider referral counts/seat usage are tracked.

### Personal & Family Health Records
- Manage records for yourself **and multiple dependents/family members** under one account (children, elderly parents, etc.).
- **Medications**: name, strength, dosage, method of use, prescribing doctor, start/end dates, dosage times, and attached photos.
- **Feeding schedules** (designed for infants/children): method, quantity, frequency, and timed entries for caregivers.
- **Vaccination records**: vaccine, dates, and related details.
- **Insurance policies**: with custom drag-and-drop ordering.
- **Lifestyle information**: diet, exercise, habits, and related health factors.
- **Reproductive/sexual health** questionnaire (gender-aware).
- **Contacts** and **emergency contacts** with relationship types and custom ordering.
- **Document vault**: organize uploaded files into titled sections per family member.

### Guided Medical Questionnaires
- A structured questionnaire engine (categories → sections → questions → options → answers) captures detailed medical history.
- ~20 pre-built questionnaire sets, including allergies, chronic conditions, mental-health conditions, hospitalizations, accidents/major injuries, infectious diseases, cancer treatment, family medical history, vision and dental health, advance health directives, and pediatric topics (school performance, therapy, special needs, emotional/behavioral health, eating concerns).
- Answers are stored per family member and can be reviewed by category.

### Smart Reminders
- Create reminders for medications, feedings, appointments, workouts, hydration, calling loved ones, and other lifestyle activities.
- Flexible, timezone-aware scheduling: hourly, daily, weekly, monthly, one-time, or fixed weekly schedules with optional start/end windows (including overnight ranges).
- Automated delivery via push notifications, with reminder history/logging.

### Emergency Access ("SOS")
- **EMS mode**: instantly shares critical info and notifies emergency contacts by SMS, capturing the user's geolocation.
- **Location-tracking mode**: starts a time-limited (4-hour) live-location sharing session for emergency contacts.
- **Medical-access mode**: a requester's details are sent to the account owner by SMS with a secure approval link/token; the owner approves or rejects.
- Printable **medical QR ID card** that links to the user's emergency medical information.
- Full logging of every emergency-access event (who, when, status, contacted numbers).

### Provider Access & Consent Management
- Providers can see which patients are linked to them and request access to specific **document sections** or **medical-information categories**.
- Patients respond per item, granting **view-only** or **view + edit** permissions — and can later revoke or re-grant.
- Providers with edit permission can contribute/update medical answers for a patient.
- Providers can send reminders prompting patients to respond to pending access requests.

### Shareable Medical Links
- Generate a **QR code** (no expiry) or an **expiring web link** that exposes a selected subset of medical categories (up to 5) and chosen dependents.
- Recipients view the shared information read-only through public endpoints, with multi-language support.

### Subscriptions & Billing
- Stripe-powered subscription billing for providers/users.
- Checkout sessions supporting both card and bank (ACH) direct-debit payments.
- Saved payment methods, default-card selection, and setup intents for off-session payments.
- Plans/packages managed by admins and mapped to Stripe products/prices.
- Secure Stripe webhook handling, "cancel at period end" handling, and seat-limit enforcement per provider.

### Administration
- Admin dashboard with platform metrics (user and provider counts).
- User management: search/filter users, view sign-up details, activate/deactivate accounts.
- Broadcast communications: send push notifications, SMS, or queued emails to selected users with per-recipient delivery tracking.
- Provider management (create/list/update/remove providers and view their linked users).
- Questionnaire/section seeding and management.
- App preferences and system settings.

### Platform & Integrations
- Push notifications, SMS/OTP messaging, and templated transactional email (with an asynchronous email queue and retry tracking).
- Cloud file storage with automatic image thumbnail generation.
- Multi-language interface (English, Spanish, Arabic, Urdu) with per-request locale selection.
- Comprehensive audit trail recording who created/updated every record and from which session.
- API documentation, request throttling, and standard web security hardening.

---

# User Roles

The platform recognizes three distinct roles, each enforced by dedicated access guards.

### 1. User (Patient / Account Holder)
- Registers, verifies their phone, and manages their own profile and security settings.
- Maintains health records for themselves and any number of dependents/family members.
- Completes medical questionnaires, logs medications/feedings/vaccinations/insurance/lifestyle data.
- Sets up reminders and emergency contacts.
- Approves or rejects provider access requests and controls view/edit permissions per item.
- Creates QR/expiring share links and triggers emergency access.

### 2. Provider (Healthcare Organization / Clinic)
- Has a referral code used to onboard patients.
- Views linked patients and requests access to specific document sections or medical categories.
- Reads (and, when granted edit rights, contributes to) patient medical information.
- Sends reminders to patients with pending access requests.
- Subscribes to a billing package (with seat limits).

### 3. Admin
- Views platform analytics and manages users (status changes, sign-up review).
- Sends broadcast push/SMS/email communications with delivery tracking.
- Creates and manages providers.
- Manages billing plans/packages, medical questionnaires, preferences, and system settings.

> *Note:* A role/permission framework (`Role`, `RoleHasPermission`, `Preference`) and an **account-representative** concept (a delegate who can act on behalf of an account, optionally tied to an emergency contact) are present in the data model and partially wired in; these support delegated/representative access and are best described as *partially implemented* fine-grained permissioning.

---

# Core Modules

| Module | Responsibility |
|--------|----------------|
| **Authentication** | Registration, OTP phone verification, password/PIN login, password reset, lockout, sessions, referral validation, logout. |
| **Profile & Settings** | User profile (avatar, gender, DOB, language, timezone), password/PIN changes, location-sharing toggle, device push-ID registration. |
| **Family** | Create and manage self + dependents; nearly all health data is scoped to a family member. |
| **Categories / Questions / Answers** | The questionnaire engine: browse medical categories, view section questions, and save/delete answers per family member. |
| **Medicine** | Medications with dosage times, units, frequency, prescriber, and photo media; integrates with reminders. |
| **Feeding** | Caregiver feeding schedules and dosages, integrated with reminders. |
| **Vaccination / Insurance / Lifestyle / Reproductive Health** | Specialized health record types, each with create/list/update/delete (and ordering where relevant). |
| **Contacts & Emergency Contacts** | Personal contacts and emergency contacts with relationship types. |
| **Documents & Document Sharing** | Organize uploaded files into sections; share sections with providers under granular permissions. |
| **Reminders** | Create reminders with a timezone-aware frequency/schedule engine and delivery logging. |
| **Access Account (Emergency/SOS)** | EMS, location-tracking, and medical-approval access flows with SMS, geolocation, tokens, and logging. |
| **Medical Information Access** | Provider-to-patient consent workflow for medical categories (request → approve/reject → view/edit). |
| **Document Access** | Provider-to-patient consent workflow for document sections. |
| **Public Share Links** | QR-code and expiring-link generation plus public read-only viewing endpoints. |
| **Billing (Provider)** | Stripe subscriptions, payment methods, setup intents, checkout, status, and webhooks. |
| **Billing Plans (Admin)** | Manage subscription packages mapped to Stripe products/prices. |
| **Admin Suite** | Dashboard, user management & broadcasts, provider management, questionnaire seeding, preferences, settings. |
| **Notifications** | In-app notifications plus push/SMS/email delivery and admin broadcasts. |
| **Location** | Country/state/city reference data lookups. |
| **File Upload** | Cloud storage uploads with image thumbnailing. |
| **Cron Jobs** | Background scheduled processing (reminders, medicine alerts, subscription-expiry warnings, email queue). |

---

# Advanced Functionality

- **Scheduling & background jobs** — Four scheduled processors run continuously: a per-minute reminder dispatcher, a 30-second medicine-dosage alert sender, a daily subscription-expiry warning job (7/3/1-day windows, de-duplicated), and a 30-second outbound **email queue** worker with attempt tracking and retry/error logging.
- **Timezone-aware reminder engine** — Computes the next due time across hourly/daily/weekly/monthly/one-time frequencies and fixed weekly schedules, honoring each user's timezone and optional (including overnight) time windows, with duplicate-send protection.
- **Consent-based, granular data sharing** — Per-section and per-category access requests with separate *view* and *edit* permissions; patients grant a subset of what's requested and can revoke or re-grant at any time.
- **Emergency / geolocation features** — Emergency access with geolocation capture, time-limited live-location sharing sessions, SMS notification of emergency contacts, secure approval tokens, and a printable medical QR identity card.
- **QR-code & link sharing** — On-the-fly QR generation and expiring public links exposing a curated, read-only slice of medical data.
- **Multi-tenant provider model** — Providers onboard patients via referral codes, operate under subscription seat limits, and access only what patients explicitly authorize.
- **Configurable medical questionnaire engine** — A reusable category/section/question/option/answer structure powering ~20 adult and pediatric medical-history questionnaires, seedable and localizable.
- **Subscription billing** — Full Stripe lifecycle: checkout (card + ACH), saved payment methods, setup intents, webhook event persistence, and end-of-period cancellation.
- **Audit & activity tracking** — Every record automatically captures who created/updated it and from which session, propagated transparently across all requests; emergency-access actions and user sessions are separately logged.
- **Internationalization** — Four languages (English, Spanish, Arabic, Urdu) with per-request locale resolution and fallback.
- **Cloud storage with image processing** — File uploads to cloud storage with automatic thumbnail generation for images.
- **Security & operations hardening** — JWT auth with role guards, request throttling, security headers, response compression, soft-delete data retention, and generated API documentation.

> *Not implemented (verified absent):* There is **no real-time WebSocket/chat** layer. "Live location tracking" is a time-boxed session/SMS-based mechanism rather than a socket connection.

---

# Business Value

People accumulate critical health information across many doctors, pharmacies, insurers, and life stages — and it's usually scattered across paper files, portals, and memory. In an emergency, or when caring for a child or aging parent, that information is hard to find and even harder to share safely.

**Med Legal Safe Keep 2.0 solves this by:**

- **Centralizing** a complete, structured medical history for an entire family in one secure place.
- **Putting patients in control** of their data, letting them share exactly what they want with providers — view-only or editable — and revoke it anytime.
- **Saving lives in emergencies** through instant first-responder access, geolocation, emergency-contact alerts, and a scannable medical ID.
- **Improving adherence** with automated, intelligently scheduled medication and care reminders.
- **Reducing administrative friction** for clinics that need quick, consented access to patient records.
- **Creating recurring revenue** for the operator through provider subscriptions, and supporting growth through provider referral onboarding.

The result is a HIPAA-minded personal health vault that doubles as a controlled patient–provider data-exchange and emergency-preparedness tool.

---

# Fiverr Portfolio Summary

A complete **family health-records and medical-sharing platform** with:

- Secure sign-up with phone verification, plus password and quick PIN login
- One account for the whole family — manage records for yourself, your kids, and elderly relatives
- Full medical profiles: medications, vaccinations, allergies, chronic conditions, mental health, insurance, lifestyle, and more
- Guided medical-history questionnaires for adults and children
- Organized document storage with photo/file uploads
- Smart, automatic reminders for medications, feedings, appointments, and daily health habits
- Emergency "SOS" access that instantly alerts your emergency contacts and shares your location and critical medical info
- A printable/scannable medical QR ID card for first responders
- Controlled sharing with doctors and clinics — approve exactly what they can see or edit, and revoke anytime
- Instant QR-code or expiring web links to share selected health info with anyone
- Subscription plans and secure payments (card and bank), managed end-to-end
- Powerful admin tools: manage users and providers, view analytics, and send announcements by push, SMS, or email
- Multi-language support and a full activity/audit history

Ideal for healthcare startups, clinics, caregiver apps, and emergency-preparedness products.

---

# Short Fiverr Description

A secure, all-in-one digital health platform that helps individuals and families keep their entire medical life organized and accessible. Users store records for themselves and dependents — medications, allergies, vaccinations, chronic conditions, insurance, lifestyle details, and important documents — guided by easy step-by-step medical questionnaires.

The platform stands out with powerful sharing and safety features. Patients control exactly what doctors and clinics can see or edit, and can revoke access at any time. Built-in emergency access instantly alerts trusted contacts, shares the user's location, and exposes critical medical details to first responders — backed by a scannable medical ID card. Smart, automatic reminders keep medications and care routines on track.

It also includes subscription billing with secure card and bank payments, a complete admin console for managing users and providers, broadcast messaging by push, SMS, and email, multi-language support, and full activity history. Perfect for healthcare, caregiving, and emergency-preparedness products that need a reliable, privacy-first foundation.
