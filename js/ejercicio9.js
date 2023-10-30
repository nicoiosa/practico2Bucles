for (let numero = 1; numero <= 500; numero++) {
  document.write(numero);
  if (numero % 4 == 0) {
    document.write(" (Multiplo de 4)");
  }
  if (numero % 9 == 0) {
    document.write(" (Multiplo de 9)");
  }
  if (numero % 5 == 0) {
    document.write("<hr>");
  } else document.write("<br>");
}