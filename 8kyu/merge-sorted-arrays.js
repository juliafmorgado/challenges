// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.



//My Solution
function mergeArrays(arr1, arr2) {
    //concatenate both arrays
    const arr3 = arr1.concat(arr2)
    arr3.sort(function (a, b) {
        return a - b;
    })
    //remove duplicates
    let result = []
    for (let num of arr3) {
        if (!result.includes(num)) {
            result.push(num)
        }
    }
    return result
    //sort numbers in ascending order
    result.sort(function (a, b) {
        return a - b;
    })
    return result
}


//Best Solution1
function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a, b) => (a - b))));
}


//Best Solution2
function mergeArrays(a, b) {
    return [...new Set(a.concat(b))].sort((a, b) => a - b)
}
