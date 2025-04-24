const prompt = require("prompt-sync")();

function saludar() {
    const nombre = prompt("Por favor, ingresa tu nombre: ");
    console.log(`Hola ${nombre}`);
}

saludar();