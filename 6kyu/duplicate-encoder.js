// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


//My solution
function duplicateEncode(word){
    //make everything lower case
    word = word.toLowerCase();  
    //create a var to hold the new string
    let unique = '';
    for (let i=0; i<word.length; i++) {
        ( word.indexOf(word[i]) !== word.lastIndexOf(word[i]) ) ? unique += ')' : unique += '(' }
      return unique
  }

//Another solution
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }