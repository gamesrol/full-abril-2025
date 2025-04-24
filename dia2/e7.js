const prompt = require("prompt-sync")();

function elevarASiMismo(numero) {
    return Math.pow(numero, numero);
}

let n = parseInt(prompt("Introduce un numero: "));
console.log(elevarASiMismo(n));