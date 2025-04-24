// let saludo = (text, text2) => console.log(text + " " + text2);

// let saludo = function(text, text2){
//     console.log(text + " " + text2)
// };

// let saludo = function(){
//     let a = "Hola";
//     console.log(a)
// };

// let saludo = (text, text2) => {     
//     let a = "Hola";
//     console.log(a)
// }

// function saludo(){
//     let a = "Hola";
//     console.log(a)
// };


// saludo();

// let sum = (a, b) => {
//     let r = a + b;
//     return r;
// };

// let sum = function(a, b){
//     a + b
// };



( () => {
    const persona = {
        nombre: "Ana",
        saludar: function() {
          console.log("Hola, soy " + this.nombre);
        }
    };
    
    
    persona.saludar();
} )();

let a = 12

text = "";
text += "<h1>" + 10 + "</h1>";
text += "<p>" + 10 + "</p>";
text += "<p>" + 10 + "</p>";
text += "<p>" + 10 + "</p>";

let text = `
  <h1>${10}</h1>
  <p>${10}</p>
  <p>${10}</p>
  <p>${10}</p>
`;