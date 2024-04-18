function lenghtOf(text) {
    let longitudDeLaCadena = text.length;
    if (text === "") {
        alert("Invalid Input");
        return 0;
    } 
    return longitudDeLaCadena;
}

console.log(lenghtOf("Hola, amigos"));
console.log(lenghtOf(""));
console.log(lenghtOf("CHAU AMIGOS"));