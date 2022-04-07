//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

//Solution
function removeEveryOther(arr){
  let newA = []
  for (let i=0; i<arr.length; i+=2){
      newA.push(arr[i])
    }
    return newA
}

//Other solution
function removeEveryOther(arr){
    return arr.filter((_, idx) => idx % 2 === 0);
  }

//Another solution
const removeEveryOther = arr => arr.filter((_, i) => !(i % 2));