    //Time: O(1)
    //Space: O(1)
    var xorOperation = function(n, start) {
        let last = start + 2 * (n - 1)
        if (start % 4 < 2) {
            start = 0
        } else {
            n -= 1
        }
        if (n % 2 == 0) return start ^ (n & 2);

        return start ^ last ^ (n & 2)
    };

    //Time O(n)
    //Space O(1)

    var xorOperation = function(n, start) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr[i] = start + 2 * i;
        }
        return arr.reduce((acc, cur) => acc ^ cur, 0);
    };
    var xorOperation = function(n, start) {
        let bitwiseXor = 0;
        for (let i = 0; i < n; i++) {
            bitwiseXor ^= start + 2 * i;
        }
        return bitwiseXor;
    };
    var xorOperation = function(n, start) {
        let bitwiseXor = start;
        for (let i = 1; i < n; i++) {
            bitwiseXor ^= start + 2 * i;
        }
        return bitwiseXor;
    };