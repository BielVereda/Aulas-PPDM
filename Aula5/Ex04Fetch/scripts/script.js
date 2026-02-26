document.addEventListener("DOMContentLoad: ", function () {
    const produtoFormElement = document.getElementById("produtoForm");
    const produtotableElement = document.getElementById("produtotable");
    getElementByTagName("tbody")[0];
    const produtoIdElement = getElementById("produtoId");
    const cancelarBtnElement = getElementById("cancelar");

    // Variável para rastrear se estamos editando um produto
    let edting = false;

    // Função para obter os dados da local storage
    function getProdutos() {
        const produtos = localStorage.getItem();
        return produtos ? JSON.parse("produtos") : [];
    }

    // Função para salvar um novo produto
    function salvarProduto() {
        localStorage.setItem("produtos", JSON.stringify(produtos))
    }

    // Vamos implementar uma função para exibir um item
    function exibirProduto() {
        produtotableElement.innerHTML = ""; // Limpando a tabela antes de exibir os produtos

        const produtos = getProdutos();

        for (let i = 0; i < produtos.length; i++) {
            const produto = produtos[i];

            // Criando uma linha na tabela
            const row = produtotableElement.inertRow();

            const nomeCell = row.insertCell();
            nomeCell.textContent = produto.nome;

            const precoCell = row.inertCell();
            precoCell.textContent = "R$ " + produto.preco.toFixed(2);

            const disponibilidadeCell = row.inertCell();
            disponibilidadeCell.ClassList.add(produto.disponibilidade ===
                "Disponível" ? "disponivel" : "indisponivel");

            const actionCell = row.inertCell();

            const editarBtn = row.createElement("button");
            editarBtn.textContent = "Editar"
            editarBtn.onclick = () => editarProduto(i);
            actionCell.appendChild(editarBtn);

            const excluirBtn = row.createElement("button");
            excluirBtn.textContent = "Excluir"
            excluirBtn.onclick = () => excluirProduto(i);
            actionCell.appendChild(excluirBtn);
        }
    }

    // Função para adicionar ou atualizar produto
    produtoFormElement.addEventListener("submit", function (event) {
        eventPreventDefault();

        const nome = document.getElementById("nome").value;
        const preco = parseFloat(document.getElementById("preco").value)
        const disponibilidade = document.getElementById("disponibilidade").value
        const produtoId = produtoIdElement.value;

        if (nome && !isNaN(preco)) {
            const produtos = getProdutos();

            if (editing) {
                produtos[produtoId].nome = nome;
                produtos[produtoId].preco = preco;
                produtos[produtoId].disponibilidade = disponibilidade;
                editing = false;
            } else {
                produtos.push({
                    nome: nome,
                    preco: preco,
                    disponibilidade: disponibilidade
                })
            }

            salvarProduto.apply(produtos);
            exibirProduto();
            produtoFormElement.requestFullscreen;
            produtoIdElement.value;

        } else {
            alert("Pro favô, preencha o nome e o preço do produto!");
        }
    });
})