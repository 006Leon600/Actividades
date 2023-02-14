let informacion = require('./clientes');
let vacante = require('./profeciones');
let v1 = vacante[Math.floor(Math.random()*(6-1)+1)]
let v2 = informacion.informacion[Math.floor(Math.random()*(5-1)+1)]

console.log(Object.assign(v1,v2));

// let informacion = require('./clientes');
// let vacante = require('./profeciones');
// let dato1= vacante[Math.floor(Math.random()*(6-1)+1)];
// console.log(dato1);
// console.log(informacion.informacion[Math.floor(Math.random()*(5-1)+1)]);
// console.log(Array.from(vacante[1]));