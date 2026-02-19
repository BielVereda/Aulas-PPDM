//Exemplo de Array literal
const exemploArrayLiteralDiv = document.getElementById("exemplo-array-literal");

const frutas = ["maçã", "banana", "laranja"];

exemploArrayLiteralDiv.innerHTML = `
  <h2>Exemplo de Array literal</h2>
  <p>Array: [ ${frutas} ]</p>
`;


//Acesso a elementos do array
const exemploArrayAcessoDiv = document.getElementById("exemplo-array-acesso");

const numeros = [10, 20, 30, 40, 50];

//Método "map()"
const primeiroElemento = numeros[0];
const segundoElemento = numeros[1];
const terceiroElemento = numeros[2];
const quartoElemento = numeros[3];
const quintoElemento = numeros[4];

exemploArrayAcessoDiv.innerHTML = `
  <h2>Exemplo de acesso aos elementos do array:</h2>
  <p>Números: [ ${numeros} ]</p>
  <p>Primeiro elemento: ${primeiroElemento}</p>
  <p>Segundo elemento: ${segundoElemento}</p>
  <p>Terceiro elemento: ${terceiroElemento}</p>
  <p>Quarto elemento: ${quartoElemento}</p>
  <p>Quinto elemento: ${quintoElemento}</p>
  `;


//Modificação de elementos do array
const exemploArrayModificadoDiv = document.getElementById("exemplo-array-modificado");

const cores = ["Grená", "Ocre", "Índigo"];
//Modificando o primeiro elemento do array
cores[0] = "Magenta";

exemploArrayModificadoDiv.innerHTML = `
  <h2>Exemplo de modificação de elementos do array:</h2>
  <p>Array modificado: [ ${cores} ]</p>
  <p>Primeira cor (elemento modificado): ${cores[0]}</p>
  <p>Segunda cor: ${cores[1]}</p>
  <p>Terceira cor: ${cores[2]}</p>
`;