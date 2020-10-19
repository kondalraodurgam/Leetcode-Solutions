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