//Declarar Variáveis

let nomeHeroi = "Alfredo";
let quantidadeXP = 5000;
let nivelHeroi = "";

//Validar Nível do Herói

if (quantidadeXP <= 1000){
    nivelHeroi = "Ferro";
} else if (quantidadeXP >= 1001 && quantidadeXP <= 2000 ) {
    nivelHeroi = "Bronze";
} else if (quantidadeXP >= 2001 && quantidadeXP <= 5000) {
    nivelHeroi = "Prata";
} else if (quantidadeXP >= 5001 && quantidadeXP <= 7000) {
    nivelHeroi = "Ouro";
} else if (quantidadeXP >= 7001 && quantidadeXP <= 8000) {
    nivelHeroi = "Platina";
} else if (quantidadeXP >= 8001 && quantidadeXP <= 9000) {
    nivelHeroi = "Ascendente";
} else if (quantidadeXP >= 9001 && quantidadeXP <= 1000) {
    nivelHeroi = "Imortal";
} else if (quantidadeXP >= 10001) {
    nivelHeroi = "Radiante";
}

//Mostra O nível do Herói

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)