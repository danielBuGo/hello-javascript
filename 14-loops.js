/*
Clase 29 - Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=11575
*/

// Loops o bucles

// for
console.log('++++ Bucle For ++++++')
for (let i = 0; i < 5; i++){//La variable se inicialia dentro del ciclo for "let i = 0" y la condicion final tambien "i++"
    console.log(`Hello ${i}`)
}
console.log('__________________________________________________________________')
for(let j = 0; j <= 15; j ++){
    console.log(`Este es el mensaje número ${j}`)
}
console.log('_________________________________________________________________________')
//Recorrer una array con cilco For
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for(let i = 0; i < numbers.length;i++){//numbers.length es el tamaño del array
    console.log(`Este  es el listado de numbers: ${numbers[i]}`) //
}
console.log('_______________________________________________________________________________')

// while
console.log('++++++ Bucle While +++++++++')
let i = 0; //la variable se inicializa fuera del ciclo while
while (i < 5){
    console.log(`Solicité este mensaje ${i}`)
    i++//La condicion final va dentro del Bucle
};
console.log('____________________________________________________________-')
let myLoop = 0
while (myLoop < 6){
    console.log(`Mostrando la lista ${myLoop}`)
    myLoop++
}
console.log('________________________________________________________________________')
let caca = 0
while ( caca <=4){
    console.log(`caca número ${caca}`)
    caca++
}
console.log('_________________________________________________________________________-')

// Bucle infinito
// while(true) {
// }

// do while: El codigo se ejecuta minimo una vez antes de pasar a validar
console.log('Bucle Do While')
 caca = 0

do{
    console.log(`Hola ${caca}`)
    caca++

}while(caca < 6)
console.log('_________________________________________________________________________________________')
console.log('+++++++++ ciclo For of +++++++++')//para iterar map,set array

let myArray = [1, 5, 8, 9, 10]
let mySet = new Set(['muñeca', 'roberto', 'bella'])
let myMap = new Map([
    ['name', 'Daniel'],
    ['Last Name', 'Builes'],
    ['City', 'Medellín']
])
for (const value of myArray) {//El value es el nombre de la variable puedes ponerle el que sea
    console.log(value)
    
}
console.log('_________________________________________________________-')
for (const element of mySet) {
    console.log(element)
}
console.log('_______________________________________________________________')
for (const map of myMap) {
    console.log(map)
}
console.log('________________________________________________________________-')

console.log('++++Buenas practicas ++++++')
// break y continue
for (let i = 0; i < 10; i++){
    if(i == 4){
        continue
    }else if (i == 9){
        break
    }
     console.log(`hola ${i}`)   
        
}

