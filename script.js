// بيانات المنيو
const menuData = [
  // المقبلات
  {
    id: 1,
    name: "حمص بالطحينة",
    description: "حمص طازج مع الطحينة وزيت الزيتون والصنوبر",
    price: 15,
    image:
      "https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "appetizers",
    popular: true,
  },
  {
    id: 2,
    name: "متبل باذنجان",
    description: "باذنجان مشوي مع الطحينة والثوم والليمون",
    price: 18,
    image:
      "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "appetizers",
  },
  {
    id: 3,
    name: "سلطة فتوش",
    description: "خضار طازجة مع الخبز المحمص والسماق",
    price: 20,
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "appetizers",
  },
  {
    id: 4,
    name: "كبة مقلية",
    description: "كبة محشوة باللحم والبصل والصنوبر",
    price: 25,
    image:
      "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "appetizers",
  },

  // الأطباق الرئيسية
  {
    id: 5,
    name: "كبسة لحم",
    description: "أرز بسمتي مع قطع اللحم والخضار والبهارات",
    price: 45,
    image:
      "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "main",
    popular: true,
  },
  {
    id: 6,
    name: "مندي دجاج",
    description: "دجاج مشوي مع الأرز المندي والسلطة",
    price: 35,
    image:
      "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "main",
  },
  {
    id: 7,
    name: "برياني روبيان",
    description: "أرز برياني مع الروبيان الطازج والبهارات الهندية",
    price: 55,
    image:
      "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "main",
  },
  {
    id: 8,
    name: "مشاوي مشكلة",
    description: "تشكيلة من اللحوم المشوية مع الأرز والسلطة",
    price: 65,
    image:
      "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "main",
    popular: true,
  },

  // الحلويات
  {
    id: 9,
    name: "كنافة نابلسية",
    description: "كنافة طازجة بالجبن والقطر",
    price: 22,
    image:
      "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "desserts",
  },
  {
    id: 10,
    name: "بقلاوة",
    description: "بقلاوة محشوة بالفستق والعسل",
    price: 18,
    image:
      "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "desserts",
  },
  {
    id: 11,
    name: "مهلبية",
    description: "مهلبية بالحليب والفستق والقرفة",
    price: 15,
    image:
      "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "desserts",
  },

  // المشروبات
  {
    id: 12,
    name: "عصير برتقال طازج",
    description: "عصير برتقال طبيعي 100% بدون إضافات",
    price: 12,
    image:
      "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "drinks",
  },
  {
    id: 13,
    name: "شاي أحمر",
    description: "شاي أحمر مع السكر والنعناع",
    price: 8,
    image:
      "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "drinks",
  },
  {
    id: 14,
    name: "قهوة عربية",
    description: "قهوة عربية أصيلة مع الهيل والزعفران",
    price: 10,
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "drinks",
  },
  {
    id: 15,
    name: "عصير مانجو",
    description: "عصير مانجو طازج ومنعش",
    price: 14,
    image:
      "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "drinks",
  },
];

// متغيرات عامة
let cart = [];
let currentCategory = "all";

// تهيئة الموقع
document.addEventListener("DOMContentLoaded", function () {
  renderMenuItems();
  setupCategoryFilters();
  setupCustomerForm();
});

