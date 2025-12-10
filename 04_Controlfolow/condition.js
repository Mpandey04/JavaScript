// if
/*
    syntax:
    if(condition){
    
    }

    Note:- If condition is true then code will be execute inside the scope.


*/
let names="m"
if(names=='m'){
    // console.log("Now You are inside of if");
}

// names="n"
if(names=='m'){
    console.log("Now You are inside of if");
}
console.log("You are outside of the div");


//Following are the Operator for conditional statement.
// <,>,<=,>=,==,!=,===(type v check krega ) !==

let temp=41
if(temp<=50){
    console.log("Temprature is less than 50");
} else{
    console.log("temprature is Greater than 50");
}

// short hand notation but not recommended to use.
const balance=1000
if(balance>500) console.log('true');

if(balance<500){
    console.log("less than");
}else if(balance<750){
    console.log("less than 750");
}
else if(balance<900){
    console.log("less than 900");
}
console.log("Greater than or equal to 1000");

const userloggeIn=true
const debitcard=true
if(userloggeIn && debitcard){
    console.log("allow");
}
const LoggedInFromGoogle=true
const LoggedInFromEmail=true

if(LoggedInFromEmail || LoggedInFromGoogle){
    console.log("Logged In");
}