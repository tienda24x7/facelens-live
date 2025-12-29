// =========================
// Supabase client (GLOBAL)
// =========================

// URL de tu proyecto Supabase
const SUPABASE_URL = "https://romgbrobvperljaviekj.supabase.co";

// Anon public key (JWT largo que empieza con eyJ...)
const SUPABASE_ANON_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvbWdicm9idnBlcmxqYXZpZWtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY3MTQ1MTMsImV4cCI6MjA4MjI5MDUxM30.WIpN_Hj0C70bD3Q-Bnxk4tfdgJRr8NnQwmJdM3C5HuI";

// Creamos el cliente y lo exponemos globalmente
window.db = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
