// Script para alternar o menu
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function() {
    menu.classList.toggle("open"); // Alterna a classe "open" para exibir o menu
});
