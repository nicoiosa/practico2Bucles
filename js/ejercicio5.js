do {
  const dni = parseInt(prompt("Ingrse su DNI"));
  if (dni>= 0 && dni < 99999999) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE"
    const resto = dni % 23
    const resultado = letras.charAt(resto)
    alert(`Su letras es la ${resultado}`)
  } else alert("No ingresaste un DNI valido");
} while (confirm("Desea continuar") == true);