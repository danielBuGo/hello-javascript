/*
Clase 25 - Arrays
Vídeo: https://youtu.be/1glVfFxj8a4?t=8741
*/

// Array


// Declaración
let myArray = []; //forma comun de declarar un array
let myArray2 = new Array();// antigua forma de declarar una Array
let yourArray = []


// Inicialización
myArray = [1, 2, 3, 4]
yourArray = ['attack on titan']
console.log(yourArray)
console.log(myArray)
myArray2 = new Array(5)
console.log(myArray2)

myArray = ['Daniel', 'Lina', 36, 'bella', true]
console.log(myArray)
myArray2 = new Array('Manuela', 'Mariana', 18, false)
console.log(myArray2)

myArray2[0] = 'paragliding'
myArray2[1] = 'futbol'
myArray2[2] = 'motocross'
console.log(myArray2)

// Métodos comunes
myArray = []
// push y pop
myArray.push('ozone') //push te permite agragar elemnto al array
myArray.push('swing')
myArray.push('advance')
myArray.push('skyparagliders')
myArray.push('niviuk')
console.log(myArray)
myArray.pop()
myArray.pop()
myArray.pop()
console.log(myArray)//te borra el ultimo elemnto del array

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++')

console.log(yourArray.push('death Note'))
console.log(yourArray.push('Demond slayer'))
yourArray.unshift('solo leveling', 'the hero of the shield', 'full metal alchemist', 'Detective conan')//añade al inicio de la lista
console.log(yourArray.length)
console.log(yourArray)
console.log('-------------------------------------------------')
console.log(yourArray.shift())//  borra le primero de la lista
console.log(yourArray.pop()) // borra el ultimo de la lista
console.log(yourArray)

console.log('___________________________________________________________')
let creatingArray = yourArray.slice(1,6)
console.log(creatingArray)

// shift y unshift
console.log(myArray.shift()) //te borre el primer elemnto del array
myArray.unshift('swing', 'advance', 'skyparagliders', 'niviuk') //añade elementos al inicio de la lista
console.log(myArray)
// length
console.log(myArray.length)
console.log(yourArray.length)


// clear
//myArray = []

// slice

let newArray = myArray.slice(1, 2)// cree un array con el elemnto 1 de mi array (no toma el segundo valor)
myArray.push(37);
console.log(newArray);
// splice
myArray.splice(1, 3) //elimino los elementos asignados
console.log(myArray)

let otherArray = [3, 5, 7, 8, 9, 20]
console.log(otherArray)
otherArray.splice(3, 4, 5) // añade el ultimo argumento al array
otherArray.splice(3,4)
console.log(otherArray)


