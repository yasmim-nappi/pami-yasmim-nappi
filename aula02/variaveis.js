var numero = 2;
let texto = 'hello';
const oQueEisso = '?';

//o ponto e vírgula é opcional! Boas praticas o usam ♡

console.log('Tipo var:', numero);
//concatenar com vírgula garante um espaço.

numero = 420;

console.log(texto + 'o número agora é' + numero);
console.log(`${texto} o número agora é ${numero}`);

texto = 69;
console.log(texto + numero);

//concatenar com + dois valores númericos, causa soma.

console.log(oQueEisso);
oQueEisso ='!';
console.log (oQueEisso);

//constantes não podem ter novos valores assinalados a elas.

// oQueEisso = "uma constante????""

// console.log(oQueEisso)