//this keyword is use for current context.
const user={
    username:"Manish",
    registerFee:3400,
    wlcomeMessage:function(){
        console.log(`${this.username},Welcome to wesite`);
        console.log(this);
    }
}
// user.wlcomeMessage()
// user.username="Raaz"
// user.wlcomeMessage()


// console.log(this); // show an empty object{} in node js But if we will run on browser where this will show an window object. 


function test(username="Manish"){
    console.log(username);
    console.log(this);
    // console.log(this.username); // this will be use in object only.
}
// test() 


// Below Are the representation of Arrow Function.
// ()=>{} Esme explicit return use krna hoga.
const test1=()=>{
    let username="Pandey"
    console.log(this.username);
}
// test1()

//implicit return
const Addtwo=(num1,num2) => (num1+num2)

// console.log(Addtwo(9,10));

const ReturnObject=() => ({username:"Manish Kumar pandey"})
console.log(ReturnObject());
