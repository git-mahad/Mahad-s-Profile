# In Shape Dates — Project Features

> A fitness-focused dating platform that connects health-minded people, lets them hire and book certified personal trainers, follow personalized diet and workout programs, shop fitness products, and chat in real time — all backed by subscription billing and secure payments.

---

## Project Overview

**In Shape Dates** is an all-in-one mobile platform that blends **online dating** with a complete **health, fitness, and lifestyle ecosystem**. Instead of just matching people, it gives them a reason to stay: members build a profile, get matched with compatible partners based on lifestyle and personality, and then use the same app to train with coaches, track their nutrition, follow workout plans, and buy fitness gear.

The platform serves three distinct audiences in one product:

- **Daters** looking for partners who share their fitness lifestyle.
- **Personal trainers / coaches** who sell sessions, build a client base, and earn payouts.
- **Administrators** who moderate profiles, manage content, run promotions, and oversee revenue.

The product is monetized through **tiered subscriptions** (premium messaging and discovery), **trainer session bookings**, and an **in-app store**, with all money movement handled through integrated payments and automated payouts to trainers.

---

## User Roles

| Role | Description |
|------|-------------|
| **Dating User** | Creates a dating profile, gets matched, likes/passes on others, chats with matches, and subscribes to premium tiers for more messaging and visibility. |
| **Trainer** | Sets up a coaching profile with certifications and pricing, publishes availability and sessions, accepts client bookings, collects ratings, and receives payouts. A trainer can also be a dating user (combined "Both" account). |
| **Admin** | Reviews and approves profiles, moderates reports, manages the exercise/diet/shop catalogs, sends announcements, assigns trainer tiers, and monitors analytics and revenue. |

Access is enforced per role across every endpoint, and certain profile types ("Dating", "Trainer", or "Both") unlock different parts of the app.

---

## Core Modules

1. **Authentication & Account Lifecycle** — Sign-up, email verification, login, password reset, account deactivation/restore.
2. **Dating & Matching** — Profiles, compatibility questionnaire, discovery, likes/matches, filters, blocking, reporting.
3. **Profile Review & Moderation (Admin)** — Profile approval workflow, improvement requests, user/trainer management, audit logs.
4. **Personal Trainers** — Trainer onboarding, availability & scheduling, session catalog, bookings, reviews, tiers.
5. **Fitness Center** — Exercise library, workout plans, BMI-matched programs, progress tracking, fitness goals.
6. **Diet Corner** — Diet & meal plans, meal logging, calorie/macro tracking, water intake, weight progress, nutrition guides.
7. **Real-Time Chat** — One-to-one messaging with media sharing and live typing/delivery indicators.
8. **Notifications** — In-app and mobile push notifications driven by app events.
9. **One Stop Shop (E-commerce)** — Product catalog with variants, cart, checkout, and order management.
10. **Payments & Subscriptions** — Subscription tiers, one-time payments, trainer payouts, billing automation.
11. **Shared Services & Automation** — File uploads, media compression, scheduled jobs, lookups, app settings, support tickets, email.

---

## Key Features (Grouped by Module)

### 1. Authentication & Account Lifecycle
- Email-based sign-up with one-time verification code (time-limited, resendable).
- Separate user and admin login flows with secure token-based sessions.
- "Forgot password" and password-reset flows for both users and admins.
- Account type selection at sign-up: **Dating**, **Trainer**, or **Both**.
- Self-service account deactivation with a grace period to restore before permanent deletion.

