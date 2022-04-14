// n this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


//My solution

// function highAndLow(numbers){
//   let strArr = numbers.split(' ')
//   let numArr = strArr.map(Number)
//   let max = Math.max(...numArr)
//   let min = Math.min(...numArr)
//   let newA = [max, min]
//   return newA.join(' ')
// }

function highAndLow(numbers){
    let arr = (numbers.split(' ')).map(Number)
      let max = Math.max(...arr)
    let min = Math.min(...arr)
    return [max, min].join(' ')
  }

//Simpler way
function highAndLow(numbers){
    let newNumbers = numbers.split(' ');
    return `${Math.max(...newNumbers)} ${Math.min(...newNumbers)}`;
  }