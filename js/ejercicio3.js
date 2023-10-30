let textoCompleto = "";
do {
  const texto = prompt("Ingrese una cadena de texto");
  if (textoCompleto.length === 0) {
    textoCompleto = texto;
  } else textoCompleto += " - " + texto;
} while (confirm("Desea continuar") == true);
if (textoCompleto.length > 0) document.write(`<p>${textoCompleto}</p>`);
else alert("No ingresaste nada");