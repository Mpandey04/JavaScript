// Premitive DataType(call by value)
// 7 types of primitive DataType is available: 1.String,Number,Boolean,null,undefined,symbol,BigInt.


//Refernce type(Non-Primitive DataType):
//Array,objects,function


const mark=300
const marks=30.5

const isLogged=false
let userEmail;
const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id===anotherid);
const bignt=23456789234757n
console.log(typeof(bignt));


const heros=['thor','ironman','thanos'];

let myobj={
    name:"Manish Pandey",
    Age:23,
}

const myfunction=function () {
    console.log('Hello');
}

/*
    The typeof operator return when value are:
    1. If value is undefined, return "undefined".
    2. If value is null, return "object".
    3. If value is a String, return "string".
    4. If value is a Symbol, return "symbol".
    5. If value is a Boolean, return "boolean".
    6. If value is a Number, return "number".
    7. If value is a BigInt, return "bigint".

*/