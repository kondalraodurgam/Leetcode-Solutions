var majorityElement = function(nums) {
    let map = new Map();
    let mid = Math.floor(nums.length / 2);
    for (let n of nums) {
        map.set(n, map.get(n) + 1 || 1);
    }
    for (let [key, value] of map) {
        if (value > mid) {
            return key;
        }
    }
};