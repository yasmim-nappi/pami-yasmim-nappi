//Função que retorna tipos.
function saudacao (nome: string): string {
    return `Olá, ${nome}`;
}
console.log(saudacao('Leandro'));

//Interface para objeto Usuario.
interface Usuario {
    nome: string
    idade: number;
    email?: string; //'?' singifica que é uma informação opcional.
}
//Utilizando a interface Usuario:
function ExibirUsuario(usuario: Usuario): void {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
}

ExibirUsuario({nome: 'Marcos', idade: 22});

//Exemplo de uma função que retorna arrays e tem parâmetros opcionais:
function listarNomes(nomes: string[]): void{
    nomes.forEach(nome => console.log(nome));
}

listarNomes(['Ana', 'Bruno', 'Carlos', 'Yasmimzão'])