/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(array, cb) {

    if(cb === undefined){
        return smallestValue(array);
    }

    let newArray = [];
    for(let i = 0; i < array.length; i++){
        let el = array[i];
        let res = cb(el);
        newArray.push(res);
    }

    return smallestValue(newArray);
};

let smallestValue = function(arr){
    let smallest = arr.reduce(function(acc, currNum){
        if(currNum < acc){
            acc = currNum;
        }
        return acc;
    })
    return smallest;
}




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
