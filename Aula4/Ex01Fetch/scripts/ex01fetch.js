// Vamos trazer os dados dos usuários do jsonplaceholder
// Usando o método nativo fetch()
fetch("https://jsonplaceholder.typicode.com/users/")

// Será gereada uma promisse
// Tenho os 10 usuários em JSON

// Converter a resposta no formato JSON para um objeto JS
.then(response => response.json())

// Com o JSON convertido, vamos exibir as informações na página
.then(usuario => {
    const todosUsuarios = document.getElementById("listaUsuarios")

    usuario.forEach(user => {
        const cadaUsuario = document.createElement("li")
        cadaUsuario.textContent = user.name + " (" + user.email + ")";
        todosUsuarios.appendChild(cadaUsuario);
    });
})

.catch(error => {
    document.getElementById("todosUsuarios").textContent = "Erro ao buscar usuários"
})