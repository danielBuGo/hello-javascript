/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

console.log("1. Captura una excepción utilizando try-catch")
let myCar

try{
    console.log(myCar.color)
}catch(error){
     console.error("Variable not defined")
}
console.log("---------------------------------------------------")
console.log("2. Captura una excepción utilizando try-catch y finally")
let myDog

try {
    console.log(myDog.name)
    console.log("✅ It was executed without errors")
    
} catch (error) {
    console.log("❌ An error has occurred: ", error.message)
    
}finally{
    console.log("⭕ The code finish here")

}
console.log("++")
let myArray 

try {
    console.log(myArray)
    console.log("✅ Code is good!")
} catch (error) {
    console.log("❌ Error unspected: ", error.message)
}finally{
    console.log("⭕ The code finish here")
}
console.log("---------------------------------------------------")


console.log("3. Lanza una excepción genérica")
let string = 9;

try {
    if(typeof string !== "string"){
        throw new Error("You must Fill with strings")
    } else{
        console.log("you string is: " + string )
    };
    console.log(string)
    console.log("❗ Excellent")
}catch (error) {
    
    console.log("❌ You have an error type of: ", error.message)
}finally{
    console.log("⭕ The code finish here")
}
console.log("---------------------------------------------------")


// 4. Crea una excepción personalizada
console.log("---------------------------------------------------")

// 5. Lanza una excepción personalizada
console.log("---------------------------------------------------")

// 6. Lanza varias excepciones según una lógica definida
console.log("---------------------------------------------------")

// 7. Captura varias excepciones en un mismo try-catch
console.log("---------------------------------------------------")

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
console.log("---------------------------------------------------")

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
console.log("---------------------------------------------------")

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
console.log("---------------------------------------------------")
