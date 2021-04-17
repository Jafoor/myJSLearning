// Class(ES6) 
// Class is a template for creating objects

class Person {
    constructor(fname, lname, birthday) {
        this.firstname = fname;
        this.lastname = lname;
        this.dob = birthday;
    }

    // calculateAge() {
    //     let birthday = new Date(this.dob);
    //     console.log(birthday);
    //     let diff = Date.now() - birthday.getTime();
    //     console.log(diff);
    //     let ageDate = new Date(diff);
    //     console.log(ageDate);
    //     console.log(Math.abs(ageDate.getUTCFullYear() - 1970));
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }

    calculateAge() {
        var today = new Date();
        var birthDate = new Date(this.dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    fullname() {
        console.log(this.firstname, this.lastname);
    }

}

let person1 = new Person("Fazle", "Rahat", "11-13-1988"); 
let person2 = new Person("Moinul", "Islam", "02-11-1991");
let person3 = new Person("Rony", "Chy", "01-17-1996");

console.log(person1.calculateAge());
console.log(person2.calculateAge());
console.log(person3.calculateAge());


console.log(person1.fullname());
console.log(person2.fullname());
console.log(person3.fullname());