/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let luckyValue = -1;
    var map = new Map();
    for (let n of arr) {
        map.set(n, map.get(n) + 1 || 1);
    }
    for (let [key, value] of map) {
        if (key === value) {
            if (value > luckyValue) {
                luckyValue = value;
            }
        }
    }
    return luckyValue;
};