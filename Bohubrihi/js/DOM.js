/**
 * What is DOM?
 * 
 * Document Object Model
 * Tree of Elements (Nodes) Generated by browser
 * JavaScript can Manipulate DOM
 * 
 */

 /*

 let val;
val = this;
val = window;
val = window.document;
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].href;
val = document.links[0].className;
val = document.links[0].classList;

val = document.images;

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].getAttribute('src');

links = document.links;
let linkArr = Array.from(links);

linkArr.forEach(function(link){
    console.log(link.getAttribute('href'));
});

console.log(links);
console.log(val);

*/

/*

var x = document.getElementById("document-title");

// Changing style
x.style.background = '#333';
x.style.color = '#fff';
x.style.display = 'None';

let i = 1;
if(i){
    x.style.display = 'Block';
}

// Changing Content

x.textContent = "Name";
x.innerText = "Again Name";
x.innerHTML = '<h1> Inner HTML Change </h1>';

// Document.querySelector()
// call by id
x = document.querySelector('#document-title');

// call by class
x = document.querySelector('.sample-class');

// call by tag
x = document.querySelector('h1');

// Paranting
x = document.querySelector('ol li');
x = document.querySelector('li:nth-child(4)');
console.log(x);

*/

/*

// Multiselector 
// document.getElementsByClassName()
let list = document.getElementsByClassName('sample-class');
list[0].style.background = 'red';
list[0].style.color = 'white';
list[0].style.padding = '10px';
list[0].textContent = 'Hello World!';
//console.log(list[0]);

// document.getElementsByTagName()
list = document.getElementsByTagName('li');
list = document.querySelector('ol').getElementsByTagName('li');

let lis = Array.from(list);
lis.forEach(function(item){
    //console.log(item);
});

// document.querySelectorAll()
// id -> #
// classname -> .
// tagname -> nothing

list = document.querySelectorAll('ol li');
list.forEach(function(item){
    //console.log(item);
});

let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEve = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(item){
    item.style.background = 'grey';
    item.style.color = 'white';
});

liEve.forEach(function(item){
    item.style.background = 'red';
    item.style.color = 'white';
});


console.log(list);

*/


/*

// Traversing the DOM
let val;
let list = document.querySelector('ul');
let listItem = document.querySelector('ul li:first-child');

val = list;
val = listItem;

// Get Child Nodes
val = list;
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[2];
val = list.childNodes[1].nodeName;
val = list.childNodes[0].nodeType;

// 1 Element
// 2 Attribute
// 3 Text Node
// 8 Comment
// 9 Document Itself
// 10 Doctype
val = list.childNodes;

val = list.children;
val = list.children[1];
list.children[0].textContent = "Hello";
val = list.children[1].children[0];
val = list.children[1].children[0].href;

val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = listItem;
val = listItem.parentElement;
val = listItem.parentNode;
val = listItem.parentElement.parentElement;

val = listItem.nextSibling.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

val = document.querySelector('ul li:last-child');
val = val.previousSibling;
val = val.previousElementSibling;

console.log(val);
*/

/*

// Adding Element to DOM
// Create Element
let olItem = document.createElement('li');

// Add Id and Class
olItem.className = "a new another-class";
olItem.id = "new-element";

// Add Attribute
olItem.setAttribute('title', 'A title to new Element');

olItem.appendChild(document.createTextNode('JavaScript'));
document.querySelector('ol').appendChild(olItem);
//console.log(olItem);

let ulItem = document.createElement('li');
let link = document.createElement('a');

link.appendChild(document.createTextNode('Instagram'));
link.setAttribute('href', 'https://www.instagram.com');

ulItem.appendChild(link);

document.querySelector('ul').appendChild(ulItem);

console.log(ulItem);

// Replacing Elements
let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode('H1 New Heading'));
newHeading.className = "sample-class";

let oldHeading = document.querySelector('h3');

let parent = document.querySelector('.container');
//parent = oldHeading.parentElement;
parent.replaceChild(newHeading, oldHeading);


console.log(newHeading);
console.log(oldHeading);
console.log(parent);


// Remove element

let lis = document.querySelectorAll('li');
let list = document.querySelector('ul');

lis[0].remove();
list.removeChild(lis[7]);

//
list.classList.add("test");
list.classList.add("test-new");
list.classList.remove("test-new");
let val = list.hasAttribute('title');
val = list.hasAttribute("class");
list.setAttribute("title", "Yes")
list.removeAttribute("title");
console.log(list);

//console.log(link);

*/