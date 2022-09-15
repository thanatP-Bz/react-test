"use strict";
let mike;
mike = {
    name: "Mike",
    age: 25,
};
console.log(mike);
//function can define the value at the end
let list = (a, b) => {
    return a + b;
};
list = (num1, num2) => {
    return num1 + num2;
};
console.log(list(4, 2));
