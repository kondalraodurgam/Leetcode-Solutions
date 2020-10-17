//My first solution.

var distributeCandies = function(candies) {
    let set = new Set(candies)
    let sisCount = 0;
    for (let i = 0; i < candies.length; i += 2) {
        sisCount++;
    }
    return sisCount > set.size ? set.size : sisCount;
};
//Code Optimization

var distributeCandies = function(candies) {
    let set = new Set(candies);
    return candies.length / 2 > set.size ? set.size : candies.length / 2;
};
//Finally

var distributeCandies = function(candies) {
    return Math.min(new Set(candies).size, candies.length / 2);
};