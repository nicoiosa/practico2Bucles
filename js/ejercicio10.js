const filas = parseInt(prompt("Ingrese un numero de filas"));
const columnas = parseInt(prompt("Ingrese un numero de columnas"));
let total = filas * columnas;
document.write("<table><tbody>");
for (let iFilas = 1; iFilas <= filas; iFilas++) {
  document.write("<tr>");
  for (let iCol = 1; iCol <= columnas; iCol++) {
    document.write(`<td>${total}</td>`);
    total--;
  }
  document.write("</tr>");
}
document.write("</tbody></table>");