//object destructuring
const EMarket={
    item_name:["Nokia","samsang","Vivo","Motorola"],
    item_Price:[23000,40000,60000,50000]
}
// console.log(`Your product name is:${EMarket.item_name} Price: ${EMarket.item_Price}`);
const {item_Price}=EMarket //destructuring
console.log(item_Price);

//API's:-Jab v Apna kaam kisi aur ke uppar daal dena hota hai to esko API kahte hai 

{
    name:"Manish kumar pandey";
    age:23
}