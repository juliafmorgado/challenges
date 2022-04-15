// Write a function that performs the below:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

//My solution
function accum(s){
    return s.toUpperCase().split('').map((letter, index)=> index==0 ? letter : letter[0] + letter.repeat(index).toLowerCase()).join('-')
  }


//Easier solution
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }

//Another solution
function accum(s) {
    return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
  }