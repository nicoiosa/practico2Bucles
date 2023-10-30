let numero = parseInt(prompt("Ingrese un numero del 1 al 50"));
if (numero <= 50 && numero > 0) {
  for (let contadorExterno = numero; contadorExterno >= 1; contadorExterno--) {
    for (
      let contadorInterno = contadorExterno;
      contadorInterno >= 1;
      contadorInterno--
    ) {
      document.write(contadorExterno);
    }
    document.write("<br>");
  }
} else alert("El numero ingresado no es valido");