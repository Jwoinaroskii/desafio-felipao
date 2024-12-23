let MontariaDoHeroi = "Ratazana Puxadora de Carrinhos";
let nivelDeForça = 13;
let classificacao;

if (nivelDeForça < 10){
    classificacao = "Ta Precisando de um biotonico";
}else if (nivelDeForça >= 11 && nivelDeForça <= 20){
    classificacao = "Experimetou o suco";
}else if (nivelDeForça <= 30){
    classificacao = "Consegue puxar o carrinho";
}

console.log(MontariaDoHeroi + "Tem o nivel de Força em " + nivelDeForça + " e esta classificada em " + classificacao)