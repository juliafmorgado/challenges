// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""


//Solution
function maskify(cc) {
    return cc.split('').map((letter, index) => index < cc.length-4 ? '#' : letter).join('')
    }

//Another solution
function maskify(cc) {
    cc = cc.split("");
    for(var i = 0; i < cc.length - 4; i++){
      cc[i] = "#";
  }

  cc = cc.join("");
  return cc
  }

//Another solution