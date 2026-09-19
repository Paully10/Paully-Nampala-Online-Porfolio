(function(){
  const root=document.documentElement;
  const saved=localStorage.getItem('paully-theme');
  if(saved==='light') root.classList.add('light');
  const toggle=document.querySelector('[data-theme-toggle]');
  function update(){if(!toggle)return; const light=root.classList.contains('light'); toggle.querySelector('.sun')?.classList.toggle('selected',light); toggle.querySelector('.moon')?.classList.toggle('selected',!light);}
  toggle?.addEventListener('click',()=>{root.classList.toggle('light');localStorage.setItem('paully-theme',root.classList.contains('light')?'light':'dark');update();}); update();
  const top=document.querySelector('.top');
  window.addEventListener('scroll',()=>top?.classList.toggle('show',window.scrollY>500));
  top?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
})();
