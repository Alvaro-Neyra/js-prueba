function palindrome(text) {
    let textList = text.split("");
    let textListReverse = textList.reverse();
    let newText = textListReverse.join("");
    if (text === newText) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome("hello")); // false
console.log(palindrome("hannah")); // true