/*
Clase 42 - Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=20444
*/

// Console

// log
console.log("Hi World!!")


// error
console.error("your girfriend is a bitch")
console.error("your girfriend is a bitch", new Error("end of relationship"))


// warn
console.log("this is a warning message")


// info
console.info("This is an information message")


// 
let data = [
    ["Daniel", 36],
    ["Andrea", 33]
]
console.table(data)
let gliderPilot = [
    {name:"Madabeski", Glider:"bibeta6"},             
    {name:"Caldas", Glider:"Delta 4"},             
    {name:"Julian", Glider:"Epsilon 9"},             
    {name:"Daniel", Glider:"Swift 5"},             
    {name:"Teto", Glider:"Iota 2"},             
    
]
console.table(gliderPilot)


// group
console.group("Car: ")
console.log("Medel: Hammer")
console.log("Brand: GMC")
console.log("Color: Blue")
console.groupEnd()


// time para medir el tiempo de ejecucion de un bloque de codigo
console.time("time2")
console.time("time")


for (let i = 0; i < 100; i++) {
    
    
}
console.timeEnd("time")
for (let i = 0; i < 100; i++) {
    
    
}
console.timeEnd("time2")

// assert
let age =  17
console.assert(age > 18, "User must be older")

// count
console.count("Click")
console.count("Click")
console.count("Click")

// trace
console.trace("Following your code")

// clear
//console.clear()

