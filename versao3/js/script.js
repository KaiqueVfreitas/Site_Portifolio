document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('typing');
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

    const scrollArrow = document.getElementById('scroll-arrow');

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

    document.querySelectorAll('.show-more').forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            const moreTech = this.previousElementSibling;
            if (moreTech.style.display === 'none' || moreTech.style.display === '') {
                moreTech.style.display = 'flex';
                this.innerHTML = 'Mostrar menos';
            } else {
                moreTech.style.display = 'none';
                this.innerHTML = 'Mostrar mais';
            }
        });
    });
});
