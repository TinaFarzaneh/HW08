function setterGenerator() {
  return function (value) {
    this[user] = value;
    return this;
  };
}

const user = {
  name: "jack",
};
const nameSetter = setterGenerator("name");
nameSetter("Jack");
console.log(user);
