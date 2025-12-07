const student_mark=454
const student_balance=new Number(200)
console.log(student_balance);
console.log(student_balance.toString().length);
console.log(student_balance.toFixed(2));

const anotherValue=1123.4567
console.log(anotherValue.toPrecision(4));

const hundreds= 200000000
console.log(hundreds.toLocaleString('en-IN'));


//Maths
console.log(Math.abs(-8));
console.log(Math.round(895.67));
console.log(Math.ceil(5.4));
console.log(Math.floor(7.4));
console.log(Math.pow(2,5));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min));