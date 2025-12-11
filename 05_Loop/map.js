const myNum=[1,2,3,4,5,6,7,8,9,10]


// const NewNums=myNum.map((num)=>(num+10))

const newNums=myNum.map(
    (num)=>(num*5))
    .map((num)=>num+5)
    .filter((num)=>num>=35)
console.log(newNums);