const calcularVelocidad = (distancia, tiempo) => {
    const velocidad = distancia / tiempo;
    console.log(`La velocidad del movil es ${velocidad}`);
    return velocidad;
}

const velocidad1 = calcularVelocidad(10, 2);
console.log("La velocidad de Juana es: " + velocidad1);
const velocidad2 = calcularVelocidad(60, 3);
console.log("La velocidad de persona1 es: " + velocidad2);
const velocidad3 = calcularVelocidad(20, 5);
console.log("La velocidad de persona2 es: " + velocidad3);