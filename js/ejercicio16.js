let frase = prompt("Ingrese una frase");
const fraseSeparada = frase.split("");
const fraseEspejo = fraseSeparada.reverse();
const fraseUnida = fraseEspejo.join("");
alert(fraseUnida);