const accountId  = 14543
let accountEmail = "viv@gmail.com"
var accountPassword = "12345"
accountCity = "Vapi"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hfh@gamil.com"
accountPassword = "23232"
accountCity = "Mumbai"

console.log(accountId);
/*
    Prefer not to use var
    Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])