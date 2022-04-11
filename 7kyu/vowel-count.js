// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//Solution
function getCount(str) {
    var vowelsCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' ||
            str[i] === 'i' || str[i] === 'o' ||
            str[i] === 'u') {
            vowelsCount++;
        }
    }

    return vowelsCount;
}

//Solution2
function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}

//Solution3
function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                vowelsCount++;
            }
        }
    }

    return vowelsCount;
}