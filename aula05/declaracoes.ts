//Declarações de variáveis.
let nome: string = 'João';
let idade = 25;
let estAtivo: boolean = true;

//Arrays.
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ['Ana', 'Bruno', 'Carlos'];
let misto: (number | string)[] = ['Ana', 25, 'Carlos', 30];
let misto2: Array<string | number> = ['Ana', 25, 'Carlos', 30];

//Tuplas
let pessoas: [string, number] = ['Maria', 30];

//Union Types
let id: number | string = 123;
id = 'ABC123';

//Interfaces. Usadas para definir a estrutura de objetos.
interface Usuario {
    nome: string;
    idade: number;
    email?: string;
}
//Utilização de uma interface:
let novo_usuario: Usuario = {
    nome: 'Amanda',
    idade: 18
};