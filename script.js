const myLibrary = [];

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const read = document.getElementById("read");
const container = document.querySelector(".container");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let newBookObj = new Book();

    newBookObj.title = titleInput.value;
    newBookObj.author = authorInput.value;
    newBookObj.pages = pagesInput.value;
    newBookObj.read = read.value;

    myLibrary.push(newBookObj);
    displayBooks(myLibrary);
}

function displayBooks() {
    container.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement("div");
        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("p");

        title.textContent = "Title: " + myLibrary[i].title;
        author.textContent = "Author: " + myLibrary[i].author;
        pages.textContent = "Pages: " + myLibrary[i].pages;
        read.textContent = "Status: " + myLibrary[i].read;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        container.appendChild(card);
    }
}