### 2. Dating & Matching
- Rich dating profiles: photos and video, bio, location, lifestyle attributes, and preferences.
- **Personality & compatibility questionnaire** — members answer interest questions used to score matches.
- **Smart matching feed** — surfaces compatible profiles, ranked by shared interests and an attractiveness ("pepper") rating, while automatically excluding blocked or already-seen users.
- **Compatibility score** between any two users based on shared answers and profile completeness.
- **Like / Pass interactions** with automatic **mutual-match detection**.
- Views for "people I liked" and "my matches."
- **Advanced discovery filters**: age, gender, height, weight, sexual orientation, ethnicity, marital status, star sign, diet, fitness goal, smoking/drinking, distance/radius, and more — with the ability to save filters for reuse.
- **Profile access limits** tied to subscription tier (how many new profiles you can message per month).
- **Block** and **unblock** users; **report** users with reasons for moderation review.

### 3. Profile Review & Moderation (Admin)
- **Profile approval workflow**: new profiles start as *Pending*; admins approve, reject, or request changes.
- **Improvement requests**: admins ask users to re-submit (e.g., a new video); users respond and re-enter review.
- Admin assigns/edits a member's **pepper rating** (attractiveness tier used in matching).
- Full **dating-user and trainer management**: search/filter, view details, change status, deactivate, archive, or permanently delete.
- **Reported-user queue** and resolution; **support ticket** answering.
- **Inactive-user detection** (e.g., dormant for over a year) for archival.
- **Audit log** of deleted accounts.
- Create and manage the **compatibility questionnaire** (questions and answer options).
- Broadcast **announcements, warning emails, and notifications** to users.
- **Dashboard & analytics**: revenue, user counts, sessions, top trainers, churn, and subscription metrics.

### 4. Personal Trainers
- **Trainer onboarding**: profile, photo, government ID, bio, location, experience, specialties, and **certifications**.
- **Flexible pricing**: separate in-person and virtual rates for 30 / 45 / 60 / 90-minute sessions, with optional discounts.
- **Availability management**: recurring weekly schedules, per-day time slots, and date-specific overrides.
- **Session catalog**: create individual (1:1) or **group sessions**, virtual or in-person, with capacity limits, recurrence, advance-booking notice, and draft/publish states.
- **Booking management**: view, confirm, or cancel client bookings; **request reschedules** and handle client counter-proposals.
- **Client roster & schedule views** for the trainer's day-to-day.
- **Subscription/coaching requests**: clients request ongoing coaching (online or in-person) for a chosen training type, day, and time slot; trainers accept or decline.
- **Reviews & ratings** (1–5 stars with text) collected after sessions.
- **Trainer dashboard** with performance metrics.
- **Trainer tier system** (e.g., Bronze/Silver/Gold/Platinum): admin-assigned tiers that set **user discounts** and **sales commission rates**, with full tier-change history.

### 5. Fitness Center
- **Exercise library** with type/muscle group, category, equipment, experience level, default sets/reps/calories, and video demos.
- Public browsing of exercises with filtering by type, category, goal, and difficulty.
- **Admin-managed fitness goal taxonomy** (goals and sub-goals) used to organize exercises and programs.
- **Workout plan templates** built by admins, targeted to **BMI ranges** and goals, structured **week by week**.
- **BMI calculation** that auto-matches a user to the right workout plan.
- **Personal workout plans** assigned to users, with **per-exercise, per-week progress tracking** and completion status.
- Workout plans can be **linked to diet plans** for combined programs.

### 6. Diet Corner
- **Admin-published diet plans and meal plans** (recipes, ingredients, instructions, and full macros: calories, protein, carbs, fat).
- **Nutrition guides** knowledge base.
- **Personalized meal planning**: generate a plan over a date range from chosen meal types, with **allergy conflict checking**.
- **Meal logging / food diary**: log meals (with photos) against a plan or ad-hoc, with nutrition breakdowns.
- **Daily nutrition goals** with automatic progress tracking and day-close evaluation.
- **Calories-burned tracking** by activity.
- **Water intake tracking** against a daily target.
- **Weight progress tracking** with **progress photos** and captions over time.
- **Dietary settings**: body metrics, activity level, fitness goal, intensity, units (metric/imperial), timezone, reminders, and health-app connections (Google Fit / Apple Health).

