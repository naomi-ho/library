const myLibrary = [];

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const read = document.getElementById("read");
const container = document.querySelector(".container");

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBookToLibrary() {
    let newBookObj = new Book();

    newBookObj.title = titleInput.value;
    newBookObj.author = authorInput.value;
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
        const read = document.createElement("p");

        card.className = "card";
        title.className = "title";
        author.className = "author";
        read.className = "read";

        title.textContent = myLibrary[i].title;
        author.textContent = "by  " + myLibrary[i].author;
        read.textContent = myLibrary[i].read;

        if (read.textContent === "Completed") {
            read.style.color = "#8fcc85";
        } else {
            read.style.color = "#cc8585";
        }

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(read);
        container.appendChild(card);
    }
}