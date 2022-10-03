class List {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    (this.name = name), (this.id = id);
  }
}

const user = new List("Mike", 20);
console.log(user);

interface User {
  name: string;
  case: number;
}

const getUser = (user: User) => {
  console.log(`${user.name} ${user.case}`);
};

getUser({ name: "James", case: 20 });

function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
    //
  }
  return obj;
}

const printName = (obj: { first: string; last?: string }) => {
  console.log(`${obj.last?.toUpperCase()} ${obj.first.toLocaleUpperCase()}`);
};

const getNum = (x: number[] | string) => {
  return x.slice(2, 3);
};

console.log(getNum([2, 3, 4, 5]));
