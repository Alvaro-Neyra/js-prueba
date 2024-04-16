let totalAPagar = 0;
let cantidad = 1;
for (let i = 0; i <= cantidad; i++) {
    const nombre = prompt("Que producto deseas llevar?");
    const cantidad = Number(prompt("Cuantas unidades?"));
    const precio = Number(prompt("Cuanto sale cada unidad?"));
    const subTotal = cantidad * precio;
    totalAPagar += subTotal;
}
alert(`El total a pagar es: ${totalAPagar}`);