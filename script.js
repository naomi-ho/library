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
    // prevents user from submitting empty forms
    if (titleInput.value == "" || authorInput == "" || read.value == "") {
        return false;
    }

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
        const btns = document.createElement("div");
        const removeBtn = document.createElement("button");
        const statusBtn = document.createElement("button");
        
        card.className = "card";
        title.className = "title";
        author.className = "author";
        read.className = "read";
        btns.className = "btns";
        removeBtn.className = "removeBtn";
        statusBtn.className = "statusBtn";

        title.textContent = myLibrary[i].title;
        author.textContent = "by  " + myLibrary[i].author;
        statusBtn.textContent = myLibrary[i].read;

        if (statusBtn.textContent === "Complete") {
            statusBtn.style.backgroundColor = "#8fcc85";
        } else {
            statusBtn.style.backgroundColor = "#cc8585";
        }

        // pass the index of the book to be removed into removeBook()
        removeBtn.addEventListener("click", function() {
            container.removeChild(card);
            removeBook(i);
        });

        statusBtn.addEventListener("click", function() {
            changeStatus(i);
        });

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(read);
        btns.appendChild(statusBtn);
        btns.appendChild(removeBtn);
        card.appendChild(btns);
        container.appendChild(card);
    }
}

// index specifies the index of the book to be removed
function removeBook(index) {
    // removes book from array (index at which to start modifying the array, number of elements to remove)
    myLibrary.splice(index, 1);
    // update the displayed books after removing the book
    displayBooks();
}

// toggles between book completion status
function changeStatus(index) {
    if (myLibrary[index].read === "Complete") {
        myLibrary[index].read = "Incomplete";
    } else {
        myLibrary[index].read = "Complete";
    }
    displayBooks();
}