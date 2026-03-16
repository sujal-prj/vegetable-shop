// ============================================================
//  Azad Vegetable and Fruits — Main Shop Logic
//  app.js — runs AFTER Firebase module sets window._fbUser
// ============================================================

// ── Product catalogue ────────────────────────────────────────────
const vegetables = [
  // Fresh Fruits
  {id:23,name:"Apple (सेब)",          emoji:"🍎",price:160,unit:"kg",   category:"freshfruit",desc:"Crisp Shimla apples, naturally sweet.",       badge:"Popular",  rating:4.9,tags:["Shimla","Sweet"]},
  {id:24,name:"Banana (केला)",         emoji:"🍌",price:50, unit:"dozen",category:"freshfruit",desc:"Ripe yellow bananas, great for energy.",       badge:"Bestseller",rating:4.8,tags:["Energy","Kids Favourite"]},
  {id:25,name:"Mango (आम)",            emoji:"🥭",price:120,unit:"kg",   category:"freshfruit",desc:"Sweet Alphonso & Kesar mangoes!",              badge:"Seasonal", rating:5.0,tags:["Alphonso","Summer"]},
  {id:26,name:"Orange (संतरा)",        emoji:"🍊",price:80, unit:"kg",   category:"freshfruit",desc:"Juicy Nagpur oranges, Vitamin C rich.",       badge:"Fresh",    rating:4.7,tags:["Vitamin C","Nagpur"]},
  {id:27,name:"Watermelon (तरबूज)",   emoji:"🍉",price:30, unit:"kg",   category:"freshfruit",desc:"Big sweet watermelons for summer.",            badge:"Seasonal", rating:4.8,tags:["Summer","Cooling"]},
  {id:28,name:"Grapes (अंगूर)",        emoji:"🍇",price:100,unit:"kg",   category:"freshfruit",desc:"Seedless grapes, green and black.",           badge:null,       rating:4.6,tags:["Seedless","Sweet"]},
  {id:29,name:"Papaya (पपीता)",        emoji:"🍐",price:40, unit:"kg",   category:"freshfruit",desc:"Ripe papaya, great for digestion.",           badge:null,       rating:4.5,tags:["Healthy","Digestive"]},
  {id:30,name:"Pomegranate (अनार)",    emoji:"🍑",price:140,unit:"kg",   category:"freshfruit",desc:"Fresh pomegranate, full of antioxidants.",    badge:"Premium",  rating:4.8,tags:["Antioxidant","Premium"]},
  {id:31,name:"Lemon (नींबू)",         emoji:"🍋",price:60, unit:"kg",   category:"freshfruit",desc:"Fresh lemons for drinks and cooking.",        badge:null,       rating:4.7,tags:["Essential","Vitamin C"]},
  {id:32,name:"Guava (अमरूद)",         emoji:"🍐",price:60, unit:"kg",   category:"freshfruit",desc:"Crunchy fresh guavas, sweet.",                badge:"Fresh",    rating:4.6,tags:["Crunchy","Seasonal"]},
  {id:33,name:"Coconut (नारियल)",      emoji:"🥥",price:45, unit:"piece",category:"freshfruit",desc:"Fresh coconuts with sweet water.",            badge:null,       rating:4.7,tags:["Fresh Water","Cooking"]},
  {id:34,name:"Pineapple (अनानास)",   emoji:"🍍",price:60, unit:"piece",category:"freshfruit",desc:"Juicy ripe pineapple, sweet and tangy.",      badge:null,       rating:4.5,tags:["Tropical","Juicy"]},
  // Fruit Veggies
  {id:1, name:"Tomato (टमाटर)",        emoji:"🍅",price:30, unit:"kg",   category:"fruit",     desc:"Fresh juicy tomatoes from local farms.",     badge:"Fresh",    rating:4.8,tags:["Organic","Daily Delivery"]},
  {id:2, name:"Brinjal (बैंगन)",       emoji:"🍆",price:35, unit:"kg",   category:"fruit",     desc:"Tender brinjals, perfect for bharta.",       badge:null,       rating:4.5,tags:["Farm Fresh"]},
  {id:3, name:"Capsicum (शिमला मिर्च)",emoji:"🫑",price:60, unit:"kg",   category:"fruit",     desc:"Crunchy green capsicums, great for stir fry.",badge:"Sale",    rating:4.6,tags:["Crispy"]},
  {id:4, name:"Cucumber (खीरा)",       emoji:"🥒",price:25, unit:"kg",   category:"fruit",     desc:"Cool refreshing cucumbers for salads.",      badge:null,       rating:4.7,tags:["Cooling","Salad"]},
  {id:5, name:"Bitter Gourd (करेला)",  emoji:"🥬",price:40, unit:"kg",   category:"fruit",     desc:"Fresh karela, packed with health benefits.", badge:null,       rating:4.3,tags:["Healthy","Medicinal"]},
  // Root Veggies
  {id:6, name:"Potato (आलू)",          emoji:"🥔",price:28, unit:"kg",   category:"root",      desc:"Premium Agra potatoes, perfect for every recipe.",badge:"Bestseller",rating:4.9,tags:["Bestseller","Bulk"]},
  {id:7, name:"Onion (प्याज)",         emoji:"🧅",price:35, unit:"kg",   category:"root",      desc:"Sharp flavourful onions from Nashik.",       badge:null,       rating:4.8,tags:["Nashik","Aroma"]},
  {id:8, name:"Carrot (गाजर)",         emoji:"🥕",price:38, unit:"kg",   category:"root",      desc:"Crunchy sweet carrots, Vitamin A rich.",     badge:"Organic",  rating:4.7,tags:["Organic","Sweet"]},
  {id:9, name:"Radish (मूली)",         emoji:"🌾",price:20, unit:"bunch", category:"root",      desc:"Fresh radishes, great for parathas.",        badge:null,       rating:4.4,tags:["Winter Special"]},
  {id:10,name:"Beetroot (चुकंदर)",     emoji:"🫚",price:35, unit:"kg",   category:"root",      desc:"Deep red beetroots, excellent for health.",  badge:null,       rating:4.5,tags:["Healthy","Salad"]},
  // Leafy Greens
  {id:11,name:"Spinach (पालक)",        emoji:"🥬",price:20, unit:"bunch", category:"leafy",     desc:"Tender fresh spinach, washed and ready.",    badge:"Fresh",    rating:4.8,tags:["Iron Rich","Organic"]},
  {id:12,name:"Fenugreek (मेथी)",      emoji:"🌿",price:15, unit:"bunch", category:"leafy",     desc:"Aromatic fresh methi for sabzi.",             badge:null,       rating:4.6,tags:["Aromatic","Healthy"]},
  {id:13,name:"Coriander (धनिया)",     emoji:"🪴",price:10, unit:"bunch", category:"leafy",     desc:"Fresh green coriander for garnish.",          badge:null,       rating:4.9,tags:["Fresh","Aromatic"]},
  {id:14,name:"Cabbage (पत्तागोभी)",   emoji:"🥬",price:30, unit:"kg",   category:"leafy",     desc:"Fresh white cabbage for salads.",             badge:null,       rating:4.5,tags:["Crunchy"]},
  // Exotic
  {id:15,name:"Broccoli (ब्रोकली)",    emoji:"🥦",price:80, unit:"kg",   category:"exotic",    desc:"Imported fresh broccoli, high in nutrients.",badge:"Exotic",   rating:4.7,tags:["Exotic","Imported"]},
  {id:16,name:"Baby Corn (बेबी कॉर्न)",emoji:"🌽",price:90, unit:"pack", category:"exotic",    desc:"Tender baby corn for Chinese dishes.",        badge:"Exotic",   rating:4.6,tags:["Restaurant Style"]},
  {id:17,name:"Mushroom (मशरूम)",      emoji:"🍄",price:120,unit:"pack", category:"exotic",    desc:"Fresh button mushrooms for curries.",         badge:"Premium",  rating:4.8,tags:["Premium","Exotic"]},
  {id:18,name:"Zucchini (तोरई)",       emoji:"🥒",price:70, unit:"kg",   category:"exotic",    desc:"Light zucchini for healthy cooking.",         badge:"Exotic",   rating:4.5,tags:["Gourmet","Healthy"]},
  // Herbs
  {id:19,name:"Garlic (लहसुन)",        emoji:"🧄",price:100,unit:"kg",   category:"herbs",     desc:"Fresh pungent garlic, elevates any dish.",   badge:null,       rating:4.9,tags:["Essential","Aromatic"]},
  {id:20,name:"Ginger (अदरक)",         emoji:"🫚",price:80, unit:"kg",   category:"herbs",     desc:"Fresh ginger root for tea and cooking.",     badge:null,       rating:4.8,tags:["Medicinal","Aromatic"]},
  {id:21,name:"Green Chilli (हरी मिर्च)",emoji:"🌶️",price:40,unit:"kg",  category:"herbs",     desc:"Spicy green chillies from Andhra farms.",    badge:"Hot",      rating:4.7,tags:["Spicy","Fresh"]},
  {id:22,name:"Curry Leaves (कड़ी पत्ता)",emoji:"🍃",price:10,unit:"bunch",category:"herbs",   desc:"Fresh curry leaves, South Indian essential.",badge:null,       rating:4.6,tags:["Fresh","Aromatic"]},
];

