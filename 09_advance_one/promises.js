const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async is completed")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})


// ======================================================================

// Another Method for Promise

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)

}).then(function(){
    console.log("Async 2 resolved");
})


// ===============================================================================

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email:"chai@example.com"})
    },1000)

})

promiseThree.then(function(user){
    console.log(user);
})


// =================================================================================

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
        resolve({username: "Chai", password:"123"})
        } else{
            reject("Error: Something went wrong")
        }
    },1000)
})


promiseFour
.then((user) => {
    console.log(user);
    return user.password
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("Executed"))



// ===================================================================================

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
        resolve({username: "Js", password:"123"})
        } else{
            reject("Error: Js went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try{
    const response = await promiseFive
    console.log(response);
    } catch (error){
        console.log(error);
    }
}

consumePromiseFive()