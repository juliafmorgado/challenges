// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// Example:
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

//My solution
function DNAStrand(dna){
    return dna
    .split('')
    .map((elem) => {
      if (elem == 'A'){
        return 'T'
      }else if (elem == 'T'){
        return 'A'
      }else if (elem == 'C'){
        return 'G'
      }
      else if (elem == 'G'){
        return 'C'
      }
    })
    .join('')
  }

  //Another solution
  function DNAStrand(dna) {
    return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
  }