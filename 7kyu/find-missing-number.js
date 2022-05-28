// The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

//Solution
function missingNo(nums) {
 for (let i=0; i<=100; i++) {
   if (!nums.includes(i)) {
    return i;
   }
}
}

//New solution
function missingNo(nums) {
   let arr=nums.sort(function(a,b){return a-b});
   for(let i=0;i<= arr.length;i++)
       if(i!=arr[i])
           return i;    
}
