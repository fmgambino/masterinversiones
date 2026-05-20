export const SUPABASE_URL='';
export const SUPABASE_ANON_KEY='';
export const supabaseClient=(SUPABASE_URL&&SUPABASE_ANON_KEY&&window.supabase)?window.supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY):null;
export const demoUsers=[
 {email:'super@elmaster.vip',pass:'123456',role:'SuperAdmin',name:'Fernando Gambino',id:'MSTR-SUPR-0001'},
 {email:'empleado@elmaster.vip',pass:'123456',role:'Empleados',name:'Mesa Operativa',id:'MSTR-EMPL-2001'},
 {email:'socio@elmaster.vip',pass:'123456',role:'Socios',name:'Juan Pérez',id:'MSTR-KQZW-XLDS'}
];
export async function login(email,password,role){
 if(supabaseClient){const {data,error}=await supabaseClient.auth.signInWithPassword({email,password}); if(error) throw error; return {...data.user,role,name:email.split('@')[0]};}
 const u=demoUsers.find(x=>x.email===email&&x.pass===password&&x.role===role); if(!u) throw new Error('Credenciales inválidas'); localStorage.setItem('elmaster_user',JSON.stringify(u)); return u;
}
export async function signup(email,password,role,name){
 if(supabaseClient){const {data,error}=await supabaseClient.auth.signUp({email,password,options:{data:{role,name}}}); if(error) throw error; return data.user;}
 const u={email,pass:password,role,name:name||email.split('@')[0],id:'MSTR-'+Math.random().toString(36).slice(2,6).toUpperCase()+'-'+Math.random().toString(36).slice(2,6).toUpperCase()}; demoUsers.push(u); localStorage.setItem('elmaster_user',JSON.stringify(u)); return u;
}
export async function recover(email){ if(supabaseClient) return supabaseClient.auth.resetPasswordForEmail(email); return true; }
export async function logout(){ if(supabaseClient) await supabaseClient.auth.signOut(); localStorage.removeItem('elmaster_user'); }
export function currentUser(){ return JSON.parse(localStorage.getItem('elmaster_user')||'null'); }
