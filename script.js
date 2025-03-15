document.addEventListener("DOMContentLoaded", function() {
    alert("Bem-vindo ao Kanimambo Artesanato!");

    const botoesComprar = document.querySelectorAll(".botao-comprar");
    botoesComprar.forEach(botao => {
        botao.addEventListener("click", () => {
            alert("Produto adicionado ao carrinho!");
        });
    });
});
