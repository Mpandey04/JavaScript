/*
const Programming_languages=["JAVA","Python","HTML","C++","CPP","rb"]

const PrintValues=Programming_languages.forEach((items)=>{
    console.log(items);
    return items;
})

console.log(PrintValues);
*/

// Use of Filter
const myNUms=[1,2,3,4,5,6,7,8,9,10]
const newNUms=myNUms.filter((Num)=> (Num>4))
// console.log(newNUms);

const myNUms2=[6,7,8,9,10,11,21,13,43,24]
const NewArr=[]
myNUms2.forEach((nums)=>{
    (nums>4) ? NewArr.push(nums) : console.log("Invalid");
})
// console.log(NewArr);


const MyBooks=[
    {
        title:"Book One",genre:"Fiction",publish:1987,Edition:2010
    },
    {
        title:"Book Two",genre:"History",publish:1990,Edition:2011
    },
    {
        title:"Book Three",genre:"Science",publish:2000,Edition:2012
    },
    {
        title:"Book One",genre:"Non-Fiction",publish:2005,Edition:2013
    },
    {
        title:"Book One",genre:"History",publish:2015,Edition:2015
    },
    
]
let Book=MyBooks.filter((Bk)=>Bk.genre==="History")
// console.log(Book);

Book=MyBooks.filter((BK)=>(BK.publish>=2000))
console.log(Book);