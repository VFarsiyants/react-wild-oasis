import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qqeihryvcwymooyagaea.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxZWlocnl2Y3d5bW9veWFnYWVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExOTM0NjksImV4cCI6MjAxNjc2OTQ2OX0.cKwu72yMZDFVNm8GYMIUmDMgGemtzl0rmpXKl1A68aI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
