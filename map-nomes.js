const nomes = ["ana Julia", "Caio vinivius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => {
    return nome.toUpperCase();
});

console.log(nomesPadronizados);

// também pode ser escrita como:
// const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());
