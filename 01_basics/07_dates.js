let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

let myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myCreatedDate1 = new Date("01-14-2023")
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate1.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate1.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);

newDate.toLocaleDateString('default',{
    weekday: "long",
})