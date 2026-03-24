import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabase =
  supabaseUrl && supabaseServiceKey
    ? createClient(supabaseUrl, supabaseServiceKey)
    : null;

export type AISummitRegistration = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  category: "student" | "general";
  organization?: string;
  designation?: string;
  message?: string;
  ticket_id?: string;
  created_at: string;
};
