const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
});

console.log(reprovados);

// o parâmetro "aluno", neste caso, por não estar sendo
// utilizado, pode ser substituido por "_".