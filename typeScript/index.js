"use strict";
class List {
    constructor(name, id) {
        (this.name = name), (this.id = id);
    }
}
const user = new List("Mike", 20);
console.log(user);
const getUser = (user) => {
    console.log(`${user.name} ${user.case}`);
};
getUser({ name: "James", case: 20 });
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
        //
    }
    return obj;
}
const printName = (obj) => {
    var _a;
    console.log(`${(_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase()} ${obj.first.toLocaleUpperCase()}`);
};
const getNum = (x) => {
    return x.slice(2, 3);
};
console.log(getNum([2, 3, 4, 5]));
