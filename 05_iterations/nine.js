// reduce

const myNums = [1,2,3]

/*
//const initialvalue = 1
const myTotal = myNums.reduce(function(acc, curVal) {
    console.log(`acc: ${acc} and curVal: ${curVal}`);
    return acc + curVal
},0)0
*/

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)

console.log(myTotal);