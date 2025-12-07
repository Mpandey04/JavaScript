const southMovies=["Bahubali","KGF","Puli","Saaho"]

const BollyBoodMovies=["Pk","3 Idiots","JAWAN"]

// southMovies.push(BollyBoodMovies)
// console.log(southMovies);

// console.log(southMovies);

const tollywood=southMovies.concat(BollyBoodMovies)
// console.log(tollywood);
// console.log(tollywood[6]);


//speard operator
const tolly=[...southMovies,...BollyBoodMovies]
console.log(tolly);

const newArr=[1,2,3,[4,5,6],7,8,[4,9,0]]

let myreal=newArr.flat(Infinity)
console.log(myreal);

Array.isArray("Manish")
console.log(Array.from("Manish"))

console.log(Array.from({names:"pandey"}));

let mark1=323
let mark2=245
let mark3=785

console.log(Array.of(mark1,mark2,mark3));
