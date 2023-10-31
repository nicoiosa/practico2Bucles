let edad1;
let edad2;
let edad3;
let nombre1 = "";
let nombre2 = "";
let nombre3 = "";
let longitudMinima = 2;
for (contador = 1; contador <= 3; contador++) {
  let edad = parseInt(prompt("Ingrese su edad"));
  if (edad > 0) {
    let nombre = prompt("Ingrese su nombre");
    if (nombre.length >= longitudMinima) {
      if (contador == 1) {
        edad1 = edad;
        nombre1 = nombre;
      }
      if (contador == 2) {
        edad2 = edad;
        nombre2 = nombre;
      }
      if (contador == 3) {
        edad3 = edad;
        nombre3 = nombre;
      }
    } else {
      alert("No ingresaste un nombre valido");
      contador--;
    }
  } else {
    alert("No ingresaste una edad valida");
    contador--;
  }
}
let edadMayor = Math.max(edad1, edad2, edad3);
let nombreMayor;
if (edadMayor == edad1) nombreMayor = nombre1;
else if (edadMayor == edad2) nombreMayor = nombre2;
else nombreMayor = nombre3;
alert(`La persona mayor es ${nombreMayor}`);