### 7. Real-Time Chat
- **One-to-one messaging** over live WebSocket connections.
- Conversations auto-created on first message.
- **Media sharing** — images, videos, and files (auto-compressed and stored on cloud storage).
- **Live typing indicators** and **message delivery** status.
- Offline message delivery on reconnect.
- Conversation and message history with pagination; per-side message/conversation deletion.

### 8. Notifications
- **In-app notification center** with read/unread tracking, categorized by area (dating, trainer, sessions, diet, payments, support).
- **Mobile push notifications** for key events, respecting each user's notification preference.
- Event-driven across the app: profile approvals/rejections, payment outcomes, session cancellations/reschedules, meal reminders, daily-goal achievements, water/weight milestones, and inactivity reminders.

### 9. One Stop Shop (E-commerce)
- **Product catalog** with brands, categories, images, SKUs, pricing, and stock.
- **Product variants & attributes** (e.g., size/color combinations with their own price and stock).
- **Featured products, pre-orders, and in-app ads**.
- **Shopping cart**: add/remove items, update quantities, variant selection, and live totals.
- **Checkout & orders**: stock validation, atomic stock decrement, unique order numbers, shipping details, and order history.
- **Re-order** from a past order.
- Admin **order management**: search/filter by status, date, customer; update and fulfill orders.
- **Shop analytics**.

### 10. Payments & Subscriptions
- **Tiered subscription plans** (monthly & yearly) unlocking more messaging and profile discovery:
  - *Sweat Starter* — message a limited number of users/month.
  - *Fit Flame* — higher messaging allowance.
  - *Heart Racer* — unlimited messaging.
  - *Apex Heat* — unlimited messaging with the widest discovery range.
- **Free starter subscription** automatically granted on profile completion, auto-expiring after one month.
- **Upgrade/downgrade** with **proration previews** so users see credits and charges before confirming.
- **Secure card payments** with full support for bank-level authentication (3-D Secure).
- **One-time payments** for trainer sessions and shop orders.
- **Trainer payouts**: trainers connect a payout account and bank details to receive earnings; balance and verification status tracked.
- **Automated billing lifecycle** via payment webhooks (activations, renewals, failures, cancellations) and a daily job that expires lapsed subscriptions and resets entitlements.
- **Subscription audit logging** for reliability and dispute resolution.

---

## Advanced Functionality

- **Real-time chat** over WebSockets with media, typing indicators, delivery status, and reconnect delivery.
- **Mobile push notifications** integrated with a push provider, gated by per-user preferences.
- **Event-driven architecture** — app actions emit events that fan out into notifications, emails, and side effects without coupling features together.
- **Scheduled background jobs (cron):**
  - *Daily goal manager* (hourly, timezone-aware): closes yesterday's nutrition goal and creates today's for each user.
  - *Meal-log reminders* (every 5 minutes, timezone-aware): nudges users at breakfast/lunch/dinner if they haven't logged.
  - *Hidden-profile grace purge* (daily): warns users before deletion, then permanently removes hidden accounts after a 30-day grace period, cleaning up their stored media and writing an audit record.
  - *Subscription expiry* (daily): expires lapsed subscriptions and resets entitlements.
- **File uploads & media pipeline**: image compression (resize + optimize) and video transcoding/compression before cloud storage, with CDN delivery and signed URLs.
- **Payment integrations**: subscriptions, one-time charges, connected accounts and payouts, plus secure webhook processing.
- **Transactional email**: verification codes, password resets, profile approvals, payment receipts, deletion warnings, account-visibility changes, support replies, and admin warnings.
- **Geolocation & reference data**: country/state/city lookups and distance-based matching.
- **Admin analytics dashboards**: revenue, churn, user growth, top trainers, and subscription insights.
- **Reliability features**: idempotent subscription handling, transactional checkout with rollback, and centralized logging for payments.

---

## Business Value

