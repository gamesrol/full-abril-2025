const prompt = require("prompt-sync")();

function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

let n = parseInt(prompt("Introduce un numero: "));
console.log(esParOImpar(n));