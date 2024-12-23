let ItemDoheroi = "Espada";
let nivelDeRefino = 1015;
let classificacao;

if (nivelDeRefino < 1000){
    classificacao = "DeNoob";
}else if (nivelDeRefino >= 1000 && nivelDeRefino <= 2000){
    classificacao = "Bronhamole";
}else if (nivelDeRefino >= 2001 && nivelDeRefino <= 3000){
    classificacao = "Tamelhorando";
}else if (nivelDeRefino >= 3001 && nivelDeRefino <= 4000){
    classificacao = "Intermediario";
}else if (nivelDeRefino >= 40001 && nivelDeRefino <= 5000){
    classificacao = "KidBenguento";
}

console.log (ItemDoheroi + " Está sendo aprimorada para o " + nivelDeRefino + " e esta classificado como " + classificacao )