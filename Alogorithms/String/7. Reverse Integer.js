/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let value = Number(Math.abs(x).toString().split('').reverse().join(''));
    if (value > Math.pow(2, 31)) return 0
    return value * Math.sign(x);
};