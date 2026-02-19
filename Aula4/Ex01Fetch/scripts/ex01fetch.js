// Vamos trazer os dados dos usuários do jsonplaceholder
// Usando o método nativo fetch()
fetch("https://jsonplaceholder.typicode.com/users/")

// Será gereada uma promisse
// Tenho os 10 usuários em JSON

// Converter a resposta no formato JSON para um objeto JS
.then(response => response.json())