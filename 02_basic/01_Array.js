/*

Array In JavaScript:-
    1.JavaScript Arrays are resizable and contain a mix of different data type.

    2.JavaScript arrays are not associative arrays so array element can not be accessible through string index eg:

    let NewArr=[0,1,2,3,4,5,"one","two"]

    so we can not access the above array like
    console.log(NewArr["one"])

    3.JavaScript are zero indexed.


    4.javascript array-copy operations create shallow copies.
*/
const myArr=[1,2,3,4,5,6]
console.log(myArr[2]);

const FavPersion=["Pavan","aadi","vivek","Aditya"]  

 console.log(myArr.push(8));
 
 myArr.unshift(0)
 console.log(myArr);

 console.log(myArr.includes(8));

 const newArr=myArr.join()
 console.log(typeof newArr);

 //slice and splice
 console.log("A ",myArr);
 const myn1=myArr.slice(1,4)
 console.log(myn1);
 console.log("B",myArr);

 const myn2=myArr.splice(1,6)
 console.log("c",myn2);

 