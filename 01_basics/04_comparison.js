console.log("2" > 1);
console.log("02" > 1 );


console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

/*
    The reason is that an equality check == and comparisons >,<,>=,<= works differently.
    Comparisons convert null to a number,l treating it as 0.
    That's why (3) null >= 0 is true and (1) null > 0 is false.
*/



console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);


// === -> Strict Check

console.log("2" === 2);
// Comparison data types must be of equal data types
