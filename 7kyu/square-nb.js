// Given an integral number, determine if it's a square number:

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 27  =>  false

//Solution
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }

//Solution
const isSquare = n => Number.isInteger(Math.sqrt(n));