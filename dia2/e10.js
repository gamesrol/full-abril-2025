const prompt = require("prompt-sync")();

function calcularAreaCirculo(radio) {
    if (radio <= 0) {
        return "El radio debe ser un número positivo.";
    }
    const area = Math.PI * Math.pow(radio, 2);
    return area.toFixed(2);
}

let n = parseInt(prompt("Introduce un numero: "));
console.log(calcularAreaCirculo(n)); 