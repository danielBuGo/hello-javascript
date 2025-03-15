/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
console.log('Ejercicio 1')
let sport = 'Paragliding'
let who = 'Daniel'
let when = 'Weekends'
let add = `${who}, loves ${sport} every${when}`
console.log('Concatena dos cadenas de texto: ' + add)
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
let mycity = 'Medellín'
let me = 'I'
console.log(`${me} Live in ${mycity}`)
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
let neighborhood = 'La mota'
let adress = 'Car 75da'
console.log('I live in Medellin, my neighborhood is ' + neighborhood + 'and my adress is ' + adress)

// 2. Muestra la longitud de una cadena de texto
console.log('Ejercicio 2')
console.log('Muestra la longitud de una cadena de texto: ' + add.length)
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
console.log(adress.length)
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
console.log(neighborhood.length)
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

// 3. Muestra el primer y último carácter de un string
console.log('Ejercicio 3')
let yourName = 'Lina'
let otherName = 'Daniel'
let otherMessage = `${yourName} y ${otherName}, aman mucho a su perrita`
console.log(otherMessage)
console.log(otherMessage.length)
console.log('El primer caracter es ' + otherMessage.slice(0,1))
console.log('El ultimo caracter es ' + otherMessage.slice(37,38))

// 4. Convierte a mayúsculas y minúsculas un string
console.log('Ejercicio 4')
console.log('Convierte el string en mayusculas: ' + otherMessage.toLocaleUpperCase())

// 5. Crea una cadena de texto en varias líneas
console.log('Ejercicio 5')
let warning = `Hola
puedo escribir Texto en  varias lineas` //Con las comillas invertidas podemos escribir texto en varias lineas
console.log('Cadena de texto en varias lineas: ' + warning)
console.log(warning.slice(7, 6))
console.log(warning.slice(9, 11))

// 6. Interpola el valor de una variable en un string
console.log('Ejercicio 6')
let myAge = 36
let message = `my age is ${myAge}`
console.log(`Variable interpolada: ${message}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log('Ejercicio 7')
console.log(`Reemplaza todos los espacios en blanco de un string por guiones: ${otherMessage.replace(/\s/g, '-')}`)

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log('Ejercicio 8')
console.log(`comproba si la cadena tiene una palabra en concreto: ${message.includes('age')} si esta incluida`)
console.log(message.includes('bella'))

// 9. Comprueba si dos strings son iguales
console.log('Ejercicio 9')
console.log(typeof message)
console.log(typeof otherMessage)
let sameType = ((typeof message) === (typeof otherMessage))
sameType ? console.log('those strings are same type') : console.log('Thos strings are different type')
 console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
 let year = 2025
 let mounth = 'february'
 let areTheSame = ((typeof year) === (typeof mounth))
 areTheSame ? console.log('they are the same type ') : console.log(`They are diferent type: ${year} is number and ${mounth} is string`)
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
let isRaining = 'Yes'
let city = 'Medellin'
let comparation = (typeof isRaining)=== (typeof city)
comparation ? console.log(`The value ${isRaining} is same type of ${city}`) : console.log('They are differents')
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
// 10. Comprueba si dos strings tienen la misma longitud
console.log('Ejercicio 10')
console.log(message.length)
console.log(otherMessage.length)
let areSame = message.length === otherMessage.length;
areSame ? console.log(` imaginate que es igual`): console.log('No tienen la misma longitud')
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
let boy = 'novio'
let girl = 'novia'
let length = boy.length === girl.length
length ? console.log(`${boy} has same length than ${girl}`) : console.log('the have different length')
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
let number1 = 1
let number2 = 2
let numbers = number1.length === number2.length
numbers ? console.log(`the ${number1} and ${number2} have same long`) : console.log('the numbers have not same length')
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
let word1 = 'Daniel'
let word2 = 'bella'
let twoWords = word1.length === word2.length
twoWords ? console.log(`both words have same length`) : console.log(`the words have different length`)