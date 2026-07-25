/* ===================== LOADER Y INICIALIZACIÓN ===================== */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";

    if (typeof AOS !== 'undefined' && AOS) {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card, i) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(50px)";
        setTimeout(() => {
            card.style.transition = "all 0.8s ease-out";
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, 200 * i);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Efecto Shrink en Header al hacer Scroll
    const header = document.querySelector('.header-premium');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header?.classList.add('shrink');
        } else {
            header?.classList.remove('shrink');
        }
    });

    // 2. Barra de Progreso Superior
    const progressBar = document.querySelector('.progress-bar');
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (windowHeight > 0) {
            const progress = (window.scrollY / windowHeight) * 100;
            if (progressBar) progressBar.style.width = `${progress}%`;
        }
    });

    // 3. Menú Móvil Hamburger
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');

    const toggleMenu = () => {
        hamburgerBtn?.classList.toggle('active');
        mobileMenu?.classList.toggle('open');
        mobileOverlay?.classList.toggle('open');
    };

    hamburgerBtn?.addEventListener('click', toggleMenu);
    mobileOverlay?.addEventListener('click', toggleMenu);

    // 4. Animaciones de Desplazamiento (Reveal)
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
    revealOnScroll();
});

/* ===================== CUSTOM CURSOR ===================== */
const cursor = document.querySelector(".cursor");
if (cursor) {
    document.addEventListener("mousemove", (e) => {
        cursor.style.top = e.clientY + "px";
        cursor.style.left = e.clientX + "px";
    });
}

/* ===================== PARALLAX HERO ===================== */
const heroBg = document.querySelector(".hero-bg");
window.addEventListener("scroll", () => {
    const scroll = window.scrollY;

    if (heroBg) {
        heroBg.style.transform = "translateY(" + scroll * 0.3 + "px)";
    }

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
            card.style.transition = "all 0.6s ease-out";
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});

/* ===================== MENU RESPONSIVE ===================== */
const btnNav = document.querySelector(".btn-nav");
const menu = document.querySelector(".menu");
if (btnNav && menu) {
    btnNav.addEventListener("click", () => {
        menu.classList.toggle("menu-active");
    });
}

/* ===================== SMOOTH SCROLL ===================== */
const menuLinks = document.querySelectorAll(".menu a, .nav-premium a");
menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        }
    });
});

/* ===================== CURSOR HOVER EFFECT ===================== */
const hoverElements = document.querySelectorAll(".btn, .btn-outline, .menu a, .nav-premium a");
hoverElements.forEach(el => {
    if (cursor) {
        el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    }
});

/* ===================== HOVER CINEMATOGRÁFICO + ZOOM PROYECTOS ===================== */
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transition = "transform 0.5s ease, box-shadow 0.5s ease, filter 0.5s ease";
        card.style.transform = "scale(1.08)";
        card.style.boxShadow = "0 25px 60px rgba(244,166,64,0.6)";
        card.style.filter = "brightness(1.15)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "0 15px 35px rgba(0,0,0,0.5)";
        card.style.filter = "brightness(1)";
    });
});
/* ===================== BOTÓN "VOLVER ARRIBA" ===================== */
/* Añadido: no modifica ninguna función existente arriba. Se activa solo si
   el botón #backToTop existe en la página (no rompe páginas que no lo tengan). */
document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});