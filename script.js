const REMOTE_URL = 'https://serveramer-trak.vercel.app'; 
const SERVER_API_URL = `${REMOTE_URL}/api`; 

const MINIMUM_ORDER_AMOUNT = 200; 
const availableSizes = ['125 ج', '250 ج', '500 ج', '1000 ج']; 
const defaultSize = availableSizes[3]; 

// =======================================================
// 1. البيانات الأساسية (Data Model) - تم إضافة 'my-orders'
// =======================================================

const PAGE_SECTIONS = {
    'home': 'الرئيسية',
    'store': 'المتجر',
    'menu-page': 'المنيو',
    'who-are-we': 'من نحن؟',
    'contact': 'اتصل بنا',
    'checkout': 'إتمام الدفع', 
    'login-page': 'تسجيل الدخول',
    'signup-page': 'إنشاء حساب',
    'my-orders': 'طلباتي' // القسم الجديد المضاف
};

const productsData = [
    {
        category: "بُن فاتح",
        items: [
            { name: "بُن فاتح - توليفة عامر", image: 'pr5.jpg', variants: [
                { type: "سادة", prices: { '125 ج': 70, '250 ج': 135, '500 ج': 270, '1000 ج': 540 } },
                { type: "محوج", prices: { '125 ج': 75, '250 ج': 150, '500 ج': 300, '1000 ج': 600 } },
                { type: "محوج مخصوص", prices: { '125 ج': 90, '250 ج': 180, '500 ج': 360, '1000 ج': 720 } }
            ]},
            { name: "بُن فاتح - توليفة أرابيكا", image: 'pr5.jpg', variants: [
                { type: "سادة", prices: { '125 ج': 75, '250 ج': 150, '500 ج': 300, '1000 ج': 600 } },
                { type: "محوج", prices: { '125 ج': 85, '250 ج': 165, '500 ج': 330, '1000 ج': 660 } },
                { type: "محوج مخصوص", prices: { '125 ج': 100, '250 ج': 195, '500 ج': 390, '1000 ج': 780 } }
            ]},
        ]
    },
    {
        category: "بُن وسط",
        items: [
            { name: "بُن وسط - توليفة عامر", image: 'pr5.jpg', variants: [
                { type: "سادة", prices: { '125 ج': 70, '250 ج': 135, '500 ج': 270, '1000 ج': 540 } },
                { type: "محوج", prices: { '125 ج': 75, '250 ج': 150, '500 ج': 300, '1000 ج': 600 } },
                { type: "محوج مخصوص", prices: { '125 ج': 90, '250 ج': 180, '500 ج': 360, '1000 ج': 720 } }
            ]},
            { name: "بُن وسط - توليفة أرابيكا", image: 'pr5.jpg', variants: [
                { type: "سادة", prices: { '125 ج': 75, '250 ج': 150, '500 ج': 300, '1000 ج': 600 } },
                { type: "محوج", prices: { '125 ج': 85, '250 ج': 165, '500 ج': 330, '1000 ج': 660 } },
                { type: "محوج مخصوص", prices: { '125 ج': 100, '250 ج': 195, '500 ج': 390, '1000 ج': 780 } }
            ]},
        ]
    },
    {
        category: "بُن غامق",
        items: [
            { name: "بُن غامق - توليفة عامر", image: 'pr5.jpg', variants: [
                { type: "سادة", prices: { '125 ج': 70, '250 ج': 140, '500 ج': 280, '1000 ج': 560 } },
                { type: "محوج", prices: { '125 ج': 80, '250 ج': 155, '500 ج': 310, '1000 ج': 620 } },
                { type: "محوج مخصوص", prices: { '125 ج': 95, '250 ج': 185, '500 ج': 370, '1000 ج': 740 } }
            ]},
            { name: "بُن غامق - توليفة أرابيكا", image: 'pr5.jpg', variants: [
                { type: "سادة", prices: { '125 ج': 80, '250 ج': 155, '500 ج': 310, '1000 ج': 620 } },
                { type: "محوج", prices: { '125 ج': 85, '250 ج': 170, '500 ج': 340, '1000 ج': 680 } },
                { type: "محوج مخصوص", prices: { '125 ج': 100, '250 ج': 200, '500 ج': 400, '1000 ج': 800 } }
            ]},
        ]
    },
    {
        category: "بُن محروق",
        items: [
            { name: "بُن محروق - توليفة عامر", image: 'pr5.jpg', variants: [
                { type: "سادة", prices: { '125 ج': 75, '250 ج': 145, '500 ج': 290, '1000 ج': 580 } },
                { type: "محوج", prices: { '125 ج': 80, '250 ج': 160, '500 ج': 320, '1000 ج': 640 } },
                { type: "محوج مخصوص", prices: { '125 ج': 95, '250 ج': 190, '500 ج': 380, '1000 ج': 760 } }
            ]},
            { name: "بُن - كولومبي", image: 'pr5.jpg', variants: [
                { type: "سادة", prices: { '125 ج': 120, '250 ج': 240, '500 ج': 480, '1000 ج': 960 } },
                { type: "محوج", prices: { '125 ج': 135, '250 ج': 270, '500 ج': 535, '1000 ج': 1070 } },
                { type: "محوج مخصوص", prices: { '125 ج': 145, '250 ج': 285, '500 ج': 570, '1000 ج': 1140 } }
            ]},
            { name: "بُن - حبشي", image: 'pr5.jpg', variants: [
                { type: "سادة", prices: { '125 ج': 75, '250 ج': 150, '500 ج': 300, '1000 ج': 600 } },
                { type: "محوج", prices: { '125 ج': 85, '250 ج': 165, '500 ج': 330, '1000 ج': 660 } },
                { type: "محوج مخصوص", prices: { '125 ج': 100, '250 ج': 195, '500 ج': 390, '1000 ج': 780 } }
            ]},
            { name: "اسبريسو", image: 'pr5.jpg', variants: [
                { type: "70% ارابيكا", prices: { '125 ج': 80, '250 ج': 155, '500 ج': 310, '1000 ج': 620 } },
                { type: "100% ارابيكا ", prices: { '125 ج': 120, '250 ج': 240, '500 ج': 480, '1000 ج': 960 } }
            ]},
        ]
    },
    {
        category: "قهوة فلفرز",
        items: [
            { name: "قهوة عربي", image: 'pr5.jpg', variants: [
                { type: "سادة", prices: { '125 ج': 75, '250 ج': 150, '500 ج': 300, '1000 ج': 600 } },
                { type: "محوج", prices: { '125 ج': 100, '250 ج': 195, '500 ج': 390, '1000 ج': 780 } }
            ]},
            { name: "قهوة بندق", image: 'pr5.jpg', variants: [
                { type: "اوريجينال", prices: { '125 ج': 80, '250 ج': 155, '500 ج': 310, '1000 ج': 620 } }
            ]},
            { name: "قهوة فرنساوي", image: 'pr5.jpg', variants: [
                { type: "اوريجينال", prices: { '125 ج': 75, '250 ج': 150, '500 ج': 300, '1000 ج': 600 } }
            ]},
            { name: "نسكافيه كلاسيك", image: 'pr5.jpg', variants: [
                { type: "اوريجينال", prices: { '125 ج': 165, '250 ج': 325, '500 ج': 650, '1000 ج': 1300 } }
            ]},
            { name: "نسكافيه جولد", image: 'pr5.jpg', variants: [
                { type: "اوريجينال", prices: { '125 ج': 190, '250 ج': 375, '500 ج': 750, '1000 ج': 1500 } }
            ]},
        ]
    },
];

