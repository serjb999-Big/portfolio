console.log("Hello world");

const date = new Date();

console.log(date);

const myName = "dima";
const username = "leveret";

console.log(myName, username);

const button_1 = document.querySelector("#button_1");
const title = document.querySelector("h1");

button_1.onclick = () => {
  title.remove();
};

// data types --------------------------------------------------------

const string = "this is string";
console.log(string);

const number = 69;
console.log(number);

const isTrue = true;
console.log(isTrue);

let age;
console.log(typeof age);

const h6Tag = document.querySelector("h6");
console.log(h6Tag);

console.log("2" / 2);

const user = {
  name: "bryan",
  surname: "popa",
  phone: 1323,
  isAlive: true,
  address: {
    street: "first",
    streetNr: 25,
  },
  friends: ["bob", "max", "lou"],
};
console.table(user.friends);

const users = [
  {
    fullName: "buba smith",
    nr: 5,
  },
  {
    fullName: "max pax",
    nr: 9,
  },
  {
    fullName: "den von",
    nr: 4,
  },
];

users.push({
  fullName: "foo bar",
  nr: 22,
});

console.table("users array => ", users);

const usersObjs = users.map((user, index) => {
  console.log("user item => ", user);
  console.log("user index => ", index);
});

const random = Math.random();
console.log(random * 1000);
