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


console.log("4. Crea una excepción personalizada")
class customError extends Error {
    constructor(message, a, b){
        super(message)
        this.a = a
        this.b = b
    }
    print(){
        console.log(`${this.a}, ${this.b}`)
    }
};
console.log("---------------------------------------------------")

console.log("5. Lanza una excepción personalizada")
function divi(a = 0, b = 0){
    if(b === 0){
        throw new SyntaxError("The divisor cannot be 0")
    } else if(typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("the values are not numbers: ")
    }else if(a === 0){
        throw new customError("If the dividendo is 0, the result always will be 0", a, b)
    }else{
        return a / b
    }
};
console.log("---------------------------------------------------")

console.log("6. Lanza varias excepciones según una lógica definida")
/** Revisar el punto anterior
 * function divi(a = 0, b = 0){
    if(b === 0){
        throw new SyntaxError("The divisor cannot be 0")
    } else if(typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("the values are not numbers: ")
    }else if(a === 0){
        throw new customError("If the dividendo is 0, the result always will be 0", a, b)
    }else{
        return a / b
    }
}; */
console.log("---------------------------------------------------")

console.log("7. Captura varias excepciones en un mismo try-catch")
try {
    console.log(divi(0,2))
    console.log("✔ function working correctly")
    
} catch (error) {
    if(error instanceof TypeError){
        console.log("❌An Type error has occurred: ", error.message, error.name)
    } else if(error instanceof SyntaxError){
        console.log("❌An Syntax error has occurred: ", error.message, error.name)
    }else{
        console.log("❌A commun error has occurred: ", error.message, error.name)
    }
    
    
} finally{
    console.log("⭕End of the code")
}
console.log("---------------------------------------------------")
console.log("8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores.")
let isFloat = [2, 3.4, 7.8, 3, "cinco", "ocho"];
let mistakes = [];

for (const element of isFloat) {
    try {
        let parsedValue = parseFloat(element);
        if (isNaN(parsedValue)) {
            throw new Error(`No se pudo convertir "${element}" a número.`);
        }
        console.log(parsedValue);
    } catch (error) {
        mistakes.push(error.message);
    }
}

if (mistakes.length > 0) {
    console.log("Estos son los errores:", mistakes);
} else {
    console.log("No se encontraron errores.");
}

console.assert("The end");
    


console.log("---------------------------------------------------")

console.log("9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada")
let myObject = {
    name: "Daniel",
    lastName: "Builes",
    age: 36
};
let isItIn = (object) => {
    console.log(object.key(name))
}
console.log("---------------------------------------------------")

console.log("10. Crea una función que realice reintentos en caso de error hasta un máximo de 10")
let password = 2097
let inputPassword = 0

let maxAttempts  = (inputPassword) => {
    let attempts = 0
    do {
        if(password !== inputPassword){ 
            if(attempts === 10){
                throw new Error ("Maximun attempts")
            }
            attempts++
            console.log(`Password invalid. Attempt number ${attempts}`)        
               
        }else{
            console.log("welcome to bancolombia")
            break        
        
        }        
    } while (attempts < 11);
};
try {
   console.log(maxAttempts(2007)) 
    
} catch (error) {
    console.log("An error has occurred:", error.message)
    
}finally{
    console.log("The end")
}



console.log("---------------------------------------------------")

