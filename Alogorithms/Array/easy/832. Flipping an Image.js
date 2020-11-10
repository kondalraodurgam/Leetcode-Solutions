var flipAndInvertImage = function(A) {
    return A.map((a) => a.reverse().map((b) => b === 0 ? 1 : 0));
};