let cart = JSON.parse(localStorage.getItem('amerrcoffeeCart')) || []; 
let currentUser = JSON.parse(localStorage.getItem('amerrUser')) || null;
// لتخزين الطلبات محلياً حتى تظهر في "طلباتي"
let myOrders = JSON.parse(localStorage.getItem('amerrMyOrders')) || [];

// =======================================================
// 2. الدوال العامة وإغلاق النوافذ
// =======================================================

function openSidebar() { document.getElementById('side-drawer').classList.add('open'); }
function closeSidebar() { document.getElementById('side-drawer').classList.remove('open'); }
function openCartSidebar() { document.getElementById('cart-sidebar').classList.add('open'); renderCart(); }
function closeCartSidebar() { document.getElementById('cart-sidebar').classList.remove('open'); }
function closeAllDrawers() { closeSidebar(); closeCartSidebar(); }

window.onclick = function(event) {
    const sideDrawer = document.getElementById('side-drawer');
    const cartSidebar = document.getElementById('cart-sidebar');
    const dynamicModal = document.getElementById('dynamic-modal');
    if (event.target === sideDrawer) closeSidebar();
    if (event.target === cartSidebar) closeCartSidebar();
    if (event.target === dynamicModal) closeDynamicModal();
};

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;
    toast.textContent = message;
    toast.className = 'toast-notification'; 
    toast.classList.add(type, 'show');
    setTimeout(() => toast.classList.remove('show'), 3500);
}

