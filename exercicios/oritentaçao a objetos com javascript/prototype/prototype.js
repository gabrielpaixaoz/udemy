const text = "asd";


console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = []

console.log(arr.length);

console.log(Object.getPrototypeOf(arr));

console.log(Object.getPrototypeOf(arr) === Array.prototype);

// mais sobre prototype

const myObject = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject === myObject))

