class Calculator {
    add(a,b) {
        return a + b;
    }
    substract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            return "Error: No se puede dividir por cero";
        }
        return a / b;
    }
    squareRoot(a) {
        return Math.sqrt(a);
    } 
    cubeRoot(a) {
        return Math.cbrt(a);
    }
    power(a,b) {
        return Math.pow(a, b);
    }
}

function startCalculator() {
    const calculator = new Calculator();
    const operation = prompt("Elige la operacion: (sumar, restar, multiplicar, dividir, raiz cuadrada, raiz cubica, potencia").toLowerCase();
    if (operation === "sumar") {
        const num1 = parseFloat(prompt("Ingresa el primer operando: "));
        const num2 = parseFloat(prompt("Ingresa el segundo operando: "));
        const result = calculator.add(num1, num2);
        alert("El resultado es: " + result);
    } else if (operation === "restar") {
        const num1 = parseFloat(prompt("Ingresa el primer operando: "));
        const num2 = parseFloat(prompt("Ingresa el segundo operando: "));
        const result = calculator.substract(num1, num2);
        alert("El resultado es: " + result);
    } else if (operation === "multiplicar") {
        const num1 = parseFloat(prompt("Ingresa el primer operando: "));
        const num2 = parseFloat(prompt("Ingresa el segundo operando: "));
        const result = calculator.multiply(num1, num2);
        alert("El resultado es: " + result);
    } else if (operation === "dividir") {
        const num1 = parseFloat(prompt("Ingresa el primer operando: "));
        const num2 = parseFloat(prompt("Ingresa el segundo operando: "));
        const result = calculator.divide(num1, num2);
        alert("El resultado es: " + result);
    } else if (operation === "raiz cuadrada") {
        const num1 = parseFloat(prompt("Ingresa el numero: "));
        const result = calculator.squareRoot(num1);
        alert("El resultado es: " + result);
    } else if (operation === "raiz cubica") {
        const num1 = parseFloat(prompt("Ingresa el primer operando: "));
        const result = calculator.cubeRoot(num1);
        alert("El resultado es: " + result);
    } else if (operation === "potencia") {
        const num1 = parseFloat(prompt("Ingresa la base: "));
        const num2 = parseFloat(prompt("Ingresa el exponente: "));
        const result = calculator.power(num1, num2);
        alert("El resultado es: " + result);
    } else {
        alert("Operacion no valida");
    }
}

startCalculator();