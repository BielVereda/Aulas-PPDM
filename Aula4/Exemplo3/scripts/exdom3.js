// Vamos pegar o elemento button com id = "alternarBotao"
const elementoBotao = document.getElementById("alternarBotao");

// Vamos pegar o elemento div com id = "mensagem"
const elementoDiv = document.getElementById("mensagem");

/* Vamos adicionar o método addEventListener para escutar
o evento click */
elementoBotao.addEventListener("click", function(){
    // 1. Vamos verificar se a mensagem esta oculta
    if(mensagem.classList.contains("oculto")){
        mensagem.classList.remove("oculto")
    } else {
        mensagem.classList.add("oculto")
    }
});