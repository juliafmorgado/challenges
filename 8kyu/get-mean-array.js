// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//Solution
let getAverage = marks => Math.floor(marks.reduce((acc, c) => acc + c, 0) / marks.length)

//It is the same as:
function getAverage(marks) {
    let total = marks.reduce((acc, c) => acc + c, 0) / marks.length
    return Math.floor(total)
}