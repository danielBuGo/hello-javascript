/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
console.log('Exercise 1')
let myName = 'Daniel'
let myLastName = 'Builes'
let youNameIs = `Hi ${myName} how you're doing?`
if(myName == 'Daniel'){
    console.log(youNameIs)
}
if (myLastName == 'Builes'){
    console.log(`Your last name is ${myLastName}`)
}
console.log('---------------------------------------------------------')

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
console.log('Exercise 2')
let user = 'dani'
let password = '123'
if(user == 'dani' && password == '123'){
    console.log('welcome mr')
} else{
    console.log('You user or password are incorrect')
}
console.log('---------------------------------------------------------') 

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
console.log('Exercise 3')
let number = -7
if(number == 0){
    console.log('your number is 0')
} else if(number < 0){
    console.log('You put a negative number')
} else{
    console.log('your put a positive number')
}
console.log('--------------------------------------------------------------------------------------')
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
console.log('Exercise 4')
let age = 15
let legalAge = 18
let ageNecesary = legalAge - age
let message = `You will be able to vote in ${ageNecesary} years more`
if (age >= legalAge){
    console.log('You are able to vote')
} else if (age < 0){
    console.log('Please enter  a correct value')
} else{
    console.log(message)
}
console.log('------------------------------------------------------------------------------------------------')

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
console.log('Exercise 5')
let yourAge = 16;
// usaré la varialble legalAge del ejercicio anterior
let youAre = yourAge >= legalAge ? 'You are over age' : 'You are under age'
console.log(youAre)
console.log('----------------------------------------------------------------------------------------------------')

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
console.log('Exercise 6')
let mounth = 2
if (mounth >= 1 && mounth <= 3){
    console.log('You chose Winter season')
} else if (mounth > 3 && mounth <= 6){
    console.log('You chose Spring season')
} else if (mounth > 6 && mounth <= 9){
    console.log('You chose Summer season')
} else if (mounth <= 0 || mounth > 12){
    console.log('Please enter a correct value')
} else{
    console.log('You chose Atumn season')
}
console.log('------------------------------------------------------------------------------------------------------')
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
console.log('Exercise 7')
let actualYear = 2024
if (mounth <=0 || mounth >12){
    console.log('Please enter a correct value')
} else if(mounth == 2){
    if(actualYear % 4 === 0){
        console.log(`You chose February and we are in a leap year (${actualYear}), therefore February has 29 days`)
    } else {
        console.log(`You chose February, we are not in a leap year, therefore February has 28 days`)
    }
} else if (mounth == 4 || mounth == 6 || mounth == 9 || mounth == 11){
    console.log('You chose between april, june september or november mounths, each of this mounths has 30 days')
} else{
    console.log('You chose between january, march, july, august, october or december mounths, each of this mounths has 31 days')
}
console.log('----------------------------------------------------------------------------------------------------------')
// switch
console.log('Switch Exercises')
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
console.log('Excersise 8')
let idiom = 'dutch'
let theMessage 

switch (idiom){
    case 'spanish':
        theMessage = 'Hola a todos y todas!'
        break
    case 'english':
        theMessage = 'Hi everyone!!'
        break
    case 'dutch':
        theMessage = 'Hallo allemaal!' 
        break 
    case 'french':
        theMessage = 'Bonjour à tous !' 
        break
    case 'japanese':
        theMessage = '皆さん、こんにちは'    
        break
    default:
        if(idiom != typeof String){
            theMessage = 'Please enter a correct value'
        }             
}
console.log(theMessage)
console.log('----------------------------------------------------------------------------------------------')
// 9. Usa un switch para hacer de nuevo el ejercicio 6
console.log('Exercise 9')
let youMounth = 4
let theSeasonIs

switch(youMounth){
    case 1:
        theSeasonIs = 'The season is Winter' @
        break
    case 2:
        theSeasonIs = 'The season is Winter'
        break 
    case 3:
        theSeasonIs = 'The season is Winter'
        break
    case 4:
        theSeasonIs = 'The season is Spring'
        break
    case 5:
        theSeasonIs = 'The season is Spring'
        break
    case 6:
        theSeasonIs = 'The season is Spring'
        break 
    case 7:
        theSeasonIs = 'You chose Summer season'
        break
    case 8: 
        theSeasonIs = 'You chose Summer season'
        break  
    case 9:
        theSeasonIs = 'You chose Summer season'
        break 
    case 10: 
        theSeasonIs = 'You chose Summer Autumn'
        break  
    case 11: 
        theSeasonIs = 'You chose Summer Autumn'
        break
    case 12:
        theSeasonIs = 'You chose Summer Autumn'
        break  
    default:
        theSeasonIs = 'Please enter a correct value'                    
}
console.log(theSeasonIs)
console.log('-----------------------------------------------------------------------------------------------------')
// 10. Usa un switch para hacer de nuevo el ejercicio 7
console.log('exercise 10')
let thisMounth = 10
let days
let thisYear = 2024

switch(thisMounth){
    case 1:
        days = 'January has 31 days'
        break
    case 2:
        if(thisYear % 4 === 0){
            days = `You chose February and we are in a leap year (${thisYear}), therefore February has 29 days`
        } else {
             days = `You chose February, we are not in a leap year, therefore February has 28 days`
        }
        
        break 
    case 3:
        days = 'March has 31 days'
        break
    case 4:
        days = 'april has 30 days'
        break
    case 5:
        days = 'May has 31 days'
        break
    case 6:
        days = 'june has 30 days'
        break 
    case 7:
        days = 'July has 31 days'
        break
    case 8: 
        days = 'August  has 31 days'
        break  
    case 9:
        days = 'September has 30 days'
        break 
    case 10: 
        days = 'October has 31 days'
        break  
    case 11: 
        days = 'November has 30 days'
        break
    case 12:
        days = 'December has 31 days'
        break  
    default:
        days = 'Please enter a correct value'                    
}
console.log(days)
