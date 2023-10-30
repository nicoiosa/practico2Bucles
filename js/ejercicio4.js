let suma = 0;
do {
  const numero = parseInt(prompt("Ingrese un numero"));
  if (numero >= 0) {
    if (suma === 0) {
      suma = numero;
    } else suma = suma + numero;
  } else alert("No ingresaste un numero valido");
} while (confirm("Desea continuar") == true);
alert(`El resultado total es de: ${suma}`);