import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dkghsncxilxeltbwtwez.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrZ2hzbmN4aWx4ZWx0Ynd0d2V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzNzMzNjcsImV4cCI6MjAxMDk0OTM2N30.vz6y6FUNeRwEuF3R3MipDm_RqVCNHEwRMYuBUdWmhFc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
