"use strict";
// generics in function
function reverse(items) {
    return items.reverse();
}
var numArr = [1, 2, 3, 4, 5];
var strArr = ["1", "2", "3", "4", "5"];
console.log(reverse(numArr));
console.log(reverse(strArr));
function wrap(param) {
    return { param: param };
}
console.log(wrap(1));
console.log(wrap("1"));
