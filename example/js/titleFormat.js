function titleFormat(text) {
    // Primera letra
    let primerChar = text.charAt(0);
    let substring = text.slice(1, text.length);
    primerChar = primerChar.toUpperCase();
    substring = substring.toLowerCase();
    let textFormat = primerChar + substring;
    return textFormat;
}

console.log(titleFormat("hello world"));
console.log(titleFormat("HELLO world"));
console.log(titleFormat("Hello WOrld")) // deben imprimir "Hello world"