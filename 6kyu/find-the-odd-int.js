// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//My solution
function findOdd(A) {
    //runs two nested loops
    // outer loop picks all elements one by one
    for(let i = 0; i < A.length; i++) {
      let count = 0;
    //inner loop counts the number of occurrences of the element picked by the outer loop  
      for (let j = 0; j < A.length; j++) {
        if(A[i] == A[j]) {
          count++;
        }
      }
      if (count % 2 != 0) {
        return A[i];
      }
    }
    return -1;
  }

//Other solution using Bitwise XOR operator
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


//Another solution
function findOdd(A) {
  for(var i = 0; i < A.length; i++){  
    //Query the number of times that this 'i' element appears
    //then verify if that number of times is odd. If it is true, then return
    //that 'i' element
    if((A.filter(function(item){return item == A[i]; })).length % 2 != 0){
      return A[i];
    }
  }
  return 0;
}