var reverseString = function(s, i = 0, j = s.length - 1) {
    while (i <= j) {
        [s[i], s[j]] = [s[j], s[i]];
        return reverseString(s, i + 1, j - 1)
    }
};

var reverseString = function(s, i = 0, j = s.length - 1) {
    if (i >= j) return s;
    [s[i], s[j]] = [s[j], s[i]];
    reverseString(s, i + 1, j - 1)
};


var reverseString = function(s) {
    function recursiveString(left, right) {
        if (left < right) {
            [s[left], s[right]] = [s[right], s[left]];
            recursiveString(left + 1, right - 1);
        }
    }
    recursiveString(0, s.length - 1)
};


var reverseString = function(s) {
    for (var i = 0; i < Math.floor(s.length / 2); i++) {
        [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]]
    }
};

var reverseString = function(s) {
    s.reverse();
}