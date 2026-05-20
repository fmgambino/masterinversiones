document.getElementById('menuBtn')?.addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));
if('serviceWorker' in navigator){navigator.serviceWorker.register('./service-worker.js').catch(()=>{});}
