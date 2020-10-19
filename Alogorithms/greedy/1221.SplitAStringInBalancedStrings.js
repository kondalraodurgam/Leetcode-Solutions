var balancedStringSplit = function(s) {
    let rCount = 0;
    let lCount = 0;
    let maxBalStr = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            rCount++;
        } else if (s[i] === 'L') {
            lCount++;
        }
        if (rCount === lCount) {
            maxBalStr++;
            rCount = 0;
            lCount = 0;
        }
    }
    return maxBalStr;
};

var balancedStringSplit = function(s) {
    let val, res = 0;
    for (let x of s) {
        x === 'R' ? val++ : val--;
        if (val === 0) res++;
    }
    return res;
};