// =======================================================
// 3. إدارة العضوية (معدلة لتطابق السيرفر الجديد وحذف الحساب)
// =======================================================

function updateUIForUser() {
    const btn = document.getElementById('nav-login-btn');
    const sideNavContent = document.querySelector('#side-drawer .drawer-content');
    if (currentUser) {
        if (btn) { btn.innerHTML = `<i class="material-icons">person</i> حسابي`; btn.onclick = showUserProfile; }
        if (sideNavContent) {
            sideNavContent.querySelectorAll('.drawer-item').forEach(el => {
                if (el.textContent.includes('تسجيل الدخول') || el.textContent.includes('إنشاء حساب')) el.remove();
            });
            let profileSection = document.getElementById('side-account-section');
            if (!profileSection) {
                profileSection = document.createElement('div');
                profileSection.id = 'side-account-section';
                profileSection.style = "margin: 15px; padding: 15px; background: #f9f9f9; border-radius: 12px; border: 1px solid #C78C4E; direction: rtl;";
                sideNavContent.appendChild(profileSection);
            }
            profileSection.innerHTML = `
                <h3 style="margin: 0 0 10px; color: #5A3F33; font-size: 16px;"><i class="material-icons" style="vertical-align: bottom; font-size: 18px;">account_circle</i> حسابي</h3>
                <div style="font-size: 13px; line-height: 1.6; color: #444;">
                    <p><b>الاسم:</b> ${currentUser.name}</p>
                    <p><b>الهاتف:</b> ${currentUser.phone}</p>
                    <p><b>الإيميل:</b> ${currentUser.email}</p>
                </div>
                <hr style="margin: 10px 0; border: 0; border-top: 1px solid #eee;">
                <button onclick="navigate('my-orders')" style="width: 100%; padding: 8px; background: #C78C4E; color: white; border: none; border-radius: 6px; cursor: pointer; margin-bottom: 5px; font-weight:bold;">طلباتي</button>
                <button onclick="logout()" style="width: 100%; padding: 8px; background: #5A3F33; color: white; border: none; border-radius: 6px; cursor: pointer; margin-bottom: 5px;">تسجيل الخروج</button>
                <button onclick="showDeleteConfirm()" style="width: 100%; padding: 8px; background: #fff; color: #f44336; border: 1px solid #f44336; border-radius: 6px; cursor: pointer;">حذف الحساب</button>
            `;
        }
    }
}

