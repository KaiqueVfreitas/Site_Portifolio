document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('digitando');
    const text = "Olá, Mundo!";
    let index = 0;
    let typing = true;

    function type() {
        if (typing) {
            if (index < text.length) {
                textElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 150);
            } else {
                typing = false;
                setTimeout(type, 2000);
            }
        } else {
            if (index > 0) {
                textElement.innerHTML = text.substring(0, index - 1);
                index--;
                setTimeout(type, 150);
            } else {
                typing = true;
                setTimeout(type, 500);
            }
        }
    }

    type();

    const scrollArrow = document.getElementById('seta-de-rolagem');

    function toggleScrollArrow() {
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            scrollArrow.innerHTML = '<i class="bi bi-chevron-up"></i>';
            scrollArrow.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            scrollArrow.innerHTML = '<i class="bi bi-chevron-down"></i>';
            scrollArrow.onclick = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }

        if (window.scrollY > 100) {
            scrollArrow.classList.add('show');
        } else {
            scrollArrow.classList.remove('show');
        }
    }

    window.addEventListener('scroll', toggleScrollArrow);
    toggleScrollArrow();

    document.querySelectorAll('.mostrar-mais').forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            const maisTecnologias = this.previousElementSibling;
            if (maisTecnologias.style.display === 'none' || maisTecnologias.style.display === '') {
                maisTecnologias.style.display = 'flex';
                this.innerHTML = 'Mostrar menos';
            } else {
                maisTecnologias.style.display = 'none';
                this.innerHTML = 'Mostrar mais';
            }
        });
    });

    // Menu toggle logic
    const menuToggle = document.querySelector('.menuToggle');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });
});
