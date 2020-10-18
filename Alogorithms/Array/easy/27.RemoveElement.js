var removeElement = function(nums, val) {
    let i = 0,
        j = 0;
    for (let n of nums) {
        if (n !== val) {
            nums[i] = n;
            i++;
        } else {
            j++;
        }
    }
    return nums.length - j;
};



var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
};