//function definition
function myName(){
    console.log("M");
    console.log("a");
    console.log("n");
    console.log("i");
    console.log("s");
    console.log("h");
}
myName//function reference
// myName();//function call

function square(num){
    console.log(`Square of ${num} : ${Math.pow(num,2)}`);
}
// square(90)/

function addnumber(num1,num2){ // function definition with function parameters.
    // let result=num1+num2
    // return result

    return num1+num2
}
const result=addnumber(30,40) // function call with function arguments
// console.log("Result:",result);

function loginUser(username){
    if (username!=undefined) {
         return `${username} just logged in`
    }
    else{
        return `Please enter a username`
    }
   
}

function loginUser1(username="Manish"){
    if (username!=undefined) {
         return `${username} just logged in`
    }
    
    return `Please enter a username`
    
   
}
// const print=loginUser("Manish")
// const print=loginUser()

// const print=loginUser1()
// console.log(print);


// using rest operator
function calculateCartPrice(...num){
    return num
}
const price=calculateCartPrice(200,300,400)
// console.log(price);

const user={
    username:"Manish",
    userid:"mani2012"
}
function handleobject(anyobject){
    console.log(` username:${anyobject.username} userid:${anyobject.userid}`);
}
// handleobject(user)
// we can direct pass object in function
handleobject({
    username:"Raaz",
    userid:242
})

// we can pass direct array in function
const myNewArr=["Mnaish",242,560,"Pandey"]
function Arrayhandle(getArr){
    return getArr[2]
}
console.log(Arrayhandle(myNewArr));