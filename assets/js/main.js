/* ==========================================================================
   JHON PULIDO · PREMIUM PORTFOLIO  —  Main Interactions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header-premium');
    const progressBar = document.querySelector('.progress-bar');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const backToTopBtn = document.getElementById('backToTop');
    const reveals = document.querySelectorAll('.reveal');

    /* ---- Header shrink on scroll ---- */
    const onScroll = () => {
        const y = window.scrollY;

        if (header) {
            header.classList.toggle('shrink', y > 40);
        }

        if (progressBar) {
            const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            progressBar.style.width = max > 0 ? `${(y / max) * 100}%` : '0%';
        }

        if (backToTopBtn) {
            backToTopBtn.classList.toggle('visible', y > 480);
        }

        /* Reveal */
        const vh = window.innerHeight;
        reveals.forEach(el => {
            if (el.getBoundingClientRect().top < vh - 90) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---- Mobile menu ---- */
    const toggleMenu = () => {
        hamburgerBtn?.classList.toggle('active');
        mobileMenu?.classList.toggle('open');
        mobileOverlay?.classList.toggle('open');
        document.body.style.overflow = mobileMenu?.classList.contains('open') ? 'hidden' : '';
    };

    hamburgerBtn?.addEventListener('click', toggleMenu);
    mobileOverlay?.addEventListener('click', toggleMenu);

    mobileMenu?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('open')) toggleMenu();
        });
    });

    /* ---- Back to top ---- */
    backToTopBtn?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ---- Parallax subtle on hero-bg ---- */
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            heroBg.style.transform = `translateY(${window.scrollY * 0.22}px)`;
        }, { passive: true });
    }

    /* ---- Smooth scroll for hash links ---- */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const id = link.getAttribute('href');
            if (id.length > 1) {
                const target = document.querySelector(id);
                if (target) {
                    e.preventDefault();
                    const offset = header ? header.offsetHeight + 20 : 80;
                    window.scrollTo({
                        top: target.getBoundingClientRect().top + window.scrollY - offset,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

/* ---- Contact form → WhatsApp ---- */
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const nameInput = document.getElementById('contactName');
    const messageInput = document.getElementById('contactMessage');
    const errorMsg = document.getElementById('contactFormError');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const name = nameInput?.value.trim() || '';
        const message = messageInput?.value.trim() || '';

        if (!name || !message) {
            if (errorMsg) errorMsg.style.display = 'block';
            return;
        }

        if (errorMsg) errorMsg.style.display = 'none';
        const texto = `Hola Jhon, soy ${name}. ${message}`;
        const url = `https://wa.me/34660986240?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank', 'noopener');
    });
});

/* ---- 404 path display ---- */
document.addEventListener('DOMContentLoaded', () => {
    const pathEl = document.getElementById('brokenPath');
    if (pathEl) {
        const path = window.location.pathname + window.location.search;
        pathEl.textContent = 'Ruta solicitada: ' + (path || '/');
    }
});