async function handleSignup(e) {
    e.preventDefault();
    const userData = {
        name: document.getElementById('reg-name').value,
        phone: document.getElementById('reg-phone').value,
        email: document.getElementById('reg-email').value,
        age: document.getElementById('reg-age').value,
        nationality: document.getElementById('reg-nationality').value,
        password: document.getElementById('reg-password').value
    };
    try {
        const res = await fetch(`${SERVER_API_URL}/signup`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userData)
        });
        if (res.ok) {
            currentUser = userData; localStorage.setItem('amerrUser', JSON.stringify(currentUser));
            updateUIForUser(); showToast('تم إنشاء الحساب بنجاح!', 'success'); navigate('home');
        } else { showToast('خطأ في التسجيل من السيرفر', 'error'); }
    } catch (err) { showToast('السيرفر لا يستجيب', 'error'); }
}

async function handleLogin(e) {
    e.preventDefault();
    showToast('يتم التحقق من بياناتك...', 'info');
    setTimeout(() => {
        showToast('ميزة الدخول قيد التطوير مع الذاكرة المؤقتة', 'info');
    }, 1000);
}

function showUserProfile() {
    if (!currentUser) return navigate('login-page');
    const modalHtml = `
        <div id="dynamic-modal" class="modal-overlay" style="display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); z-index:10000; align-items:center; justify-content:center; direction:rtl; backdrop-filter:blur(4px);">
            <div class="modal-card animate-in" style="background:white; padding:25px; border-radius:20px; width:90%; max-width:400px;" onclick="event.stopPropagation()">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; border-bottom:1px solid #eee; padding-bottom:10px;">
                   <h3 style="margin:0; color:#5A3F33;"><i class="material-icons" style="vertical-align:middle;">account_circle</i> حسابي</h3>
                   <span onclick="closeDynamicModal()" style="cursor:pointer; font-size:24px; color:#999;">&times;</span>
                </div>
                <div style="line-height:1.8;">
                    <p><b>الاسم:</b> ${currentUser.name}</p>
                    <p><b>الهاتف:</b> ${currentUser.phone}</p>
                    <p><b>الإيميل:</b> ${currentUser.email}</p>
                    <p><b>الجنسية:</b> ${currentUser.nationality}</p>
                    <p><b>العمر:</b> ${currentUser.age} عاماً</p>
                    <p><b>كلمة المرور:</b> <span id="pwd-field">********</span></p>
                    <button onclick="document.getElementById('pwd-field').textContent = '${currentUser.password}'" style="background:none; border:none; color:#C78C4E; cursor:pointer; font-size:12px; padding:0;">إظهار كلمة المرور</button>
                </div>
                <div style="margin-top:25px; display:flex; flex-direction:column; gap:10px;">
                    <button onclick="navigate('my-orders'); closeDynamicModal();" style="padding:12px; background:#C78C4E; color:white; border:none; border-radius:10px; cursor:pointer; font-weight:bold;">عرض طلباتي السابقة</button>
                    <button onclick="logout()" style="padding:12px; background:#5A3F33; color:white; border:none; border-radius:10px; cursor:pointer; font-weight:bold;">تسجيل الخروج</button>
                    <button onclick="showDeleteConfirm()" style="padding:12px; background:#fff; color:#f44336; border:1px solid #f44336; border-radius:10px; cursor:pointer;">حذف الحساب نهائياً</button>
                </div>
            </div>
        </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function showDeleteConfirm() {
    closeDynamicModal();
    const modalHtml = `
        <div id="dynamic-modal" class="modal-overlay" style="display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); z-index:20000; align-items:center; justify-content:center; direction:rtl;">
            <div class="modal-card animate-in" style="background:white; padding:25px; border-radius:20px; width:90%; max-width:350px; text-align:center;" onclick="event.stopPropagation()">
                <i class="material-icons" style="font-size:60px; color:#f44336; margin-bottom:15px;">report_problem</i>
                <h3 style="margin-bottom:10px;">حذف الحساب؟</h3>
                <p style="color:#666; font-size:14px; margin-bottom:25px;">هل أنت متأكد؟ سيتم حذف جميع بياناتك نهائياً من سيرفر عامر كوفي.</p>
                <div style="display:flex; gap:10px;">
                    <button onclick="confirmDeleteAccount()" style="flex:1; padding:12px; background:#f44336; color:white; border:none; border-radius:10px; cursor:pointer; font-weight:bold;">تأكيد الحذف</button>
                    <button onclick="closeDynamicModal()" style="flex:1; padding:12px; background:#eee; color:#333; border:none; border-radius:10px; cursor:pointer;">إلغاء</button>
                </div>
            </div>
        </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

async function confirmDeleteAccount() {
    if (!currentUser || !currentUser.email) return;
    try {
        const res = await fetch(`${SERVER_API_URL}/admin/user/${encodeURIComponent(currentUser.email)}`, { method: 'DELETE' });
        if (res.ok) { 
            closeDynamicModal(); showToast('تم حذف حسابك بنجاح. نأسف لرحيلك!', 'success'); 
            localStorage.removeItem('amerrUser'); currentUser = null; setTimeout(() => location.reload(), 1500); 
        } else { showToast('فشل الحذف من السيرفر، حاول مجدداً', 'error'); }
    } catch (e) { showToast('خطأ في الاتصال بالسيرفر', 'error'); }
}

function closeDynamicModal() { const m = document.getElementById('dynamic-modal'); if(m) m.remove(); }
function logout() { localStorage.removeItem('amerrUser'); location.reload(); }

// =======================================================
// 4. إدارة التنقل (تمت إضافة منطق عرض الطلبات)
// =======================================================

function navigate(pageId) {
    document.querySelectorAll('.page-section').forEach(section => {
        if (section.style.display === 'block') { section.classList.remove('animate-in'); section.classList.add('animate-out'); }
    });
    
    const targetSection = document.getElementById(pageId);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (pageId === 'checkout') {
        if (total < MINIMUM_ORDER_AMOUNT) { 
            showToast(`عذراً، الحد الأدنى للطلب هو ${MINIMUM_ORDER_AMOUNT} جنيهاً.`, 'error'); 
            pageId = 'store'; 
        } else {
            const nameField = document.getElementById('customer-name');
            const phoneField = document.getElementById('customer-phone');
            const emailField = document.getElementById('customer-email');
            if (currentUser) {
                if (nameField) nameField.value = currentUser.name || "";
                if (phoneField) phoneField.value = currentUser.phone || "";
                if (emailField) emailField.value = currentUser.email || "";
            }
        }
    }

    if (pageId === 'my-orders') {
        renderMyOrders(); // استدعاء دالة عرض الطلبات
    }

    setTimeout(() => {
        document.querySelectorAll('.page-section').forEach(section => { section.style.display = 'none'; section.classList.remove('animate-out'); });
        const finalTarget = document.getElementById(pageId);
        if (finalTarget) { finalTarget.style.display = 'block'; finalTarget.classList.add('animate-in'); }
        document.querySelectorAll('.footer-nav button').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.page === pageId) btn.classList.add('active');
        });
        if (pageId === 'checkout') renderCart(); 
        if (pageId === 'store') { renderStore(productsData); }
        closeAllDrawers();
    }, 300);
}

