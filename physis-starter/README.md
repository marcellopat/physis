# PHÝSIS – Next.js + Supabase Starter

## 1) Setup
1. Create a new Supabase project.
2. Copy `.env.example` to `.env.local` and fill in:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY (for local seeding only)
   - ADMIN_EMAILS (comma-separated)
   - STRIPE keys (test keys for now)
3. In Supabase SQL editor, run `src/db/schema.sql`.
4. Seed local data: `npm i` then `npm run db:seed`.

## 2) Dev
- `npm run dev` → http://localhost:3000

## 3) Lovable
- Push this repo to GitHub.
- In Lovable, connect the repository and set environment variables.
- Configure build (Next.js 14) and deploy.

## 4) Stripe Coming Soon
- The UI shows a Pro banner with a waitlist link. Replace `NEXT_PUBLIC_STRIPE_PRICING_URL` or swap the stub API for real checkout later.

## 5) Theming
- Tailwind brand colors: `olive` and `terracotta`.
- Fonts: Cormorant Garamond for quotes, Inter for UI.

## 6) Admin
- Add your email to `ADMIN_EMAILS`. Visit `/admin` while signed in to see basic stats.
