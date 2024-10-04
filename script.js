const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const read = document.getElementById('read');
const container = document.querySelector('.container');
const form = document.getElementById('form');

class Book {
  constructor(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBookToLibrary() {
    // prevents user from submitting empty forms
    if (titleInput.value == '' || authorInput == '' || read.value == '') {
      return false;
    }

    const newBookObj = new Book(
      titleInput.value,
      authorInput.value,
      read.value,
    );

    this.books.push(newBookObj);
    this.displayBooks();
  }

  // index specifies the index of the book to be removed
  removeBook(index) {
    // removes book from array (index at which to start modifying the array, number of elements to remove)
    this.books.splice(index, 1);
    // update the displayed books after removing the book
    this.displayBooks();
  }

  // toggles between book completion status
  changeStatus(index) {
    if (this.books[index].read === 'Complete') {
      this.books[index].read = 'Incomplete';
    } else {
      this.books[index].read = 'Complete';
    }
    this.displayBooks();
  }

  displayBooks() {
    container.innerHTML = '';

    for (let i = 0; i < this.books.length; i++) {
      const card = document.createElement('div');
      const title = document.createElement('p');
      const author = document.createElement('p');
      const read = document.createElement('p');
      const btns = document.createElement('div');
      const removeBtn = document.createElement('button');
      const statusBtn = document.createElement('button');

      card.className = 'card';
      title.className = 'title';
      author.className = 'author';
      read.className = 'read';
      btns.className = 'btns';
      removeBtn.className = 'removeBtn';
      statusBtn.className = 'statusBtn';

      title.textContent = this.books[i].title;
      author.textContent = 'by  ' + this.books[i].author;
      statusBtn.textContent = this.books[i].read;
      removeBtn.textContent = 'Delete';

      if (statusBtn.textContent === 'Complete') {
        statusBtn.style.backgroundColor = '#8fcc85';
      } else {
        statusBtn.style.backgroundColor = '#cc8585';
      }

      // pass the index of the book to be removed into removeBook()
      // use arrow functions to maintain correct context
      removeBtn.addEventListener('click', (e) => {
        container.removeChild(card);
        this.removeBook(i);
      });

      statusBtn.addEventListener('click', (e) => {
        this.changeStatus(i);
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
}

// creates an instance of the Library class
const myLibrary = new Library();

// attach a submit event listener to the entire form so that it ensures all form submissions, regardless of how it's triggered (e.g. by pressing Enter or clicking submit), is intercepted
form.addEventListener('submit', (e) => {
  // prevent default form submission behaviour
  e.preventDefault();
  myLibrary.addBookToLibrary();
});
