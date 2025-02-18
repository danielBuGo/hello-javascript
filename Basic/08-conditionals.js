/*
Clase 23 - Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=7277
*/

// if, else if, else

// if (si)
let age = 36

if (age == 36){
    console.log(`La edad es ${age}`)
}

// else if (si no)
if (age == 36){
    console.log(`La edad es ${age}`)
} else {
    console.log('La edad es diferente a 37')
}

// else if (si no, si)
if (age == 36){
    console.log(`La edad es ${age}`)
} else if (age <= 18){
    console.log('el usuario es menor de edad')
} else {
    console.log('LA edad es diferente a 18 y 37')
}

// Operador ternario
const theMessage = age == 36 ? "La edad es 36" : "La edad es diferente a 36" //Se ingresa la condicion antes del ?
console.log(theMessage)
let myAge = 18
const theMes = myAge >= 18 ? "Is over age" : "is under age "
console.log(theMes)
let yourGlider = "C"
const pilotLevel = yourGlider == 'C' ? "You are an expert pilot" : "You are not in expert level"
console.log(pilotLevel)
let brandGlider ='ozone'
let yourBrand = brandGlider == "advance" ? "your brannd is advance" : "your brand is ozone"
console.log(yourBrand)

//Switch: Compara varios eventos con una sola variable
let day = 7
let dayName

switch(day){
    case 0:
        dayName = 'Monday'
        break
    case 1:
        dayName = 'Tuesday'
        break
    case 2:
        dayName = 'Wednesday'
        break
    case 3:
        dayName = 'Thursday'
        break
    case 4:
        dayName = 'Friday'
        break
    case 5:
        dayName = 'Saturday'
        break
    case 6:
        dayName = 'Sunday'
        break
    default:
        dayName = 'Introduce a correct value'                        

}
console.log(dayName)

