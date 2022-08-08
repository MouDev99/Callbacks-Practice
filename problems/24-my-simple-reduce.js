/*******************************************************************************
Write a function `mySimpleReduce` that accepts an array and a callback as arguments.
The function should mimic the behavior of the built in Array#reduce, utilizing the
first element of the array as the default accumulator.

In other words, the function should begin with the first element of the array as
the accumulator and call the callback for each of the remaining elements in the array,
passing in the current accumulator and current element into the callback. Upon calling the callback,
the accumulator should be set to the result of the callback.

Examples:

let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
    return sum + el;
});
console.log(result1); // 14

let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
    return product * el;
});
console.log(result2); // 48

let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(result3); // 8

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would refactor this problem to take in an
  optional initial accumulator
*******************************************************************************/

let mySimpleReduce = function(array, cb) {

    let acc = array[0];

    for(let i = 1; i < array.length; i++){

        let currEl = array[i];
        acc = cb(acc, currEl)
    }
    return acc;
};

/*
To refactor this problem to take in an optional initial accumulator:
   - The function `mySimpleReduce` should accept an array a callback and an accumulator as arguments;
     - If the acc wasn't passed in (if acc === undefined):
         - set the first element of the array as the accumulator.
         - iterate through the array starting from index 1
         - declare a variable to represent the current element (CurrEl = array[i])
         - set the acc to the result of the callback when passing in the current accumulator and current element
           into it.
         - return the acc after the `for ... loop`.
     - If the acc was passed in :
         - iterate through the array starting from index 0
         - declare a variable to represent the current element (currEl = array[i])
         - set the acc to the result of the callback when passing in the current accumulator and current element
           into it.
         - return the acc after the `for ... loop`.

*/




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = mySimpleReduce;
