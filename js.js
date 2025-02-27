// Script para abrir/fechar o menu hambúrguer
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Abrir ou fechar o menu ao clicar no ícone
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Fechar o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== menuToggle) {
        menu.classList.remove('show');
    }
});
