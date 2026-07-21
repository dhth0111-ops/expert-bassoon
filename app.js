
const q=document.querySelector('#search'),cards=[...document.querySelectorAll('[data-title]')],empty=document.querySelector('#empty');
if(q){q.addEventListener('input',()=>{let n=0;const v=q.value.trim().toLowerCase();cards.forEach(c=>{const ok=c.dataset.title.toLowerCase().includes(v);c.style.display=ok?'':'none';if(ok)n++});empty.style.display=n?'none':'block'})}
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js'))}
