//type for objects
type Person = {
  name: string;
  age: number;
};

let mike: Person;

mike = {
  name: "Mike",
  age: 25,
};

console.log(mike);

//function can define the value at the end
let list = (a: number, b: number): number => {
  return a + b;
};

list = (num1, num2) => {
  return num1 + num2;
};

console.log(list(4, 2));

//generics
