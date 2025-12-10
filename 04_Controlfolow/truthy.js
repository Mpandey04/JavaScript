const userEmail="manish@23.ai"
if(userEmail){
    console.log("USer email received");
}
else{
    console.log("Don't have user email");
}

/* 
    Falsy values:
    -> false
    -> 0
    -> -0
    -> BigInt 0n
    -> ""
    -> null & undefined
    -> NaN


    Truthy values:
    -> "0"
    -> "false"
    -> " "
    -> []
    -> {}
    -> function(){}
*/
const useremail2=[]
if(userEmail.length===0){
    console.log("Array is empty");
}

const myobj={}
if(Object.keys(myobj).length===0){
    console.log("Empty object");
}
// Nullish coalescing Operator (??):null undefined

let val1;
// val1=23 ?? 40
// val1 =null ?? 10
// val1=undefined ?? 15

console.log(val1);

// Ternary Operator

// condition ? true_statement : false_statement
const num=20
 num==10 ? console.log("true") : console.log("false");