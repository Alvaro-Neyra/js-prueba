const frase = prompt("Ingrese una palabra o frase");
const cantidadDeLetras = frase.length;
const mensajeCantidad = "La cantidad de letras que tiene tu frase es de: " + cantidadDeLetras;
console.log(mensajeCantidad);
/* Actividad 2: */
const fraseMinusculas = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();
const minMay = "Este es el resultado de la actividad 2: " + fraseMinusculas + " " + fraseMayusculas;
console.log(minMay);