import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kjjfzlplwvbnffajasld.supabase.co';
const supabaseAnonKey = 'EyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqamZ6bHBsd3ZibmZmYWphc2xkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM4ODE4NTEsImV4cCI6MjA5OTQ1Nzg1MX0.Kd5Kylv_o7KevoJGJJSWc3gr0xbQrmiSjA6GMtKrQZ8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
