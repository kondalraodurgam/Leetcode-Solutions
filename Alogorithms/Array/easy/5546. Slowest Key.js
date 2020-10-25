var slowestKey = function(releaseTimes, keysPressed) {
    releaseTimes.unshift(0)
    let str = ""
    let min = 0;
    let max = 0;
    for (let i = 1; i < releaseTimes.length; i++) {
        max = releaseTimes[i] - releaseTimes[i - 1];
        if (max > min) {
            str = keysPressed[i - 1]
        } else if (max === min) {
            if (str < keysPressed[i - 1]) {
                str = keysPressed[i - 1];
            }
        }
        if (max > min) {
            min = max;
        }

    }
    return str;
};


var slowestKey = function(releaseTimes, keysPressed) {
    let index = 0, maxVal = releaseTimes[0];
    for (var i = 1; i < keysPressed.length; i++) {
        if ((releaseTimes[i] - releaseTimes[i - 1]) >= maxVal) {
            maxVal = (releaseTimes[i] - releaseTimes[i - 1]);
            index = i;
        }
    }

    return keysPressed[index];
};