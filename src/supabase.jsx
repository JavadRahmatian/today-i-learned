import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://capfamvnkxdfepqmtcni.supabase.co";
const supabaseKey =
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhcGZhbXZua3hkZmVwcW10Y25pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2MTU4MTEsImV4cCI6MjA0NzE5MTgxMX0.xEIF-rJZXXRrngxwcGIWNZwyl73KSFqQ7H21QlzUlPA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
