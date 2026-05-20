// Supabase auth separado. Completar con tus credenciales de Hostinger/GitHub Pages.
export const SUPABASE_URL = 'https://TU-PROYECTO.supabase.co';
export const SUPABASE_ANON_KEY = 'TU_SUPABASE_ANON_KEY';
export const authConfig = { redirectTo: location.origin + location.pathname };
export async function getSupabase(){
  const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm');
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { auth:{ persistSession:true, autoRefreshToken:true }});
}
export async function mockSession(){
  return { id:'USR-0001', role:'SuperAdmin', email:'superadmin@elmaster.vip', name:'Fernando Gambino', memberId:'MSTR-KQZW-XLDS' };
}
