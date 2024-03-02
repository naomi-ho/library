const myLibrary = [];

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

// to test the book constructor
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
theHobbit.info();

function addBookToLibrary() {
    // take user input
    // store new book objects into an array
}