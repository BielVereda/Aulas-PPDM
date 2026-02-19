// Vamos pegar a lista de produtos com id = "lista"
const elementoLista = document.getElementById("lista");

// Vamos pegar o elemento input com id = "novaCompra"
const elementoInput = document.getElementById("novaCompra");

// Vamos pegar o elemento botão com id = "botaoAdicionar"
const elementoBotao = document.getElementById("botaoAdicionar");

// Vamos adicionar o método addEventListener
elementoBotao.addEventListener("click", function(){
    // Vamos ler o produto digitado pelo usuário
    const novoProduto = elementoInput.value;

    // Tratamento
    if (novoProduto !== ""){
        // 1. Vamos criar um novo elemento na lista
        const novoItemElemento = document.createElement("li");

        // 2. Definindo o texto do novo li
        novoItemElemento.textContent = novoProduto;

        // 3. Vamos inserir o li criado no ul
        elementoLista.appendChild(novoItemElemento);

        // 4. Vamos limpar o input
        elementoInput.value = "";
    }
});