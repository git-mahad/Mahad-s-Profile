# Project Overview

**GearUp** is a fitness and martial-arts class booking platform that connects members with gyms and training facilities. It lets gyms publish their classes, manage instructors, and sell spots in training sessions, while members discover nearby gyms, browse classes across disciplines (such as Boxing, Muay Thai, MMA, and Jiu-Jitsu), book and pay for sessions, and receive reminders and notifications.

The platform is built around two main experiences: a **member-facing app** for discovering and booking classes, and an **administrative back office** for gym owners and platform operators to manage gyms, classes, instructors, payments, and analytics. It supports both one-time and recurring classes with specific time slots, location-based class discovery, secure online payments, and a complete review-and-rating system.

---

# Key Features

**Member Experience**
- Account registration with email + OTP verification
- Secure login, logout, password change, and forgot/reset-password flows
- Profile onboarding (username, bio, experience level, preferred disciplines, location/address, country)
- Location-based class discovery showing distance from the member to each gym
- Class browsing with advanced filters (by discipline, distance/radius, and other criteria)
- Detailed class pages with available time slots, schedule, and instructor info
- Booking of individual class time slots, including recurring class days
- "Notify Me" waitlist subscription — get alerted when a full time slot becomes available
- Booking cancellation and full booking history
- Online card payments and saved payment methods (set/select a default card)
- Class reviews and star ratings tied to completed bookings
- In-app notifications and mobile push notifications
- Daily class reminders

**Gym & Operations Management (Admin)**
- Full gym management (create, edit, status changes, soft-delete, bulk soft-delete)
- Gym cover-image and media management
- Class management (create, edit, publish/unpublish/draft status, delete) for one-time and recurring classes with time slots
- Instructor management with email-based invitations and "resend invitation" support
- Discipline management (create, edit, delete; each with an icon and color)
- Member (user) management with account status updates and detailed user views
- Payment oversight: payment list, payment details, and a payments dashboard
- Export of payment data (CSV / spreadsheet)
- Business analytics dashboard (revenue, bookings, top gyms, top users, growth, top disciplines)
- Team management for administrative staff
- Admin profile management

---

# User Roles

The system defines four roles:

- **Member (User)** — Registers, completes a profile, discovers and books classes, pays online, manages saved cards, leaves reviews/ratings, and receives notifications.
- **Admin (Gym Administrator)** — Manages gyms, classes, instructors, disciplines, members, payments, and views the analytics dashboard.
- **Super Admin** — Has all admin capabilities plus team management (adding/managing other administrators); protected from being demoted or deleted by regular admins.
- **Instructor** — Represented in the system and invited via email to be associated with a gym and its classes. *(Instructors are managed as gym staff; a dedicated instructor login app surface is **potentially implemented** rather than confirmed in this codebase.)*

Access is enforced through authentication on every request and role checks that separate the member area from the administrative area.

---

# Core Modules

**Authentication & Authorization**
- Separate member and admin authentication flows
- Email OTP verification, password reset, and session tracking
- Role-based access control protecting administrative endpoints
- Request rate limiting (throttling) for abuse protection

**Gym Management**
- Gym profiles with name, description, address, contact, geo-coordinates, status, media, associated disciplines, and instructors

**Class Management**
- One-time and recurring classes with time slots, recurring days, pricing, capacity (total/booked spots), duration, and publication status
- View tracking (per-class view counts and per-user class views)

**Booking System**
- Time-slot-based booking with statuses (Pending, Confirmed, Cancelled), date ranges, subtotal/tax/total amounts, and links to payments
- Capacity handling and waitlist ("Notify Me") subscriptions
- Booking history and cancellation

**Payments**
- Online card payments via Stripe (payment intents, customers, saved payment methods, refunds)
- Webhook handling for payment lifecycle events
- Support for multiple payment methods (card, cash, other) and payment statuses (In Progress, Paid, Failed, Refunded)

**Discipline Management**
- Catalog of martial-arts/fitness disciplines linked to gyms, classes, and member preferences

**Profiles**
- Member profiles with onboarding state, preferred disciplines, location, country, bio, experience level, and policy acceptance
- Profile image upload and management

**Notifications**
- In-app notification center (mark single/all as read) covering booking confirmations, cancellations, reminders, payment success/failure, refunds, and registration

**Dashboards & Analytics**
- Member dashboard (class discovery, filtering, time slots)
- Admin dashboard with business metrics and a dedicated payments dashboard

**Shared Services**
- File uploads, profile images, country reference data, and Stripe integration shared across the app

