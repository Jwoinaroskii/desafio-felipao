let vitorias = 50;
let derrotas = 30;

function calcularRankeadas(vitorias, derrotas) {
    let NumerosDeVitorias = vitorias - derrotas;
    let classificacao;

    if (vitorias < 10) {
        classificacao = "Ferro";
    } else if (vitorias <= 20) {
        classificacao = "Bronze";
    } else if (vitorias <= 50) {
        classificacao = "Prata";
    } else if (vitorias <= 80) {
        classificacao = "Ouro";
    } else if (vitorias <= 90) {
        classificacao = "Diamante";
    } else if (vitorias <= 100) {
        classificacao = "Lendário";
    } else {
        classificacao = "Imortal";
    }

    console.log("O herói tem de saldo de " + NumerosDeVitorias + " e está na classificação " + classificacao);
}

calcularRankeadas(vitorias, derrotas);
