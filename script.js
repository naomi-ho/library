const myLibrary = [];

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let information = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
        console.log(information);
        return information;
    };
}

function addBookToLibrary() {
    let newBookObj = {};

    newBookObj.title = titleInput.value;
    newBookObj.author = authorInput.value;
    newBookObj.pages = pagesInput.value;
    
    if (yes.checked) {
        newBookObj.read = yes.value;
    } else {
        newBookObj.read = no.value;
    }

    myLibrary.push(newBookObj);
    console.log(myLibrary);
}