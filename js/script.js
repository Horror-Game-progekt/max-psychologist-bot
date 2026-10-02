// ============================================
//  Не один — скрипты сайта
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // ----------------------------------------
    // 1. Мобильное меню (бургер)
    // ----------------------------------------
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    if (burger && nav) {
        burger.addEventListener('click', function () {
            nav.classList.toggle('open');
        });

        // Закрываем меню при клике на ссылку (на мобильных)
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('open');
            });
        });
    }

    // ----------------------------------------
    // 2. Плавное появление карточек при скролле
    // ----------------------------------------
    const cards = document.querySelectorAll('.card');

    if (cards.length && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(function (card, index) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease ' + (index * 0.05) + 's, transform 0.5s ease ' + (index * 0.05) + 's';
            observer.observe(card);
        });
    }

    // ----------------------------------------
    // 3. Проверка формы перед отправкой
    // ----------------------------------------
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function (e) {
            const name = form.querySelector('[name="name"]');
            const contact = form.querySelector('[name="contact"]');
            const message = form.querySelector('[name="message"]');

            let error = '';

            if (!name.value.trim()) {
                error = 'Пожалуйста, укажите имя.';
            } else if (!contact.value.trim()) {
                error = 'Пожалуйста, оставьте контакт для связи.';
            } else if (!message.value.trim()) {
                error = 'Пожалуйста, кратко опишите ситуацию.';
            }

            if (error) {
                e.preventDefault();
                alert(error);
            }
        });
    }

});
