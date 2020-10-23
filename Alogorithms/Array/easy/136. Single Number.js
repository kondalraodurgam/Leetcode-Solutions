const singleNumber = function(nums) {
    let map = new Map();
    for (let n of nums) {
        map.set(n, map.get(n) + 1 || 1);
    }
    for (let num of map) {
        if (num[1] === 1) {
            return num[0];
        }
    }
};