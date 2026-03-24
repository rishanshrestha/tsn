# AI Summit 2026 – Setup Guide

## 1. Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Run the migration in **SQL Editor**:

```sql
-- Copy contents from supabase-migrations/001_ai_summit_registrations.sql
```

3. Add to `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## 2. Email (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Add and verify your domain (or use `onboarding@resend.dev` for testing)
3. Add to `.env.local`:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
RESEND_FROM_EMAIL=AI Summit <noreply@yourdomain.com>
```

## 3. WhatsApp Notifications (Optional)

Use a Zapier/Make webhook to forward registrations to WhatsApp:

1. Create a Zap: Webhook (Catch Hook) → WhatsApp
2. Add webhook URL to `.env.local`:

```
WHATSAPP_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/.../...
```

The API sends a POST with: `{ event, ticketId, fullName, email, phone, category, timestamp }`

## 4. Fallback (No Supabase)

If Supabase is not configured, registrations are saved to `data/ai-summit-2026-registrations.json` (ensure `data/` exists and is writable).
