let texto = prompt("Ingrese un texto");
let textoMayus = texto.toUpperCase();
console.log(textoMayus);
let suma = 0;
for (contador = 0; contador < textoMayus.length; contador++) {
  if (
    textoMayus.charAt(contador) == "A" ||
    textoMayus.charAt(contador) == "E" ||
    textoMayus.charAt(contador) == "I" ||
    textoMayus.charAt(contador) == "O" ||
    textoMayus.charAt(contador) == "U"
  ) {
    suma++;
  }
}
if (suma == 1) alert(`El texto tiene 1 vocal`);
else alert(`El texto tiene ${suma} vocales`);
