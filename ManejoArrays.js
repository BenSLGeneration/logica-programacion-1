let frutas = ['manzana', 'naranja', 'pera'];
let numbers = [60, 20, 50, 10]

//push() agrega elemento al final
frutas.push('uva');
console.log(frutas);
// Caso de la vida real: Añadir un nuevo producto a un carrito de compras.


//unshift() agrega elemento al principio
frutas.unshift('banana')
console.log(frutas);
// Caso de la vida real: Colocar un nuevo ítem al principio de una lista de tareas.


//.pop() elimina el último elemento del array
frutas.pop();
console.log(frutas);
// Caso de la vida real: Eliminar el último artículo de una lista de compras después de adquirirlo.


//.shift() elimina el primer elemento del array
frutas.shift();
console.log(frutas);
// Caso de la vida real: Eliminar el primer elemento de una fila de espera cuando se ha atendido.


//.splice() elimina, agrega o reemplaza elementos en un índice específico.
// Aquí, elimina 1 elemento en el índice 1. naranja
frutas.splice(1, 1);
console.log(frutas);
// Caso de la vida real: Eliminar un producto que ya no está disponible en una lista de inventario.

// Aquí, agrega 2 elementos en el índice 1. naranja y uva
frutas.splice(2, 1, 'naranja', 'uva');
console.log(frutas);
// Caso de la vida real: Actualizar un producto en el inventario con una nueva variedad o nombre.


//forEach() recorrer array
frutas.forEach((fruta, index) => {
    console.log(`Fruta n° ${index + 1}: ${fruta}`);
});
// Caso de la vida real: Recorrer una lista de compras para asegurarse de que todos los productos estén incluidos.


//map() crea un nuevo array aplicando una función a cada elemento.
let frutasEnMasyusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasEnMasyusculas);
// Caso de la vida real: Convertir todos los nombres de productos en un listado de inventario a mayúsculas para uniformidad.

const newArr = numbers.map(Math.sqrt);
console.log(newArr);
// Caso de la vida real: Calcular las raíces cuadradas de una lista de números, como para obtener las dimensiones de una lista de materiales.


//.filter() crea un nuevo array con elementos que cumplen una condición.
let frutasFiltradas = frutas.filter(fruta => fruta.length > 5);
console.log(frutasFiltradas);
// Caso de la vida real: Filtrar productos que superen un precio mínimo de venta.


//.reduce() reduce los elementos de una lista a un único valor
//Calcula el total de letras de las frutas
let totalLetras = frutas.reduce((acumulado, fruta) => acumulado + fruta.length, 0);
console.log(totalLetras);
// Caso de la vida real: Calcular el total de caracteres de una lista de descripciones de productos.


//Calcula la multiplicación total de los números en la lista
let sumaTotal = numbers.reduce((acumulado, numero) => acumulado * numero);
console.log(sumaTotal);
// Caso de la vida real: Calcular el total de una multiplicación de precios, como si se aplican descuentos por cantidad.


//.concat() junta 2 arrays en uno solo
let nuevasFrutas = ['kiwi', 'banana', 'nispero'];
let todasLasFrutas = frutas.concat(nuevasFrutas);
console.log(todasLasFrutas); 
// Caso de la vida real: Combinar listas de productos de diferentes categorías en un solo inventario.


//.indexOf() encuentra la posición de un elemento. Devuelve su índice.
let indicePera = todasLasFrutas.indexOf('pera');
console.log(indicePera);
// Caso de la vida real: Verificar la posición de un producto en un listado de inventario.


//.slice() copia o extrae una parte del array sin modificar el original
let frutasParte = todasLasFrutas.slice(1, 4);
console.log(frutasParte);
// Caso de la vida real: Extraer una parte específica de un listado de productos para mostrar solo una categoría.


//.find() devuelve el primer elemento que cumple una condición.
let primeraFrutaConN = todasLasFrutas.find(fruta => fruta.startsWith("n"));
console.log(primeraFrutaConN);
// Caso de la vida real: Encontrar el primer cliente que ha realizado una compra en una tienda online.


//findIndex() devuelve el índice del primer elemento que cumple con una condición.
let indicePrimeraFrutaConN = todasLasFrutas.findIndex(fruta => fruta.startsWith("n"));
console.log(indicePrimeraFrutaConN);
// Caso de la vida real: Localizar la posición del primer producto que cumpla con ciertas características (por ejemplo, ser orgánico).


//.some() verifica si algún elemento cumple una condición
let fruta6Letras = todasLasFrutas.some(fruta => fruta.length > 6);
console.log(fruta6Letras);
// Caso de la vida real: Verificar si alguno de los productos en el carrito de compras tiene un precio mayor a un límite específico.


//.every() verifica si todos los elementos cumplen una condición
let verificaLetras = todasLasFrutas.every(frutas => frutas.length >= 3);
console.log(verificaLetras);
// Caso de la vida real: Verificar si todos los productos de una categoría tienen un precio mayor a 3 dólares.

//verificaPares = numbers.every(numero => numero % 2 === 0);
let verificaPares = numbers.every(numero => numero % 2 === 0);
console.log(verificaPares);
// Caso de la vida real: Comprobar si todos los números de una lista de edades son pares, para analizar grupos en un evento.

//.includes() verifica si el array contiene algún elemento solicitado
let incluyeManzana = todasLasFrutas.includes('manzana');
console.log(incluyeManzana);
// Caso de la vida real: Verificar si un producto está disponible en el inventario.

let incluyeMango = todasLasFrutas.includes('mango');
console.log(incluyeMango);
// Caso de la vida real: Verificar si un usuario tiene un producto en su lista de deseos.


//.join() une los elementos del array en una cadena de texto, separándolos por un delimitador.
let cadenaDeFrutas = todasLasFrutas.join(', ');
console.log(cadenaDeFrutas);
// Caso de la vida real: Mostrar una lista de productos en una sola línea en un ticket de compra.


//.flat() convierte un array multidimensional en uno de una sola dimensión
let frutasMultidimensionales = [['manzana', 'pera'], ['naranja', 'uva']];
let frutasPlanas = frutasMultidimensionales.flat();
console.log(frutasPlanas);
// Caso de la vida real: Aplanar una lista de pedidos de diferentes zonas de entrega para tener un solo listado.


//.sort() ordena los elementos de una lista
let frutasOrdenadas = todasLasFrutas.sort();
console.log(frutasOrdenadas);
// Caso de la vida real: Ordenar una lista de productos por nombre de forma alfabética.

let numerosOrdenados = numbers.sort();
console.log(numerosOrdenados);
// Caso de la vida real: Ordenar una lista de precios para encontrar el producto más barato.


//.reverse() invierte el orden de los elementos de una lista
let frutasInvertidas = todasLasFrutas.reverse();
console.log(frutasInvertidas);
// Caso de la vida real: Invertir el orden de los productos para hacer una revisión final en la parte posterior de la lista.

let numerosInvertidos = numbers.reverse();
console.log(numerosInvertidos);
// Caso de la vida real: Invertir la lista de tareas de forma que las tareas más recientes sean las primeras en mostrarse.
