const name = "Vivek"
const repoCount = 50

console.log(name + repoCount + "Value");

console.log(`My name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('vicky')

console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,2)
console.log(anotherString);
// Negative value can only be used in SLICE.

const newStringOne = "  Vivek  "
console.log(newStringOne);
console.log(newStringOne.trim());
