let greet: Function;

greet = () => {
  console.log("hi");
};

greet();

const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
};

add(4, 5);

let sports: (a: string, b: string) => void;

sports = (name: string, level: string) => {
  console.log(`He is play${name} his level is ${level}`);
};

sports("football", "red");
