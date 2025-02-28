// Seleciona o botão do menu e o próprio menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Abrir/fechar o menu ao clicar no botão
menuToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Evita o fechamento imediato ao clicar no botão
    menu.classList.toggle('show');
});

// Fechar o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== menuToggle) {
        menu.classList.remove('show');
    }
});
