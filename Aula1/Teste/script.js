let nota = prompt("Digite a nota do aluno: ");

if (nota >= 7) {
    alert("Aprovado");
} else if (nota < 7 && nota >= 5) {
    alert("Recuperação");
} else {
    alert("Reprovado");
}