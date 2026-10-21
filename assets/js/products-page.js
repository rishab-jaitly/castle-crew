
(function(){
 const grid=document.getElementById('all-products'), input=document.getElementById('product-search'), count=document.getElementById('product-count');
 if(!grid||!window.CASSLE_PRODUCTS)return;
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function render(){const q=(input.value||'').trim().toLowerCase();const list=window.CASSLE_PRODUCTS.filter(p=>(p.name+' '+p.category+' '+p.description).toLowerCase().includes(q));count.textContent=list.length+' product '+(list.length===1?'shown':'items shown');grid.innerHTML=list.length?list.map(p=>`<article class="product-card"><a href="product.html?id=${encodeURIComponent(p.id)}" aria-label="View ${esc(p.name)}"><div class="product-image"><img src="${p.image}" alt="${esc(p.alt)}" loading="lazy"><span class="view-label">View product ↗</span></div></a><div class="product-meta"><span class="product-category">${esc(p.category)}</span><h3><a href="product.html?id=${encodeURIComponent(p.id)}">${esc(p.name)}</a></h3><p>${esc(p.description)}</p><a class="text-link" href="product.html?id=${encodeURIComponent(p.id)}">View details <span>→</span></a></div></article>`).join(''):'<div class="empty-state">No products match that search. Try another term or browse the categories.</div>';}
 input.addEventListener('input',render);render();
})();
