// var name = "black world";
// console.log(name); // output: black world

// let age = 30;
// console.log(age); 
// name = "ologun";
// console.log(name); // output: ologun
// age = 100;
// console.log(age); // output: 100

// const location= "lagos"
// console.log(location);
// location = ibadan;
// console.log(location); // output:ibadan
let person = {
    name : "babatunde oseni",
    age : 37,
    height : 5.6,
    Boolean : true
}
// let car = {
//     name : "toyota",
//     year : 2011,
//     model: "corrola",
//     engine : "automatic",
//     color : "white"
    


// }
// console.log(car.model);
// console.log(person.age);

// let list = ["tunde","tayo","tunji"];
// console.log(list[1]);


// function greet(name) {
//     return "helle," + name + "!";
// }
//  console.log(greet("shola"));
//  console.log(greet("tunde"));

//  
// function greet(name,email){
//     return " hello my name is " + name + " my Email is " + email;
// }

// console.log(greet("tunde","donblack.com"));

// let a=10
// let b=5
// console.log(a * b);

// let a=100
// let b=75
// console.log(a == b);

// let a=100
// let b=75
// console.log((a>b)&& (a>=b));
// console.log((a>b)|| (a>=b));
// console.log(!(a>b));

// let age = 25;
// let learner= true;
// if (age < 25 && learner){
//     console.log("young learner");
// }

// loop
// *for loop

// for (let x=0;x<=15;x++){
//     console.log("iteration number #{x}");

// }

// *while loop
// let count = 0;
// while (count < 10){
//     console.log( `count:#{count}`);
//     count ++
// }


// // *do while loop
// let num = 10
// do {console.log(`number: ${num}`);
//     num -= 2;
// }while (num >= 0)

// *for of loop
// const fruits =[ "banana", "orange", "mango", "berries", "apple"];
// for (const fruit of fruits){
//     console.log(fruit)
// }
// const name = "Babatunde";
// for (const letter of name){
//     console.log(letter);
// }


// *for in loop
const Person = {
    firstname: "john",
    secondname: "doe",
    age: 30,
    job: "developer"

};
for (const property in Person){
    console.log(`${property}:${Person[property]}`)
}


