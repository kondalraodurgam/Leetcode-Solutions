var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};
//Recursive

function searchInsert(nums, target) {

    function recursive(left, right) {
        if (left > right) return left;
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] > target) return recursive(left, mid - 1);
        if (nums[mid] < target) return recursive(mid + 1, right);
    }

    return recursive(0, nums.length - 1);
};