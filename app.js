const prompt = require("prompt-sync")({ sigint: true });

function ordenarYCompararNumeros() {
  let numero1 = Number(prompt("Ingrese su primer numero: "));
  let numero2 = Number(prompt("Ingrese su segundo numero: "));
  let numero3 = Number(prompt("Ingrese su tercer numero: "));

  const listaNumeros = [numero1, numero2, numero3];
  const listaOrdenada = listaNumeros.sort((a, b) => a - b);

  console.log(
    `Numero menor: ${listaOrdenada[0]}\nNumero del medio: ${listaOrdenada[1]}\nNumero mayor: ${listaOrdenada[2]}`
  );

  console.log(`Lista de numero de menor a mayor ${listaOrdenada}`);

  console.log(`Lista de numero de mayor a menor ${listaOrdenada.reverse()}`);

  if (numero1 == numero2 && numero2 == numero3) {
    console.log("Son igualitos");
  } else {
    console.log("No son iwales");
  }
}

ordenarYCompararNumeros();
