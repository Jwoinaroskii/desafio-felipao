let NomedoHeroi = "Super Gato";
let experiencia = 3002;
let classificação;

if (experiencia < 1000) {
    classificação = "Ferro";
} else if (experiencia >= 1001 && experiencia <= 2000) {
    classificação = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
    classificação = "Prata Ouro";
} else if (experiencia >= 5001 && experiencia <= 8000) {
    classificação = "Platina Diamante";
} else if (experiencia >= 8001 && experiencia <= 9000) {
    classificação = "Ascendente";
} else if (experiencia >= 10001) {
    classificação = "Herói";
}

console.log(NomedoHeroi + "O Poderoso tem " + experiencia + " em sua jornada e é classificado como: " + classificação);
