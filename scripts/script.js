function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = `${pages} pages`;
  this.read = read;
  this.info = function() {
    if (read === false) {
      return `${title} by ${author}, ${pages} pages, not read yet.`;
    }else {
      return `${title} by ${author}, ${pages} pages, has been read.`;
    }
  }
}

function addBookToLibrary(title, author, pages, read) {
  book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function renderBooks() {
  const bookContainer = document.querySelector(".book-display-container");

  myLibrary.forEach(book => {
    let bookCard = document.createElement('div');
    bookCard.classList.add("book-card")
    let infoList = document.createElement('ul');
    infoList.classList.add("book-info-list");
    let title = document.createElement('li');
    title.append(document.createTextNode(book.title));
    title.classList.add("book-info");
    let author = document.createElement('li');
    author.append(document.createTextNode(book.author));
    author.classList.add("book-info")
    let pages = document.createElement('li');
    pages.append(document.createTextNode(book.pages));
    pages.classList.add("book-info");
    let read = document.createElement('li');
    read.append(document.createTextNode(book.read));
    read.classList.add("book-info");

    bookContainer.appendChild(bookCard);
    bookCard.appendChild(infoList);
    infoList.appendChild(title);
    infoList.appendChild(author);
    infoList.appendChild(pages);
    infoList.appendChild(read);
  })
}

function showForm() {
  let newBookForm = document.querySelector(".new-book-container");
  let newButton = document.querySelector(".new-button-container");
  newBookForm.style.display = "block";
  newButton.style.display = "none";

}

let myLibrary = [];
const newBookButton = document.querySelector("#new-button");
newBookButton.addEventListener("click", showForm);

addBookToLibrary('Harry Potter Series', 'J. K. Rowling', '4224', 'Finished');
addBookToLibrary('Fire Punch', 'Tatsuki Fujimoto', '1664', 'Not yet read');
addBookToLibrary('Lord of the Rings', 'J. R. R. Tolkien', '1137', 'Reading');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281', 'Not Yet read');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281', 'Not Yet read');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281', 'Not Yet read');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281', 'Not Yet read');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281', 'Not Yet read');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281', 'Not Yet read');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281', 'Not Yet read');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281', 'Not Yet read');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281', 'Not Yet read');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281', 'Not Yet read');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281', 'Not Yet read');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281', 'Not Yet read');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281', 'Not Yet read');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281', 'Not Yet read');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281', 'Not Yet read');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281', 'Not Yet read');
renderBooks();
/*
Possibly sort books into categories i.e. if they have been read or not (or are being read)
*/