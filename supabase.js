// =========================
// Supabase client (GLOBAL)
// =========================

const SUPABASE_URL = "https://romgbrobvperljaviekj.supabase.co";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvbWdicm9idnBlcmxqYXZpZWtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY3MTQ1MTMsImV4cCI6MjA4MjI5MDUxM30.WIpN_Hj0C70bD3Q-Bnxk4tfdgJRr8NnQwmJdM3C5HuI";

// Crear cliente
const supa = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Exponerlo globalmente de 2 formas:
window.db = supa;

// ✅ ESTO ES LO QUE TE FALTA (para que exista "db" en el HTML)
var db = supa;
