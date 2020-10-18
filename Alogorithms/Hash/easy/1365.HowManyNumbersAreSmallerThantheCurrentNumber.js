var smallerNumbersThanCurrent = function(nums) {
    var sortedArray = [...nums].sort((a, b) => { return a - b });
    return nums.map((num) => {
        return sortedArray.indexOf(num);
    })
};



var smallerNumbersThanCurrent = function(nums) {
    var arr = [];
    for (var i = 0; i < nums.length; i++) {
        arr[i] = 0;
        for (var j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                arr[i] += 1;
            }

        }
    }
    return arr;
};