// Get the UI Element
let form = document.querySelector('#book-form');
let booklist = document.querySelector('#book-list');

// Book Class
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    };

};

// Class UI

class UI {

    static addBookList(book){
        let list = document.querySelector("#book-list");
        let row = document.createElement('tr');
        row.innerHTML = 
        `<td> ${book.title} </td>
        <td> ${book.author} </td>
        <td> ${book.isbn} </td>
        <td> <a href='#' class='delete'> X </a></td>`;
        list.appendChild(row);
    };

    static clearFields(){
        document.querySelector("#title").value = '';
        document.querySelector("#author").value = '';
        document.querySelector("#isbn").value = '';
    };

    static showAlert(message, className){
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container');
        let form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    };

    static deleteFromBook(target){
        if(target.hasAttribute('href')){
            target.parentElement.parentElement.remove();
            Store.removeBook(target.parentElement.previousElementSibling.textContent.trim());
            UI.showAlert('Book Removed', 'success');
        }
    }

};

// Local Storage Class

class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    };
    static addBooks(book){
        let books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    };

    static displayBooks() {
        let books = Store.getBooks();

        books.forEach(book => {
            UI.addBookList(book);
        });
    };

    static removeBook(isbn) {
        let books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.isbn.trim() === isbn ){
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
};

// Add Event Listener
form.addEventListener('submit', newBook);
booklist.addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded', Store.displayBooks());

// Define Functions

function newBook(e){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let isbn = document.querySelector("#isbn").value;
    //let ui = new UI();
    if( title === '' || author === '' || isbn === ''){
        UI.showAlert("Please fill all the fields!", "error");
    }else{
        let book = new Book(title, author, isbn);
        UI.addBookList(book);
        UI.clearFields();
        Store.addBooks(book);
        UI.showAlert("Book added!", "success");
        e.preventDefault();
    }
}

function removeBook(e){
    UI.deleteFromBook(e.target);
    e.preventDefault();
}