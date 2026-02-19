//Criação dos produtos
const produtos = {
    produto1: {
        nome: "Camiseta do McQuuen",
        preco: 59.99,
        disponivel: true,
    },

    produto2:{
        nome: "Cueca do Ricardo Milos",
        preco: 1299.99,
        disponivel: false,
    },

    produto3:{
        nome: "Perfume do Cebolinha",
        preco: 699.99,
        disponivel: true,
    }
};

//Função para exibir os produtos disponíveis
const listaProdutosDiv = document.getElementById("lista-produtos");

for (let key in produtos) {
    if (produtos.hasOwnProperty(key)) {

        const produto = produtos[key];        

        const produtoDiv = document.createElement("div");
        produtoDiv.classList.add("produto");

        const nomeH3 = document.createElement("h3");
        nomeH3.textContent = produto.nome;

        const precoP = document.createElement("p");
        precoP.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

        const disponivelP = document.createElement("p");
        disponivelP.textContent = `Disponibilidade: `;

        const spanDisponibilidade = document.createElement("span");
        spanDisponibilidade.textContent = produto.disponivel ? "Disponível" : "Indisponível";
        spanDisponibilidade.classList.add(produto.disponivel ? "disponivel" : "indisponivel");

        //Mostrando os itens na tela
        disponivelP.appendChild(spanDisponibilidade);
        
        produtoDiv.appendChild(nomeH3);
        produtoDiv.appendChild(precoP);
        produtoDiv.appendChild(disponivelP);

        listaProdutosDiv.appendChild(produtoDiv);
    }
}