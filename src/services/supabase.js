import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://scqnbifobvkghzodcnfi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjcW5iaWZvYnZrZ2h6b2RjbmZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTU4MzYsImV4cCI6MjAxMjQzMTgzNn0.eZzOgLJqmU3zE9QwsQAqLnFvkMPG58IZupSW0D9-O2g";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
