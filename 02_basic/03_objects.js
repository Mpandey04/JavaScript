// sinhleton
// object literals 

// Object.create()//constructor ke through
const mySymbol=Symbol("key1")
const user={
    username:"Manish Pandey",
    userid:"2025/123",
    userlocation:"Delhi",
    userEmail:"manishpandey434@gmail.com",
    userPhone:"67345876",
    userlogin:false,
    [mySymbol]:"raaz"

}
// console.log(user.userid);
// console.log(user["userEmail"]);
console.log(user[mySymbol]);
console.log(typeof user[mySymbol]);


// Object.freeze(user)
user.userPhone="87564535"
console.log(user.userPhone);
console.log(user);

// const userid=Number[user.userid]
// console.log(userid);
// console.log(typeof userid);

user.greeting=function(){
    console.log("Hello user");
}

user.greeting2=function(){
    console.log(`Hello user ${this.username}`);
}

console.log(user.greeting);//function[anonymus]
console.log(user.greeting());
console.log(user.greeting2());