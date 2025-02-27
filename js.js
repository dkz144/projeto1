// Script para alternar o menu
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function() {
    menu.classList.toggle("show"); // Alterna a classe "show", controlando a visibilidade do menu
});
