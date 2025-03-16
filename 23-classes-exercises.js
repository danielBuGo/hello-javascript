/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/
console.log("1. Crea una clase que reciba dos propiedades") 
class hause {
    constructor(typeOfBuild, size){
        this.typeOfBuild = typeOfBuild
        this.size = size
    }
    description(){
        console.log(`my ${this.typeOfBuild} is ${this.size} m2`)
    }
};
let myHause = new hause("apartament", 235)
console.log(myHause)
console.log(myHause.size)

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

console.log("2. Añade un método a la clase que utilice las propiedades")
myHause.description()
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

console.log("3. Muestra los valores de las propiedades e invoca a la función")
console.log(myHause.typeOfBuild)
console.log(myHause.size)
myHause.description()
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

console.log("4. Añade un método estático a la primera clase")
class hause2 {
    constructor(typeOfBuild, size){
        this.typeOfBuild = typeOfBuild
        this.size = size
    }
    static description(){
         return console.log(`my static function ${this.typeOfBuild} is ${this.size} m2`)
    }
};

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

console.log("5. Haz uso del método estático")
hause2.description()
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

console.log("6. Crea una clase que haga uso de herencia")
class otherHause extends hause{
    constructor(typeOfBuild, size, address){
        super(typeOfBuild, size)        
        this.address = address
    }
    
}
let hause3 = new otherHause("Hause", 123, "Car 50")
console.log(hause3)
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

console.log("7. Crea una clase que haga uso de getters y setters")
class bankAccount {
    #id 
    #account 
    constructor(id, account){
        this.#id = id
        this.#account = account
    }
    get id(){
        return this.#id 
    }
   
    set account(newAccount){
        this.#account = newAccount

    }
    get account(){
        return this.#account
    }
};
let myAccount = new bankAccount(123, 789)
console.log(myAccount)
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

console.log("8. Modifica la clase con getters y setters para que use propiedades privadas")
myAccount.account = 48978

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

console.log("9. Utiliza los get y set y muestra sus valores")
console.log(myAccount.account)
console.log(myAccount.id)
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

console.log("10. Sobrescribe un método de una clase que utilice herencia ")
class OtherHause extends hause {
    description(){
        console.log("Overwrite metod")
    }
    
    

};
let myOtherHause = new OtherHause("Hause", 34, "cr 34")

myOtherHause.description()
 console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")