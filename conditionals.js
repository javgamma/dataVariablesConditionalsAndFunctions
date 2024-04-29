/* 1.- En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. Este ejercicio debe tomar la longitud del tramo en kilómetros y el tiempo empleado en horas enteras, si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba y en caso contrario es descalificado.
Ej. 75 km en 2 horas ó 120 km en 3 horas. (siempre, números enteros). Si recorre 100 km en 4 horas, ha ido a una velocidad de 100/4 que son 25km/h. Estaría descalificado.
*/


let distanceInKm = parseInt(prompt(" Ingresa el tramo de pista en km que quieres calcular "));

let hoursInSection = parseInt(prompt("Ahora ingresa la velocidad que iba el vehiculo en el tramo de pista "));

let kmPerHour = distanceInKm / hoursInSection;

if (kmPerHour >= 40 && kmPerHour <= 70 ){
    alert("Has pasado la prueba del Rally 🏎🏁")
} else {
    alert( " Estas descalificado 🏴‍☠️")
}



/* 2.- Crea un programa que pida la nota de un estudiante en los tres trimestres del 
curso y calcule la nota promedio (Solicita tres números en tres inputs distintos). 
El resultado que dará será "SUSPENDIDO" si la media es menor de 5, 
"APROBADO" si está entre 5 y 7 y "NOTABLE" por encima de 7.
/ */

let studentGradeFirstQuarter= parseFloat(prompt(" Introduce la nota de tu primer trimestre para calcular el promedio"));

let studentGradeSecondQuarter= parseFloat(prompt(" Introduce la nota de tu segundo trimestre para calcular el promedio"));

let studentGradeThirdQuarter= parseFloat(prompt(" Introduce la nota de tu tercer trimestre para calcular el promedio"));

let averageStudentGrade = (studentGradeFirstQuarter+studentGradeSecondQuarter+studentGradeThirdQuarter)/3

//utilizaremos toFixed para que solo nos de dos decimales
averageStudentGrade = averageStudentGrade.toFixed(2);

if (averageStudentGrade < 5){
    console.log(`La nota media es de ${averageStudentGrade} por lo cual estas SUSPENDIDO`)
} else if (averageStudentGrade >= 5 && averageStudentGrade <= 7){
    console.log(`La nota media es de ${averageStudentGrade} por lo cual estas APROBADO`)
} else if ( averageStudentGrade >7){
    console.log(`La nota media es de ${averageStudentGrade} por lo cual tienes un NOTABLE`)
}

let clientRequest = prompt("¿Qué desea pedir? (vino, cerveza, refresco, agua)");

let barZone = clientRequest === "vino" || clientRequest === "cerveza" ? "barra de bebidas" : "barra de comidas";

alert(`Usted pidió ${clientRequest}, debe dirijirse a la ${barZone}.`);

let clientRequest1 = prompt("¿Qué desea pedir? (vino, cerveza, refresco, agua)");

if (clientRequest1 ==="vino" || clientRequest1 ==="cerveza"){
    alert (`Ha pedido ${clientRequest1} por lo que debe ir a la barra de bebidas`)
} else if (clientRequest1 ==="agua" || clientRequest1 ==="refresco"){
    alert(`usted pidió ${clientRequest1} por lo que debe ir a la barra de comidas`)
} else {
    alert("En  este bar solo ofrecemos: vino, cerveza, refresco, agua")
}

/**4.- El usuario tecleará dos números. Debe devolver por consola, la diferencia entre el mayor y el menor.
Ej.: Si el usuario ingresa 5 y 8, el programa devolverá 3 .... (8-5=3). Utiliza TERNARIO, es decir, la forma cond ? true : false */


let userFirstNumber= parseInt(prompt("Ingresa tu primer numero"));
let userSecondNumber = parseInt(prompt(" Ingresa el segundo numero"));

 let largerNumber = userFirstNumber > userSecondNumber ? userFirstNumber: userSecondNumber;
 
 let smallerNumber = userFirstNumber<userSecondNumber ? userFirstNumber : userSecondNumber;

 let subtracting = largerNumber - smallerNumber;



alert(`${largerNumber} es mayor que ${smallerNumber} por lo que la diferencia es de: ${subtracting}`); 

/**El usuario debe ingresar dos datos: un número y su cuadrado. Si es correcto el programa enviará un
 *  mensaje de acierto en caso contrario dirá que se produjo un error. 
 * Utiliza TERNARIO, es decir, la forma cond ? true : false
Ej.: Si teclea 3 y 9 el resultado es Correcto.
 Si teclea 3 y 8, el resultado será Error. Se creativo con los mensajes ; ) */

let userNumberToSquare = parseInt(prompt("Introduce un numero") )
let userSquared = parseInt(prompt("Introduce el que consideres sea su cuadrado") );

let numberRealSquare = ((userNumberToSquare)**2);


userSquared === numberRealSquare ? 
alert("Genial lo has hecho muy bien") :
 alert(" Ouch, vuelve a intentarlo");