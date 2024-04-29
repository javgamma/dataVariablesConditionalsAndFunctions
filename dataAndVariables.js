/*Ejercicio 1: Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un código que, dado el número de comensales, calcule las cantidades de ingredientes necesarios y muestre por consola, un mensaje que indique el numero de comensales, y la cantidad de cada uno de los ingredientes.
Ej: 5 comensales,
Se necesitará:
1 kg de papas
5 huevos
300 gr de cebolla.*/

/* 1 kilo de patatas, 5 huevos y 300 gr de cebolla (para hacer una tortilla de un kilo)
Si queremos que esta formula nos de las cantidades para una persona la dividimos entre 5 y tenemos las cantidades individuales*/
// dado el numero de comensales (PROMT)

let diners = prompt("Introduce el número de comensales y te digo lo que necesitas para hacer una tortilla de patatas");

//Entiendo que 

let patatoes =(diners*200);
let onion = (diners * 60);
let eggs = diners * 1;


alert(`Para hacer una tortilla de patatas para ${diners} comensales es necesario:  ${onion} gr de cebolla,${eggs} huevos y ${patatoes} gr de patatas `);

/* 2.- Dado un número por el usuario, devuelve por consola "true" si es un número par y "false" si es un número impar. No usar condicionales!!! aunque, puedes usar operadores de comparación.
Ej.: numero: 50
¿Es par? : true
  */



let userNumber= parseInt(prompt( "Ingresa un numero para saber si es par o impar"));

//En este caso evaluamos solo si es par, en caso de serlo arrojará true y de no serlo arrojará false

console.log("¿Es par?: " + (userNumber%2===0))


/* 3.- En este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos. ¿Crees que es necesario recordar que una hora son 60 minutos y cada minuto son 60 segundos? ¿Por dónde mostraras el resultado?
Ej.: horas : 2
minutos 30
Resultado 2*60*60 + 30*60 = 9000 segundos. */

let userHours = prompt("Ingresa la cantidad de horas que quieres convertir en segundos. RECUERDA: 1 hora son 60 minutos");

//la cantidad de horas que nos proporciona el usuario la transformamos en minutos

let userHourInMinutes = (userHours*60);

// La cantidad de minutos los transformamos en segundos

let userHourInSeconds = userHourInMinutes*60;

// Ahora volvemos a solicitar minutos al usuario

let userMinutes = prompt("Ingresa la cantidad de minutos que quieres convertir en segundos. RECUERDA: 1 minuto son 60 segundos")

userMinutesinSeconds=userMinutes*60

let userNumberOfSeconds = userHourInSeconds+userMinutesinSeconds;

// Se muestra el resultado por una alerta

alert(`Has introducido: ${userHours} horas y  ${userMinutes} minutos lo que equivalen a:  ${userNumberOfSeconds} Segundos`);



/* 4.-  Muestra en un aviso (alert), cuánto debe pagar un usuario por un producto con IVA(21%). ¿Tienes alguna manera de preguntarle el precio del producto al usuario?
 */


let userProductPrice = parseInt(prompt("Introduce el precio de tu producto para saber cual es el importe total que debes pagar con IVA del 21%"));



let totalUserPrice = userProductPrice*1.21;

alert(`El total a pagar por tu producto es: ${totalUserPrice}€ `)



