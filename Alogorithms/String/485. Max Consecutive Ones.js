var findMaxConsecutiveOnes = function(nums) {
    let minNumOfConsOnes = 0;
    let maxNumOfConsOnes = 0;
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] === 1) {
            minNumOfConsOnes++
        } else {
            if (maxNumOfConsOnes < minNumOfConsOnes) {
                maxNumOfConsOnes = minNumOfConsOnes;
            }
            minNumOfConsOnes = 0;
        }
    }
    return maxNumOfConsOnes;
};

var findMaxConsecutiveOnes = function(nums) {

    let min = 0,
        max = 0;
    for (let n of nums) {
        max = Math.max(max, min = n === 0 ? 0 : min + 1);
    }
    return max;
}

var findMaxConsecutiveOnes = function(nums) {
    var minNum = 0;
    var maxNum = 0;
    for (var i = 0; i <= nums.length; i++) {
        if (nums[i] === 1) {
            minNum++;
        } else {
            maxNum = Math.max(maxNum, minNum);
            minNum = 0;
        }
    }
    return maxNum;
};