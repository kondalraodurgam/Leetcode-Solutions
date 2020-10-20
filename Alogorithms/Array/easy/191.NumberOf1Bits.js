var hammingWeight = function(n) {
    let s = n.toString(2);
    let map = new Map();
    for (let n of s) {
        map.set(n, map.get(n) + 1 || 1);
    }
    for (let [key, value] of map) {
        if (key === "1") {
            return value;
        }
    }
    return 0;
}

var hammingWeight = function(n) {
    let arr = n.toString(2);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "1") {
            count++
        }
    }
    return count;
}
var hammingWeight = function(n) {
    var total = 0;
    while (n > 0) {
        total += n % 2;
        n >>>= 1;
        //Or
        // n = Math.floor(n/2)
    }
    return total;
}
var hammingWeight = function(n) {
    let arr = n.toString(2);
    console.log(arr);
    for (let x of arr) {
        if (x === '1') {
            count++;
        }
    }
    return count;
}


var hammingWeight = function(n) {
    let cnt = 0
    while (n) {
        cnt++;
        n &= n - 1;
    }
    return cnt;
}



var hammingWeight = function(n) {
    let total = 0;
    while (n > 0) {
        total n &= n - 1;
        n >>>= 1
    }
    return total;
}
var hammingWeight = function(n) {
    return (n >>> 0).toString(2).split ``.filter((el) => el === '1').length;
}