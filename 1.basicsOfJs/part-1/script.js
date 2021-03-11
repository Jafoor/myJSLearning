/* *****
variables and data type
*/


/*
var firstName = 'Jafor';
console.log(firstName);

var lastName = 'Saleh';
var age = 22;
// javascript has pynamic typing: data types are automatically assigned to variable

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Learner";
console.log(job);

var _3years = 3;
var jhonMark = "Jhon and Mark";
*/

/* *****
variable mutation and data type coercion
*/


/*
var firstName = 'Jafor';
var age = 22;
console.log(firstName + ' ' + age);
// convert number age to string -> it's called type coercion

// type corecion
var job, isMarried;
job = 'Student';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + ' is he married? ' + isMarried);

// variable mutation

age = 'twenty tow';
job = 'developer';
alert(firstName + ' is a ' + age + ' years old ' + job + ' is he married? ' + isMarried);

var lastName = prompt("what's your last name?");
console.log(firstName + ' ' + lastName);
*/

/* ************
Basic Operators
*/


/*
var year, yearJafor, yearmark;
now = 2021;
ageJafor = 22;
ageMark = 33;

// Math Operators
yearJafor = now - ageJafor;
yearMark = now - ageMark;
console.log(yearJafor);

console.log(now + 2);
console.log(now * 10);
console.log(now % 10);

// Logical Operator

var jaforOlder = ageJafor > ageMark;
console.log(jaforOlder);

// typeof operator
console.log(typeof jaforOlder);
console.log(typeof 'Maek is older than Jafor');
var x;
console.log(typeof x);
*/

/********
* Operator Precedence
*/



/*
var now = 2021;
var yearJafor = 1999;
var fullAge = 22;

// Multiple Operators
var isFullAge = now - yearJafor >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJafor = now - yearJafor;
var ageMark = 35;
var average = (ageJafor + ageMark) / 2;
console.log(average)

// Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);


// More operators

x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
*/




////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/

/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

var markHeightBMI = markBMI > johnBMI;
console.log("Is Mark\'s BMI higher than John'\s? " +  markHeightBMI);
console.log(markBMI, johnBMI, markHeightBMI);

*/



/********
* If / else statement
*/


/*

var firstName = 'Jafor';
var civilStatus = 'Single';

if (civilStatus === 'Married'){
    console.log(firstName + ' is Married');
} else{
    console.log(firstName + ' will hopefully marry soon. ');
}

var isMarried = true;

if (isMarried){
    console.log(firstName + ' is Married');
} else{
    console.log(firstName + ' will hopefully marry soon. ');
}


const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

var markHeightBMI = markBMI > johnBMI;
if(markHeightBMI){
    console.log("Mark\'s BMI higher than John'\s.");
} else{
    console.log("John\'s BMI higher than Mark'\s.");
}

*/


////////////////////////////////////
// Strings and Template Literals


