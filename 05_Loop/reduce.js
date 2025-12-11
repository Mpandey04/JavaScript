const myNumber=[1,2,3,4]
const TotalSUm=myNumber.reduce(function (acc,currentval){
    console.log(`acc:${acc}, Current VAlue: ${currentval}`);
    return acc+currentval
},0)
// console.log(TotalSUm);


// using ArrowFunction

const total_sum=myNumber.reduce((acc,curent_val)=>acc+curent_val,0)

console.log(total_sum);

const products = [
    { id: 1, name: "Smartphone", price: 15000 },
    { id: 2, name: "Laptop", price: 55000 },
    { id: 3, name: "Bluetooth Headphones", price: 2500 },
    { id: 4, name: "Smartwatch", price: 4500 }
];

const Total_Price=products.reduce((acc,item)=>(acc+item.price),0)
console.log(`Total Price:${Total_Price}`);