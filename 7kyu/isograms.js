// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

//My solution
function isIsogram(str){
    str = str.toLowerCase();
 
   for (let i=0; i<=str.length; i++){
   for(let j=i+1; j<=str.length; j++){
   if (str[j] === str[i]){
   return false;
   }}}
   return true;
 }

 //Another solution
 function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }