// Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

// The inputs will always be two positive integers between 2 and 99.

// Examples
// 20 and 27:

// Factors of 20: 1, 2, 4, 5, 10, 20
// Factors of 27: 1, 3, 9, 27
// Greatest shared factor: 1
// Result: 20 and 27 are coprime
// 12 and 39:

// Factors of 12: 1, 2, 3, 4, 6, 12
// Factors of 39: 1, 3, 13, 39
// Greatest shared factor: 3
// Result: 12 and 39 are not coprimes


//My solution
function isCoprime(x, y) {
  let factorsX = [], factorsY = []
  for (let i=1; i<=x; i++){
    x%i==0 ? factorsX.push(i) : void(0)
  }
  for (let j=1; j<=y; j++){
    y%j==0 ? factorsY.push(j) : void(0)
  }
let dup = factorsX.concat(factorsY).filter((el, index, array) => array.indexOf(el) != index)
return dup == 1 ? true : false

}


//Another solution
function isCoprime(x, y) {
  const min = Math.min(x, y);
  for (let i = 2; i <= min; i++) {
    if (x % i === 0 && y % i === 0) {
      return false;
    }
  }
  return true;
}
