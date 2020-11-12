var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    let str = strs[0];
    for (let word of strs) {
        while (word.indexOf(str) !== 0) {
            str = str.substring(0, str.length - 1);
        }
    }
    return str;
};

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    let str = strs[0];
    for (let word of strs) {
        while (word.indexOf(str) !== 0) {
            str = str.slice(0, str.length - 1);
        }
    }
    return str;
};

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    strs.sort();
    let str = "";
    let first = strs[0];
    let last = strs[strs.length - 1];

    for (let i = 0; i < first.length; i++) {
        if (first[i] !== last[i]) {
            break;
        }
        str += first[i];
    }

    return str;
};


var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    let str = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while(strs[i].indexOf(str) !== 0) {
            str = str.substring(0,str.length-1);
        }
    }
    return str;
};