// Importar biblioteca completa
// const lodash = require('lodash');
// console.log(lodash);

// Importar arquivo completo
// const array = require('./array.js');

// Importar arquivo desestruturado
const {arrayNumeros, arrayLetras} = require('./array.js')

// Importar função da biblioteca desestruturado
const {uniq} = require('lodash');

console.log(uniq(arrayNumeros));
console.log(uniq(arrayLetras));
