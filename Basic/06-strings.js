/*
Clase 21 - Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=6565
*/

// Strings (cadenas de texto)

// Concatenación

let myName = 'Daniel'
let greeting = 'Hola, ' + myName + ' !';
console.log(greeting)
console.log(typeof greeting)

//Longitud de mi string

console.log(greeting.length)

// Acceso a la caderna de texto
console.log(greeting [0])
console.log(greeting[2])
console.log(greeting[13])

//Metodos Comunes
console.log(greeting.toUpperCase())// Pone el texto en mayusculas
console.log(greeting.toLowerCase())// pone el texto en minuscuals
console.log(greeting.indexOf('Daniel'))// imprime el indice donde encuentra la palabra daniel
console.log(greeting.includes('Daniel'))// verivica si esta palabra esta en el string
console.log(greeting.includes('andrea'))
console.log(greeting.replace('Daniel', 'Andrea'))

let yourName = 'Lina'
let otherName = 'Daniel'
let newMessage = `Hola ${yourName}, te quieres casar con ${otherName}`
console.log(newMessage)

console.log(newMessage.toLocaleLowerCase())
console.log(newMessage.toLocaleUpperCase())
console.log(newMessage.indexOf('casar'))
console.log(newMessage.includes('bella'))
console.log(newMessage.includes('Lina'))
console.log(newMessage.length)
console.log(newMessage.replace('Lina', 'Yesenia'))
console.log(newMessage)
console.log(newMessage.slice(3, 10))// muestra las letras que hay entre el 3 y el 9 sin incluir el 10

let otherMessage = `${yourName} y ${otherName}, aman mucho a su perrita`
console.log(otherMessage.length)
console.log(otherMessage.slice(0, 20))
console.log(otherMessage.indexOf ('perrita'))
console.log(otherMessage.includes('bella'))
console.log(otherMessage.replace('perrita','bella'))
console.log(otherMessage)
console.log(otherMessage.toLocaleUpperCase())
console.log(otherMessage.includes(`daniel`)) 
console.log(otherMessage.includes(`Daniel`))

let sport = 'Paragliding'
let who = 'Daniel'
let when = 'Weekends'
let add = `${who}, loves ${sport} every${when}` //a este modo de concatenar strings se le llama interpolar
console.log(add.slice(3, 11))
console.log(add.length)
console.log(add.toLocaleUpperCase())
console.log(add.indexOf('Paragliding'))
console.log(add.includes('Daniel'))
console.log(add.includes('futbol'))
console.log(add.replace('Paragliding', 'futbol'))// cambia la primera palabra, por la segunda
console.log(add)

//Templates literal
let warning = `Hola
puedo escribir Texto en  varias lineas` //Con las conmillas invertidas podemos escribir texto en varias lineas
console.log(warning)


