const calcularMedia = function (nota1, nota2, nota3){
    return (nota1 + nota2 + nota3) / 3
}
const Aprovacao = (nota) => Nota >= 7;
if (Aprovacao(calcularMedia (7, 10, 7))) {
    console.log ("Aluno aprovado!");
}
else{
    console.log ("Aluno reprovado!");
}
function exibirNotaFinal (Nota) {
    console.log ("Nota final: " + Nota);
}
exibirNotaFinal (Nota = calcularMedia (7, 10, 7));