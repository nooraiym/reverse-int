module.exports = function reverse (n) {
    const str = n.toString()
    const reversedStr = str.split('').reverse().join('');
    return parseInt(reversedStr, 10);
}
