

// curly brackets is the scope in every programming language however this curly brackets can be under the function,loop,conditional statement like if-else  etc..

let c;//global scope variable can be accessible in local scope but local scope variable can not be accessible in global scope.

if(true){
    //local scope
    let first="Manish"
    const middle="kumar"
    var last="pandey"
}

// console.log(first); Both will give some error like first and middle is not defined and it is absolutely correct because i have declare this first and middle  in scope so good to see this error because if we are declaring a varivale in scope so most of the time we not want to execute that code outside of scope.
// console.log(middle);


// console.log(last); // This line of code will be successfully execute and this is  breaking rule of scope and that's why we didn't prefer to use var.



function one(){
    const username="Manish"
    function two(){
        const userid="manish123@in"
        console.log(username);
    }
    // console.log(using);
    // two()
}
one()

function AddNum(num){
    return num+1
}
const AddTwo=function(num){
    return num+2
}
console.log(AddTwo(9)); 