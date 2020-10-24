var canBeEqual = function(target, arr) {
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);
    let mid = Math.floor(arr.length / 2)
    for (let i = 0; i <= mid; i++) {
        if (target[i] !== arr[i] || target[target.length - 1 - i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};


var canBeEqual = function(target, arr) { 
   return target.sort((a,b)=> a - b).join('') === arr.sort((a,b) => a - b).join('');
};