const userEmail = "vivek@gmail.com"

if(userEmail){
    console.log("Got User Email");
}else{
    console.log("Don't have user email");
}


// falsy values 

// false, 0, -0, BigInt, "" , null, undefined, NaN


// truthy values

// " 0 ", ' false ', " ", [], {}, function(){}






/*
    if (userEmail.length === 0){
        console.log("Array is empty");
    }
*/


/*
    const emptyObj = {}

    if (Object.keys(emptyObj.length === 0){
        console.log(Object is empty);
    }
*/



//------------------------------------------------------------------------------

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10  // either this or that based on situation to handle it
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20  
console.log(val1);



// Ternary Operator

// conditon ? true : false

const teaPrice = 100

teaPrice >= 80 ? console.log("Less"):console.log("More")