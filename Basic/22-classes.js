/*
Clase 37 - Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=16864
*/

// Clases
let person = {
    name: "Mariana",
    age: 15,
    alias: "Mari"
};

class Person {//Las clases inician con la primera leta  en mayus
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
};
let subject = new Person ("Manuela", 13, "Mamu") //con el new se llama la clase
let subject2 = new Person("Lina", 36, "reina")
console.log(subject)
console.log(subject2)
console.log(typeof subject)

// Sintaxis
// Valores por defecto

class DefaultPerson {
    constructor(name = "Sin nombre", age = 0, alias = "sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
};
let subject3 = new DefaultPerson("madabeski", 50) //de esta manera se deben agregar propiedades en orden
console.log(subject3)
//Acceso a propiedades
console.log("+++ Acceso a propiedades +++")
console.log(subject3.alias)
console.log(subject2.age)
console.log(subject.name)
console.log("+++ Agregar valores +++")
subject3.alias = "Mada" // de esta manera se asigna proipedades a cada variable
console.log(subject3)

// Funciones en clases
class PersonWithMetod {//Las clases inician con la primera leta  en mayus
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
    walk(){
         console.log("the person is walking")
    }
};
let subject4 = new PersonWithMetod("Jorge", 44, "Angulo")
console.log("__________________________________")
console.log(subject4)
subject4.walk()

class CarWithMetod {
    constructor(brand, model, year){
        this.brand = brand
        this.model = model
        this.year = year
    }
    carIsON(){
        console.log("The car is turning on")
    }
};
let car1 = new CarWithMetod("GMC", "Hammer", 2020)
console.log(car1)
car1.carIsON()
car1.brand = "ferrari"
console.log(car1)

console.log("+++ Propiedades privadas +++")
class PrivatePerosn {
    #bank //Asi se especifica que un dato es privado
    constructor(name, age, alias, bank){
        this.name = name
        this.alias = alias
        this.age = age
        this.#bank = bank //Dato privado
    }
    pay(){
        this.#bank
        console.log("Function ")
    }
};
let subject5 = new PrivatePerosn("Julian", 46, "divino", "Ju345879")
console.log(subject5) //Se muestran todos los datos menos los privados
subject5.pay()
subject5.bank = "this is a different bank"
console.log(subject5)
// No podemos acceder
// console.log(person5.bank) 
// person5.bank = "new IBAN123456789" // bank no es #bank
console.log("+++ Getter and Setter +++")
class GetPerson {
    #name
    #age
    #alias
    #Id
    #bank
    constructor(name, age, alias, Id, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#Id = Id
        this.#bank = bank
    }
    get name(){ //Por medio de un Get podemos acceder al nombre
        return this.#name       
    }
    set name(newBank){
        this.#name = newBank //Se uede modificar el dato privado por medio del set
    } 
};
let subject6 = new GetPerson("Nicolas", 59, "Nico", 1039448690, "bancolombia")
console.log(subject6)
console.log(subject6.name)
subject6.name = "otherbank"
console.log(subject6.name)

/*
Clase 38 - Herencia de clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=17999
*/
console.log("+++ Herencia de clases +++")
class Animal {
    constructor(nombre){
        this.nombre = nombre
    }
    sound (){
        console.log("Make a sound")
    }
};
class Dog extends Animal {

    run(){
        console.log("the dog is running")
    }
};
let mydog = new Dog("Bella")
console.log(mydog)
mydog.sound()
mydog.run()

class Bird extends Animal {
    constructor (name, size){
        super(name)
        this.size =size
    }
    fly(){
        console.log("The bird is flying")
    }
};
let myBird = new Bird("Gallinazi", 10)
console.log(myBird) 
myBird.sound()
myBird.fly()

// Métodos estáticos
class MathOperators {
    static sum(a, b){ //El static nos permite llamar directamente la funcion
        return a + b
    }
};
console.log(MathOperators.sum(5,5))
