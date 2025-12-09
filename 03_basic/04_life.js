// Immediately Invoked Function Expressions (IIFE).
//global scope ke polution se problem hoti hai kai bar to usse deal krne ke liye IIFE use krte hai.

/*
(function connection(){
    console.log("Database Connection successfull");
})();//IIFE 
*/

// ()()
//implicit return
(()=>(console.log("DataBase connect successfull")))();


((name)=>(console.log((`${name}, connection successfull`))))("Manish");