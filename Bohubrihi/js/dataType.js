/**
 * Data Type
 */

 //Number - Numerical values with or without decimals
 // 4, 3.14, 1.66667

 // String - Collection of characters (letters, numbers, punc..)

 // Booleans - Either true or False

 // Arrays - Collection of items or values a = [1,3, 'sf']

 // Objects - Collection of property: value pairs

 // Other datatype

 // undefined, Empty value, null, NaN


 /**
  * /////Number

 var x = 123e5;
 console.log(x);
 var y = 123e-5;
 console.log(y);

 // can store infinity such as
 var p = 10/0;
 console.log(p);

 // store hexa decimal number
 var x = 0xBB;
 console.log(x); // save as 10 based number

 // convert to number to string
 y = x.toString()
 console.log(y);

 // convert to binary
 y = x.toString(2);
 console.log(y);

  // convert to octal
  y = x.toString(8);
  console.log(y);

  // Precision
var x = 12.435342;
 y = x.toPrecision();
 console.log(y);

 y = x.toPrecision(6);
 console.log(y);

 // String to number

 x = "13435.2323";
 console.log(parseInt(x));
 console.log(parseFloat(x));

 // Check if x not a number
 var x = "fjahksldf";
 console.log(isNaN(x));


 var x;
x = 3.141;
x = 34;
x = 123e5; // 123 * 10 ** 5
x = 123e-5; // 123 * 10 ** -5

// Numbers takes 64 bits

// + can be used for both addition and conatenation
"34" + "45" // will be string
34 + "45" // will be string
"34" + 45 // will be string
"The result is " + 34 + 45
34 + 45 + "is the result"
34 + 45 + "13"

//Numeric Strings
"25"-"5"
"25"/"5" // result 10
"25"*"5"
"25"%"5"
"25"+"5" //exception

//Infinity
var num = Infinity;
25/0 // will get Infinity


//Hexa Decimal Numbers
var x = 0xBB

x.toString() // Returns number as string

x.toString(16);

var x = 3.1416;
x.toPrecision();
x.toPrecision(2);
x.toPrecision(4);
x.toPrecision(6);

var x = "123"
parseInt(x);
x = "123.45"
parseFloat(x);

isNaN(x);

//Links
//https://www.w3schools.com/jsref/jsref_obj_number.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
  */
 
  /**
   * "Hello World"
'Hello World'
"Hello " World"
"Hello  World"
"Hello n World"
'Hello ' World'
'Hello t World'

//Concatenation
"Hello" + "World"


var x = "Hello World";

//Length of String
x.length; //It is a property

//Indexing
"Hello World"[0]
"Hello World"[3]
x = "Hello World";
x[0]
x[3]

//Immutable
x[1]
x[1] = "5"
x[1]


// return a new string, doesn't change x
//These are methods
x.slice(1, 5);
x.slice(-6, -1);
x.substr(3, 2); // 2nd parameter means the length
x.replace("Hello", "World");
x.toUpperCase();
x.toLowerCase();
x.concat("1", "2");
x.trim();


//links
//https://www.w3schools.com/jsref/jsref_obj_string.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
   */

/// Boolean

/**
 * 10>9
-1>2
"Hello" == "Hello"
var x = "Hello";
var y = Boolean(x);

x = null
y = Boolean(x);

x = 10 / "H";
Boolean(x);

var myVar;
Boolean(x);

//links
//https://www.w3schools.com/jsref/jsref_obj_boolean.asp
 */

 // Array
/**
 * var countries = ["bangladesh", "England", "India"];
countries.push("Pakistan");
countries.push("Bhutan");
countries.pop();
console.log(countries);
countries.push("Japan", "chaina");

// insert or pop from starting
// For pop
countries.shift();
console.log(countries);

// For insert in the starting
countries.unshift("Banladesh");
console.log(countries);
 * 
 */

/**
 //Collection of items
countries = ["Bangladesh", "USA", "UK"]

countries[0]
countries[1]

country = countries[0]
country

//Mutable
countries[0] = "Poland"
countries
countries.length;
countries[countries.length] = "Norway"

//Push and Pop
countries.push("China"); // return length
countries.pop() // returns length
countries.push("Japan", "Srilanka");
countries.shift() //returns the shifted
countries.unshift("Germany") // returns length


//Empty array
var numbers;
numbers = []
numbers.push(1)
numbers.push(78)
numbers.push("One")

x = "Bangladesh"
var y = x.split("")
x = "Bangladesh is a country"
y = x.split("")
y = x.split("n")
z = x.split(" ")
x = "Bangladesh, China, Finland"
y = x.split(",")

z.toString()
z.join("/")

x.concat(z, y);

countries.sort()
countries.reverse()


//Links
//https://www.w3schools.com/jsref/jsref_obj_array.asp 
 
 */

 // Object

 /**
  * student = {name:"Rahim", age:25, hometown:"Dhaka"}
student["name"]
student.name


student = {}
student["name"] = "Rahim"


delete simanta.name
  */

  // More array and objects
/**
   var arr = [1, 2, 3, 4];
  var arr1 = ['a', 'b', [1, 2], 'c'];
  console.log(arr1[2][1]);  
  arr = [1, 2 ,[ 'f1', ['w1', 'w2'], 'f2'], 4];
  console.log(arr[2][1][1]);

  // object in array
  arr = [1,2, ['a', 'b'], {prop1: "Item 1", prop2: "Item 2"}];
  console.log(arr[3].prop1);

  arr  = {
    prop1 : "Prop 1",
    prop2 : "Prop 2",
    prop3 : ["Item 1", "Item 2"]
  };

  console.log(arr.prop3[0]);
 */

 // Primitive Type
 // Number, String, Boolean
// deals with value

/**
  let a = 7;
 let b = a;
 a = 10;
 console.log(b);

 // Reference Type
 // array, object
 let numbers = [1,2,3,4];
 let newnumbers = numbers;
 console.log(newnumbers);

 numbers[0] = 11;
 console.log(newnumbers);
 */


let a = {};
console.log(a.name);