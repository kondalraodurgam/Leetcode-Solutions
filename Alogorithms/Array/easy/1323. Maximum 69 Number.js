var maximum69Number  = function(num) {
    var a = "";
    var str = num.toString();
    for (var i = 0; i < str.length;i++) {   
        if (str[i] === "6") {
            var a = str.replace(str[i],"9");
        }
    }
    return a.length > 0 ? +a : num;
};