// عرض عناصر المنيو
function renderMenuItems() {
  const menuGrid = document.getElementById("menuGrid");
  menuGrid.innerHTML = "";

  const filteredItems =
    currentCategory === "all"
      ? menuData
      : menuData.filter((item) => item.category === currentCategory);

  filteredItems.forEach((item) => {
    const menuItemHTML = `
            <div class="menu-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                ${
                  item.popular
                    ? '<div class="popular-badge">⭐ الأكثر طلباً</div>'
                    : ""
                }
                <div class="item-content">
                    <h3 class="item-name">${item.name}</h3>
                    <p class="item-description">${item.description}</p>
                    <div class="item-footer">
                        <div class="item-price">${item.price} ريال</div>
                        <div class="quantity-controls">
                            <button class="quantity-btn minus" onclick="changeQuantity(${
                              item.id
                            }, -1)" ${
      getItemQuantity(item.id) === 0 ? 'style="display:none"' : ""
    }>-</button>
                            <span class="quantity-display" ${
                              getItemQuantity(item.id) === 0
                                ? 'style="display:none"'
                                : ""
                            }>${getItemQuantity(item.id)}</span>
                            <button class="quantity-btn plus" onclick="changeQuantity(${
                              item.id
                            }, 1)">+</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    menuGrid.innerHTML += menuItemHTML;
  });
}

// إعداد فلاتر الفئات
function setupCategoryFilters() {
  const categoryButtons = document.querySelectorAll(".category-btn");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // إزالة الفئة النشطة من جميع الأزرار
      categoryButtons.forEach((btn) => btn.classList.remove("active"));

      // إضافة الفئة النشطة للزر المحدد
      this.classList.add("active");

      // تحديث الفئة الحالية
      currentCategory = this.dataset.category;

      // إعادة عرض العناصر
      renderMenuItems();
    });
  });
}

// تغيير الكمية
function changeQuantity(itemId, change) {
  const item = menuData.find((item) => item.id === itemId);
  if (!item) return;

  const existingCartItem = cart.find((cartItem) => cartItem.id === itemId);

  if (existingCartItem) {
    existingCartItem.quantity += change;
    if (existingCartItem.quantity <= 0) {
      cart = cart.filter((cartItem) => cartItem.id !== itemId);
    }
  } else if (change > 0) {
    cart.push({
      ...item,
      quantity: 1,
    });
  }

  updateCartDisplay();
  renderMenuItems();
}

// الحصول على كمية العنصر
function getItemQuantity(itemId) {
  const cartItem = cart.find((item) => item.id === itemId);
  return cartItem ? cartItem.quantity : 0;
}

// تحديث عرض السلة
function updateCartDisplay() {
  const cartSummary = document.getElementById("cartSummary");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (totalItems > 0) {
    cartSummary.classList.add("show");
    cartCount.textContent = `${totalItems} صنف`;
    cartTotal.textContent = `المجموع: ${totalPrice} ريال`;
  } else {
    cartSummary.classList.remove("show");
  }
}

// إظهار نموذج العميل
function showCustomerForm() {
  if (cart.length === 0) {
    alert("السلة فارغة! يرجى اختيار الأصناف أولاً");
    return;
  }

  const modal = document.getElementById("customerModal");
  const orderItems = document.getElementById("orderItems");
  const modalTotal = document.getElementById("modalTotal");

  // عرض عناصر الطلب
  orderItems.innerHTML = "";
  cart.forEach((item) => {
    const orderItemHTML = `
            <div class="order-item">
                <span>${item.name} × ${item.quantity}</span>
                <span>${item.price * item.quantity} ريال</span>
            </div>
        `;
    orderItems.innerHTML += orderItemHTML;
  });

  // عرض المجموع
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  modalTotal.textContent = totalPrice;

  modal.classList.add("show");
}

// إغلاق نموذج العميل
function closeCustomerForm() {
  const modal = document.getElementById("customerModal");
  modal.classList.remove("show");

  // إعادة تعيين النموذج
  document.getElementById("customerForm").reset();
}

// إعداد نموذج العميل
function setupCustomerForm() {
  const form = document.getElementById("customerForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    sendToWhatsApp();
  });
}

// إرسال الطلب عبر واتساب
function sendToWhatsApp() {
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const address = document.getElementById("customerAddress").value.trim();

  if (!name || !phone || !address) {
    alert("يرجى ملء جميع البيانات المطلوبة");
    return;
  }

  // إنشاء رسالة الطلب
  let message = `🍽️ *طلب جديد من مطعم الذواقة*\n\n`;
  message += `👤 *اسم العميل:* ${name}\n`;
  message += `📱 *رقم الهاتف:* ${phone}\n`;
  message += `📍 *العنوان:* ${address}\n\n`;
  message += `📋 *تفاصيل الطلب:*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;

  cart.forEach((item) => {
    message += `• ${item.name}\n`;
    message += `   الكمية: ${item.quantity}\n`;
    message += `   السعر: ${item.price} ريال × ${item.quantity} = ${
      item.price * item.quantity
    } ريال\n\n`;
  });

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *المجموع الكلي: ${totalPrice} ريال*\n\n`;
  message += `⏰ تاريخ الطلب: ${new Date().toLocaleString("ar-SA")}`;

  // رقم واتساب المطعم (غير الرقم حسب احتياجك)
  const restaurantWhatsApp = "966534636068";

  // إنشاء رابط واتساب
  const whatsappURL = `https://wa.me/${restaurantWhatsApp}?text=${encodeURIComponent(
    message
  )}`;

  // فتح واتساب
  window.open(whatsappURL, "_blank");

  // إظهار رسالة تأكيد وإعادة تعيين
  alert("تم إرسال الطلب بنجاح! سيتم التواصل معك قريباً.");

  // إعادة تعيين السلة والنموذج
  cart = [];
  updateCartDisplay();
  closeCustomerForm();
  renderMenuItems();
}

// إغلاق المودال عند النقر خارجه
document
  .getElementById("customerModal")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      closeCustomerForm();
    }
  });
