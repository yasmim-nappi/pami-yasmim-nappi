function Exibirmsg (msg){
    console.log(msg)
}

    Exibirmsg ("dia bom!!!")
    Exibirmsg("sou the silliest billiest :p")
    Exibirmsg("olá mundãoo, êh coisa boa!")


function Soma (n1, n2){
    return n1 + n2
}
    console.log (Soma (2, 7))


const Potencia = (n, p) => {
    return Math.pow(n, p)
}
    console.log(Potencia(4, 2))

const Media = (nota1, nota2) => {
    let NotaFinal = (nota1 + nota2)/2

    if (NotaFinal < 4.00) {
        return "Reprovado"
    }
    if (NotaFinal > 6.00){
        return "Aprovado"
    }
    return "Recuperação"
}
    console.log(Media(5, 2))