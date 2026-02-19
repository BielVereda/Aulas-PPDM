let nota = prompt("Digite a nota do aluno: ");

if (nota >= 7) {
    console.log("Aprovado");
} else if (nota < 7 && nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}