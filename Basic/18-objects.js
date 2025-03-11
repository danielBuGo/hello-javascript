/*
Clase 33 - Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=14229
*/

// Objetos

// Sintaxis
let person = {
    name: "Daniel",
    age: 36,
    email: "danielb@gmail.com"
}
// Acceso a propiedades

// Notación punto
console.log(person.email)
// Notación de corchetes
console.log(person["age"])


// Modificación de propiedades
person.name = "Bella"
console.log(person.name)
person.email = "dabugo@hotmail.com"
console.log(person.email)
// Eliminación de propiedades
delete person.age
delete person.email
console.log(person)
// Nueva propiedad
person.age = 36
person["LastName"] = "Builes"
person["Adress"] = "Cr 75Da 2B sur 50"
person.doesHeHaveDog = true
console.log(person)
// Métodos (funciones)
console.log("_____________________")
let person2 ={
    name: "Angulo",
    age: 42,
    lastName: "Cuchei",
    email: "elcuchei@gmail.com",
    walk: function(){
        console.log("this guy is walking")
    }
};
person2.walk()
// Anidación de objetos
console.log("___________________")
let person3 ={
    name: "Luz",
    age: 42,
    lastName: "gomez",
    email: "elcuchei@gmail.com",
    walk: function(){
        console.log(`Miss ${this.name}  ${this.lastName} is great`)
    },
    job: {
        name: "Visa manager",
        exp: 5,
        work: function(){
            console.log(`This person has ${this.exp} years of experience`)
        }
    }
};

person3.walk()
console.log(person3.name)
console.log(person3.job)
person3.job.work()
console.log("______________________")
// Igualdad de objetos
let person4 = {
    name: 'Bella',
    age: 36,
    LastName: 'Builes',
    Adress: 'Cr 75Da 2B sur 50',
    doesHeHaveDog: true
};
console.log(person)
person3.walk()
console.log(person4)
console.log(person == person4)
console.log(person === person4)
console.log(person.name == person4.name)
// Iteración
for (let key in person4) {
    console.log(key + ": " + person4[key])    
}

// Funciones como objetos
function Person(name, age){ //Debería ser una clase
    this.name = name
    this.age = age
}
console.log("_____________________________")
let person5 = new Person("Lina", 36)
console.log(person5)
person5.name





