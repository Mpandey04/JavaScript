// Dates
let today=new Date()
console.log(today);
console.log(today.toString());
console.log(today.toLocaleString());

console.log(today.toDateString());
let myDate=new Date(2025,11,7)
console.log(myDate.toDateString());

let newDate=new Date("2025-12-07")
console.log(newDate.toLocaleString());

let myTimestamp=Date.now()
console.log(myTimestamp.toLocaleString());
console.log(newDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newtime=new Date();
console.log(newtime.getMonth());


newDate.toLocaleString('default',{
    month:"long"
})
console.log(newDate);