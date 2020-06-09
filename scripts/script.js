function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = `${pages} pages`;
  this.status = status;
  this.info = function() {
    if (read === false) {
      return `${title} by ${author}, ${pages} pages, not read yet.`;
    }else {
      return `${title} by ${author}, ${pages} pages, has been read.`;
    }
  }
}

function addBookToLibrary() {
  let bookDetails = document.getElementsByClassName("form-input");
  let statusList = document.getElementsByName("status");
  console.log(statusList);
  for (let i = 0; i < statusList.length; i++) {
    console.log(statusList[i].checked);
    if (statusList[i].checked) {
      var status = statusList[i].value;
      break;
    }
  }
  console.log(status);
  book = new Book(bookDetails[0].value, bookDetails[1].value, bookDetails[2].value, status);
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
    read.append(document.createTextNode(book.status));
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
  newBookForm.style.display = "flex";
  newButton.style.display = "none";

}

let myLibrary = [];
const newBookButton = document.querySelector("#new-button");
newBookButton.addEventListener("click", showForm);
const addBookButton = document.querySelector("#add-button");
addBookButton.addEventListener("click", addBookToLibrary);
addBookButton.addEventListener("click", renderBooks);
/*
Possibly sort books into categories i.e. if they have been read or not (or are being read)
*/