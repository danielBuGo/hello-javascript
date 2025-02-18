/*
Clase 17 - Tipos de datos
Vídeo: https://youtu.be/1glVfFxj8a4?t=3599
*/

// Tipos de datos primitivos

// Stings
let sport = 'Paragliding ';
let favoriteBrand = 'Ozone';
let level = 'EN C'
console.log(sport + favoriteBrand );

// Numbers
let age = 36;
let hight = 1.70;
let weigth = 73.5;
console.log(age)

//Boolean
let heIsInstructor = false;
let heIsPilot = true;
console.log(heIsPilot);

// Undefined
let undifinedValue 
console.log(undifinedValue);

//Null
let nullData = null;
console.log(nullData);

//BigInt

let myBigInt = BigInt(72348975928437957297547928753278279075489237854);
console.log(myBigInt);
let myBigInt2 = 273472789589247895789275982734895732897543289787328n;
console.log(myBigInt2);

// Symbol

let mySymbol = Symbol("mySymbol"); //estos simbolos son utiles como identificadores de propiedades ( objetos), mas adelante se ve.

console.log(typeof sport);
console.log(typeof age);
console.log(typeof heIsInstructor);
console.log(typeof myBigInt);
console.log(typeof mySymbol);
console.log(typeof undifinedValue);
console.log(typeof nullData);



