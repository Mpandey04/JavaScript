  let marks="93"
console.log(typeof(marks));
// marks=''
let valueInNumber=Number(marks) //conversion of string to number
console.log(typeof(valueInNumber)); 
console.log(valueInNumber);//output 93

marks="56abc"
valueInNumber=Number(marks)
console.log(typeof(valueInNumber)); 
console.log(valueInNumber);//output NaN

marks=''
valueInNumber=Number(marks)
console.log(typeof(valueInNumber)); 
console.log(valueInNumber);//output 0


marks=undefined
console.log(marks) //Output NaN


marks=NaN
typeof(marks) //Output undefined

marks=98
let ValueInString=String(marks)
console.log(typeof(ValueInString)); 


marks=true
valueInNumber=Number(marks)
console.log(typeof(marks));
console.log(valueInNumber);


/* Note:-

=> when we convert "78" In Number it can be easily covert in Number.

=> when we try to convert "73abc" In number then it can be convert in number but when we will try to print that number in console.log() it will give the output NaN.

=> when we convert boolean values in number then it gives output For true=1 and false=0.

*/
let isLoggedIn=1
let booleanIsloggedIn=Boolean(isLoggedIn)
// console.log(booleanIsloggedIn);

isLoggedIn=''
booleanIsloggedIn=Boolean(isLoggedIn) 
console.log(booleanIsloggedIn); //false
isLoggedIn='M'
booleanIsloggedIn=Boolean(isLoggedIn)
console.log(booleanIsloggedIn); //true


// 1==> true and 0 == > false
// empty string in boolean conversion give false output.