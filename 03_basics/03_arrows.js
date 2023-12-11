// THIS, IS USED IN CURRENT CONTEXT

const user = {
    username: "vivek",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }



}

//user.welcomeMessage()
//user.username("sam")
//user.welcomeMessage()

//console.log(this);



// Dec laring function through arrow function

const chai = () => {
    let username = "hitesh"
    console.log(this);
}

//chai()




// implicit -> (), return keyword is not used
// explicit -> {}, return keyword is used

const addTwo = (num1, num2) => (num1 + num2)


console.log(addTwo(2,3));