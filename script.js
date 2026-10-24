// Mobile menu
const mb=document.querySelector('.menu-btn'),nav=document.querySelector('nav');
if(mb)mb.addEventListener('click',()=>nav.classList.toggle('open'));

// Hero slider
const slides=[...document.querySelectorAll('.slide')];
if(slides.length){
  let i=0,t;
  const show=n=>{slides[i].classList.remove('on');i=(n+slides.length)%slides.length;slides[i].classList.add('on')};
  const auto=()=>{clearInterval(t);t=setInterval(()=>show(i+1),6000)};
  document.querySelector('.prev')?.addEventListener('click',()=>{show(i-1);auto()});
  document.querySelector('.next')?.addEventListener('click',()=>{show(i+1);auto()});
  auto();
}

// Scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));

// Product filters
const fb=document.querySelectorAll('.filters button');
fb.forEach(b=>b.addEventListener('click',()=>{
  fb.forEach(x=>x.classList.remove('on'));b.classList.add('on');
  const f=b.dataset.f;
  document.querySelectorAll('.pcard').forEach(c=>{c.style.display=(f==='all'||c.dataset.cat===f)?'':'none'});
}));

// Contact form: opens the visitor's email app with the enquiry filled in
const form=document.getElementById('enquiry');
if(form)form.addEventListener('submit',e=>{
  e.preventDefault();
  const d=Object.fromEntries(new FormData(form));
  const body=`Name: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email}\nInterested in: ${d.interest}\n\n${d.message}`;
  location.href=`mailto:info@yourcompany.co.za?subject=${encodeURIComponent('Container enquiry – '+d.interest)}&body=${encodeURIComponent(body)}`;
  document.querySelector('.ok').style.display='block';
});

// Pre-select container from product page links
const q=new URLSearchParams(location.search).get('item');
if(q&&form){const s=form.querySelector('[name=interest]');[...s.options].forEach(o=>{if(o.value===q)s.value=q})}
