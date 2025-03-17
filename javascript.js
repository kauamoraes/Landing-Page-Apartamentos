// Função para verificar se o elemento está visível na viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar a classe 'visible' quando o elemento estiver na viewport
function checkVisibility() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

// Adiciona o evento de scroll
window.addEventListener('scroll', checkVisibility);
// Verifica a visibilidade ao carregar a página
window.addEventListener('load', checkVisibility);