// =======================================================
// 5. إدارة المتجر
// =======================================================

function renderStore(dataToRender = productsData) {
    const storeContainer = document.getElementById('store-content');
    if (!storeContainer) return;
    let htmlContent = '';
    dataToRender.forEach(category => {
        if (category.items.length === 0) return;
        htmlContent += `<h2 class="category-title" data-category-name="${category.category}">${category.category}</h2><div class="product-grid" data-category-grid="${category.category}">`;
        category.items.forEach(item => {
            const safeName = item.name.replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, '_'); 
            const sizeSelectorHtml = `<div class="size-selector variant-selector"><h4 style="margin-bottom: 5px;">اختر الحجم:</h4><div class="size-options">${availableSizes.map((size) => `<label class="payment-card size-card"><input type="radio" name="${safeName}-size" value="${size}" ${size === defaultSize ? 'checked' : ''} class="size-radio-btn"><span class="card-content">${size.replace(' ج', '')}g</span></label>`).join('')}</div></div>`;
            const typeSelectorHtml = `<div class="type-selector variant-selector"><h4 style="margin-bottom: 5px;">اختر النوع:</h4><div style="display: flex; flex-wrap: wrap; gap: 8px;">${item.variants.map((variant, index) => `<label class="payment-card type-card"><input type="radio" name="${safeName}-type" value="${variant.type}" ${index === 0 ? 'checked' : ''} class="type-radio-btn"><span class="card-content">${variant.type}</span></label>`).join('')}</div></div>`;
            const initialPrice = item.variants[0].prices[defaultSize];
            htmlContent += `<div class="product-card store-product" data-product-name="${item.name}" data-category="${category.category}"><img src="${item.image}" alt="${item.name}" class="product-image" loading="lazy"><h3>${item.name}</h3>${typeSelectorHtml}${sizeSelectorHtml}<strong class="product-price-display" id="${safeName}-price-display" style="color: var(--color-primary); margin: 15px 0 10px; font-size: 1.3em;">${initialPrice.toFixed(2)} ج</strong><button class="add-to-cart-btn" onclick="addToCart(this)">أضف إلى السلة</button></div>`;
        });
        htmlContent += `</div>`;
    });
    storeContainer.innerHTML = htmlContent;
    document.querySelectorAll('.product-card').forEach(card => {
        const productName = card.dataset.productName;
        const safeName = productName.replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, '_');
        const updatePriceDisplay = () => {
            const selectedType = card.querySelector(`input[name="${safeName}-type"]:checked`).value;
            const selectedSize = card.querySelector(`input[name="${safeName}-size"]:checked`).value;
            const product = productsData.flatMap(c => c.items).find(i => i.name === productName);
            const price = product.variants.find(v => v.type === selectedType).prices[selectedSize];
            const display = document.getElementById(`${safeName}-price-display`);
            if (display) display.textContent = `${price.toFixed(2)} ج`;
        };
        card.querySelectorAll('input').forEach(radio => radio.addEventListener('change', updatePriceDisplay));
    });
}

