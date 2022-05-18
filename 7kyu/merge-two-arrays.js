// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]

//My solution
function mergeArrays(a, b) {
  let c = a.concat(b)
  let result = []
  //loop through both arrays
  for (let i=0; i<=c.length; i++){
    result.push(a[i] , b[i])
} //filter out the undefined values
  return result.filter((e) => e!==(undefined))
  }