- **One ecosystem, multiple revenue streams** — dating subscriptions, trainer commissions, and e-commerce sales all live in a single app, increasing lifetime value per user.
- **Higher engagement & retention** — fitness tracking, coaching, and daily reminders give members reasons to return long after a match, reducing churn.
- **Trust & safety built in** — manual profile approval, reporting, blocking, and moderation tooling keep the community healthy and brand-safe.
- **A real marketplace for trainers** — onboarding, scheduling, bookings, reviews, tiered commissions, and automated payouts make it easy for coaches to earn and for the platform to take a cut.
- **Monetization that scales** — flexible tiers, free-to-paid upgrades with proration, and automated billing maximize conversions while minimizing manual work.
- **Operational efficiency** — automated jobs, audit logging, and analytics dashboards reduce admin overhead and surface the metrics that drive decisions.

---

## Fiverr Portfolio Summary

**Project type:** Full-featured mobile app backend (REST API + real-time services) for a fitness-focused dating & coaching marketplace.

**What I built / delivered:**

- 🔐 **Complete user system** — sign-up with email verification, secure login, password reset, role-based access (User / Trainer / Admin), and self-service account deactivation with grace-period recovery.
- ❤️ **Dating & matching engine** — compatibility questionnaire, smart match feed, like/pass with mutual-match detection, advanced saveable filters, distance-based discovery, blocking, and reporting.
- 🛡️ **Admin moderation suite** — profile approval workflow, improvement requests, user/trainer management, report queue, audit logs, and broadcast messaging.
- 🏋️ **Personal trainer marketplace** — trainer onboarding with certifications, flexible per-duration pricing, weekly availability & overrides, individual & group sessions, booking/reschedule flows, ratings & reviews, and an admin-controlled tier & commission system.
- 💪 **Fitness center** — exercise library, BMI-matched week-by-week workout plans, and per-exercise progress tracking.
- 🥗 **Diet & nutrition tracker** — diet/meal plans, food logging with photos, calorie & macro goals, water intake, weight progress photos, and nutrition guides.
- 💬 **Real-time chat** — 1:1 messaging with image/video/file sharing, typing indicators, and delivery status over WebSockets.
- 🔔 **Notifications** — in-app center plus mobile push, fully event-driven.
- 🛒 **E-commerce store** — products with variants, cart, checkout with stock control, orders, re-ordering, and admin order management.
- 💳 **Payments & subscriptions** — multi-tier monthly/yearly plans, free-trial subscriptions, upgrade proration previews, secure card payments (3-D Secure), trainer payouts to bank accounts, and fully automated billing via webhooks.
- ⚙️ **Automation** — scheduled jobs for daily goals, meal reminders, account purges, and subscription expiry; media compression pipeline; transactional email; analytics dashboards.

**Highlights:** real-time messaging, automated recurring billing, marketplace payouts, background job automation, media processing, and a moderation/analytics admin panel — production-grade and battle-tested.

---

## Short Fiverr Description

I built the complete backend for **In Shape Dates**, a fitness-focused dating and coaching app that combines matchmaking with a full health ecosystem. Members create a profile, answer a compatibility questionnaire, and get smart-matched with people who share their lifestyle — then like, match, and chat in real time with media sharing.

Beyond dating, the platform is a **personal-trainer marketplace**: coaches onboard with certifications, set flexible in-person and virtual pricing, publish availability and group/1:1 sessions, accept and reschedule bookings, and earn ratings and automated payouts. Users also get **BMI-matched workout plans**, a **nutrition tracker** (meal logging, calories, macros, water, and weight photos), and an **in-app store** with product variants, cart, and checkout.

It's powered by **multi-tier subscriptions** with free trials, upgrade proration, secure card payments, and automated recurring billing. I also built **push & in-app notifications, a moderation/approval admin panel, analytics dashboards, scheduled background jobs, media compression, and transactional email** — a scalable, production-ready system handling everything from matchmaking to money movement.
