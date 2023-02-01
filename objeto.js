/*
Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/

const yo = {
    nombre: 'Alex',
    apellido: 'Pino',
    edad: 22,
    altura: 172,
    eresDesarrollador: true
}

let edad = yo.edad;

let amigos  = [ yo ];
amigos.push({
    nombre: 'Mauro',
    edad: 23
})
amigos.push({
    nombre: 'Esteban',
    edad: 21
})

let amistades = amigos.map((obj) => obj);
amistades.sort((a, b) => a.edad - b.edad)
