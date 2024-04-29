 // 0.- Crea una función que salude al usuario por su nombre.  Puedes utilizar la consola o un cuadro de dialogo. Ej.: Hola Angel !!!

let teacherName = "angel";

function greetTeacher (teacher){
    alert (`Hola ${teacher}`)
}

greetTeacher(teacherName); 

/** 1.- Crea una función que tenga dos argumentos: num1, num2, y que devuelva como resultado la suma de ambos números. Se asume que se usarán solo números válidos, no letras o símbolos, es decir, no hace falta comprobar el dato ingresado.
Ej.: Llamo a la función como sumar(3,5) deberá devolver 8. */


let number1 = parseInt(prompt("Ingresa el primer numero para sumar"));

let number2 = parseInt(prompt("Ingresa el segundo numero para sumar"));


function addition (number1, number2){
    
    if (isNaN(number1) || isNaN(number2)) {
        return "Uno de los datos no es un número, ingresa dos numeros validos";
    }
    return number1 + number2;
}


//La funcion addition la pongo en esta variable para
//cuando la imprima por el alert sea más más de incluirla en el String.
let additionNumbers = addition(number1,number2);


alert(`La suma de ${number1} y ${number2} es:  ${additionNumbers}`);

/** Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. Si quieres hacer la validación del dato, sería genial lograrlo. Puedes hacerlo aplicando condicionales, sin embargo, tienes las herramientas para hacerlo sin usar las condicionales.
Ej.: al llamarla como esPar(5) me dará false, mientras que con esPar(6) me dará true. */

let userNum = parseInt(prompt("Ingresa un numero para saber si es PAR"));


function esPar(userNum) {
return (userNum% 2 === 0);
}

console.log(esPar(userNum));

/* 3.- Crea tres variables: lado1, lado2, lado3. Dale 3 valores numéricos. A continuación, crea una función y sus condicionales para que se muestre por consola si el triángulo es equilátero, isósceles o escaleno. */
/*
Conociendo la teoría
Triángulo equilátero: Las medidas de sus tres lados son iguales. Triángulo isósceles: Las medidas de dos lados son iguales, es decir, dos lados son congruentes. Triángulo escaleno: Todas las medidas de sus lados son diferentes, es decir, no tiene lados congruentes
*/

let sideA = parseInt(prompt("Ingresa el primer valor de tu triangulo"));
let sideB = parseInt(prompt("Ingresa el segundo valor de tu triangulo"));
let sideC = parseInt(prompt("Ingresa el tercer valor de tu triangulo"));

function typeTriangle (sideA, sideB, sideC) {
    if (sideA === sideB && sideA === sideC){
        return "Es un triangulo Equilatero"
    }
    if (sideA === sideB ||sideA=== sideC || sideB=== sideC){
        return "Es un triangulo Isosceles"
    }else{
        return " Es un triangulo escaleno"
    }       
}

console.log(typeTriangle(sideA,sideB,sideC));

/** 4.- Subimos el nivel?... crea un programa que simule una calculadora con funciones para realizar operaciones matemáticas básicas. Pide al usuario dos números y el operador que utilizaras( "+" , "-" , "*" , "/" ).
 */

let numCal1 = parseFloat(prompt("Ingrese el primer número:"));
let numCal2 = parseFloat(prompt("Ingrese el segundo número:"));
let operator = prompt("Ingrese el operador (+, -, *, /):");



// Funcion sumar
function additionCal(numCal1, numCal2) {
    return numCal1 + numCal2;
  }
  
  // Función restar
  function substractionCal(numCal1, numCal2) {
    return numCal1 - numCal2;
  }
  
  // Función multiplicar
  function multiplicationCal(numCal1, numCal2) {
    return numCal1 * numCal2;
  }
  
  // Función dividir
  function divisionCal(numCal1, numCal2) {
    if (numCal2 === 0) {
        return "No se puede dividir entre cero";
    }
    return numCal1 / numCal2;
  }
  
  // Función para realizar la operación matemática seleccionada
  function calculateResult(numCal1, numCal2, operator) {
    if (operator === "+") {
        return additionCal(numCal1, numCal2);
    } else if (operator === "-") {
        return substractionCal(numCal1, numCal2);
    } else if (operator === "*") {
        return multiplicationCal(numCal1, numCal2);
    } else if (operator === "/") {
        return divisionCal(numCal1, numCal2);
    } else {
        return "Error: Operador no válido.";
    }
  }


  let resultCalculator = calculateResult(numCal1, numCal2, operator);
  
  // Mostrar el resultado
  console.log(`El resultado de ${numCal1} ${operator} ${numCal2} es: ${resultCalculator}`);

  /** 5.-  And last but not least:


The Body Mass Index (BMI) is a way to estimate whether a person has a healthy weight for their height. It is calculated by dividing a person's weight (in kilograms) by the square of their height (in meters).

Your task is to write a function calculateBMI(weight, height) that takes two arguments: weight (in kilograms) and height (in meters), and returns the calculated BMI.

In addition, the function should return a string that interprets the BMI according to the following table:
Less than 18.5: 'Underweight'
18.5 - 24.9: 'Normal'
25 - 29.9: 'Overweight'
30 or more: 'Obesity'


For example, calculateBMI(70, 1.75) should return 'Normal'.

Remember to round the BMI to two decimal places. */

let userWeight = parseFloat(prompt(" Introduce tu peso en Kilogramos"))

let userHeight = parseFloat(prompt(" Introduce tu altura en metros"))


function calculateBmI(userWeight,userHeight) { 
    return userWeight/userHeight**2;
    
}



function tableBmI(userWeight,userHeight) {
    
    let resultBMIcalculated = calculateBmI(userWeight,userHeight);
    resultBMIcalculated = resultBMIcalculated.toFixed(2);

    console.log(resultBMIcalculated);

    if(resultBMIcalculated <18.5){
        return "Underweight";
    }else if (resultBMIcalculated >=18.5 && resultBMIcalculated<= 24.9){
        return "Normal";
    }else if(resultBMIcalculated >=25 && resultBMIcalculated <= 29.9){
        return "Overweight";
    }else if (resultBMIcalculated>=30){
        return "Obesity";
    }else{
        return "Ingresa un valor valido";
    }

}

console.log(tableBmI(userWeight,userHeight));
