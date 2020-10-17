// Solution  O(n)
var twoSum = function(nums, target) {
    var map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i];
        }
        map.set(comp, i);
    }
};

// Solution  O(n)
var twoSum = function(nums, target) {
    var comp = {};
    for (var i = 0; i < nums.length; i++) {
        if (comp[nums[i]] >= 0) {
            return [comp[nums[i]], i];
        }
        comp[target - nums[i]] = i;
    }
};

// Solution  O(n^2)
var twoSum = function(nums, target) {
    var minValue = 0;
    for (var i = 1; i < nums.length; i++) {
        if (nums[minValue] + nums[i] === target) {
            return [minValue, i];
        } else if (i === nums.length - 1) {
            minValue++;
            i = minValue;
        }
    }
};
