// ============================================
// SUPABASE CONFIG — shared across all pages
// ============================================

const SUPABASE_URL = 'https://xdorsgwwtpfyhjgsheun.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhkb3JzZ3d3dHBmeWhqZ3NoZXVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5NDM5OTEsImV4cCI6MjA5NzUxOTk5MX0.qIFlLR4dHGO43QpPZBJzJIued79QnI-NAeSfwUDd3vg';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
