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
  let status;
  for (let i = 0; i < statusList.length; i++) {
    if (statusList[i].checked) {
      status = statusList[i].value;
      break;
    }
  }
  
  book = new Book(bookDetails[0].value, bookDetails[1].value, bookDetails[2].value, status);
  console.log(bookInLibrary(book))
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
  let read = document.createElement('li');
  read.append(document.createTextNode(book.status));
  read.classList.add("book-info");
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
  infoList.appendChild(read);
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
  cardAttribute = this.getAttribute("data-index");
  let bookCard = document.body.querySelector(`.book-card[data-index="${cardAttribute}"]`);
  index = myLibrary.findIndex((book) => {return book.title == cardAttribute});
  myLibrary.splice(index, 1);
  currentlyRendered.splice(index, 1);

  while (bookCard.firstChild) {
    bookCard.removeChild(bookCard.lastChild);
  }
  bookCard.parentNode.removeChild(bookCard);
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
/*
Possibly sort books into categories i.e. if they have been read or not (or are being read)
*/