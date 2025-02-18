/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

console.log('Ejercicio numero 1')

let a = 5
let b = 5

let multiplicar = a * b
console.log('El resultado de la Multiplicacion es: ' + multiplicar)
let resta = a - b
console.log('El resultado de la resta es: ' + resta)
let suma = a + b 
console.log('El resultado de la suma es: ' + suma)
let division = a / b
console.log('El resultado de la division es: ' + division)
let elevar = a ** b
console.log('El resultado de la exponencial es: ' + elevar)
let modulo = a % b
console.log('El resultado del modulo es: ' + modulo)
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++')

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
console.log('Ejercicio numero 1')
let myOperation = 5
myOperation += 5
console.log(myOperation)
myOperation -= 4
console.log(myOperation)
myOperation *= 8
console.log(myOperation)
myOperation /= 5
console.log(myOperation)
myOperation **= 2
console.log(myOperation)
myOperation %= 5
console.log(myOperation)
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++')

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log('Punto numero 3')
console.log(8 > 3)
console.log(8 == 8)
console.log(5 >=4)
console.log(4 <= 78)
console.log(5 === b)
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++')

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log('Punto numero 4')
console.log(8 < 3)
console.log(8 == 10)
console.log(5 >=7)
console.log(4 <= 2)
console.log(5 === 'cinco')

// 5. Utiliza el operador lógico and
console.log('Punto numero 5')
console.log(89 == 89 && 4 < 9)
console.log(89 == 8 && 4 < 9)
console.log(89 == 8 && 4 > 9)
console.log(5 == a && 5 == b)
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++')

// 6. Utiliza el operador lógico or
console.log('Punto numero 6')
console.log(4 < 9 || a == 5)
console.log(89 == 8  || 11 > 4)
console.log(89 == 8  || a == 6)
console.log(5 == a  || 220 == 5)
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++')

// 7. Combina ambos operadores lógicos
console.log('Punto numero 7')
console.log(89 == 89 && 4 < 9 || a == 5)
console.log(89 == 8 && 4 < 9 || 11 > 4)
console.log(89 == 8 && 4 > 9 || a == 6)
console.log(5 == a && 5 == b || 220 == 5)
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++')

// 8. Añade alguna negación
console.log('Punto numero 8')
console.log(!(89 == 89 && 4 < 9 || a == 5))
console.log(89 == 8 && 4 < 9 || 11 > 4)
console.log(89 == 8 && 4 > 9 || a == 6)
console.log(!(5 == a && 5 == b || 220 == 5))
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++')

// 9. Utiliza el operador ternario
console.log('Punto numero 9')
let sunnyDay = true
sunnyDay ? console.log('Vamos pa fredonia') : console.log('No se puede volar')
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++')

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log('Punto numero 10')
let c = 8
let d = 9
console.log(( a * c) < 89 || 89 == 89 )