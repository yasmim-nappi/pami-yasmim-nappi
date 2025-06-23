interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

function exibirLivro (livro: Livro): void {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
}

const Pinoquio : Livro = {
    titulo: 'Le avventure di Pinocchio. Storia di un burattino',
    autor: "Carlo 'Collodi' Lorenzini",
    anoPublicacao: 1883,
}

exibirLivro(Pinoquio);