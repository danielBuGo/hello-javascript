/*
Clase 26 - Sets 
Vídeo: https://youtu.be/1glVfFxj8a4?t=9952
*/

// Set

// Declaración
let mySet = new Set()
let yourSet = new Set()

// Inicialización
mySet = new Set(['delta', 'alpina', 'swift5'])
console.log(mySet)
console.log('___________________________________________________-')
yourSet = new Set([3, 345, 5567, 4,8,19,20,832774389,3])
console.log(yourSet.size)
console.log(yourSet)




// Métodos comunes

// add y delete
mySet.add('danielbuilesgomez@gmail.com')
mySet.add('sphera')
mySet.add('nyos')
mySet.add('zeno2')
console.log(mySet)

mySet.delete('sphera') //se borra el item con el nombre exacto
mySet.delete('delta') //se borra el item con el nombre exacto, si existe la consola muestra true, sino flase
console.log(mySet.delete('delta')) //se borra el item con el nombre exacto
console.log(mySet)
console.log('_______________________________________________________________________')
console.log('++++++Borrando y agregando elementos con el metodo "add" y "delete"++++++++++++')
yourSet.add(45)
yourSet.add(58)
yourSet.add(58)// set no deja repetir datos
yourSet.delete(45)// para borrar debe ponserse exacto el nombre del elemnto
yourSet.delete(832774389)
console.log(yourSet)
console.log('__________________________________________________________________________')
console.log('+++++++++Comprobando si el dato existe con el metodo "has')
console.log(yourSet.has(345))
console.log(yourSet.has(34))
console.log(yourSet.has(2))
console.log(yourSet.has(58))

console.log('-------------------------------------------------------------------------------------')

// has comprueba si el item se encuentra en mi lista set
console.log(mySet.has('nyos'))
console.log(mySet.has('alpina'))
console.log(mySet.has('sphera'))
console.log(mySet.has('delta'))
console.log(mySet.has('swift5'))

// size muestra la cantidad de items en mi set
console.log(mySet.size)
// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)
let otherSet = new Set (['toyota', 'hammer', 'renault', 'chevrolet', 'ferrari'])
console.log(otherSet)
console.log(otherSet.size)
otherSet.add('hero')
console.log(otherSet)
console.log(otherSet.has('hero'))
let otherArray = Array.from(otherSet)
console.log(otherArray)

console.log('_________________________________________________________________-')
console.log('+++++++Convirtiendo set en array++++++++++++')
let convertionArray = Array.from(yourSet)
console.log(convertionArray)


console.log('-----------------------------------------------')


// Convertir un array a set
console.log('+++++++++++Convirtiendo El array en Set')
let setAgain = new Set(convertionArray)
console.log(setAgain)
console.log('_________________________________________________________')
otherSet = new Set (otherArray)
console.log(otherSet)
mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados
//esta es la diferencia principal entre array y set

console.log('______________________________________________________________-')
console.log('++++++ Crear 5 arrays y pasarlas a set+++++++')
let colombianBrands = ['Haceb', 'Tres Cordilleras', 'Noel', 'Postobon', 'Colanta']
colombianBrands.push('Haceb')
colombianBrands.unshift('Haceb')
console.log(colombianBrands)
let soccerTeams = ['Atl Nacional', 'Medellín', 'America', 'Millonarios', 'Envigado']
console.log(soccerTeams)
let countriesVisited = ['United States', 'Panamá', 'Puerto Rico', 'Netherlands']
console.log(countriesVisited)
let stadiumsVisited = ['atanasio', 'El Campin', 'polideportivo Sur', 'Palogrande', 'Ditaires']
console.log(stadiumsVisited)
let airlinesVisited = ['Avianca', 'American Airlines', 'Click', 'Spirit', 'Copa Airlines']
console.log(airlinesVisited)
console.log('+++Convirtiendo a set+++++')
let colombianBrandsToSet = new Set(colombianBrands) //Al convertirlo a SET, solo aparece uno de los elementos repetidos
console.log(colombianBrandsToSet)
let soccerTeamsToSet = new Set(soccerTeams)
console.log(soccerTeamsToSet)
let countriesVisitedToSet = new Set (countriesVisited)
console.log(countriesVisitedToSet)
let stadiumsVisitedToSet = new Set(stadiumsVisited)
console.log(stadiumsVisitedToSet)
let airlinesVisitedToSet = new Set(airlinesVisited)
console.log(airlinesVisitedToSet)

console.log('++++++ Pasar los SEt nuevamente a Array')
let colombianBrandsToArray = Array.from(colombianBrandsToSet)
console.log(colombianBrandsToArray)
let soccerTeamsToArray = Array.from(soccerTeamsToSet)
console.log(soccerTeamsToArray)
let countriesVisitedToArray = Array.from(countriesVisitedToSet)
console.log(countriesVisitedToArray)
let stadiumsVisitedToArray = Array.from(stadiumsVisitedToSet)
let airlinesVisitedToArray = Array.from(airlinesVisitedToSet)
console.log(airlinesVisitedToArray)
