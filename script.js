// --- 0. Переводы (i18n) ---
const translations = {
    ru: {
        nav: {
            about: "О нас", menu: "Меню", gallery: "Галерея",
            reviews: "Отзывы", contacts: "Контакты", book: "Забронировать"
        },
        hero: {
            title: "Магия вечера в каждой чашке",
            subtitle: "Уютная кофейня с авторскими напитками, теплыми беседами и потрясающей атмосферой темного дерева.",
            btnMenu: "Смотреть меню", btnBook: "Забронировать стол"
        },
        offer: {
            badge: "Счастливые часы ☕",
            title: "Скидка 20% с 17:00 до 19:00",
            subtitle: "Каждый будний день — ваш лучший кофе дешевле. Приходите!",
            hours: "часов", minutes: "минут", seconds: "секунд"
        },
        about: {
            title: "О нашей кофейне",
            text: "Meow Coffee — это не просто место, где наливают кофе. Это вечернее убежище для тех, кто ищет спокойствие после долгого дня. Мы варим спешелти кофе в приглушенном свете лампочек Эдисона.",
            stat1: "Сортов зерна", stat2: "Авторских напитков", stat3: "Года с вами"
        },
        menu: {
            title: "Меню", filterAll: "Всё", filterCoffee: "Кофе",
            filterAuthor: "Авторские", filterDessert: "Десерты"
        },
        gallery: { title: "Атмосфера" },
        reviews: { title: "Что говорят гости" },
        booking: {
            title: "Оставить заявку", name: "ФИО",
            nameHolder: "Иванов Иван Иванович", phone: "Номер телефона",
            submit: "Оставить заявку",
            success: "✓ С вами свяжутся в течение часа. Ожидайте звонка."
        },
        contacts: {
            title: "Ждём вас в гости", addressTitle: "Адрес",
            addressText: "ул. Кофейная, д. 42<br>Город, Страна",
            hoursTitle: "Часы работы",
            hoursText: "Пн-Пт: 08:00 - 23:00<br>Сб-Вс: 10:00 - 00:00",
            phoneTitle: "Связь"
        },
        footer: {
            text: "Вечерняя спешелти кофейня. Место, где кофе становится искусством.",
            navTitle: "Навигация", contactTitle: "Контакты",
            telegram: "Telegram",
            copyright: "© 2026 Кофейня Meow Coffee. Все права защищены."
        },
        items: {
            1: { title: 'Эспрессо', description: 'Классический крепкий шот из свежеобжаренных зёрен Эфиопии' },
            2: { title: 'Американо', description: 'Эспрессо с добавлением горячей воды' },
            3: { title: 'Капучино', description: 'Идеальный баланс эспрессо, горячего молока и густой пены' },
            4: { title: 'Флэт Уайт', description: 'Двойной эспрессо с тонким слоем молочной пены' },
            5: { title: 'Хвойный Раф', description: 'Наш фирменный сливочный кофе с пудрой из сибирских шишек' },
            6: { title: 'Пряная Вишня', description: 'Горячий напиток на основе вишневого сока, корицы и бадьяна' },
            7: { title: 'Крем-Брюле Латте', description: 'Латте с карамельной корочкой, которую нужно разбить ложечкой' },
            8: { title: 'Нью-Йорк Чизкейк', description: 'Классический десерт на песочной основе с нежным сливочным сыром' },
            9: { title: 'Шоколадный Фондан', description: 'Кекс с жидкой шоколадной сердцевиной и шариком мороженого' },
            10: { title: 'Классический Тирамису', description: 'Итальянский десерт с савоярди, пропитанными эспрессо, и кремом маскарпоне' },
            11: { title: 'Сет Макарун', description: 'Набор нежных французских пирожных с разными вкусами' },
            12: { title: 'Классический Круассан', description: 'Хрустящий масляный круассан, идеален к утреннему кофе' },
            13: { title: 'Брауни', description: 'Влажный шоколадный десерт с хрустящей корочкой и фундуком' }
        }
    },
    en: {
        nav: {
            about: "About", menu: "Menu", gallery: "Gallery",
            reviews: "Reviews", contacts: "Contacts", book: "Book Table"
        },
        hero: {
            title: "Evening Magic in Every Cup",
            subtitle: "A cozy coffee shop with signature drinks, warm conversations, and a stunning dark wood atmosphere.",
            btnMenu: "View Menu", btnBook: "Book a Table"
        },
        offer: {
            badge: "Happy Hours ☕",
            title: "20% Off from 5 PM to 7 PM",
            subtitle: "Every weekday — your best coffee for less. Come visit us!",
            hours: "hours", minutes: "minutes", seconds: "seconds"
        },
        about: {
            title: "About Our Cafe",
            text: "Meow Coffee is more than just a place to get coffee. It's an evening refuge for those seeking peace after a long day. We brew specialty coffee under the dim light of Edison bulbs.",
            stat1: "Coffee Bean Varieties", stat2: "Signature Drinks", stat3: "Years With You"
        },
        menu: {
            title: "Menu", filterAll: "All", filterCoffee: "Coffee",
            filterAuthor: "Signature", filterDessert: "Desserts"
        },
        gallery: { title: "Atmosphere" },
        reviews: { title: "Guest Reviews" },
        booking: {
            title: "Leave a Request", name: "Full Name",
            nameHolder: "John Doe", phone: "Phone Number",
            submit: "Send Request",
            success: "✓ We will contact you within an hour. Expect a call."
        },
        contacts: {
            title: "Come Visit Us", addressTitle: "Address",
            addressText: "42 Coffee St.<br>City, Country",
            hoursTitle: "Working Hours",
            hoursText: "Mon-Fri: 08:00 - 23:00<br>Sat-Sun: 10:00 - 00:00",
            phoneTitle: "Contact"
        },
        footer: {
            text: "Evening specialty coffee shop. A place where coffee becomes art.",
            navTitle: "Navigation", contactTitle: "Contact",
            telegram: "Telegram",
            copyright: "© 2026 Meow Coffee. All rights reserved."
        },
        items: {
            1: { title: 'Espresso', description: 'A classic strong shot from freshly roasted Ethiopian beans' },
            2: { title: 'Americano', description: 'Espresso cut with hot water' },
            3: { title: 'Cappuccino', description: 'The perfect balance of espresso, steamed milk, and thick foam' },
            4: { title: 'Flat White', description: 'Double espresso with a thin layer of microfoam' },
            5: { title: 'Pine Raf', description: 'Our signature creamy coffee with Siberian pine cone powder' },
            6: { title: 'Spiced Cherry', description: 'A hot drink based on cherry juice, cinnamon, and star anise' },
            7: { title: 'Creme Brulee Latte', description: 'A latte with a caramelized sugar crust you break with a spoon' },
            8: { title: 'New York Cheesecake', description: 'A classic dessert on a shortbread crust with smooth cream cheese' },
            9: { title: 'Chocolate Fondant', description: 'A cake with a liquid chocolate center and a scoop of ice cream' },
            10: { title: 'Classic Tiramisu', description: 'An Italian dessert with espresso-soaked ladyfingers and mascarpone cream' },
            11: { title: 'Macarons Set', description: 'A set of delicate French pastries with various flavors' },
            12: { title: 'Classic Croissant', description: 'A crispy buttery croissant, perfect for morning coffee' },
            13: { title: 'Brownie', description: 'A moist chocolate dessert with a crispy crust and hazelnuts' }
        }
    }
};

