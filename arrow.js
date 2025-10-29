const addTraditional = function (a, b) {
  return a + b;
};

const add = (a, b) => {
  console.log("Starting sum");
  return a + b;
};

console.log(addTraditional(1, 2));
console.log(add(1, 2));

const ids = [1, 2, 3, 4, 5];

ids.forEach((id) => {
  id++;
  console.log(id);
});

const test = () => {console.log("Hello World");}
test();