/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const Jonas = "I'm " + firstName + ' , a ' + (year - birthYear) + ' year old ' + job + " !";
console.log(Jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);
console.log('String with \n\
multiple \n\
lines');
console.log(`String
multiple
*/


/********
* Boolean Logic
*/


/*
var firstName = 'John';
var age = 16;

if(age < 13){
    console.log(firstName + ' is a boy.');
} else if( age >= 13 && age <= 20){
    console.log(firstName + ' is a teenager!');
}else{
    console.log(firstName + ' is a young man!');
}
*/

/********
* The Ternary Operator and Switch Statements
*/


/*

var firstname = 'Jafor';
var age = 16;

// Ternary operator
age >= 16 ? console.log(firstname + ' drinks water!') : console.log(firstname + ' drinks juice!');


var drink = age >= 18 ? 'water' : 'juice';
console.log(drink);

// Swith Statement
var job = 'teacher';

switch (job) {
    case 'teacher':
        console.log(firstname + ' teaches kids who to code!');
        break;
    case 'driver':
        console.log(firstname + ' drives an uber in bd ');
        break;
    default:
        console.log(firstname + ' do something else!');
}

switch(true){
    case age < 13:
        console.log(firstname + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstname + ' is a teenager.');
        break;
    default:
        console.log(firstname + ' is a man!');
}

*/



/********
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, o, '', NaN
// truthy values: NOT falsy values


/*
var height = 0;

height = 23;

if(height === 0 || height){
    console.log('Variable is defined');
} else{
    console.log('Variable has not been defined');
}


if(height == '23'){
    console.log('The == operator does type coercion!');
}

*/

/************
*Coding Chakkenge 2
*/

/*

var john_team = 89 + 120 + 103;
var john_avg = john_team / 3;

var mike_team = 116 + 94 + 123;
var mike_avg = mike_team / 3;

console.log('Jhon\'s team avagare : ' + john_avg );
console.log('Mike\'s team avarage : ' + mike_avg );

if ( john_avg > mike_avg){
    console.log('John\'s team has won the match and it\'s avg score is : ' + john_avg);
} else if ( john_avg < mike_avg){
    console.log('Mike\'s team has won the match and it\'s avg score is : ' + mike_avg);
} else{
    console.log('Match draw');
}

var mary_team = 97 + 134 + 105;
var mary_avg = mary_team / 3;


if ( john_avg > mike_avg && john_avg > mary_avg){
    console.log('John\'s team has won the match and it\'s avg score is : ' + john_avg);
} else if ( john_avg < mike_avg && mary_avg < mike_avg){
    console.log('Mike\'s team has won the match and it\'s avg score is : ' + mike_avg);
} else if( john_avg === mike_avg && john_avg === mary_avg){
    console.log('Match draw');
} else{
    console.log('Mary\'s team has won the match and it\'s avg score is : ' + mary_avg);
}
*/


/***********
* Function
*/


/*
function calculateAge(birthyear){
    return 2021 - birthyear;
}

var agejohn = calculateAge(1999);
var agemike = calculateAge(2000);
var agenull = calculateAge(1998);

console.log(agejohn + agemike + agenull);

function yearsUntilRetirement(year, firstname){
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if( retirement > 0 ){
        console.log(firstname + ' retires in '+ retirement + ' years.');
    } else{
        console.log(firstname + "is already retired.");
    }
}

yearsUntilRetirement(1965, 'Kohn');
yearsUntilRetirement(1987, 'Mike');
yearsUntilRetirement(1948, 'Jane');
*/


/********************
* Function Statement and Expression
*/

// Function Declaration

//function whattodo(job, firstname){
//    
//}

// Function Expression


/*
var whattodo = function(job, firstname){
    switch (job){
        case 'teacher':
            return firstname + ' teaches tech code.';
            break;
        case 'driver':
            return firstname + ' drives car.';
            break;
    }
}

console.log(whattodo('teacher', 'jafor'));
*/

/* ******************
* Arrays
*/


/*
var names = ['Jhon', 'Mark', 'Jane'];
var years = new Array(1990, 1991, 1992);

console.log(names.length);

// add element at last
names.push('Riki');
console.log(names);

// add element at first
names.unshift('mohammad');
console.log(names);

// supports different data type
names.push(190);
console.log(names);

// pop from last
names.pop();
console.log(names);

// pop from beginiing
names.shift();
console.log(names);

// find the index
console.log(names.indexOf('Jhon'));

var isDesigner = names.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
console.log(isDesigner);
*/


/* ***************
* Coding challenge 3
*/

/*
var bills = [124, 48, 268];
var tips = []

function billsTips(bill){
    if(bill < 50){
        tips.push(bill * (20/100));
    } else if( bill >= 50 && bill <= 200){
        tips.push( bill * (15/100));
    }else{
        tips.push( bill * (10/100));
    }
}

var finalBill = []

for(var i=0; i<bills.length; i++){
    billsTips(bills[i]);
    finalBill.push(bills[i]+tips[i]);
}

console.log(tips);
console.log(finalBill);
*/



/* ************
* Objects and Properties
*/

/*
var john = {
    firstName : 'John',
    lastName : 'Cina',
    birthYear : 1999,
    family : ['Jane', 'mark', 'bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john);
console.log(john.firstName);
console.log(john['lastName']);

john.job = 'designer';
john['isMarried'] = true;

// New Object syntex
var jane = new Object();
jane.name = 'Mula';
jane.year = 1990;
console.log(jane);
*/


/*  ***********************
* Objects and methods
*/


var john = {
    firstName : 'John',
    lastName : 'Cina',
    birthYear : 1999,
    family : ['Jane', 'mark', 'bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calAge: function(birthYear) {
        this.age = 2021 - this.birthYear;
    }
};

john.calAge();
console.log(john);

















