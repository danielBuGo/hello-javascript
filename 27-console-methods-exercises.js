/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/
console.log("1. Crea un función que utilice error correctamente")
let age = 0
let myFunction = (a) => {
    if(a <= 0 || typeof a !=="number"){
        console.error("You must fill a correct number")
    }else if(a < 18){
        console.warn("Your can no go in because you are underage")
    }else{
        console.log("Welcome")
    }
};
myFunction(17)


console.log("--------------------------------------------------------------")
console.log("2.crea una función que utilice warn correctamente")
console.info("Realicé este ejercicio en el punto uno")
console.log("3. Crea una función que utilice info correctamente")
console.info("Ya la hice")
console.log("--------------------------------------------------------------")
console.log("4. Utiliza table") 
let gliderPilot = [
    {name:"Madabeski", Glider:"bibeta6"},             
    {name:"Caldas", Glider:"Delta 4"},             
    {name:"Julian", Glider:"Epsilon 9"},             
    {name:"Daniel", Glider:"Swift 5"},             
    {name:"Teto", Glider:"Iota 2"},             
    
]
console.table(gliderPilot)
console.log("--------------------------------------------------------------")
console.log("5. Utiliza group")
console.group("Programer Languages: ")
console.log("Java")
console.log("Python")
console.log("JavaScript")
console.groupEnd
console.log("--------------------------------------------------------------")
console.log("6. Utiliza time")
console.time("timer")
let n = 5
while(n < 6){
    n++
}
console.timeEnd("timer")
console.log("--------------------------------------------------------------")
console.log("7. Valida con assert si un número es positivo")
let nu = 9
console.assert(nu < 0, "The number is negative")
console.log("--------------------------------------------------------------")
console.log("8. Utiliza count")
console.count("console")
console.count("console")
console.log("--------------------------------------------------------------")
console.log("9. Utiliza trace")
console.trace("acase usa trace")
console.log("--------------------------------------------------------------")
console.log("10. Utiliza clear") 
console.clear()
console.log("--------------------------------------------------------------")