// ── State ────────────────────────────────────────────────────────
let cart          = JSON.parse(localStorage.getItem('azad_cart') || '[]');
let currentUser   = null;
let currentPage   = 'home';
let currentFilter = 'all';
let currentSort   = 'default';
let maxPrice      = 300;

// ── Apply admin prices from localStorage (synced from Firestore) ─
function applyAdminPrices() {
  const prices = JSON.parse(localStorage.getItem('azad_prices') || '{}');
  const custom  = JSON.parse(localStorage.getItem('azad_custom_products') || '[]');
  custom.forEach(p => { if (!vegetables.find(v => v.id === p.id)) vegetables.push(p); });
  vegetables.forEach(v => { if (prices[v.id] !== undefined) v.price = prices[v.id]; });
}

// ── Called by Firebase module once auth confirmed ────────────────
window.initShop = function(user) {
  currentUser = user;
  applyAdminPrices();

  // Update nav with user's first name
  const firstName = (user.displayName || user.email || 'User').split(/[\s@]/)[0];
  const nameEl = document.getElementById('navUserName');
  if (nameEl) nameEl.textContent = firstName;

  // Update profile page
  const pnEl = document.getElementById('profileName');
  if (pnEl) pnEl.textContent = user.displayName || user.email;
  const ppEl = document.getElementById('profilePhone');
  if (ppEl) ppEl.textContent = user.phoneNumber || user.email;
  const photoEl = document.getElementById('profilePhoto');
  if (photoEl && user.photoURL) {
    photoEl.innerHTML = `<img src="${user.photoURL}" class="profile-avatar-img" alt="Profile"/>`;
  } else if (photoEl) {
    const initial = (user.displayName || user.email || 'U')[0].toUpperCase();
    photoEl.innerHTML = `<div class="profile-avatar-placeholder">${initial}</div>`;
  }

  // Pre-fill checkout with user info
  const custNameEl = document.getElementById('custName');
  if (custNameEl && !custNameEl.value) custNameEl.value = user.displayName || '';
  const custPhoneEl = document.getElementById('custPhone');
  if (custPhoneEl && !custPhoneEl.value) custPhoneEl.value = user.phoneNumber || '';

  updateCartBadge();
  renderFeatured();
  renderShopGrid();
  renderFlashDeals();
  renderCartPage();
  renderCheckoutPage();

  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
  });
};

