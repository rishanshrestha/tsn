-- AI Summit 2026 Registrations Table
CREATE TABLE IF NOT EXISTS ai_summit_2026_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ticket_id TEXT UNIQUE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('student', 'general')),
  organization TEXT,
  designation TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_ai_summit_reg_email ON ai_summit_2026_registrations(email);
CREATE INDEX IF NOT EXISTS idx_ai_summit_reg_created ON ai_summit_2026_registrations(created_at DESC);
