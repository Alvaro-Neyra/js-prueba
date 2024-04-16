const cantidad = Number(prompt("Cuantos numeros deseas sumar?"));
let sumatoria = 0;
let numero = 0;
for (let i = 1; i <= cantidad; i++) {
    numero = Number(prompt(`Ingresa el numero en la posicion ${i}`));
    sumatoria += numero;
}
alert(`La sumatoria total es: ${sumatoria}`);