// ── Logout ───────────────────────────────────────────────────────
function logoutUser() {
  if (window._fbAuth) {
    window._fbAuth.signOut().then(() => {
      localStorage.removeItem('azad_cart');
      window.location.href = 'auth.html';
    });
  } else {
    localStorage.removeItem('azad_cart');
    window.location.href = 'auth.html';
  }
}

// ── Navigation ───────────────────────────────────────────────────
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if (el) { el.classList.add('active'); window.scrollTo(0,0); }
  const link = document.querySelector(`.nav-link[onclick="showPage('${page}')"]`);
  if (link) link.classList.add('active');
  currentPage = page;
  if (page === 'cart')     renderCartPage();
  if (page === 'checkout') renderCheckoutPage();
  document.getElementById('navLinks').classList.remove('open');
}

function scrollToSection(id) { document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); }
function toggleMobileMenu()   { document.getElementById('navLinks').classList.toggle('open'); }

// ── Product Rendering ────────────────────────────────────────────
function renderFeatured() {
  const list = vegetables.filter(v => v.badge || v.rating >= 4.7).slice(0, 8);
  const el   = document.getElementById('featuredGrid');
  if (el) el.innerHTML = list.map(productCard).join('');
}

function renderShopGrid() {
  let list = [...vegetables];
  if (currentFilter !== 'all') list = list.filter(v => v.category === currentFilter);
  list = list.filter(v => v.price <= maxPrice);
  if (currentSort === 'price-low')  list.sort((a,b) => a.price - b.price);
  if (currentSort === 'price-high') list.sort((a,b) => b.price - a.price);
  if (currentSort === 'name')       list.sort((a,b) => a.name.localeCompare(b.name));
  const el = document.getElementById('shopGrid');
  if (el) el.innerHTML = list.length ? list.map(productCard).join('') : '<div class="empty-cart"><div class="empty-icon">🔍</div><h3>No items found</h3><p>Try adjusting your filters</p></div>';
  const countEl = document.getElementById('productCount');
  if (countEl) countEl.textContent = `Showing ${list.length} product${list.length !== 1 ? 's' : ''}`;
}

