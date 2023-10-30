for (let contadorExterno = 1; contadorExterno <= 30; contadorExterno++) {
  for (
    let contadorInterno = contadorExterno;
    contadorInterno >= 1;
    contadorInterno--
  ) {
    document.write(contadorExterno);
  }
  document.write("<br>");
}