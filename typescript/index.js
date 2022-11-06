"use strict";
class Drink {
    constructor(color, item) {
        (this.color = color), (this.item = item);
    }
    itemDrink() {
        console.log("hi");
    }
}
const newDrink = new Drink("red", "fanta");
console.log(newDrink.item);
