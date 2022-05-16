let número1: number = Number(prompt("Ingrese el primer número"));
let número2: number = Number(prompt("Ingrese el segundo número"));
let opciónMenú: number = Number(
  prompt(
    "Ingrese 1 para sumar, ingrese 2 para restar ó ingrese otro comando para terminar"
  )
);

let resultado: number = calcularResultado(número1, número2, opciónMenú);
console.log("El resultado es: " + resultado);

function calcularResultado(
  número1: number,
  número2: number,
  opciónMenú: number
): number {
  if (opciónMenú === 1) {
    resultado = número1 + número2;
  } else if (opciónMenú === 2) {
    resultado = número1 - número2;
  }
  return resultado;
}