function productCard(v) {
  const inCart = cart.find(c => c.id === v.id);
  return `<div class="product-card">
    <div class="product-img-wrap" onclick="openModal(${v.id})">
      ${v.badge ? `<div class="product-badge ${v.badge==='Organic'?'organic':''}">${v.badge}</div>` : ''}
      <span class="product-emoji">${v.emoji}</span>
    </div>
    <div class="product-info">
      <div class="product-name">${v.name}</div>
      <div class="product-desc">${v.desc}</div>
      <div class="product-price-row">
        <div><span class="product-price">₹${v.price}</span><span class="product-unit">/${v.unit}</span></div>
        <span class="product-rating">⭐ ${v.rating}</span>
      </div>
      ${inCart
        ? `<div class="qty-control"><button class="qty-btn" onclick="changeQty(${v.id},-1)">−</button><span class="qty-val">${inCart.qty}</span><button class="qty-btn" onclick="changeQty(${v.id},1)">+</button></div>`
        : `<button class="add-cart-btn" onclick="addToCart(${v.id})"><i class="fas fa-plus"></i> Add to Cart</button>`}
    </div>
  </div>`;
}

// ── Cart Logic ───────────────────────────────────────────────────
function addToCart(id) {
  const v = vegetables.find(x => x.id === id);
  if (!v) return;
  const ex = cart.find(c => c.id === id);
  if (ex) ex.qty++;
  else cart.push({id:v.id, name:v.name, emoji:v.emoji, price:v.price, unit:v.unit, qty:1});
  saveCart();
  showToast(`✅ ${v.name} added to cart!`, 'success');
  refreshGrids();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  saveCart();
  refreshGrids();
  if (currentPage === 'cart') renderCartPage();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  refreshGrids();
  renderCartPage();
  showToast('🗑️ Item removed', '');
}

