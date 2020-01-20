// using generics in FUNCTION`
function reverse<T>(items: T[]): T[] {
    return items.reverse();
}

const numArr = [1, 2, 3, 4, 5];
const strArr = ["1", "2", "3", "4", "5"];

console.log(reverse(numArr));
console.log(reverse(strArr));

function wrap<T>(param: T) {
    return { param };
}

console.log(wrap(1));
console.log(wrap("1"));

// using generics in INTERFACE
interface Items<T> {
    list: T[];
}

// string arr, int arr, obj arr... all covered with one interface
const stringItems: Items<string> = {
    list: ["a", "b", "c"]
};

const numItems: Items<number> = {
    list: [1, 2, 3]
};

const objItems: Items<object> = {
    list: [{ a: 1 }, { b: 2 }, { c: 3 }]
};

// using generics in TYPE
type ItemsType<T> = {
    list: T[];
};

const stringTypeItems: ItemsType<string> = {
    list: ["c", "d", "e"]
};

// using generics in CLASS
class Queue<T> {
    list: T[] = [];
    // getter
    get length() {
        return this.list.length;
    }
    enqueue(item: T) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}

const numQueue = new Queue<number>();
numQueue.enqueue(1);
numQueue.enqueue(2);
numQueue.enqueue(3);
console.log(numQueue.dequeue()); //1
console.log(numQueue.dequeue()); //2
console.log(numQueue); // Queue { list: [ 3 ] }