// =======================================================
// 6. السلة والأوردر (معدلة لاستقبال بيانات السيرفر الكاملة)
// =======================================================

function saveCartAndRender() { localStorage.setItem('amerrcoffeeCart', JSON.stringify(cart)); renderCart(); updateCartIconCount(); }
function updateCartIconCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) { cartCountElement.textContent = totalItems; cartCountElement.style.display = totalItems > 0 ? 'flex' : 'none'; }
}

function addToCart(button) {
    const card = button.closest('.product-card');
    const productName = card.dataset.productName;
    const safeName = productName.replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, '_'); 
    const type = card.querySelector(`input[name="${safeName}-type"]:checked`).value;
    const size = card.querySelector(`input[name="${safeName}-size"]:checked`).value;
    const product = productsData.flatMap(c => c.items).find(i => i.name === productName);
    const price = product.variants.find(v => v.type === type).prices[size];
    const productId = `${productName}-${type}-${size}`; 
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) existingItem.quantity += 1;
    else cart.push({ id: productId, name: productName, type: type, size: size, price: price, quantity: 1 });
    saveCartAndRender(); openCartSidebar(); showToast(`تمت إضافة ${productName} للسلة`, 'success');
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutSummaryContainer = document.getElementById('checkout-items-summary');
    let total = 0;
    if (cart.length === 0) {
        const msg = '<p style="text-align: center; margin-top: 20px; color: #777;">سلة التسوق فارغة.</p>';
        if (cartItemsContainer) cartItemsContainer.innerHTML = msg;
        if (checkoutSummaryContainer) checkoutSummaryContainer.innerHTML = msg;
    } else {
        let cartHtml = '', summaryHtml = '';
        cart.forEach(item => {
            total += item.price * item.quantity;
            cartHtml += `<div class="cart-item"><p><strong>${item.name}</strong><br><small>${item.type} | ${item.size}</small></p><div class="item-controls"><button onclick="changeQuantity('${item.id}', -1)">-</button><span>${item.quantity}</span><button onclick="changeQuantity('${item.id}', 1)">+</button><button onclick="removeItem('${item.id}')" style="color:red">&times;</button></div></div>`;
            summaryHtml += `<div class="summary-item"><span>${item.name} (${item.size}) x${item.quantity}</span><span>${(item.price*item.quantity).toFixed(2)} ج</span></div>`;
        });
        if (cartItemsContainer) cartItemsContainer.innerHTML = cartHtml;
        if (checkoutSummaryContainer) checkoutSummaryContainer.innerHTML = summaryHtml;
    }
    document.getElementById('cart-total').textContent = `${total.toFixed(2)} ج`;
    if (document.getElementById('checkout-total')) document.getElementById('checkout-total').textContent = `${total.toFixed(2)} ج`;

    const checkoutBtnSide = document.querySelector('.checkout-btn');
    if (checkoutBtnSide && cart.length > 0) {
        if (total < MINIMUM_ORDER_AMOUNT) {
            checkoutBtnSide.style.background = "#999";
            checkoutBtnSide.innerHTML = `باقي ${(MINIMUM_ORDER_AMOUNT - total).toFixed(2)} ج للطلب`;
            checkoutBtnSide.onclick = () => showToast(`أضف منتجات بـ ${(MINIMUM_ORDER_AMOUNT - total).toFixed(2)} ج`, 'error');
        } else {
            checkoutBtnSide.style.background = "var(--color-primary)";
            checkoutBtnSide.innerHTML = "إتمام الطلب";
            checkoutBtnSide.onclick = () => navigate('checkout');
        }
    }
}

function changeQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) { item.quantity += delta; if (item.quantity <= 0) removeItem(id); else saveCartAndRender(); }
}
function removeItem(id) { cart = cart.filter(item => item.id !== id); saveCartAndRender(); }

// دالة إرسال الطلب المطورة
async function submitOrderToServer(e) {
    e.preventDefault();
    const total = cart.reduce((s, i) => s + (i.price * i.quantity), 0);
    if (cart.length === 0) return showToast('سلتك فارغة!', 'error');

    const orderData = {
        customerName: document.getElementById('customer-name').value,
        customerPhone: document.getElementById('customer-phone').value,
        customerEmail: document.getElementById('customer-email').value,
        address: document.getElementById('customer-address').value,
        items: cart.map(item => ({ 
            name: item.name, 
            type: item.type, 
            size: item.size, 
            price: item.price,
            quantity: item.quantity
        })),
        totalAmount: total,
        paymentMethod: document.querySelector('input[name="payment-method"]:checked').value
    };

    try {
        const res = await fetch(`${SERVER_API_URL}/orders`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(orderData)
        });
        const result = await res.json();
        
        if (res.ok && result.success) { 
            // حفظ الأوردر في "طلباتي" قبل مسح السلة
            const savedOrder = {
                ...orderData,
                orderID: result.orderID,
                timestamp: result.timestamp
            };
            myOrders.push(savedOrder);
            localStorage.setItem('amerrMyOrders', JSON.stringify(myOrders));
            
            cart = []; 
            saveCartAndRender(); 
            showOrderSuccessModal(result.orderID); 
        } else { showToast('خطأ في إرسال الطلب', 'error'); }
    } catch (err) { showToast('السيرفر لا يستجيب', 'error'); }
}

