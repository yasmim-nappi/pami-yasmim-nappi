let cidades: string[] = ['São Paulo', 'Belo Horizonte', 'São Vicente', 'Brotas', 'São Caetano do Sul'];

function listarCidades (cidades: string[]): void; {
    cidades.forEach(cidade =>{
        console.log(cidade);
    });
}
listarCidades(cidades);