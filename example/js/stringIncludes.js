function stringIncludes(text1, text2) {
    if (text2.includes(text1) === true) {
        return true;
    } else {
        return false;
    }
}

console.log(stringIncludes("elo", "Hello")); // Imprimir false
console.log(stringIncludes("he", "hello world")); // Imprimir true