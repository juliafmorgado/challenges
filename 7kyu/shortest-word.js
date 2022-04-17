// Simple, given a string of words, return the length of the shortest word(s).

//My solution
function findShort(s){
    return  s.split(" ").reduce((a,b) => a.length<=b.length ? a : b ).length
  }

//Another solution
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }

//Another solution
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

//Another solution
const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;