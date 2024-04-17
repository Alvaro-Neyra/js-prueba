const comprar = () => {
    let totalAPagar = 0;
    for (let i = 1; i <= 3; i++) {
        const nombre = prompt("Que producto deseas llevar?");
        const cantidad = Number(prompt("Cuantas unidades?"));
        const precio = Number(prompt("Cuanto sale cada unidad?"));
        const subTotal = cantidad * precio;
        totalAPagar = totalAPagar + subTotal;
    }
    console.log(totalAPagar);
    return totalAPagar;
}

const total1 = comprar();
const total2 = comprar();
const total3 = comprar();

const total = total1 + total2 + total3;

// const total = comprar() + comprar() + comprar();