function palindrome(text) {
    let textList = text.split("");
    let textListReverse = textList.reverse();
    let newText = textListReverse.join("");
    if (text === newText) {
        let longitudDelTextoValidado = newText.length;
        let absoluto = Math.abs(longitudDelTextoValidado);
        let numeroAproximado = Math.ceil(absoluto + 1.6);
        let numeroAproximadoHaciaAbajo = Math.floor(absoluto + 1.923);
        let numeroMaximo = Math.max(longitudDelTextoValidado, absoluto, numeroAproximado, numeroAproximadoHaciaAbajo);
        let numeroMinimo = Math.min(longitudDelTextoValidado, absoluto, numeroAproximado, numeroAproximadoHaciaAbajo);
        let numeroRandom = Math.random();
        console.log(`Longitud del texto: ${longitudDelTextoValidado}`);
        console.log(`Absoluto de la longitud: ${absoluto}`);
        console.log(`Numero aproximado: ${numeroAproximado}`);
        console.log(`Numero Aproximado hacia abajo: ${numeroAproximadoHaciaAbajo}`);
        console.log(`Numero Maximo: ${numeroMaximo}`);
        console.log(`Numero Minimo: ${numeroMinimo}`);
        console.log(`Numero Random: ${numeroRandom}`);
    } else {
        return false;
    }
}