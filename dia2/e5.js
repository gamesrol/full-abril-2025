const prompt = require("prompt-sync")();

function contieneLetraS(cadena) {
    return console.log(cadena.includes('s'));
}

const cadena = prompt("Texto a comprobar: ");
contieneLetraS(cadena);