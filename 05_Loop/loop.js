// For Loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(i==5){
//         console.log("5 is odd number");
//     }
//     console.log(element);
// }

for (let i = 1; i <=10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(`${i} X ${j} = ${i*j}`);
        
    }
}

const myArr=['m','a','n','i','s','h']
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
    
}

// break and continue

for (let i = 0; i <=20 ; i++) {
    if(i==5){
        console.log("Number 5 catched");
        break;
    }
   console.log(`value of i  is ${i}`);
    
}
for (let i = 0; i <=20 ; i++) {
    if(i==5){
        console.log("Number 5 skipped");
        continue;
    }
   console.log(`value of i  is ${i}`);
    
}


// while loop and do-while loop
/* syntax
while (condition) {
    
}

*/

let index=0
while(index <=10){
    console.log(index);
    index+=2
}

let myName=['m','a','n','i','s','h']
let arr=0;
while(arr<myName.length){
    console.log(myName[arr]);
    arr=arr+1
}

// do-while loop
let count = 0;

do {
  console.log("Current count: " + count);
  count++;
} while (count < 5);

console.log("Loop finished.");

// For Of loop

// ["","",""]
// [{},{},{}]

const arr2=[1,23,4,5,7]

for (const num of arr2) {
    console.log(num);
}

let greeting="Hello Good Night"
for (const greet of greeting) {
    console.log(greet);
}

//Maps
const map=new Map()
map.set("IN","India")
map.set("USA","United state of America")
map.set("Fr","France")
// console.log(map);
// for (const i of map) {
//     console.log(i);
// }
for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myGame={
    'Game1':'Pupg',
    'Game2':'GTA'
}

const myObject={
    "JS":"Javascript",
    "CPP":"C++ Programming",
    "Py":"Python Programming",
    "rb":"Rubby",
    "Swift":"Swift By apple"
}

// For in loop for Object

for (const key in myObject) {
    console.log(`${key} shortcut is for: ${myObject[key]}`);
}

const programming=["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(programming[key]);
}

// For Each
const coding=["java","Python","Rubby","C++"]
coding.forEach( function(item) {
    console.log(item);
} )

const name1=["Manish","Raaz","Pandey"]
name1.forEach((value)=>{
    console.log(value);
})
const name2=["Manish","Raaz","Pandey"]
name1.forEach((value,index,arr)=>{
    console.log(value,index,arr);
})

function print(name1){
    console.log(name1);
}
name1.forEach(print)


const mycoding=[{
    languageName:"JAVA",
    software:"intlijie"
    },

    {
        languageName:"Python",
        software:"Pycharam"
    },
    {
        languageName:'Web Dvelopment',
        software:'vs code'
    }
]

mycoding.forEach((item)=>{
    console.log(`Language Name: ${item.languageName}, Software: ${item.software}`);
})

