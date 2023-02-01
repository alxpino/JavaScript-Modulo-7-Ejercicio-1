/*
Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

- Un nuevo Set con los nombres de tu familia

- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;) 
*/
let mi_familia = ['Alex', 'Mamá', 'Papá', 'Hermana']
let familia = new Set(mi_familia);
console.log(familia)

familia.add('Alex');
console.log(familia);

familia.add('JavaScaript');
console.log(familia)
