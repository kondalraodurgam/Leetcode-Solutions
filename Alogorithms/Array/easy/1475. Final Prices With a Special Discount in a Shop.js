/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let arr = [];
    let min = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[min] >= prices[i]) {
            arr.push(prices[min] - prices[i]);
            min++;
            i = min;
        } else if (i === prices.length - 1) {
            arr.push(prices[min]);
            min++;
            i = min;
        }
    }
    arr.push(prices[prices.length - 1]);
    return arr;
};