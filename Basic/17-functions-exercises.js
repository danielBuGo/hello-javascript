/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

console.log("Repaso de lo anterior Map, Set, Array")
//Map
let theMap = new Map ([
    ["dog", true],
    ["Male", false],
    ["Age", 3]
])
console.log(theMap)
let theSet = new Set ([
    "Daniel",
    "Luz",
    "Andrea"
])
console.log(theSet)
console.log("1. Crea una función que reciba dos números y devuelva su suma") 
//Funcion simple:
function add(a=0, b=0){
    console.log(a+b)
}
add(10,10)
//Funcion Anonima
let anonymAdd = function (a=0, b=0){
    console.log(a+b)
}
anonymAdd(5,8)
//arrow function
let arrowAdd = (a=0,b=0) => console.log(a+b)
arrowAdd(8,8)
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

console.log("2. Crea una función que reciba un array de números y devuelva el mayor de ellos")
const numbers = [7,14,21,28]



console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

console.log("3. Crea una función que reciba un string y devuelva el número de vocales que contiene")
let phrase = "ooeeiiaaeo"
let vocals = "aeiouAEIOU"
let counter = 0

function letsCountVocals(string){
    for (const value of string) {        
        if(vocals.includes(value)){
            counter++                      
        }   
         
    }
    console.log(counter)   
}
letsCountVocals(phrase)
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log("4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas")
let words = ["Give it back in Uppers", "Give back this one"]
let toUpper = function (string){
    for (const value of string) {
        console.log(value.toLocaleUpperCase())        
    }
};
toUpper(words);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
// 10. Crea una función que calcule el factorial de un número dado