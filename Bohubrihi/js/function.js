/*
// Functions
// Built in Functions
//alert();
//console.log();

// User Defined Functions

// Declaration of function

//Execution of Function
saySomething();
//console.log("--------");




function saySomething() {
    console.log("Hello!");
    console.log("I am learning Javascript!");
    console.log("Bohubrihi");
}

// FUnction parameter/argument

function saySomenthing(fname = "Fazle", lname = "Rahat") {
    console.log(`Hello ${ fname } ${ lname }!`);
}

//alert("Hello");
//let val = "Simanta";
let firstname = "Simanta";
let lastname = "Paul";

saySomenthing(firstname, lastname);


function addNum(a=0, b=0) {
    console.log(a+b);
}

addNum(4,5);
addNum(3.6, 2.3);
*/

/*
// Normal Declaration
function saySomething(name) {
    console.log('Hello ' + name);
}

// Function Expression

let saySomething1 = function(name2) {
    console.log('Hello ' + name2);
}

// Arrow Function (ES6)

let saySomething2 = (name3) => {
    console.log("I am " + name3);
}




saySomething("Bohubrihi");
saySomething1("Simanta");
saySomething2("JavaScript");
*/

/*

// Array iteration using forEach

var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
var numbers = [1, 32, 31, 2];
let printEverything = function(item, i, abc){
    console.log(`Index : ${i} and Item ${item}`);
    console.log(abc);
}

// 1st Parameter : Item
// 2nd Parameter : Index
// 3rd Parameter : Whole Array
foods.forEach(printEverything);

// Array iteration using Mapping

var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
var numbers = [1, 32, 31, 2];


function addSomething(item) {
    return `${item} is a Food`;
}

let arr_res = foods.map(addSomething);
let arr_square = numbers.map(function(item){
    return item*item;
})

console.log(arr_res);
console.log(arr_square);
*/