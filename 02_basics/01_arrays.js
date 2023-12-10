const myArr = [0,1,2,3,4,5]
const myHeroes = ['Ironaman', "Dean", "Thor"]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr[0]);
//console.log(myHeroes[1]);
//console.log(myArr2[3]);


// Array Methods


//myArr.push(6)
//myArr.push(9)
//myArr.pop()

//myArr.unshift(7)
//myArr.shift()

//console.log(myArr.includes(9));

//const newArr = myArr.join() // converts array to string


//console.log(myArr);
//console.log(newArr);



// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);
// Slice does not manipulate the original data.

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);
// Splice manipulate the original data.
