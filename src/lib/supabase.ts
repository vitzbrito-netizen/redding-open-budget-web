import { createClient } from '@supabase/supabase-js'

// Usamos 'as any' para o TypeScript parar de reclamar do Vite
const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)