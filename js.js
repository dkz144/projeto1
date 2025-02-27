// Script para alternar o menu
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Verifica se os elementos existem para evitar erros no carregamento
if (menuToggle && menu) {
    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("hidden"); // Alterna a classe "hidden"
    });
}
