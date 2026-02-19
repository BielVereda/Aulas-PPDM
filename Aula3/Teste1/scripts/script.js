let produtos = [];

async function carregarProdutos() {
    try{
        const resposta = await fetch("produtos.json");
        produtos = await resposta.json();
        exibirProdutos();
    }catch (error){
        console.error("Erro ao carregar os produtos...", error);
        alert("Erro ao carregar os produtos...");
    }
}

function adcionarProdutos(){
    const nome = document.getElementById("nome").ariaValueMax;
    const preco = parseFloat(document.getElementById("preco").value);
    const disponivel = document.getElementById("disponivel").value === "true";

    if (nome && !isNaN(preco)){
        const novoProduto = {
            nome: nome,
            preco: preco,
            disponivel: disponivel,
        }

        produtos.push(novoProduto);
        document.getElementById("nome").value = "";
        document.getElementById("preco").value =  "";
        document.getElementById("disponivel").value =  "true";
    }else{
        alert("Por favor, preencha corretamente as informações");
    }
}

function exibirProdutos(){
    const listaProdutosDiv = document.getElementById("lista-produtos");
    
    listaProdutosDiv.innerHTML = "";
    produtos.forEach((produto, index) =>{
        const listaProdutosDiv = document.getElementById("produtoDiv")
        listaProdutoDiv.classList.add("produtoDiv");

        const nomeH3 = document.getElementById("h3");
        nomeH3.textContent = produto.nome;

        const precoP = document.getElementById("p");
        precoP.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

        const disponibilidadeP = document.getElementById("p");
        disponibilidadeP.textContent = "Disponibilidade: ";

        const spanDisponibilidade = document.createElement("span");
        spanDisponibilidade.textContent = produto.disponivel ? "Disponível" : "Indisponível";
        spanDisponibilidade.classList.add(produto.disponivel ? "disponivel" : "indisponivel")
    
        disponibilidadeP.appendChild(spanDisponibilidade);

        listaProdutosDiv.appendChild(nomeH3);
        listaProdutosDiv.appendChild(precoP);
        listaProdutosDiv.appendChild(disponibilidadeP);

        listaProdutosDiv.appendChild(produtoDiv);
    })
}

