/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map se crean datos por pares (clave y dato)

// Declaración
let myMap = new Map()
console.log(myMap)


// Inicialiación 
console.log('++++++Inicializando Cinco mapas++++++++++')
myMap = new Map([
    ['Brand', 'Ozone'],
    ['name', 'Daniel'],
    ['age', 36],
    ['adress', 'Cr 75da']
])
console.log(myMap)
console.log('____________________________________-')
let myMAp2 = new Map([
    ['City', 'Medellín'],
    ['Country', 'Colombia'],
    ['Neighberhood', 'Ditaires']
])
console.log(myMAp2)
console.log('_________________________________________________')
let myMap3 = new Map([
    ['Brand Glider', 'Ozone'],
    ['Level', 'EN C'],
    ['Reference', 'Swift 5'],
    ['Color', 'Purple & red']
])
console.log(myMap3)
console.log('______________________________________________________')
let myMap4 = new Map([
    ['University', 'Cesde'],
    ['School', 'San Marcos'],
    ['Work Name', 'Emtelco']
])
console.log(myMap4)

// Métodos y propiedades
// set
console.log('++++++El metodo Set++++++++')
myMap.set('alias', 'fourloquillo')
myMap.set('Email', 'Daniel@gmail.com')
myMap.set('name', 'lina') //Si trato de poner  otro nombre con la misma clave, solo cambia el nombre, no se añade otro
console.log(myMap)
console.log('----------------------------------------------')
myMAp2.set('Neighberhood', 'La mota') //Si pongo la misma clave, se modifica su valor inicial
myMAp2.set('Number', 5)
console.log(myMAp2)
console.log('_____________________________________________________________________-')
myMap3.set('Second glider', 'Argos')
console.log(myMap3)
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

// get
console.log('++++++++Metodo get++++++++') //El metodo get busca unicamente las claves, no los elementos asociados e estas
console.log(myMap4.get('University'))
console.log(myMap4.get('Work Name'))
console.log(myMap3.get('Level'))
console.log(myMap3.get('EN C'))// no Ubica Elementos, solo claves
console.log('____________________________________________________________________')

// has
console.log('+++++++ Metodo Has +++++++++++') // Devuelve True or False si la clave q buscas esta o no en el mapa
console.log(myMap.has('Brand'))
console.log(myMap.has('Adress')) //la clave tiene que ser identicamente copiada
console.log(myMap)
console.log('________________________________________________-')
console.log(myMap4.has('School'))
console.log(`El valor de la escuela es ${myMap4.get('School')} y el se encuentra en la lista ${myMap4.has('School')}`)
console.log('_____________________________________________________________________________________________________-')

// delete
console.log('++++++ Metodo Delete +++++++++') //borra la dupla de la llave que escojamos
myMap3.delete('Second glider')
myMap3.delete('Level')
console.log(myMap3)
console.log('____________________________________________________________')

//clear
console.log('+++++ Metodo clear +++++++') // lo uso para borrar todo lo que esta en el mapa
myMap4.clear()
console.log(myMap4)
console.log('________________________________________________________________')

// keys
console.log('++++ Metodo Keys ++++++')//devuelve listado de las keys del mapa
console.log(myMap.keys())
console.log(myMap4.keys())
console.log(myMap3.keys())
console.log('____________________________________________-')
// size
console.log('+++++++ Metodo size +++++++++')// muestra el tamaño del mapa
console.log(myMap3.size)
console.log(myMap4.size)
console.log(myMAp2.size)
console.log('______________________________________________-')
console.log('++++ Metodo Values ++++++++')// devuelve los valores sin las claves
console.log(myMap.values())
console.log(myMAp2.values())
console.log(myMap3.values())
console.log(myMap4.values())
console.log('__________________________________________________________________________-')
//Entries
console.log('+++++ Metodo Entries +++++')//muestra las entrada o la dupla completa
console.log(myMap.entries())
console.log(myMAp2.entries())
console.log(myMap3.entries())
console.log(myMap4.entries())
console.log('___________________________________________________________________')

// clear
console.log('++++++++ borrar el mapa +++++++')
myMAp2.clear()
console.log(myMAp2)






