//literal

 const instauser=new Object() //singleton object hai

 const userid={} // Non-singleton object.

 instauser.id="nill@23.in"
 instauser.name="nil"
 instauser.pass='m**23'
//  console.log(instauser);


 const anotheruser={
    user_id:"mpandey34@gm.in",
    user_detais:{
        user_name:"Manish kumar Pandey",
        user_phone:"65238965",
        user_city:"Delhi",
        user_loggindetails:false
    }
 }
// console.log(anotheruser);
// console.log(anotheruser.user_detais);
console.log(anotheruser.user_detais.user_city);

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"g"}
const obj3={7:"h",8:"i",9:"j"}

const obj4={obj1,obj2,obj3}
console.log(obj4);