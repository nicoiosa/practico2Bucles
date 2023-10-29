const edad = parseInt(prompt("Ingrese su edad"));
while (true) {
  if (edad > 0 && edad < 118) {
    if (edad >= 18) alert("Ya tienes edad para conducir");
    else if (18 - edad > 1)
      alert("te faltan " + (18 - edad) + " años para poder conducir");
    else if (18 - edad == 1) alert("te falta 1 año para poder conducir");
  } else alert("No ingresaste un numero valido");
  break;
}git