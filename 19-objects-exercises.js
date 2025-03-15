/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/
 console.log("1. Crea un objeto con 3 propiedades")
 let car = {
    brand: "Ferrari",
    model: 2000,
    color: "red"
 }
 console.log(car)
 console.log("-------------------------------------------------")

console.log("2. Accede y muestra su valor")
for (let key in car) {
    console.log(key + ": " + car[key])
    
}
console.log("-------------------------------------------------")

console.log("3. Agrega una nueva propiedad")
car.hp = 550
car["hasInsurance"] = true
console.log(car)
console.log("-------------------------------------------------")
console.log("4. Elimina una de las 3 primeras propiedades")
delete car.model
for (let key in car) {
    console.log(key + ": " + car[key])        
    }

console.log("-------------------------------------------------")
console.log("5. Agrega una función e invócala") 
car.isOn =  function(){
    console.log(`the ${this.brand} is on`)
}
car.isOn()
for (const key in car) {
    console.log(`${key}: ${car[key]}`)
}
console.log("-------------------------------------------------")
console.log("6. Itera las propiedades del objeto")
for (const key in car) {
    console.log(`${key}: ${car[key]}`)
}
console.log("-------------------------------------------------")
console.log("7. Crea un objeto anidado") 
car.data = {maxSpeed: "350Kh", 
    fuelCapacity: "35Gls"
}
let car2 = {
    brand: "Mercedez",
    color: "Silver",
    hp: 650,
    hasInsurance: false    
}
console.log("-------------------------------------------------")
console.log("8. Accede y muestra el valor de las propiedades anidadas")
console.log(car.data)
console.log("-------------------------------------------------")
console.log("9. Comprueba si los dos objetos creados son iguales")
console.log(car === car2)
console.log(car == car2)

console.log("-------------------------------------------------")
 console.log("10. Comprueba si dos propiedades diferentes son iguales")
 console.log(car.color === car2.color)
 console.log(car.brand === car2.brand)
 console.log("-------------------------------------------------")