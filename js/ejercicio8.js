let numero = parseInt(prompt("Ingrese un numero del 1 al 50"));
if (numero <= 50 && numero > 0) {
  for (let contadorExterno = 1; contadorExterno <= numero; contadorExterno++) {
    for (
      let contadorInterno = 1;
      contadorInterno <= contadorExterno;
      contadorInterno++
    ) {
      document.write(contadorInterno);
    }
    document.write("<br>");
  }
} else alert("El numero ingresado no es valido");