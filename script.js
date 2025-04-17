document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    function checkSlide() {
        sections.forEach(section => {
            const slideInAt = (window.scrollY + window.innerHeight) - section.offsetHeight / 2;
            const sectionBottom = section.offsetTop + section.offsetHeight;
            const isHalfShown = slideInAt > section.offsetTop;
            const isNotScrolledPast = window.scrollY < sectionBottom;

            if (isHalfShown && isNotScrolledPast) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', checkSlide);
    checkSlide(); // Panggil saat halaman dimuat untuk pertama kali
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f0f0f0'; // Warna latar belakang saat hover
        });

        button.addEventListener('mouseout', function() {
            this.style.backgroundColor = ''; // Kembalikan warna latar belakang asli
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.querySelector('.hero-media img');

    function animateHeroImage() {
        heroImage.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            heroImage.style.transform = 'translateY(0)';
        }, 1000);
    }

    setInterval(animateHeroImage, 3000); // Ulangi setiap 3 detik
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    const submenuParents = document.querySelectorAll(".nav-links .has-submenu > a");

    submenuParents.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const submenu = link.nextElementSibling;
            submenu.classList.toggle("active");
        });
    });
});




