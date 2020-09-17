const table = document.getElementById("bookList");
const addBookBtn = document.getElementById("addBook");
const openFormBtn = document.getElementById("openForm");
const form = document.getElementById("formDiv");
const myLibrary = [
  {title: "Harry Potter", author: "JK Rowling", pages: "350", read: "yes"},
  {title: "The Hobbit", author: "Tolkin", pages: "259", read: "no"},
  {title: "There and Back Again", author: "Baggins", pages: "2", read: "no"}
];

// hide form 
form.style.display = "none"

// button to toggle form
openFormBtn.addEventListener ('click', function(event) {
  if (form.style.display === "none") {
    form.style.display = "flex"
    openFormBtn.value = "Hide Form"
  } else {
    form.style.display = "none"
    openFormBtn.value = "Add New Book"
  }
})


//constructor for making a new book
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; 
  this.info = function() {
    return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
  }
  console.log(this.info);
}

//get info from form 
addBookBtn.addEventListener ('click', function(book) {
  event.preventDefault();
  let title = document.getElementById("bookTitle").value;
  let author = document.getElementById("bookAuthor").value;
  let pages = document.getElementById("bookPages").value;
  let read = document.addBookForm.bookRead.value;
  let next = new Book(title, author, pages, read);
  addBookToLibrary(next);
  document.addBookForm.reset();
})

//add book to myLibrary 
function addBookToLibrary(book) {
  myLibrary.push(book);
  makeRow(book);
}

function printMyLibrary(array) {
  // populate the table 
  array.forEach(prop => {
    makeRow(prop);
  });
}

function makeRow(book) {
  let row = table.insertRow();
    row.insertCell(0).innerHTML = book.title;
    row.insertCell(1).innerHTML = book.author;
    row.insertCell(2).innerHTML = book.pages;
    row.insertCell(3).innerHTML = book.read;

  // make change read status button
  let changeReadBtn = document.createElement("button");
  changeReadBtn.innerHTML = "Change Read Status";
  changeReadBtn.addEventListener('click', function() {
    row.deleteCell(3);
    if (book.read == "yes") {
      book.read = "no";
      console.log("No");
    } else {
      book.read = "yes";
      console.log("Yes");
    }
    row.insertCell(3).innerHTML = book.read;
  });
  row.insertCell(4).appendChild(changeReadBtn);

  // make delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete Book";
  deleteBtn.addEventListener('click', function() {
    myLibrary.pop(book);
    this.parentElement.parentElement.remove();
  });
  row.insertCell(5).appendChild(deleteBtn);
};

console.log(myLibrary);
printMyLibrary(myLibrary);