/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
console.log('++++++ 1 Crea un array que almacene cinco animales +++++ ')
let myAnimals = ['Lion', 'Tiger', 'Horse', 'Cow', 'Seal']
console.log(myAnimals)
console.log('______________________________________________________________')

// 2. Añade dos más. Uno al principio y otro al final
console.log('++++++ 2. Añade dos más. Uno al principio y otro al final +++++ ')
myAnimals.unshift('Bear')
myAnimals.push('Eagle')
console.log(myAnimals)
console.log('__________________________________________________________________________')
// 3. Elimina el que se encuentra en tercera posición
console.log('3. Elimina el que se encuentra en tercera posición')
myAnimals.splice(2,3)
console.log(myAnimals)
console.log('______________________________________________________________________________________')

// 4. Crea un set que almacene cinco libros
console.log('4. Crea un set que almacene cinco libros')
let books = new Set(['Lord of the rings', 'Harry Potter', 'Jurassic Park', 'The witcher', 'The odisey'])
console.log(books)
console.log('______________________________________________________________________________-')

// 5. Añade dos más. Uno de ellos repetido
console.log('5. Añade dos mas. Uno de ellos Repetido')
books.add('Narnia cronicles')
books.add('The odisey')
console.log(books)
console.log('__________________________________________________')

// 6. Elimina uno concreto a tu elección
console.log('6. Elimina uno en concreto de tu eleccion')
books.delete('Lord of the rings')
console.log(books)
console.log('___________________________________________________________________')

// 7. Crea un mapa que asocie el número del mes a su nombre
console.log('7. crea un mapa que asocie el numero del mes a su nombre')
let mounth = new Map([
    [1, 'January'],
    [2, 'February'],
    [3, 'March'],
    [4, 'April'],
    [5, 'May'],
    [6, 'Jane'],
    [7, 'July'],
    [8, 'August'],
    [9, 'September'],
    [10,'October'],
    [11, 'November'],
    [12, 'December']

])
console.log(mounth)
console.log('________________________________________________________________________-')

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log('8. Comprueebe si el mes 5 existe en el mapa e imprima su valor')
console.log(`Is the mount 5 in the list?: ${mounth.has(5)}`)
console.log(`What is the mounth 5?: ${mounth.get(5)}`)


// 9. Añade al mapa una clave con un array que almacene los meses de verano
console.log('9. Añade al mapa una clave con un array que almacene los meses de verano')
mounth.set('summer', ['july', 'august', 'september'])
console.log(mounth)
console.log('_________________________________________________________________________________________________')

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
console.log('10. Crea un array, tranformalo en set y almacenalo en un Map')
let homeWork = [];
homeWork = [5, 6, 8];
console.log(homeWork);
let newHomeWork = new Set(homeWork)
console.log(newHomeWork)
let roomMap = new Map([
    ['numbers', newHomeWork]
])
console.log(roomMap)
console.log('______________________________________')
//Array
let linasArray = []
linasArray = ['mariana', 'manuela', 'bella']
console.log(linasArray)
//Set
let newLinasSet = new Set(linasArray)
console.log(newLinasSet)
//Guardar en Map
let newLinasMap = new Map([
    ['Family Members', newLinasSet]
])
console.log(newLinasMap)
console.log('________________________________________________-')
//Array
let myFamily = ['Luz', 'Nico', 'Andrea', 'bella']
console.log(myFamily)
console.log('__________________________________________________')
// Set
let myFamilySet = new Set(myFamily)
console.log(myFamilySet)
console.log('________________________________________________________')
//Map
let myFamilyMap = new Map([
    ['My family members', myFamilySet]
])
console.log(myFamilyMap)

