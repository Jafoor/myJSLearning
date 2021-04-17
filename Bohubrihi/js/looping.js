// While Loop
/*
var i = 1;
while(i < 5){
    console.log(i);
    i++;
}
console.log("Out of loop. i = " + i);

// Do while
i = 1;

do {
    console.log(i);
    i++;
} while (i<5);
console.log("Out of loop. i = " + i);
*/

/*
// while loop
var i = 1; // initialization

while ( i<=5 ) { //condition
    console.log(i);
    i++; //update
}

console.log("End of while loop!")
console.log("Start of for loop!");
// for loop

for (var j = 1; j<=5 ; j++) {
    console.log(j);
}

for (var k = 5; k >=1; k-- ) {
    console.log(k);
}
*/

/*

// break 

for(var i=1; i<=5; i++ ) {
    if ( i == 3) {
        break;
    }
    console.log(i);
}



// continue

for (var i =1; i <= 10; i++){
    if(i % 2 == 1) {
        continue;
    }
    console.log(i);
}
*/

/*
// String and array
let name = "I am learning Javascript!";
let food = ["Cake", "Chocolate", "Ice Cream"];
let len = food.length;

for(var i = 0; i < len; i++) {
    console.log(`Index : ${i}`);
    console.log(food[i]); 
}
*/


/*
// For-in string/array/object
// For-of string/array
let name = "I am learning Javascript!";
let food = ["Cake", "Chocolate", "Ice Cream"];

//object doesn't have index
let person = {
    name: "Shakib Al Hasan",
    profession: "Cricketer",
    team: "Bangladesh",
    age: 33,
}

// We will get index
 for( var x in name ) {
    console.log(`index ${x} and item ${ name[x] }` );
} 


// We will get items/values
for(var x of name ) {
    console.log(x);
}

// We will get indexes
for (var y in food) {
    console.log(`Index: ${y}; and item: ${food[y]}`);
}

// We will get items
for (var y of food) {
    console.log(y);
}


// For-in with objects
for (var x in person) {
    console.log(`Property: ${x}
    Value: ${person[x] }`);
}

// For-of won't work for objects
*/

// Exercise 

var n = parseInt(prompt("Enter the number of terms: "));
var sum = 0;
var series = "";

for (var i = 1; i <= n; i++) {
    sum += i ** 2;
    series += (i ** 2).toString();
    if (i == n) { continue; }
    series += " + ";
}

console.log(`${series} = ${sum}`);
