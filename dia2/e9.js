const prompt = require("prompt-sync")();

function calcularAreaRectangulo(alto, ancho) {
    return alto * ancho / 2;
}

let n1 = parseInt(prompt("Introduce el alto: "));
let n2 = parseInt(prompt("Introduce el ancho: "));
console.log(calcularAreaRectangulo(n1, n2)); // 50