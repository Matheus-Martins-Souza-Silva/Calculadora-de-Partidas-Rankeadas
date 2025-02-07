let vitorias = 100;
let derrotas = 10;
let saldoVitorias = vitorias - derrotas;


function analizarStatus(vitorias, derrotas) {
    let realVitorias = vitorias - derrotas;

    if (realVitorias < 10)
        return 'Ferro';
    else if (realVitorias >= 11 && realVitorias <= 20)
        return 'Bronze';
    else if (realVitorias >= 21 && realVitorias <= 50)
        return 'Prata';
    else if (realVitorias >= 51 && realVitorias <= 80)
        return 'Ouro';
    else if (realVitorias >= 81 && realVitorias <= 90)
        return 'Diamante';
    else if (realVitorias >= 91 && realVitorias <= 100)
        return 'Lendario';
    else if (realVitorias >= 101)
        return 'Imortal';
}

console.log("O heroi tem o saldo de vitorias de " + saldoVitorias + " e esta no nivel de " + analizarStatus(vitorias, derrotas));