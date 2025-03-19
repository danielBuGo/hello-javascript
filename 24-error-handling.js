/*
Clase 40 - Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=18751
*/

// Excepción
/** Si cometemos un error en nuestro codigo, el usuario simplemente verá como se para
 * la app. Nosotros por terminal podríamos verlo pero el usuario solo vería la pantalla 
 * tildada:
 * Ejemplo
 */

//console.log(myObject.name) //no hemos creado el objeto correctamente

// Produce una excepción
let myObject
// Captura de errores con Try-Catch
try {
    console.log(myObject)
    console.log("✔ It was executed without errors")

} catch(error){
    console.log("x  An error has occurred: ", error.message)
} finally {
    console.log("✔ this code will execute always 😊")
}



// Lanzamiento de errores
// throw

function sum(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("You must use numbers")
    }
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error("Only must use integer numbers")
    } if(a == 0 || b == 0){
        throw new MyCustomError("you are trying to add 0: ", a, b)
    }
    return a + b
    
};
try{
    console.log(sum(5,"9.8"))
    //console.log(sum("5",9))
    console.log(sum(5,9))
} catch (error){
    console.log("x  An error has occurred: ", error.message)
} finally{
    console.log("✔ Exit of your function")
}
// Capturar varios tipos de errores
try{
    //console.log(sum(5,9.8))
    console.log(sum("5",9))
}catch (error){
    if(error instanceof TypeError){
        console.log("An error has occurred type of: ", error.message)
    } else if(error instanceof Error){
        console.log("An error has occurred type of: ", error.message)
    }
};



// Crear excepciones personalizadas

class MyCustomError extends Error {
    constructor(message, a, b){
        super(message)
        this.a = a
        this.b = b
    }
    printNumbers(){
        console.log(`${this.a} + ${this.b}`)
    }
}
try{
    console.log(sum(0,8))
}catch (error){
    console.log("An personalized erro has occurred: ", error.message)
    error.printNumbers()

};

console.log("----------------------------------------------------------------------")
function divi(a = 0, b = 0){
    if(b === 0){
        throw new SyntaxError("The divisor cannot be 0")
    } else if(typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("the values are not numbers: ")
    }else{
        return a / b
    }
};
try {
    console.log(divi(5,0))
    console.log("✔ function working correctly")
    
} catch (error) {
    console.log("❌An error has occurred: ", error.message)
    
} finally{
    console.log("⭕End of the code")
}

