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


console.log('_______________________________________________________________________________________-')
// Lo habia entendido mal e hice esto
let myNumbers = [5, 2, 4, 8]
for (let i = 0; i < myNumbers.length; i++){
    console.log(`${myNumbers[i]} * ${myNumbers[0]} = ` + myNumbers[i]*myNumbers[0])
    console.log(`${myNumbers[i]} * ${myNumbers[1]} = ` + myNumbers[i]*myNumbers[1])
    console.log(`${myNumbers[i]} * ${myNumbers[2]} = ` + myNumbers[i]*myNumbers[2])
    console.log(`${myNumbers[i]} * ${myNumbers[3]} = ` + myNumbers[i]*myNumbers[3])
    
}
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5


// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10