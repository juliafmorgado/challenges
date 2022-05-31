// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

//Solution

function remove(string) {
    // PREP
    // (P)arameter:  a string of words
    // (R)eturn: words without exactly one "!"
    // (E)xamples: ("Hi! Hi!") => ""; ("Hi Hi! Hi!) => "Hi"
    // (P)seuducode: 
    // Make string iterable
    let strArr = string.split(" ")
    let newStrArr = []
    for (let i = 0; i < strArr.length; i++) {
        // if the str element has a number of "!" different than 1
        if ((strArr[i].split("").filter(e => e == "!").length != 1)) {
            // Add it to the new array
            newStrArr.push(strArr[i])
        }
    }
    let newStr = newStrArr.join(" ")
    return newStr
}
