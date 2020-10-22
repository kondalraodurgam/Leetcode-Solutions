var average = function(salary) {
    salary.sort((a, b) => a - b);
    let arr = [];
    for (let i = 1; i < salary.length - 1; i++) {
        arr.push(salary[i]);
    }
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
};

var average = function(salary) {
    salary.sort((a, b) => a - b);
    return salary.slice(1, salary.length - 1).reduce((acc, cur) => acc + cur, 0) / (salary.length - 2);
};

var average = function(salary) {
    let min = Math.min(...salary)
    let max = Math.max(...salary)
    return salary.reduce((a,c)=> c !== min && c !== max ? a + c : a,0)/(salary.length - 2)  
};

var average = function(salary) {
    salary.sort((a, b) => a - b);
    let sum = 0;
    let len = 0;
    for (let i = 1; i < salary.length - 1; i++) {
        sum += salary[i];
        len++;
    }
    return sum / len;
};

var average = function(salary) {
    salary.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 1; i < salary.length - 1; i++) {
        sum += salary[i];
    }
    return sum / (salary.length - 2);
};