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
    console.log(`${a} + ${b} = ` + (a+b))
}
add(10,10)
//Funcion Anonima
let anonymAdd = function (a=0, b=0){
    console.log(`La suma de ${a} y ${b} es ` + (a+b))
}
anonymAdd(5,8)
//arrow function
let arrowAdd = (a=0,b=0) => console.log(`${a} + ${b} = ` + (a+b))
arrowAdd(8,8)
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

console.log("2. Crea una función que reciba un array de números y devuelva el mayor de ellos")
const numbers = [7,14,700,21,28]
let bigOne = numbers[0]
function theBig (array){
    for (let i = 1; i < array.length; i++){
        if(array[i] > bigOne){
            bigOne = array[i]
        }
        
    }
    console.log(`the biggest number is: ${bigOne}`)
};
theBig(numbers)
console.log("________________________________________________-")
//Lo haré  otra vez:
const newNumbers = [1,45,7,10,3456,589]
bigOne = newNumbers[0]
let newBig = (array) => {
    for (let i = 1; i < array.length;i++) {
        if(array[i] > bigOne){
            bigOne = array[i];
        }        
    }
    console.log(`the biggest number is: ${bigOne}`)
}
newBig(newNumbers)

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
    console.log("El número de vocales que contiene es: " + counter)  
};
letsCountVocals(phrase);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log("4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas")
let words = ["Give it back in Uppers", "Give back this one"]
let toUpper = function (string){
    for (const value of string) {
        console.log(`Este es el array en minusculas: ${value}`)
        console.log("Este es el array en mayusculas: " + value.toLocaleUpperCase())        
    }
};
toUpper(words);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log("5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario")

let isItPrime = function (number){
   
    if (number <= 1 ) {
        console.log(`El número ${number} es primo?: ${false}`)
        return;
    } else if(number <= 3){
        console.log(`El número ${number} es primo?: ${true}`)
        return;
    } else if(number % 2 === 0 || number % 3 === 0){
        console.log(`El número ${number} es primo?: ${false}`)
        return;
    } else{
        for (let i = 5; i * i <= number; i += 6) {
            if (number % i === 0 || number % (i + 2) === 0) {
                console.log(`El número ${number} es primo?: ${false}`)
                return;
            }
          }
          console.log(`El número ${number} es primo?: ${true}`)
          return;
    }       
   
}
isItPrime(368)
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log("6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos")
let pets1 = ["Dog", "Cat", "Horse", "Parrot"]
let pets2 = ["Lion", "Tiger", "Cat", "Horse"]
let commonAnimals = []
let giveMeAnimalsInCommon2 = function(array1, array2){
    let array3 = array1.concat(array2)    
    let vistos = new Set ();
    let duplicados = new Set();
    let duplicateElements = array3.filter((element) =>{
        if(vistos.has(element)){
            duplicados.add(element)
            return true;
        }else {
            vistos.add(element)
            return false;
        }
    }) 
    duplicateElements = Array.from(duplicados)
    console.log(`Los elementos duplicados son: ${duplicateElements}`)
}
giveMeAnimalsInCommon2(pets1,pets2)
/* Creé una funcion que pasa los valores de las arrays a un MAp
y elimina los valores repetidos */
let giveMeAnimalsInCommon = function (array1, array2){   
    commonAnimals = array1.concat(array2)    
    let commonAnimalsSet = new Set (commonAnimals)
    let $commonAnimals = Array.from(commonAnimalsSet)
    console.log(`Lista con los elementos repetidos eliminados: ${$commonAnimals}`)    
}
giveMeAnimalsInCommon(pets1, pets2)


console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log(" 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares")
let $numbers = [6, 7, 5, 4, 1, 0, 9, 10, 12, 24, 35, 77, 89]
let isEven = []
function addEvenNumbers(array){
    let suma = 0
    for (const even of array) {
        if(even % 2 === 0){
            isEven.push(even)           
        }        
    }
    console.log(`The list of even numbers are: ${isEven}`)
    for (const element of isEven) {
            suma += element
    }
    console.log(`the result of it adds is : ${suma}`)
};
addEvenNumbers($numbers);
$numbers = [5, 25, 15, 10, 4, 6]
isEven = []
let addEven = function(array){
    let add = 0
    array.forEach(element => {
        if(element % 2 === 0){
            isEven.push(element)            
        }                
    });
    console.log(`Los números pares son: ${isEven}`)
    for (const even of isEven) {
        add += even        
    }
    console.log(`La suma de estos es: ${add}`)
};
addEven($numbers);
console.log("__________________________________________________")
$numbers = [2,7,4,5,9,10,10]
isEven = []
let addEven2 = function(array){
    let suma = 0
    array.forEach(element => {
        if(element % 2 === 0){
            isEven.push(element) 
        }               
    });
    console.log(`The even elements are: ${isEven}`)
    for (const even of isEven) {
        suma += even
    }
    console.log(`the add of all items are: ${suma}`)
}
addEven2($numbers)
console.log("__________________________________")
//Voy a sumar los impares
$numbers = [2,4,5,7,9,12,14]
let isOdd = []
let addOddNumber = (array) => {
    let add = 0
    for (const element of array) {
        if(element % 2 === 1){
            console.log(`The add numbers are: ${element}`)
            add += element
        }
        
    }
    
    console.log(`The sumatory of odd numbers is: ${add}`)
};
addOddNumber($numbers);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log("8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado")
$numbers = [2, 3, 5, 8]
let numberSqr = []
let numbPow = function (array){
    array.forEach(element => {
        
        let elevator = Math.pow(element, 2) // etambien funciona asi: element ** 2
        numberSqr.push(elevator)       
        
    });
    console.log(`The original array is: ${$numbers}`)
    console.log(`The numbers elevated to 2 are: ${numberSqr}`)
};
numbPow($numbers)
console.log("________________________________________________________")
let myArray = [8, 9, 5, 4, 3, 2,]
let myNewArray = []
let elevatingNumbers = (array) => {
    array.forEach(element => {
        let sqr = Math.pow(element,2)
        myNewArray.push(sqr)
    });
    console.log(`The new array with elements to sqr is: ${myNewArray}`)
};
elevatingNumbers(myArray)
console.log("___________________________________________________________________")
let $myArray = [50, 8, 2, 2, 6, 7, 9]
let $myNewArray = []
let sqr = 0
let elevatingNumbers2 = (array) => {
    for (const element of array) {
        sqr = Math.pow(element, 2)
        $myNewArray.push(sqr)
    }
    console.log(`The new array with elements to sqr is: ${$myNewArray}`)
};
elevatingNumbers2($myArray)
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log(" 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso")
let $string = "please, invert this word"
let letsInvert = (string) => {
    console.log(string.split("").reverse().join(""))
}
letsInvert($string)
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log("10. Crea una función que calcule el factorial de un número dado") 
let num = 8
function factoriza (num){
    if(num < 0){
        console.log(-1)
    }else if(num == 0){
        console.log(1)
    }else{
        console.log((num * factoriza(num - 1)))
    }
};
factoriza(num)