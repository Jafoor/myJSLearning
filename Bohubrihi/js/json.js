/**
 * JSON - Javascript onject Notation
 * 
 * Data format for exchanging data between system running on different technology
 * 
 * Can be used with most of languages like: Python PHP ect and pbviously JavaScript
 * 
 * Has similarity with JAvascript Object
 * 
 * Properties are wrapped with " "
 * 
 * JavaScript Object: { name : "Rahim", age : 21 }
 * 
 * JSON Data : { "name" : "Rahim", "age": 21 }
 */

 /*

 var student = {
    name: "Rahim",
    age: 26,
    hometown: "Dhaka"
};

var student_json = JSON.stringify(student);

console.log(student_json);

var student_new = JSON.parse(student_json);
console.log(student_new);
*/

/*

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        //console.log(data);
        jsonData(data);
    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();


function jsonData(json_obj) {
    //console.log(json_obj);
    var js_obj = JSON.parse(json_obj);
    //console.log(js_obj);

    for (x in js_obj.persons) {
        //console.log(x);
      
        var persons = js_obj.persons;
        // console.log(persons[x]);
        for (y in persons[x]) {
            console.log(persons[x][y]);
        }
        
    }
}

*/