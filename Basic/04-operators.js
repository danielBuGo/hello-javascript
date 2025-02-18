/*
Clase 19 - Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=4937
*/

// Operadores Aritméticos

let a = 8
let b = 5

console.log(a + b); //suma
console.log(a - b); // resta
console.log(a * b); // Multiplicacion
console.log(a / b); // division
console.log(a % b); // Mudulo
console.log(a ** b); // Exponensial
a++  //incremento
console.log(a)
b-- //Decremento
console.log(b)

// Operdadores de asignacion
console.log('Operadores de Asignacion')
let myVariable = 2 // El signo igual es el operador de asignacion
myVariable += 2 // Es lo mismo que myVariable = myVariable + 2
console.log(myVariable)
myVariable -= 3
console.log(myVariable)
myVariable *= 5
console.log(myVariable)
myVariable /= 2
console.log(myVariable)
myVariable %= 6
console.log(myVariable)
myVariable **= 4
console.log(myVariable)

//Operadoeres de comparacion
console.log('Operadores de comparacion')
console.log (a > b)
console.log (a < b)
console.log (a >= b)
console.log (a <= b)
console.log (a == b)
console.log (a == 9)
console.log (a == a) //igualdad por valor
console.log (a === 9) // igualdad por identidad
console.log (a === '9') // igualdad por identidad
console.log (a != b) // Desigualdad
console.log (a !== b) // Desigualdad
console.log (1 == true) // Desigualdad
console.log (0 == true) // Desigualdad

console.log(a)

//Truly values
//Todos los numeros positivos y negativos menos el cero
//Todas las cadenas de texto menos las vacias
// El booleano true

//Falsy values
//El cero
//Null
//undefined
//NaN
//0n
//El boolean false
//cadena de texto vacias

//Operadores Logicos
console.log('Operadores logicos')

//Tenemos tres: And (&&) 
console.log('operador And')
console.log(5 > 10 && 5 < 20); //false
console.log(5 < 10 && 5 < 20); // True. ambas condiciones deben ser verdaderas

// or ||
console.log('operador OR')
console.log(2 < 4 || 5 < 10) // una de las dos condiciones debe ser verdadera para ser true
console.log(2 < 4 && 10 < 20 || 5 < 10) // una de las dos condiciones debe ser verdadera para ser true

//not (!)

console.log('Operador NOT (!)')
console.log(!(2 < 4 || 5 < 10)) //NOt invierte el resultado del booleano, si era false, pasa a ser true
console.log(!(2 < 4 && 10 < 20 || 5 < 10))

// Operadores ternarios 
const isRaining = false
isRaining ? console.log("Esta lloviendo bebè") : console.log("Hoy podemos volar") 