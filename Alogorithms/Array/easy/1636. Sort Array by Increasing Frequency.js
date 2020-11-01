
var frequencySort = function(nums) {
    const map = new Map();
    for (let n of nums) {
        map.set(n, (map.get(n) + 1) || 1);
    }
    return nums.sort((a, b) => map.get(a) - map.get(b) || b - a)
};