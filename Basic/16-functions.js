/*
Clase 31 - Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=12829
*/

// Funciones: 
// Simple
function myFunction (){
    console.log("Hi my  first function ")
}
myFunction()
for (let i = 1; i < 6; i++) {
    myFunction()
    
}

console.log("Funcion con parametros")
function withParams(name){
    console.log(`Hello Mr ${name}`)

}
withParams("Anderson")
console.log("______________________________________")
let twoTimes = 2
do {
    withParams("Anderson")
    twoTimes++
} while (twoTimes <= 3);

console.log("_____________________________________________")
console.log("Funciones anonimas")
const anonyFunction = function(lastName){
    console.log(`Hello Mr ${lastName}`)
}
let threeTimes = 1
while (threeTimes < 4) {
   anonyFunction("Builes")
    threeTimes++
    
}
console.log("__________________________________________________")

console.log("Arrow Functions")
const age = (age) => {
    console.log(`Daniel´s age is ${age} years old`)
}
age(36)
const dogName = (dogName) => {
    console.log(`My Dog´s name is ${dogName}`)
}
for(let i = 0;i < 6; i++){
    dogName("Bella")
}
const country = (country) => console.log(`My favorite country is ${country}`)

country("United States")

console.log("________________________________---")
console.log("Functions with params")
function add(a = 0, b = 0){
    console.log(a + b)
}
add(10, 20)
add() // Si no pongo parametros la funcion me arroja NaN
const product = (a = 0, b = 0) => console.log(a * b)
product(5,11)



// Por defecto
product()
product(5)
product(5,4)
product(8, 6)


console.log("__________________-")
console.log("Funcion con retorno")
function resta(a=0, b=0) {
    return a - b /** en ves de imprimirlo por consola
    se lo retorno al usuario para que lo vea **/
}
let result = resta(10,4)
console.log(result)
console.log("+++++++++++++++++++++++")
console.log("Funciones anidadas")

function externa(){
    console.log("Esta es la externa")
    function interna(){   
        console.log("Esta es la interna")     
    }
    interna() //Se debe ejecutar la interna dentro del scope de la externa
}
externa()
console.log("++++++++++++++++++++++")
console.log("Funciones de orden superior")
function bigFunction(func, param){
    country(param)
}
bigFunction(country("Italy"))
console.log("+++++++++++++++++++++++")
console.log("For each")
let hisArray = [3, 6, 9, 12]
hisArray.forEach((i) => console.log(i) )
console.log("+++ For Each con Map+++")
let myMap = new Map([
    ["name", "Daniel"],
    ["Las Name", "Builes"]

]
);
myMap.forEach((i) => console.log(i))
console.log("+++ For Each con Set +++")
let mySet = new Set ([5, 10, 15, 20])
mySet.forEach((value) => console.log(value))
