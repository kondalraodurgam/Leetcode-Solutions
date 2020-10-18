var countPrimes = function(n) {
    let temp = new Uint8Array(n);
    let arr = [];
    for (let i = 2; i < n; i++) {
        if (!temp[i - 1]) {
            arr.push(i);
            for (let j = i * i; j < n; j += i) {
                temp[j - 1] = true;
            }
        }
    }
    return arr.length;
};