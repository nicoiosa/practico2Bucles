const nota = parseInt(prompt("Ingrese un nota del 1 al 10"));
if (nota >= 0)
  switch (nota) {
    case 0:
    case 1:
    case 2:
      alert("Muy deficiente");
      break;
    case 3:
    case 4:
      alert("Insuficiente");
      break;
    case 5:
    case 6:
      alert("Suficiente");
      break;
    case 7:
      alert("Bien");
      break;
    case 8:
    case 9:
      alert("Notable");
      break;
    case 10:
      alert("Sobresaliente");
      break;
    default:
      alert("Numero Erroneo");
  }
else alert("Introduce un numero valido");