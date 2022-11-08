import _ from "lodash";

console.log(_.last(["one", "two"]));

const name = "James";

const person = { first: name };

console.log(person);

const sayHelloLinting = (fname) => {
  console.log(`Hello linting, ${fName}`);
};

sayHelloLinting("James");
