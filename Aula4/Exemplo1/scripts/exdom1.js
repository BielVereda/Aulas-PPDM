// Vamos pegar o nosso elemento H1 com o id = "titulo"
const texto = document.getElementById("titulo");

// Vamos pegar o nosso elemento button pelo id = "botao"
const elementoBotao = document.getElementById("botao");

// Manipulador de eventos do JavaScript (addEventListener)
elementoBotao.addEventListener("click", function(){
    // Vamos alterar o texto do elemento H1 -> "Texto alrerado"
    texto.textContent = "🌈 Quem clicou é gay 🌈";
    elementoBotao.textContent = "Caiu no Bait!"
});