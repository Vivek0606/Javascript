function name(){
    console.log("V");
    console.log("I");
    console.log("V");
    console.log("E");
    console.log("K");
    
}

// name()

//function addTwoNumbers(number1, number2){
//    console.log(number1 + number2);
//}

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result
    return number1 + number2
}


addTwoNumbers(3,4)

// console.log("Result:", result)

function loginUserMessage(username ){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage());

//----------------------------------------------------------------------------------------------------------------

// ... rest operator multiple arguments
function calculateCartPrice(val1,val2,...num1){
    return val1,val2,num1
}

// console.log(calculateCartPrice(200,400,5000,777,888,))

const user = {
    username: "vivek",
    price: 500
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}


//handleObject(user)


handleObject({
    username: "sam",
    price: 888
})


const myNewArray = [200,400,500,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

