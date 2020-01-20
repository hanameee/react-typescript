"use strict";
// using generics in FUNCTION`
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
// string arr, int arr, obj arr... all covered with one interface
var stringItems = {
    list: ["a", "b", "c"]
};
var numItems = {
    list: [1, 2, 3]
};
var objItems = {
    list: [{ a: 1 }, { b: 2 }, { c: 3 }]
};
var stringTypeItems = {
    list: ["c", "d", "e"]
};
// using generics in CLASS
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        // getter
        get: function () {
            return this.list.length;
        },
        enumerable: true,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var numQueue = new Queue();
numQueue.enqueue(1);
numQueue.enqueue(2);
numQueue.enqueue(3);
console.log(numQueue.dequeue());
console.log(numQueue.dequeue());
console.log(numQueue);
