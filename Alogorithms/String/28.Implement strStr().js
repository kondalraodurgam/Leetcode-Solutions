var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    if (haystack.length === 0) return -1;

    for (let i = 0; i < haystack.length; i++) {
        if (i + needle.length > haystack.length) break;

        for (let j = 0; j < needle.length; j++) {
            if (haystack.charAt(i + j) !== needle.charAt(j)) {
                break;
            }

            if (j === needle.length - 1) return i;
        }
    }

    return -1;
};