// Singleton

//const tinderUser = new Object() // singleton object
const tinderUser = {}  // Non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "xyz@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Vivek",
            lastname: "Poojary"
        }
    }
}


//console.log(regularUser.fullname.userfullname);

const  obj1 = {1:"a", 2:"b"}
const  obj2 = {3:"a", 4:"b"}

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({}, obj1, obj2) // target, source

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser)); // makes key value pair into array

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// ---------------------- Destructuring -------------------

const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "Hitesh"
}

//course.courseInstructor

const {courseInstructor: coach} = course




//API 

console.log(coach);

/*
{
    "name": "Hitesh",
    "coursename": "js",
    "price": "free"
}
*/



