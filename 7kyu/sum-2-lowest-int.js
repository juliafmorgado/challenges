// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

//My solution
function sumTwoSmallestNumbers(numbers) {  
    return numbers
    .sort((a,b) => a-b)
    .slice(0, 2)
    .reduce((acc, c) => acc + c, 0)
  }

  //Simpler solution
  function sumTwoSmallestNumbers(numbers) {  
    var [ a, b ] = numbers.sort((a, b) => a - b)
    return a + b
  }