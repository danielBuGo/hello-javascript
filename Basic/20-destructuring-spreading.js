/*
Clase 35 - Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=15747
*/


let array = ["daniel", "Lina", "Bella"]
let gliderBrands = ["Ozone", "Advanced", "Swing"]
let car = {
    brand: "Gmc",
    model: "Hammer",
    color: "Blue"
}
let myValue = array[1]
console.log(`Mi novia es ${myValue}`)

let myCar = car.model
console.log(`Mi carro es un ${myCar}`)


// Desestructuración
// Sintaxis arrays
let [myName0, myName1, myName2] = array
console.log(myName0)
console.log(myName2)
console.log(myName1)

let [glider1, glider2, glider3] = gliderBrands
console.log(glider1)
console.log(glider2)
console.log(glider3)

// Sintaxis arrays con valores predeterminados
let [myName3 = 0, myName4= 0,myName5 = 0, myName6 = 0, myName7 = 0, myName8 =0] = array
console.log(myName8)
console.log("__________________________________-")
// Ignorar elementos array
let [myName9, , myName11] = array
console.log(myName9)
console.log(myName11)
let [ ,glider4, glider5] = gliderBrands
console.log(glider5)
console.log(glider4)
console.log("________________________________________")
// Sintaxis objects
let {brand, model, color} = car
console.log(brand)
console.log(color)
console.log(model)
// Sintaxis objects con valores predeterminados
let {brand2, color2, model2, year = 2020} = array
console.log(brand2)// No existe
console.log(color2)// No existe
console.log(model2)// No existe
console.log(year)


// Sintaxis objects con nuevos nombres de variables
let {brand: brand3, color: color3, model: model3, year: year3} = car
console.log(brand3)
console.log(color3)
console.log(model3)
console.log(year)

// Objects anidados
let person = {
    name: "Lina",
    LastName: "Castro",
    Gender: "Male",
    job: {
        Profession: "Manager",
        Exp: 13,
        work: function(){
            console.log(`${person.name} has ${this.Exp} years experience working as a ${this.Profession}`)
        }
    }
};
for (let key in person) {
    console.log(key + ": " + person[key])
            
}
person.job.work()
let {name: name4, job: {Profession: jobName}} = person
console.log(name4)
console.log(jobName)
jobName = "Software Developer"
console.log(jobName)
console.log(person)

let pilot = {
    name: "Daniel",
    exp: 13,
    glider: "Swift 5",
    brand: "Ozone"
}
let {name: newName, exp: newExp, glider: newGlider} = pilot
newName = "Cuchei"
newGlider = "Advanced"
console.log(`the pilot ${newName} flies ${newGlider}`)
console.log(`the pilot ${pilot.name} flies ${pilot.glider} of ${pilot.brand}`)



// Propagación (...)
// Sintaxis arrays

let gliderBrands3 = [...gliderBrands, "Gin", "Sky Paragliders"]
console.log(gliderBrands3)
console.log("_______________________________")
// Copia de arrays
let gliderBrands2 = [...gliderBrands] //asi se copia un array
console.log(gliderBrands2)
// Combinación de arrays
let gliderBrands4 = [...gliderBrands, ...gliderBrands3]
console.log(gliderBrands4)
// Sintaxis objects
let person2 = {...person, ...car, year: 2020}
    console.log(person2)
// Copia de objects
