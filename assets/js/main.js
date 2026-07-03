// ========================================
// CUSTOM CURSOR
// ========================================
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const interactiveElements = document.querySelectorAll('a, button, .zone-card, .price-card, .gallery__item');

if (window.innerWidth > 968) {
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1
        });
        
        gsap.to(cursorFollower, {
            x: e.clientX - 16,
            y: e.clientY - 16,
            duration: 0.3
        });
    });

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorFollower.classList.add('hovering');
        });
        
        el.addEventListener('mouseleave', () => {
            cursorFollower.classList.remove('hovering');
        });
    });
}

// ========================================
// PROGRESS BAR
// ========================================
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.progress-bar').style.width = scrolled + '%';
});

// ========================================
// THEME TOGGLE
// ========================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-toggle__icon');
let isNight = true;

themeToggle.addEventListener('click', () => {
    isNight = !isNight;
    document.body.setAttribute('data-theme', isNight ? 'night' : 'day');
    themeIcon.textContent = isNight ? '🌙' : '🌞';
    
    // Animation
    gsap.to(themeToggle, {
        rotation: 360,
        duration: 0.5,
        ease: 'back.out(1.7)'
    });
});

// ========================================
// RENDER ZONES
// ========================================
function renderZones() {
    const container = document.getElementById('zonesContainer');
    
    siteData.zones.forEach((zone, index) => {
        const card = document.createElement('div');
        card.className = 'zone-card';
        card.setAttribute('data-tilt', '');
        card.innerHTML = `
            <div class="zone-card__icon">${zone.icon}</div>
            <h3 class="zone-card__title">${zone.name}</h3>
            <p class="zone-card__specs">${zone.specs}</p>
            <p>${zone.description}</p>
            <div class="zone-card__tooltip">
                <strong>Характеристики:</strong><br>
                ${zone.specs}
            </div>
        `;
        container.appendChild(card);
        
        // Stagger animation
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%'
            }
        });
    });
    
    // Initialize Vanilla Tilt
    VanillaTilt.init(document.querySelectorAll('.zone-card'), {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.3
    });
}

// ========================================
// RENDER PRICES
// ========================================
function renderPrices(timePeriod = 'morning') {
    const container = document.getElementById('pricesContainer');
    container.innerHTML = '';
    
    const prices = siteData.prices[timePeriod] || [];
    const groupedPrices = {};
    
    // Group by zone
    prices.forEach(price => {
        if (!groupedPrices[price.zone]) {
            groupedPrices[price.zone] = [];
        }
        groupedPrices[price.zone].push(price);
    });
    
    // Render
    Object.entries(groupedPrices).forEach(([zone, items], index) => {
        const card = document.createElement('div');
        card.className = 'price-card';
        card.innerHTML = `
            <h3 class="price-card__name">${zone}</h3>
            ${items.map(item => `
                <div class="price-card__time">
                    <span>${item.hours}</span>
                    <span class="price-card__price">${item.price} ₽</span>
                </div>
            `).join('')}
        `;
        container.appendChild(card);
        
        // Animation
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 50);
    });
}

// Price tabs
document.querySelectorAll('.prices__tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.prices__tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderPrices(tab.dataset.time);
    });
});

// ========================================
// RENDER GALLERY
// ========================================
function renderGallery() {
    const container = document.getElementById('galleryContainer');
    
    siteData.gallery.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'gallery__item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.alt}" loading="lazy">
            <div class="gallery__item__overlay">
                <h4 class="gallery__item__title">${item.title}</h4>
            </div>
        `;
        container.appendChild(div);
        
        // Animation
        gsap.to(div, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: div,
                start: 'top 85%'
            }
        });
    });
}

// ========================================
// MODAL
// ========================================
const modal = document.getElementById('bookingModal');
const openModalBtns = document.querySelectorAll('.open-modal');
const closeModalBtn = document.querySelector('.modal__close');
const modalOverlay = document.querySelector('.modal__overlay');

openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ========================================
// FORM HANDLING
// ========================================
const bookingForm = document.getElementById('bookingForm');
const formSuccess = document.getElementById('formSuccess');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(bookingForm);
    const captcha = parseInt(formData.get('captcha'));
    
    // CAPTCHA validation
    if (captcha !== 4) {
        alert('Неправильный ответ на вопрос! Попробуйте еще раз.');
        return;
    }
    
    // Simulate form submission
    const submitBtn = bookingForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Отправка...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        bookingForm.style.display = 'none';
        formSuccess.style.display = 'block';
        
        // Reset form after 3 seconds
        setTimeout(() => {
            bookingForm.reset();
            bookingForm.style.display = 'block';
            formSuccess.style.display = 'none';
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            closeModal();
        }, 3000);
    }, 1500);
});

// Phone mask
const phoneInput = document.querySelector('input[name="phone"]');
phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        if (value[0] === '7' || value[0] === '8') {
            value = value.substring(1);
        }
        let formattedValue = '+7';
        if (value.length > 0) {
            formattedValue += ' (' + value.substring(0, 3);
        }
        if (value.length >= 3) {
            formattedValue += ') ' + value.substring(3, 6);
        }
        if (value.length >= 6) {
            formattedValue += '-' + value.substring(6, 8);
        }
        if (value.length >= 8) {
            formattedValue += '-' + value.substring(8, 10);
        }
        e.target.value = formattedValue;
    }
});

// ========================================
// HERO ANIMATIONS
// ========================================
function animateHero() {
    const tl = gsap.timeline();
    
    tl.to('.hero__title-line', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    })
    .to('.hero__subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out'
    }, '-=0.4')
    .to('.hero__buttons', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out'
    }, '-=0.4')
    .to('.hero__stats', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out'
    }, '-=0.4');
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Section titles
    gsap.utils.toArray('.section__title').forEach(title => {
        gsap.to(title, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: title,
                start: 'top 85%'
            }
        });
    });
    
    // Section subtitles
    gsap.utils.toArray('.section__subtitle').forEach(subtitle => {
        gsap.to(subtitle, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: subtitle,
                start: 'top 85%'
            }
        });
    });
}

// ========================================
// SMOOTH SCROLL FOR NAV LINKS
// ========================================
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: targetSection, offsetY: 80 },
            ease: 'power3.inOut'
        });
    });
});

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderZones();
    renderPrices('morning');
    renderGallery();
    animateHero();
    initScrollAnimations();
    
    // Header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(8, 8, 15, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(138, 43, 226, 0.3)';
        } else {
            header.style.background = 'rgba(8, 8, 15, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
});

// ========================================
// GSAP SCROLL TO PLUGIN (lightweight version)
// ========================================
gsap.registerPlugin({
    name: 'scrollTo',
    init(target, value) {
        this.target = target;
        this.y = typeof value === 'object' ? value.y : value;
    },
    render(progress) {
        const targetY = typeof this.y === 'number' ? this.y : this.y.offsetTop;
        window.scrollTo(0, targetY * progress);
    }
});