---

# Advanced Functionality

- **Geolocation & proximity search** — Member and gym coordinates are stored (including geospatial point data), and classes are ranked/filtered by real distance from the member using a haversine calculation, with an adjustable distance radius.
- **Scheduled background jobs** — A daily cron job automatically sends class reminders to members who have classes that day.
- **Audit logging & activity tracking** — A global database subscriber automatically stamps every record with who created/updated it and from which session, providing a built-in audit trail.
- **Soft deletes** — Records are soft-deleted (recoverable) rather than permanently removed across core entities.
- **Recurring scheduling** — Classes can recur on selected weekdays with individual time slots, and bookings can reference specific recurring days.
- **Waitlist / availability subscriptions** — Members can subscribe to a full time slot and be automatically notified when a spot opens.
- **Push notifications** — Mobile push delivery integrated alongside the in-app notification system.
- **Payment gateway integration** — Full card-payment lifecycle with saved cards, default-card selection, refunds, and secure webhook processing.
- **Data export** — Administrators can export payment records to downloadable files.
- **Business analytics** — Aggregated reporting: total revenue, bookings over time, user growth, top-performing gyms, top active users, and most popular disciplines, with date-range filtering.
- **Multi-tenant structure** — Multiple gyms, each with their own classes, instructors, media, and disciplines, operate within a single platform.
- **Internationalization (i18n)** — Locale-aware responses via a request header (English bundled; the data model includes Arabic and Urdu name fields, indicating multilingual support).
- **Email integration** — Transactional emails for OTPs and instructor invitations/welcome messages.
- **Subscription plans** — A plans/pricing data model exists (with multilingual names and price). Member-facing plan purchase endpoints are **potentially implemented** — the entity is present but no dedicated plan API was found.

---

# Business Value

GearUp solves a real operational problem for fitness studios and martial-arts gyms: managing class schedules, capacity, instructors, and payments while giving members an easy way to find and book training nearby.

For **gym owners and operators**, it replaces manual scheduling, spreadsheets, and cash-only handling with a centralized system that publishes classes, sells spots online, tracks revenue, manages staff, and surfaces analytics to grow the business.

For **members**, it removes friction from finding the right class — discovering nearby gyms, comparing disciplines, seeing real availability, booking and paying in a few taps, getting reminders, and leaving reviews.

For the **platform operator**, the multi-gym design and role hierarchy make it a scalable marketplace that can onboard many gyms, monitor performance, and centralize payments and reporting.

---

# Fiverr Portfolio Summary

A complete **fitness & martial-arts class booking platform** with both a member app and an admin back office:

- 📍 **Find classes near you** — location-based discovery with distance filtering
- 🥊 **Browse by discipline** — Boxing, Muay Thai, MMA, Jiu-Jitsu, and more
- 📅 **Easy booking** — book single sessions or recurring class days with live availability
- 🔔 **Waitlist alerts** — get notified the moment a full class opens up
- 💳 **Secure online payments** — saved cards, default card, and refunds
- ⭐ **Reviews & ratings** — members rate classes after attending
- 📲 **Reminders & notifications** — in-app alerts plus mobile push and daily class reminders
- 🏢 **Gym management** — manage gyms, classes, instructors, media, and disciplines
- 👥 **Team & member management** — admin roles, staff, and customer accounts
- 📊 **Analytics dashboard** — revenue, bookings, growth, top gyms, and top disciplines
- 📂 **Payment reports & exports** — download payment data
- 🌐 **Multi-gym, multi-language ready** — built to scale across many locations
- 🔐 **Secure accounts** — email verification, password recovery, and protected access

---

# Short Fiverr Description

A complete fitness and martial-arts class booking platform built for gyms and their members. Members can discover gyms near them, browse classes by discipline, view live availability, and book single or recurring sessions in just a few taps. Secure online card payments, saved cards, and automatic refunds make checkout effortless, while reviews, ratings, and a smart waitlist (get alerted when a full class opens up) keep members engaged. Real-time in-app notifications, mobile push, and daily class reminders ensure no one misses a session.

On the business side, gym owners get a powerful admin back office to manage gyms, classes, instructors, disciplines, and members. A rich analytics dashboard tracks revenue, bookings, member growth, top-performing gyms, and popular disciplines, with exportable payment reports. Role-based access supports owners, administrators, and staff, and the multi-gym design scales across many locations.

If you need a polished, end-to-end booking and management system for a studio, gym, or class-based business, this solution delivers everything from discovery to payment to reporting.
