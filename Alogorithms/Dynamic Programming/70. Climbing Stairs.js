let map = new Map();
var climbStairs = function(n) {
    if (n < 3) return n;
    if (!map.get(n)) {
        map.set(n, climbStairs(n - 1) + climbStairs(n - 2));
    }
    return map.get(n);
};


var climbStairs = function(n) {
    a = b = 1
    while (n--)
        a = (b += a) - a
    return a
};

let map = {};
var climbStairs = function(n) {
    if(n < 3) return n;
    if(!map[n]) {
        map[n] = climbStairs(n-1) + climbStairs(n-2);
    }
    return map[n];
};

var climbStairs = function(n) {
    if (n < 3 ) return n;
    let arr = [1,2];
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[arr.length-1];
};