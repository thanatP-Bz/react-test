class Drink {
  color: string;
  item: string;

  constructor(color: string, item: string) {
    (this.color = color), (this.item = item);
  }

  itemDrink(): void {
    console.log("hi");
  }
}

const newDrink = new Drink("red", "fanta");

console.log(newDrink.item);
