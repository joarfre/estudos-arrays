const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "Rodrigo");

// Parametro1: onde inicia a exclusao
// Parametro2: quantidade de valores a serem exluidos
// Parametro3: caso queira inserir um novo valor, informar o valor
// irá excluir Ana e Caio, e incluir Rodrigo no lugar

console.log(nomes);