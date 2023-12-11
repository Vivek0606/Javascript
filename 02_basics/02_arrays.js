const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Flash", "Batman", "Superman"]

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);

Heroes = marvel_heroes.concat(dc_heroes)
console.log(Heroes);

const heroes = [...marvel_heroes, ...dc_heroes]
console.log(heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const arr = another_array.flat(Infinity)

console.log(arr)





console.log(Array.isArray("Vivek"));
console.log(Array.from("Vivek"));
console.log(Array.from({name : "Vivek"}));  //Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));