let texto = prompt("Ingrese un texto");
let textoMayus = texto.toUpperCase();
let vocal = false;
for (contador = 0; contador < textoMayus.length; contador++) {
  if (
    textoMayus.charAt(contador) == "A" ||
    textoMayus.charAt(contador) == "E" ||
    textoMayus.charAt(contador) == "I" ||
    textoMayus.charAt(contador) == "O" ||
    textoMayus.charAt(contador) == "U"
  ) {
    alert(
      `La vocal ${textoMayus.charAt(contador)} esta en la posicion ${
        contador + 1
      }`
    );
    vocal = true;
    break;
  }
}
if (vocal == false) alert("No ingresaste una vocal");
