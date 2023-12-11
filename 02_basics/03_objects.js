// Objects can be declared as Literal and Singleton

// singleton
// object.create



// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Vivek", // Key : Value (Pair)
    "full name": "Vivek Poojary",
    [mySym]: "myKey", // To use it as a symbol we must declare it in square bracket
    age: 18,
    location: "Vapi",
    email: "vivek@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]); // Preferred method
console.log(JsUser["age"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "vivek@google.com" // To change the value
//Object.freeze(JsUser)   // To lock the value
JsUser.email = "xyz@gmail.com"
//console.log(JsUser);




// Declaring Function

JsUser.greeting = function(){
    console.log("Hello User");
}

JsUser.greeting2 = function(){
    console.log(`Hello User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
