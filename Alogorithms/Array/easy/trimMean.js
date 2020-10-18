
//Time O(n) Space O(1)
var trimMean = function(arr) {
    let n = arr.length,
        k = 0.05 * n;
    arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = k; i < n - k; i++) {
        sum += arr[i];
    }
    return sum / (n - 2 * k);
};


//Time O(n) Space O(1)
var trimMean = function(arr) {
    arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = arr.length / 20; i < arr.length - arr.length / 20; i++) {
        sum += arr[i];
    }
    return sum / (arr.length - arr.length / 10);
};

//Time O(n) Space O(1)
var trimMean = function(A) {
    let N = A.length;

    A.sort((a, b) => a - b);

    let fivePercent = (5 * N) / 100;
    let nintyFivePercent = (95 * N) / 100;

    let sum = 0;
    for (let i = fivePercent; i < nintyFivePercent; i++) {
        sum += A[i];
    }

    return (sum * 100) / (90 * N);
};

//Time O(n) Space O(1)
var trimMean = (arr) => arr.sort((a, b) => a - b).slice(arr.length * 0.05, arr.length * 0.95).reduce((acc, val) => acc + val, 0) / (arr.length * 0.9).toFixed(5);