let currentLang = localStorage.getItem('siteLang') || 'ru';

// Данные меню
const menuItems = [
    { id: 1, title: 'Эспрессо', category: 'coffee', price: 150, img: 'все фотографии которые используются для сайта/menu_espresso.png' },
    { id: 2, title: 'Американо', category: 'coffee', price: 170, img: 'все фотографии которые используются для сайта/menu_americano.png' },
    { id: 3, title: 'Капучино', category: 'coffee', price: 220, img: 'все фотографии которые используются для сайта/menu_cappuccino.png' },
    { id: 4, title: 'Флэт Уайт', category: 'coffee', price: 240, img: 'все фотографии которые используются для сайта/флэт.png' },
    { id: 5, title: 'Хвойный Раф', category: 'author', price: 320, img: 'все фотографии которые используются для сайта/menu_pine_raf.png' },
    { id: 6, title: 'Пряная Вишня', category: 'author', price: 290, img: 'все фотографии которые используются для сайта/menu_spiced_cherry.png' },
    { id: 7, title: 'Крем-Брюле Латте', category: 'author', price: 340, img: 'все фотографии которые используются для сайта/menu_creme_brulee_latte.png' },
    { id: 8, title: 'Нью-Йорк Чизкейк', category: 'dessert', price: 350, img: 'все фотографии которые используются для сайта/menu_cheesecake.png' },
    { id: 9, title: 'Шоколадный Фондан', category: 'dessert', price: 380, img: 'все фотографии которые используются для сайта/menu_fondant.png' },
    { id: 10, title: 'Тирамису', category: 'dessert', price: 320, img: 'все фотографии которые используются для сайта/тирамису.png' },
    { id: 11, title: 'Сет Макарун', category: 'dessert', price: 1550, img: 'все фотографии которые используются для сайта/макар.png' },
    { id: 12, title: 'Круассан', category: 'dessert', price: 190, img: 'все фотографии которые используются для сайта/круассан.png' },
    { id: 13, title: 'Брауни', category: 'dessert', price: 260, img: 'все фотографии которые используются для сайта/брауни.png' }
];

