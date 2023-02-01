/*
Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

/*
Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

let hoy = new Date("2/1/2023") 
console.log(hoy)
let nacimiento = new Date("8/25/2000");
console.log(nacimiento)
let hoyEsPosterior = nacimiento < hoy;
console.log(hoyEsPosterior);
let diaNacimiento = nacimiento.getDate();
console.log(diaNacimiento);
let mesNacimiento = nacimiento.getMonth() + 1;
console.log(mesNacimiento);
let anioNacimiento = nacimiento.getFullYear();
console.log(anioNacimiento);