function showOrderSuccessModal(id) {
    const modalHtml = `
        <div id="dynamic-modal" class="modal-overlay" style="display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:20000; align-items:center; justify-content:center; direction:rtl; text-align:center;">
            <div class="modal-card animate-in" style="background:white; padding:30px; border-radius:25px; width:90%; max-width:400px;" onclick="event.stopPropagation()">
                <i class="material-icons" style="font-size:70px; color:#4CAF50; margin-bottom:15px;">check_circle</i>
                <h2 style="color:#5A3F33; margin-bottom:10px;">تم الطلب بنجاح!</h2>
                <p style="margin-bottom:20px;">رقم طلبك هو: <b>${id}</b></p>
                <button onclick="closeDynamicModal(); navigate('my-orders');" style="width:100%; padding:14px; background:#5A3F33; color:white; border:none; border-radius:12px; font-weight:bold;">متابعة الطلب</button>
            </div>
        </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

// دالة عرض الطلبات في قسم "طلباتي"
function renderMyOrders() {
    const container = document.getElementById('my-orders-list');
    if (!container) return;
    
    if (myOrders.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding:50px; color:#777;">لا يوجد لديك طلبات سابقة حتى الآن.</p>`;
        return;
    }

    container.innerHTML = myOrders.slice().reverse().map(order => `
        <div class="order-card-client" style="background:white; margin-bottom:15px; padding:15px; border-radius:15px; box-shadow:0 4px 6px rgba(0,0,0,0.05); border-right:5px solid #C78C4E; direction:rtl; text-align:right;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:10px;">
                <span style="font-weight:bold; color:#5A3F33;">#${order.orderID}</span>
                <span style="font-size:12px; color:#888;">${order.timestamp}</span>
            </div>
            <div style="font-size:14px; line-height:1.6;">
                ${order.items.map(item => `<div>• ${item.name} (${item.size}) × ${item.quantity} - <span style="color:#C78C4E;">${(item.price * item.quantity).toFixed(2)} ج</span></div>`).join('')}
            </div>
            <div style="margin-top:10px; padding-top:10px; border-top:1px dashed #eee; display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:bold;">الإجمالي: ${order.totalAmount.toFixed(2)} ج</span>
                <span style="font-size:13px; color:#5A3F33; background:#f9f9f9; padding:2px 8px; border-radius:5px;">${order.paymentMethod}</span>
            </div>
            <div id="contact-helper-placeholder"></div>
        </div>
    `).join('');
}

// =======================================================
// 7. خوارزمية البحث
// =======================================================

function normalizeArabic(text) { 
    if (!text) return ''; 
    let n = text.toLowerCase().trim(); 
    n = n.replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/[\u064B-\u0652]/g, ''); 
    return n; 
}

function filterStoreProducts(query) {
    const nQ = normalizeArabic(query);
    if (nQ.length > 0) {
        const storeSection = document.getElementById('store');
        if (storeSection && storeSection.style.display !== 'block') navigate('store');
    }
    document.querySelectorAll('.store-product').forEach(card => {
        const nN = normalizeArabic(card.dataset.productName || '');
        card.style.display = nN.includes(nQ) ? 'flex' : 'none';
    });
    document.querySelectorAll('.category-title').forEach(title => {
        const grid = document.querySelector(`[data-category-grid="${title.dataset.categoryName}"]`);
        if (grid) {
            const hasVisibleItems = Array.from(grid.querySelectorAll('.store-product')).some(item => item.style.display === 'flex');
            title.style.display = hasVisibleItems ? 'block' : 'none';
            grid.style.display = hasVisibleItems ? 'grid' : 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateUIForUser(); 
    navigate('home'); 
    
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => filterStoreProducts(e.target.value));
    }

    document.getElementById('checkout-form')?.addEventListener('submit', submitOrderToServer);
    document.getElementById('signup-form')?.addEventListener('submit', handleSignup);
    document.getElementById('login-form')?.addEventListener('submit', handleLogin);
    updateCartIconCount();
});