function saveCart() {
  localStorage.setItem('azad_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const total = cart.reduce((s,i) => s + i.qty, 0);
  const el = document.getElementById('cartBadge');
  if (el) el.textContent = total;
}

function getSubtotal() { return cart.reduce((s,i) => s + i.price * i.qty, 0); }

function refreshGrids() {
  renderFeatured();
  renderShopGrid();
}

// ── Cart Page ────────────────────────────────────────────────────
function renderCartPage() {
  const cEl  = document.getElementById('cartItems');
  const sEl  = document.getElementById('summaryLines');
  const tEl  = document.getElementById('summaryTotal');
  if (!cEl) return;
  if (!cart.length) {
    cEl.innerHTML = `<div class="empty-cart"><div class="empty-icon">🛒</div><h3>Your cart is empty</h3><p>Add some fresh items to get started!</p><button class="btn-primary" onclick="showPage('shop')"><i class="fas fa-carrot"></i> Shop Now</button></div>`;
    if(sEl) sEl.innerHTML=''; if(tEl) tEl.innerHTML=''; return;
  }
  cEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>₹${item.price}/${item.unit}</p>
        <div class="cart-item-actions">
          <div class="qty-control" style="width:108px">
            <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
          </div>
          <button class="remove-btn" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
        </div>
      </div>
      <div class="cart-item-price">₹${item.price * item.qty}</div>
    </div>`).join('');
  const sub = getSubtotal();
  const del = sub >= 300 ? 0 : 30;
  if(sEl) sEl.innerHTML = `
    <div class="summary-line"><span>Subtotal</span><span>₹${sub}</span></div>
    <div class="summary-line"><span>Delivery</span><span>${del===0?'<span style="color:var(--primary);font-weight:700">FREE</span>':'₹'+del}</span></div>
    ${del>0?`<div class="summary-line" style="color:var(--orange);font-size:.78rem"><span>Add ₹${300-sub} more for free delivery!</span></div>`:''}`;
  if(tEl) tEl.innerHTML = `<span>Total</span><span>₹${sub+del}</span>`;
}

// ── Checkout Page ────────────────────────────────────────────────
function renderCheckoutPage() {
  const iEl = document.getElementById('checkoutItems');
  const tEl = document.getElementById('checkoutTotal');
  if (!iEl) return;
  if (!cart.length) { iEl.innerHTML='<p style="color:var(--muted);text-align:center;padding:20px">No items in cart</p>'; return; }
  const sub = getSubtotal(), del = sub >= 300 ? 0 : 30;
  iEl.innerHTML = cart.map(i => `<div class="checkout-item"><span>${i.emoji} ${i.name} × ${i.qty} ${i.unit}</span><span>₹${i.price*i.qty}</span></div>`).join('')
    + `<div class="checkout-item"><span>Delivery</span><span>${del===0?'FREE':'₹'+del}</span></div>`;
  if(tEl) tEl.innerHTML = `<span>Total Amount</span><span>₹${sub+del}</span>`;
}

// ── Place Order on WhatsApp ──────────────────────────────────────
function placeOrder() {
  const name    = document.getElementById('custName')?.value.trim();
  const phone   = document.getElementById('custPhone')?.value.trim();
  const address = document.getElementById('custAddress')?.value.trim();
  const city    = document.getElementById('custCity')?.value.trim() || 'Ahmedabad';
  const pin     = document.getElementById('custPin')?.value.trim() || '';
  const time    = document.getElementById('custTime')?.value || '';
  const note    = document.getElementById('custNote')?.value.trim() || '';
  if (!name)    { showToast('⚠️ Please enter your name','error'); document.getElementById('custName')?.focus(); return; }
  if (!phone || !/^\d{10}$/.test(phone)) { showToast('⚠️ Enter a valid 10-digit phone number','error'); return; }
  if (!address) { showToast('⚠️ Please enter your delivery address','error'); return; }
  if (!cart.length) { showToast('⚠️ Your cart is empty!','error'); return; }
  const sub = getSubtotal(), del = sub >= 300 ? 0 : 30, total = sub + del;
  const lines = cart.map(i => `  • ${i.emoji} ${i.name} - ${i.qty} ${i.unit} = ₹${i.price*i.qty}`).join('\n');
  const msg = `🛒 *New Order – Azad Vegetable and Fruits* 🛒
━━━━━━━━━━━━━━━━━━━━━

👤 *Customer Details*
Name: ${name}
Phone: ${phone}
Address: ${address}, ${city}${pin?' – '+pin:''}

🛍️ *Order Items:*
${lines}

━━━━━━━━━━━━━━━━━━━━━
🧾 Subtotal: ₹${sub}
🚚 Delivery: ${del===0?'FREE':'₹'+del}
💰 *Total: ₹${total}*
⏰ Time: ${time}
${note?`📝 Note: ${note}`:''}

✅ Payment on delivery. Please confirm! 🙏`;

  window.open(`https://wa.me/919875165487?text=${encodeURIComponent(msg)}`, '_blank');
  showToast('🎉 Opening WhatsApp!', 'success');
  // Save order record
  saveOrderRecord(name, phone, address, cart, total);
  setTimeout(() => { cart=[]; saveCart(); refreshGrids(); showPage('home'); }, 2000);
}

function saveOrderRecord(name, phone, address, items, total) {
  const orders = JSON.parse(localStorage.getItem('azad_orders') || '[]');
  const order  = { id:Date.now(), name, phone, address, items:items.map(i=>({...i})), total, date:new Date().toLocaleDateString('en-IN'), time:new Date().toLocaleTimeString('en-IN') };
  orders.push(order);
  localStorage.setItem('azad_orders', JSON.stringify(orders));
  const stats = JSON.parse(localStorage.getItem('azad_stats') || '{"visitors":[],"totalOrders":0,"revenue":0,"dailyVisits":{}}');
  stats.totalOrders = (stats.totalOrders||0) + 1;
  stats.revenue     = (stats.revenue||0) + total;
  localStorage.setItem('azad_stats', JSON.stringify(stats));
  // Push to Firestore if available
  if (window._saveOrderFirestore) window._saveOrderFirestore(order);
}

// ── Invoice Generator ────────────────────────────────────────────
function generateInvoice() {
  const user    = currentUser;
  const name    = document.getElementById('custName')?.value.trim() || user?.displayName || 'Customer';
  const phone   = document.getElementById('custPhone')?.value.trim() || user?.phoneNumber || '';
  const address = document.getElementById('custAddress')?.value.trim() || '';
  if (!cart.length) { showToast('⚠️ Cart is empty!','error'); return; }
  const sub    = getSubtotal(), del = sub >= 300 ? 0 : 30, total = sub + del;
  const invNo  = 'AVF-' + Date.now().toString().slice(-6);
  const now    = new Date();
  const dateStr = now.toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'});
  const timeStr = now.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});
  const rows   = cart.map(i => `<tr><td>${i.emoji} ${i.name}</td><td style="text-align:center">${i.qty} ${i.unit}</td><td style="text-align:right">₹${i.price}</td><td style="text-align:right">₹${i.price*i.qty}</td></tr>`).join('');
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Invoice ${invNo}</title>
<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',Arial,sans-serif;background:#f5f5f5;padding:20px}
.inv{background:#fff;max-width:680px;margin:0 auto;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.1)}
.hdr{background:linear-gradient(135deg,#2d7a22,#1e5c17);color:#fff;padding:30px 34px}
.hdr-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:18px}
.hdr h2{font-size:1.45rem;font-weight:900;margin-bottom:3px}
.hdr p{font-size:.78rem;opacity:.8}
.badge{background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.28);border-radius:20px;padding:4px 13px;font-size:.72rem;font-weight:700;display:inline-block;margin-top:7px}
.num{text-align:right}.num h3{font-size:1.35rem;font-weight:900;margin-bottom:3px}
.body{padding:26px 34px}
.meta{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:22px;padding-bottom:18px;border-bottom:2px dashed #e0e0e0}
.meta h4{font-size:.7rem;text-transform:uppercase;letter-spacing:1px;color:#999;margin-bottom:5px;font-weight:700}
.meta strong{font-size:.97rem;color:#1a2e18;display:block}
.meta p{font-size:.86rem;color:#555;line-height:1.6}
table{width:100%;border-collapse:collapse;margin-bottom:18px}
thead{background:#f0f7ee}
th{padding:9px 13px;text-align:left;font-size:.72rem;text-transform:uppercase;letter-spacing:.5px;color:#6b7c69;font-weight:700}
td{padding:10px 13px;border-bottom:1px solid #f0f0f0;font-size:.86rem;color:#333}
.tots{margin-left:auto;width:255px}
.tr{display:flex;justify-content:space-between;padding:6px 0;font-size:.86rem;color:#666}
.tr.big{font-size:1.03rem;font-weight:800;color:#1a2e18;border-top:2px solid #2d7a22;margin-top:5px;padding-top:9px}
.ftr{background:#f8fdf6;padding:18px 34px;border-top:1px solid #e0e0e0;text-align:center}
.ftr p{font-size:.78rem;color:#888;margin-bottom:3px}
.ftr strong{color:#2d7a22}
.wa{display:inline-flex;align-items:center;gap:6px;background:#25D366;color:#fff;padding:5px 14px;border-radius:20px;font-size:.76rem;font-weight:700;margin-top:7px}
@media print{body{background:#fff;padding:0}.inv{box-shadow:none;border-radius:0}}</style></head><body>
<div class="inv">
  <div class="hdr">
    <div class="hdr-top">
      <div><h2>🛒 Azad Vegetable and Fruits</h2><p>Gandhi Market, Navrangpura, Ahmedabad – 380009</p><p>WhatsApp: +91 98765 43210</p><div class="badge">⭐ Trusted Since 1994 · 30+ Years of Freshness</div></div>
      <div class="num"><h3>INVOICE</h3><p>#${invNo}</p><p style="margin-top:5px">${dateStr}</p><p>${timeStr}</p></div>
    </div>
  </div>
  <div class="body">
    <div class="meta">
      <div><h4>Bill To</h4><strong>${name}</strong><p>${phone}</p><p>${address}</p></div>
      <div><h4>Order Info</h4><p><strong>Invoice:</strong> ${invNo}</p><p><strong>Date:</strong> ${dateStr}</p><p><strong>Payment:</strong> Cash on Delivery</p><p><strong>Status:</strong> <span style="color:#2d7a22;font-weight:700">Confirmed ✅</span></p></div>
    </div>
    <table><thead><tr><th>Item</th><th style="text-align:center">Qty</th><th style="text-align:right">Rate</th><th style="text-align:right">Amount</th></tr></thead><tbody>${rows}</tbody></table>
    <div class="tots">
      <div class="tr"><span>Subtotal</span><span>₹${sub}</span></div>
      <div class="tr"><span>Delivery</span><span style="${del===0?'color:#2d7a22;font-weight:700':''}">${del===0?'FREE':'₹'+del}</span></div>
      <div class="tr big"><span>Total Amount</span><span>₹${total}</span></div>
    </div>
  </div>
  <div class="ftr"><p>Thank you for shopping with <strong>Azad Vegetable and Fruits</strong>!</p><p>Fresh produce delivered daily since 1994 · 30+ years of trust 🏆</p><div class="wa">💬 +91 98765 43210</div></div>
</div>
<br/><div style="text-align:center">
  <button onclick="window.print()" style="background:#2d7a22;color:#fff;border:none;padding:12px 26px;border-radius:10px;font-size:.97rem;font-weight:700;cursor:pointer;margin-right:9px">🖨️ Print / Save PDF</button>
  <button onclick="window.close()" style="background:#f0f7ee;border:2px solid #d4eacf;padding:12px 22px;border-radius:10px;font-size:.93rem;font-weight:600;cursor:pointer">✕ Close</button>
</div></body></html>`;
  const w = window.open('','_blank','width=750,height=900');
  w.document.write(html); w.document.close();
}

// ── Filters & Search ─────────────────────────────────────────────
function applyFilters() {
  currentFilter = document.getElementById('filterSelect')?.value || 'all';
  currentSort   = document.getElementById('sortSelect')?.value  || 'default';
  renderShopGrid();
}

function filterCategory(cat) {
  showPage('shop');
  currentFilter = cat;
  const fs = document.getElementById('filterSelect');
  if (fs) fs.value = cat;
  renderShopGrid();
}

function resetFilters() {
  currentFilter = 'all'; currentSort = 'default'; maxPrice = 300;
  const fs = document.getElementById('filterSelect'); if(fs) fs.value='all';
  const ss = document.getElementById('sortSelect');   if(ss) ss.value='default';
  const pr = document.getElementById('priceRange');   if(pr) pr.value=300;
  const pv = document.getElementById('priceVal');     if(pv) pv.textContent=300;
  renderShopGrid();
}

function updatePrice(val) {
  maxPrice = parseInt(val);
  const pv = document.getElementById('priceVal');
  if(pv) pv.textContent = val;
}

function setView(type) {
  const grid  = document.getElementById('shopGrid');
  const gBtn  = document.getElementById('gridBtn');
  const lBtn  = document.getElementById('listBtn');
  if(gBtn) gBtn.classList.toggle('active', type==='grid');
  if(lBtn) lBtn.classList.toggle('active', type==='list');
  if(grid) grid.classList.toggle('list-view', type==='list');
}

function handleSearch() {
  const q = document.getElementById('searchInput')?.value.toLowerCase().trim();
  if (!q) { renderShopGrid(); return; }
  showPage('shop');
  const filtered = vegetables.filter(v =>
    v.name.toLowerCase().includes(q) ||
    v.category.includes(q) ||
    v.desc.toLowerCase().includes(q) ||
    (v.tags||[]).some(t => t.toLowerCase().includes(q))
  );
  const el = document.getElementById('shopGrid');
  if(el) el.innerHTML = filtered.length
    ? filtered.map(productCard).join('')
    : `<div class="empty-cart"><div class="empty-icon">🔍</div><h3>No results for "${q}"</h3><p>Try a different search</p></div>`;
  const ce = document.getElementById('productCount');
  if(ce) ce.textContent = `${filtered.length} result${filtered.length!==1?'s':''} for "${q}"`;
}

// ── Product Modal ────────────────────────────────────────────────
function openModal(id) {
  const v = vegetables.find(x => x.id === id);
  if (!v) return;
  const inCart = cart.find(c => c.id === v.id);
  document.getElementById('modalContent').innerHTML = `
    <span class="modal-emoji">${v.emoji}</span>
    <div class="modal-name">${v.name}</div>
    <div class="modal-price">₹${v.price} <small style="font-weight:400;color:var(--muted);font-size:.88rem">/${v.unit}</small></div>
    <div class="modal-desc">${v.desc}</div>
    <div class="modal-tags">${(v.tags||[]).map(t=>`<span class="modal-tag">${t}</span>`).join('')}</div>
    <p style="font-size:.83rem;color:var(--muted);margin-bottom:15px">⭐ ${v.rating} · ${v.category}</p>
    ${inCart
      ? `<div class="qty-control"><button class="qty-btn" onclick="changeQty(${v.id},-1);openModal(${v.id})">−</button><span class="qty-val">${inCart.qty}</span><button class="qty-btn" onclick="changeQty(${v.id},1);openModal(${v.id})">+</button></div>`
      : `<button class="add-cart-btn" onclick="addToCart(${v.id});closeModal()"><i class="fas fa-plus"></i> Add to Cart</button>`}`;
  document.getElementById('modalOverlay').classList.add('open');
}
function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); }

// ── Flash Deals ──────────────────────────────────────────────────
function renderFlashDeals() {
  const deals = [
    {name:"Tomato (टमाटर)",  emoji:"🍅",oldPrice:40, newPrice:30, id:1},
    {name:"Apple (सेब)",     emoji:"🍎",oldPrice:200,newPrice:160,id:23},
    {name:"Carrot (गाजर)",   emoji:"🥕",oldPrice:50, newPrice:38, id:8},
    {name:"Banana (केला)",   emoji:"🍌",oldPrice:70, newPrice:50, id:24},
    {name:"Onion (प्याज)",   emoji:"🧅",oldPrice:50, newPrice:35, id:7},
    {name:"Orange (संतरा)",  emoji:"🍊",oldPrice:100,newPrice:80, id:26},
  ];
  const el = document.getElementById('flashDeals');
  if(el) el.innerHTML = deals.map(d => `
    <div class="flash-card">
      <span class="flash-emoji">${d.emoji}</span>
      <div class="flash-info">
        <h4>${d.name}</h4>
        <div class="old-price">₹${d.oldPrice}</div>
        <div class="new-price">₹${d.newPrice}</div>
      </div>
      <button class="btn-sm" style="margin-left:auto" onclick="addToCart(${d.id})">Add</button>
    </div>`).join('');
}

// ── Bundles ──────────────────────────────────────────────────────
function addBundle() {
  [1,6,7].forEach(id => {
    const ex = cart.find(c=>c.id===id);
    if(ex) ex.qty++;
    else { const v=vegetables.find(x=>x.id===id); if(v) cart.push({id:v.id,name:v.name,emoji:v.emoji,price:v.price,unit:v.unit,qty:1}); }
  });
  saveCart(); refreshGrids(); showToast('🎉 Sabzi Bundle added!','success'); showPage('cart');
}
function addFruitBundle() {
  [24,23,26].forEach(id => {
    const ex = cart.find(c=>c.id===id);
    if(ex) ex.qty++;
    else { const v=vegetables.find(x=>x.id===id); if(v) cart.push({id:v.id,name:v.name,emoji:v.emoji,price:v.price,unit:v.unit,qty:1}); }
  });
  saveCart(); refreshGrids(); showToast('🍎 Fruit Basket added!','success'); showPage('cart');
}

// ── Promo ────────────────────────────────────────────────────────
function applyPromo() {
  const code = document.getElementById('promoCode')?.value.trim().toUpperCase();
  if (code==='FRESH10') showToast('✅ 10% discount applied!','success');
  else if(!code)        showToast('Please enter a promo code','');
  else                  showToast('❌ Invalid promo code','error');
}

// ── Contact ──────────────────────────────────────────────────────
function sendContactMsg() {
  const name  = document.getElementById('msgName')?.value.trim();
  const phone = document.getElementById('msgPhone')?.value.trim();
  const text  = document.getElementById('msgText')?.value.trim();
  if (!name||!text) { showToast('⚠️ Please fill all fields','error'); return; }
  const msg = `Hi Azad Bhai! 👋\n\nMy name is ${name}${phone?' ('+phone+')':''} .\n\n${text}\n\nThank you!`;
  window.open(`https://wa.me/919875165487?text=${encodeURIComponent(msg)}`,'_blank');
}

// ── Profile ──────────────────────────────────────────────────────
function saveProfile() {
  const name    = document.getElementById('pName')?.value.trim();
  const phone   = document.getElementById('pPhone')?.value.trim();
  const address = document.getElementById('pAddress')?.value.trim();
  if (!name) { showToast('Please enter your name','error'); return; }
  localStorage.setItem('azad_profile', JSON.stringify({name,phone,address}));
  showToast('✅ Profile saved!','success');
}

// ── Toast ────────────────────────────────────────────────────────
function showToast(msg, type='') {
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg;
  t.className = 'toast show ' + type;
  clearTimeout(window._tt);
  window._tt = setTimeout(() => t.className='toast', 2800);
}
