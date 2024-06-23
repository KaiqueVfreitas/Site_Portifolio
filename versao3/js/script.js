document.addEventListener("DOMContentLoaded", function() {
    // Animação de digitação
    const textElement = document.getElementById('typing');
    const text = "Olá, Mundo!";
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }

    type();

    // Seta de navegação
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
    toggleScrollArrow(); // Initialize on page load
});
