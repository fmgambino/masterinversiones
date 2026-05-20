// auth.js — preparado para Supabase. Reemplazá URL y KEY para producción.
// En demo usa localStorage con datos simulados para GitHub Pages.
export const SUPABASE_URL='https://TU-PROYECTO.supabase.co';
export const SUPABASE_ANON_KEY='TU_SUPABASE_ANON_KEY';
export const DEMO_USERS=[
 {email:'superadmin@elmaster.vip',password:'123456',role:'SuperAdmin',name:'Fernando Gambino',id:'MSTR-KQZW-XLDS'},
 {email:'empleado@elmaster.vip',password:'123456',role:'Empleados',name:'Mesa Operativa',id:'EMP-0931'},
 {email:'socio@elmaster.vip',password:'123456',role:'Socios',name:'Juan Pérez',id:'MSTR-7KLD-A29P'}
];
export const Auth={
 users(){return JSON.parse(localStorage.getItem('em_users')||JSON.stringify(DEMO_USERS))},
 saveUsers(u){localStorage.setItem('em_users',JSON.stringify(u))},
 session(){return JSON.parse(localStorage.getItem('em_session')||'null')},
 login(email,password,role){const u=this.users().find(x=>x.email===email&&x.password===password&&x.role===role); if(!u) throw new Error('Credenciales inválidas o perfil incorrecto'); localStorage.setItem('em_session',JSON.stringify({...u,password:undefined})); return u},
 register(data){const users=this.users(); if(users.some(u=>u.email===data.email)) throw new Error('El email ya existe'); const u={...data,id:'MSTR-'+Math.random().toString(36).slice(2,6).toUpperCase()+'-'+Math.random().toString(36).slice(2,6).toUpperCase()}; users.push(u); this.saveUsers(users); return u},
 logout(){localStorage.removeItem('em_session')},
 reset(email){return this.users().some(u=>u.email===email)}
};
window.EMAuth=Auth;
