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
  if (formCheck()) {
    return undefined;
  }
  let bookDetails = document.getElementsByClassName("form-input");
  let statusList = document.getElementsByName("status");
  let status;
  for (let i = 0; i < statusList.length; i++) {
    if (statusList[i].checked) {
      status = statusList[i].value;
      break;
    }
  }
  
  book = new Book(bookDetails[0].value, bookDetails[1].value, bookDetails[2].value, status);
  if (bookInLibrary(book)) {
    return undefined;
  }else {
    myLibrary.push(book);
  }
}

function bookInLibrary(book) {
  let inLibrary;
  myLibrary.forEach(bookObj => {
    if (book.title == bookObj.title && book.author == bookObj.author && book.pages == bookObj.pages) {
      inLibrary = true
    }
  });

  return inLibrary ? true : false;
}

function renderBook() {
  if (formCheck()) {
    return undefined;
  }
  const bookContainer = document.querySelector(".book-display-container");
  let book = myLibrary[myLibrary.length - 1];
  index = myLibrary.length - 1;
  if (currentlyRendered.includes(book)) {return undefined};
  
  let bookCard = document.createElement('div');
  bookCard.classList.add("book-card");
  bookCard.setAttribute("data-index", `${book.title}`);
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
  let statusButton = document.createElement('button');
  book.status === "completed" ? statusButton.append(document.createTextNode("Completed")) : statusButton.append(document.createTextNode("Not Read"));
  statusButton.classList.add(`status-${book.status}`);
  statusButton.classList.add("status-button");
  statusButton.setAttribute("data-index", `${book.title}`);
  statusButton.addEventListener("click", toggleStatus);
  let removeButton = document.createElement('button');
  removeButton.append(document.createTextNode('X'))
  removeButton.classList.add("remove-book");
  removeButton.setAttribute("data-index", `${book.title}`);
  removeButton.addEventListener("click", removeBook)
  
  bookContainer.appendChild(bookCard);
  bookCard.appendChild(removeButton);
  bookCard.appendChild(infoList);
  infoList.appendChild(title);
  infoList.appendChild(author);
  infoList.appendChild(pages);
  bookCard.appendChild(statusButton);
  currentlyRendered.push(book);
}

function showForm() {
  let newBookForm = document.querySelector(".new-book-container");
  let newButton = document.querySelector(".new-button-container");
  newBookForm.style.display = "flex";
  newButton.style.display = "none";
}

function cancelBook() {
  let newBookForm = document.querySelector(".new-book-container");
  let newButton = document.querySelector(".new-button-container");
  newBookForm.style.display = "none";
  newButton.style.display = "flex";
  document.forms[0].reset();
}

function removeBook() {
  let cardAttribute = this.getAttribute("data-index");
  let bookCard = document.body.querySelector(`.book-card[data-index="${cardAttribute}"]`);
  let index = myLibrary.findIndex((book) => {return book.title == cardAttribute});
  myLibrary.splice(index, 1);
  currentlyRendered.splice(index, 1);

  while (bookCard.firstChild) {
    bookCard.removeChild(bookCard.lastChild);
  }
  bookCard.parentNode.removeChild(bookCard);
}

function toggleStatus() {
  let buttonAttribute = this.getAttribute("data-index");
  let book = myLibrary.find((book) => {return book.title === buttonAttribute});
  let statusButton = document.querySelector(`.status-button[data-index="${buttonAttribute}"]`);
  
  if (book.status === "Completed") {
    book.status = "Not Read";
    statusButton.textContent = book.status;
    statusButton.classList.remove("status-completed");
    statusButton.classList.add("status-notread");
  }else {
    book.status = "Completed"
    statusButton.textContent = book.status;
    statusButton.classList.remove("status-notread");
    statusButton.classList.add("status-completed");
  }
}

function formCheck() {
  let bookDetails = document.getElementsByClassName("form-input");
  let statusList = document.getElementsByName("status");
  let statusCount = 0;

  for (let i = 0; i < bookDetails.length; i++) {
    if (bookDetails[i].value === "") {
      return true;
    }
  }

  for (let i = 0; i < statusList.length; i++) {
    if (statusList[i].checked === false) {
      statusCount += 1;
    }
  }
  
  return statusCount === 2 ? true : false;
}

let myLibrary = [];
let currentlyRendered = [];
const newBookButton = document.querySelector("#new-button");
newBookButton.addEventListener("click", showForm);
const addBookButton = document.querySelector("#add-button");
addBookButton.addEventListener("click", addBookToLibrary);
addBookButton.addEventListener("click", renderBook);
const cancelBookButton = document.querySelector("#cancel-button");
cancelBookButton.addEventListener("click", cancelBook);
