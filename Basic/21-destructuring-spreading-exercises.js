/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

console.log("1. Usa desestructuración para extraer los dos primeros elementos de un array")
let videoGames = ["Call of Duty", "RDR2", "Assasins Creed", "Battlefiedl"]
let [game1, game2, , ] = videoGames
console.log("the first game is " + game1)
console.log("The second game is: " + game2)
console.log(videoGames)
console.log("----------------------------------------------------------")
console.log("2. Usa desestructuración en un array y asigna un valor predeterminado a una variable")
let array = [1,2,3,4]
let [arr0 , arr1 , arr2 , arr3, arr4 = 0, arr5 = 0] = array
console.log(arr2)
console.log(arr0)
console.log(arr4)
console.log(arr5)
console.log("----------------------------------------------------------")
console.log("3. Usa desestructuración para extraer dos propiedades de un objeto")
let hardware = {
    brand: "Xbox",
    edition: "black Ops Edition",
    memory: 128
};
console.log(hardware)
let {brand, memory} = hardware
console.log(brand)
console.log(memory)
console.log("----------------------------------------------------------")
console.log("4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes")
let dog = {
    kind: "Cocker Spaniel",
    color: "Brown",
    age: 3,
    Gender: "Male"
};
let {kind: kind1, color: color2, hungry: hungry = "No"} = dog
kind1 = "Labrador"
color2 = "Black"
console.log(`the new dog is a ${color2} ${kind1} ${hungry}`)
console.log("----------------------------------------------------------")
console.log("5. Usa desestructuración para extraer dos propiedades de un objeto anidado")

let motorcycle = {
    brand: "Hero",
    color: "Blue",
    model: "X-Pulse200",
    data: {
        power: 550,  
        maxSpeed: 100, 
        turnOn: function(){
            console.log(`the motorcycle is on`)
        }   
    }
}
let {brand: brand3, data: {power: power2}, data:{minSpeed: minSpeed = 20}} = motorcycle
console.log(power2)
console.log(minSpeed)
console.log("----------------------------------------------------------")
console.log("6. Usa propagación para combinar dos arrays en uno nuevo") 
let gliderBrands = ["Ozone", "Advanced", "Swing"]
let fusionArray = [...videoGames, ...gliderBrands]
console.log("The two arrays fusionated are: " + fusionArray)
console.log("----------------------------------------------------------")
console.log("7. Usa propagación para crear una copia de un array")
let copyArr = [...fusionArray]
console.log("This is the copy: " + copyArr)
console.log("----------------------------------------------------------")
console.log("8. Usa propagación para combinar dos objetos en uno nuevo")
let objectsFusion = {...dog, ...motorcycle, year: 2024}
for (const key in objectsFusion) {
    console.log(key + ": " + objectsFusion[key])
}
console.log(objectsFusion)
motorcycle.data.turnOn()
console.log("----------------------------------------------------------")
console.log("9. Usa propagación para crear una copia de un objeto")
let objectCopy = {...hardware}
console.log(objectCopy)
console.log("----------------------------------------------------------")
console.log("10. Combina desestructuración y propagación")
//Combinacion con objetos:
let southAmerica = {
    howManyCountrys: 12,
    religion: "Christianity",
    area: "17840000 km**2",
    Languages: {
        lan1: "spanis",
        lan2: "Portuguese",
        lan3: "French",
        lan4: "English"
    }
}
let Europe = {
    alias: "Old Continent",
    wars: 15,
    neightberhood: "Africa"
    
}
//spreading
let twoContinent = {...Europe, ...southAmerica}
console.log(twoContinent)
// Destructuring
let {area: area2, religion: religion2} = twoContinent
console.log(area2)
religion2 = "islam"
console.log("One of the mains religions in Euprope is the: " + religion2)
//Spreading with array
let arra1 = [2, 3, 4, 5, 6, ]
let array2 = [10,35]
let arra3 = [...arra1, ...array2, 34, 45]
for (const element of arra3) {
    console.log(element)
}
//Destructuring
let [n0, n1, n2, n3, n4, n5, n6, n7, n8, n9 =0] = arra3
console.log(n9)
console.log(arra3.pop())
console.log(arra3)
arra3.unshift(100)
arra3.push(567)

// Turning array into  set
let myMap = new Map([
    ["My continents", twoContinent]
])
let mySet = new Set(arra3)
console.log(mySet)
console.log(myMap)
console.log(myMap.has("area"))
console.log(myMap.has("My continents"))
console.log(myMap.get("My continents"))
myMap.set("Other continent", "Oceania")
console.log(myMap)
console.log(myMap.keys())
console.log("8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado")

let newArray = []

let sqr = (array) => {
    array.forEach(element => {
        let elevat = Math.pow(element, 2)
        newArray.push(elevat)
    });
    console.log(newArray)
};
sqr(arra3)