// Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number. For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals, round them down while checking for odd/even. The output must have the original numbers!

//Solution
function sortItOut(array){
let odd = array.filter(e => Math.floor(e)%2 != 0).sort((a,b) => a-b)
let even = array.filter(e => Math.floor(e)%2 == 0).sort((a,b) =>b-a)
return [...odd, ...even]
}
