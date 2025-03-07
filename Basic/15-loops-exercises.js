/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
console.log('1. Crea un bucle que muestre numeros del 1 al 20')
console.log('+++ Ciclo for +++')
for(let i = 1; i <= 20; i++){
    console.log(`Número ${i}`)
}
console.log('+++ Cilco While +++')
let i = 1
while(i <= 20){
    console.log(`Con ciclo while número ${i}`)
    i++
}
console.log('+++++++ Ciclo Do While ++++++++++')
i = 1
do{
    console.log(`Con do While número: ${i}`)
    i++
}while(i  <= 20 )
console.log('_________________________________________________________________________________--')    
console.log('2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado')
console.log('Ciclo For')
let suma = 0
for (let i = 1; i <= 100; i++ ){
    suma += i;   

}
console.log(`La suma es: ${suma}`)
console.log('+++ Ciclo While +++')
suma = 0
i = 1
while(i <= 100){
    suma += i
    i++
}
console.log(`La suma con el ciclo while: ${suma}`)
suma = 0
i = 1
console.log('+++ Ciclo Do While +++')
do {
    suma += i
    i++
}while(i <= 100)
console.log(`Utilizando el cliclo do while la suma es: ${suma}`)
console.log('________________________________________________________________________________________')
console.log('3. Crea un bucle que imprima todos los números pares entre 1 y 50')
console.log('+++++ Ciclo For +++++')
for (let i = 0; i <= 50; i+=2) {
    console.log(`los números pares son: ${i}`)    
}
console.log('+++++ Con cilo While +++++')
i = 0

while(i < 50){
    console.log(`Número par: ${i}`)
    i += 2  

}
console.log('++++++ Usando Ciclo Do While')
i = 0
do{
    console.log(`Pares usando Do While: ${i} `)
    i += 2
}while(i < 50)
console.log('___________________________________________________________________________________________-')


console.log('4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola')
console.log('+++ Ciclo For of +++')

let names = ['daniel', 'bella', 'lina']
for (const element of names) {
    console.log(`My name is: ${element}`)    
}
console.log('+++ Bucle For +++')

for (i = 0;i < names.length; i++){
    console.log(names)
};
console.log('+++ Ciclo While +++')
 i = 0
 while(i < names.length){
    console.log(`my name is: ${names[i]}`)// Debemos entrar a la pocision del array
    i++
 };
 console.log('+++ Do While +++')
 i = 0
do{
    console.log(`Mu name is: ${names[i]}`)
    i++
}while(i < names.length)
    console.log('_______________________________________________________________')

let string = 'how many vocal can you see'
let vocals = 'aeiouAEIOU'
let counter = 0
for (const char of string) {
    if(vocals.includes(char))
        counter++    
    
}
console.log(counter)

console.log('6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto')
const theArray = [3, 6, 9, 12]
let product = 1

for (let i = 0; i < theArray.length; i++) {
     product *= theArray[i];    
}
console.log(product)

console.log('_______________________________________________________________________________________-')
// Lo habia entendido mal e hice esto
let myNumbers = [5, 2, 4, 8]
for (let i = 0; i < myNumbers.length; i++){
    console.log(`${myNumbers[i]} * ${myNumbers[0]} = ` + myNumbers[i]*myNumbers[0])
    console.log(`${myNumbers[i]} * ${myNumbers[1]} = ` + myNumbers[i]*myNumbers[1])
    console.log(`${myNumbers[i]} * ${myNumbers[2]} = ` + myNumbers[i]*myNumbers[2])
    console.log(`${myNumbers[i]} * ${myNumbers[3]} = ` + myNumbers[i]*myNumbers[3])
    
}
console.log("______________________________________________________________________")
console.log("7. Escribe un bucle que imprima la tabla de multiplicar del 5")
for (let i = 1; i  < 11; i++) {
   console.log(`5 * ${i} = ` + (5 *  [i]))    
}
console.log("Tabla del 5 con bucle while")
let result = 1; 
while (result < 11) {
    console.log((5*result))
    result++
}
console.log("Tabla del 5 con bucle do while")
let result2 = 1
do {
    console.log((5*result2))
    result2++
    
} while (result2 < 11);
console.log("________________________________________________________________________________-")

console.log("8. Usa un bucle para invertir una cadena de texto")
let text = "Quiero invertir esto"
let newText =  ""
for (let i = text.length -1; i >= 0; i--) {
    newText += text[i]
    
}
console.log(newText)
console.log("________________________________________________________________________________________")
console.log("Invirtiendo otra cadena de texto")
let theText = "This will be inverted"
let inverted = ""
for (let i = theText.length-1; i >= 0; i--) {
    inverted += theText[i]
    
}
console.log(inverted)

console.log("_____________________________________________________________________________________")
console.log("9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci")
let n = 10;
let secuence = []
if(n <= 0){
    counter.log(secuence)
} else if(n === 1){
    console.log([0])
} else{
    secuence[0] = 0
    secuence[1] = 1

    for (let i = 2; i < n; i++) {
        secuence[i] = secuence[i - 1] + secuence[i - 2]
        
    }
    console.log(`Los primeros ${n} de la secuencia de Fegunacci son ${secuence}`)
}
console.log("___________________________________________________________________________________--")


console.log("10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10")
let lotOfNumbers = [4,8,12,16,20,24,28];
let newBucle = [];

console.log(newBucle)
for(i = 0; i < lotOfNumbers.length;i++){
    if(lotOfNumbers[i] > 10){        
        newBucle.push(lotOfNumbers[i])            
    }   
}
console.log(newBucle)
console.log("________________________________________________-")
console.log("Realizar el mismo ejercicio anterior pero el nuevo array debe tener numeros > 20")
let thisArray = [8, 16, 24, 32, 40, 48, 56]
let theNewOne = []
for (let i = 0; i < thisArray.length; i++) {
    if(thisArray[i] > 20){
        theNewOne.push(thisArray[i])
    } 
   
}
console.log(theNewOne)
console.log("_______________________________________________________________________________________-")
console.log("El mismo ejercicio pero menores que 30")
let thisArray2 = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40]
let theNewOne2 = []
for (let i = 0; i < thisArray2.length; i++) {
    if(thisArray2[i] <= 30){
        theNewOne2.push(thisArray2[i])
    }
    
}
console.log(theNewOne2)