// =====================================================
// УТИЛИТЫ
// =====================================================

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i data-feather="check-circle"></i> ${message}`;
    container.appendChild(toast);
    feather.replace();
    setTimeout(() => {
        toast.style.animation = 'toastOut 0.4s ease forwards';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// =====================================================
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Навигация и Мобильное меню ---
    const navbar = document.querySelector('.navbar');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = mobileMenu.classList.contains('active') ? 'x' : 'menu';
        mobileBtn.innerHTML = `<i data-feather="${icon}"></i>`;
        feather.replace();
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileBtn.innerHTML = `<i data-feather="menu"></i>`;
            feather.replace();
        });
    });

    // --- 2. Рендер Меню ---
    const menuGridContainer = document.getElementById('menu-grid-container');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderMenu(category = 'all') {
        if (!menuGridContainer) return;
        menuGridContainer.innerHTML = '';
        const filteredItems = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);
        const langData = translations[currentLang];

        filteredItems.forEach((item) => {
            const itemTrans = langData.items[item.id];
            const card = document.createElement('div');
            card.className = 'menu-item';
            card.innerHTML = `
                <img src="${item.img}" alt="${itemTrans.title}" class="menu-item-img" loading="lazy">
                <div class="menu-item-info">
                    <div>
                        <div class="menu-item-header">
                            <h3 class="menu-item-title">${itemTrans.title}</h3>
                            <span class="menu-item-price">${item.price} ₽</span>
                        </div>
                        <p class="menu-item-desc">${itemTrans.description}</p>
                    </div>
                </div>
            `;
            menuGridContainer.appendChild(card);
        });

        feather.replace();
    }

    renderMenu('all');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            renderMenu(e.currentTarget.dataset.filter);
        });
    });

    // --- 3. Карусель Отзывов с авто-прокруткой ---
    const reviews = [
        document.getElementById('review-1'),
        document.getElementById('review-2'),
        document.getElementById('review-3')
    ].filter(Boolean);

    let currentReview = 0;
    let autoSlideTimer = null;
    const prevBtn = document.getElementById('prev-review');
    const nextBtn = document.getElementById('next-review');
    const reviewsCarousel = document.querySelector('.reviews-carousel');

    function showReview(index) {
        reviews.forEach((r, i) => {
            if (i === index) {
                r.classList.remove('d-none');
                setTimeout(() => r.style.opacity = '1', 10);
            } else {
                r.style.opacity = '0';
                setTimeout(() => r.classList.add('d-none'), 300);
            }
        });
    }

    function nextReview() {
        currentReview = (currentReview + 1) % reviews.length;
        showReview(currentReview);
    }

    function startAutoSlide() {
        autoSlideTimer = setInterval(nextReview, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideTimer);
    }

    if (prevBtn && nextBtn && reviews.length > 0) {
        prevBtn.addEventListener('click', () => {
            stopAutoSlide();
            currentReview = (currentReview - 1 + reviews.length) % reviews.length;
            showReview(currentReview);
            startAutoSlide();
        });

        nextBtn.addEventListener('click', () => {
            stopAutoSlide();
            nextReview();
            startAutoSlide();
        });

        if (reviewsCarousel) {
            reviewsCarousel.addEventListener('mouseenter', stopAutoSlide);
            reviewsCarousel.addEventListener('mouseleave', startAutoSlide);
        }

        startAutoSlide();
    }

    // --- 4. Форма бронирования ---
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const successMsg = translations[currentLang].booking.success;
            showToast(successMsg, 'success');
            bookingForm.reset();
        });
    }

    // --- 5. Анимации при скролле (Intersection Observer) ---
    const animateOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.scroll-animate').forEach(el => {
        animateOnScroll.observe(el);
    });

    // --- 6. Переключение языка ---
    const langSwitchBtn = document.getElementById('lang-switch-btn');

    function applyTranslations() {
        const langData = translations[currentLang];
        if (langSwitchBtn) langSwitchBtn.textContent = currentLang === 'ru' ? 'EN' : 'RU';

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const path = el.getAttribute('data-i18n');
            const translation = getNestedTranslation(langData, path);
            if (translation && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
                el.innerHTML = translation;
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const path = el.getAttribute('data-i18n-placeholder');
            const translation = getNestedTranslation(langData, path);
            if (translation) el.placeholder = translation;
        });

        // Обновляем таймер текст
        const langH = document.querySelector('#timer-h');
        const offerHoursLabel = document.querySelector('.timer-block:nth-child(1) .timer-label');
        // Просто перерисуем меню для обновления текста карточек
        const activeFilter = document.querySelector('.filter-btn.active');
        renderMenu(activeFilter ? activeFilter.dataset.filter : 'all');
    }

    if (langSwitchBtn) {
        langSwitchBtn.addEventListener('click', () => {
            currentLang = currentLang === 'ru' ? 'en' : 'ru';
            localStorage.setItem('siteLang', currentLang);
            applyTranslations();
        });
    }

    applyTranslations();

    // --- 7. Таймер обратного отсчёта (до 19:00 сегодня) ---
    function updateTimer() {
        const now = new Date();
        const end = new Date();
        end.setHours(19, 0, 0, 0);

        const start = new Date();
        start.setHours(17, 0, 0, 0);

        let diff;
        if (now < start) {
            // До начала счастливых часов
            diff = start - now;
        } else if (now < end) {
            // Идут счастливые часы — отсчёт до конца
            diff = end - now;
        } else {
            // Завтра в 17:00
            const tomorrow = new Date(start);
            tomorrow.setDate(tomorrow.getDate() + 1);
            diff = tomorrow - now;
        }

        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);

        const pad = n => String(n).padStart(2, '0');
        const timerH = document.getElementById('timer-h');
        const timerM = document.getElementById('timer-m');
        const timerS = document.getElementById('timer-s');
        if (timerH) timerH.textContent = pad(h);
        if (timerM) timerM.textContent = pad(m);
        if (timerS) timerS.textContent = pad(s);
    }
    updateTimer();
    setInterval(updateTimer, 1000);

    // --- 8. Параллакс на Hero ---
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (scrollY < window.innerHeight) {
                hero.style.backgroundPositionY = `calc(50% + ${scrollY * 0.35}px)`;
            }
        }, { passive: true });
    }

    // --- 9. Анимированный счётчик цифр ---
    function animateCounter(el, target, duration = 1500) {
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                el.textContent = target;
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(start);
            }
        }, 16);
    }

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                if (!isNaN(target)) animateCounter(el, target);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

    // --- 10. Кнопка Наверх ---
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 400);
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- 11. Кастомный курсор ---
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');

    if (cursorDot && cursorRing) {
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        // Кольцо двигается с небольшой задержкой (инерция)
        function animateRing() {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            cursorRing.style.left = ringX + 'px';
            cursorRing.style.top = ringY + 'px';
            requestAnimationFrame(animateRing);
        }
        animateRing();

        // Увеличиваем кольцо при наведении на интерактивные элементы
        document.querySelectorAll('a, button, .menu-item img, .gallery-item img').forEach(el => {
            el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
        });
    }

    // --- 12. Image Lightbox ---
    const lightboxModal = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightboxBtn = document.getElementById('close-lightbox');

    function openLightbox(src) {
        if (!src || !lightboxModal) return;
        lightboxImg.src = src;
        lightboxModal.classList.add('active');
    }

    function closeLightbox() {
        if (!lightboxModal) return;
        lightboxModal.classList.remove('active');
        setTimeout(() => { lightboxImg.src = ''; }, 300);
    }

    document.body.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG' && (e.target.closest('.menu-item') || e.target.closest('.gallery-item'))) {
            openLightbox(e.target.src);
        }
    });

    if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) closeLightbox();
        });
    }

    feather.replace();
});
