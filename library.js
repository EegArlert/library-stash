/* Library Stash*/

/* Global Variable */
const myLibrary = [];
const displayBookInfo = document.querySelector(".book-information-nav");
/*Displaying children grid row by row*/
const parentGrid = document.querySelector(".grid-parent-container");
const addNewButton = document.querySelector(".add-new");
const submitBtn = document.querySelector('.submit-btn');
const exitForm = document.querySelector('.exit-form-btn');
const form = document.querySelector('form');
const topRow = document.querySelectorAll('.main')

function bookPosition() {
    return myLibrary.length + 1;
}

/* book info storage object */
function Book(title, author, pageCount, status, bookNum) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.status = status;
    this.bookNum = bookNum;
}
/*Adding some book for e.g. */
const harryPotter1 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 223, true, bookPosition());
const atomicHabbits = new Book("Atomic Habits", "James Clear", 320, false,  bookPosition());

myLibrary.push(harryPotter1);
myLibrary.push(atomicHabbits);


// Toggling between the pseudo-class "active" to show hidden content / popup
function toggle() {
    let blur = document.querySelector("#blur");
    blur.classList.toggle('active');

    let popup = document.querySelector("#popup");
    popup.classList.toggle('active')
}

/* ----------------Displaying Data to Web----------------------*/

function checkStatus(param) {
    if (param == "not-finished") {
        return "No"
    } else {
        return "Yes"
    }
}

/* onclick for addNewButton */

addNewButton.addEventListener("click", () => {
    toggle();
})

exitForm.addEventListener("click", () => {
    toggle();
})


function renderAllBookInLibrary() {
    myLibrary.forEach(book => {
        render(book.title, book.author, book.pageCount, book.status, book.bookNum);
    });
}

renderAllBookInLibrary(); //initial rendering

/* processing submit button clicked */
form.addEventListener("submit", (e) => {
    toggle();
    e.preventDefault();

    const data = new FormData(e.target);
    const title = data.get("book-title");
    const author = data.get("book-author");
    const totalPages = data.get("total-pages");
    const status = data.get("status");

    if (title == "") {
        return
    }
    else {
        const newBook = new Book(title, author, totalPages, status, bookPosition());
        myLibrary.push(newBook);
        render(newBook.title, newBook.author, newBook.pageCount, newBook.status, newBook.bookNum);
    }
})


/* DeleteBook -- deleting book from the array */
function DeleteBook(position) {
    myLibrary.splice(position - 1, 1);
}


function render(title, author, totalPages, status, bookNum) {
    let bookTitle = document.createElement("span");
    let bookAuthor = document.createElement("span");
    let pageCount = document.createElement("span");
    let bookStatus = document.createElement("span");
    let clearButton = document.createElement("button");
    clearButton.classList.add("remove-btn");
    clearButton.classList.add(myLibrary.length);
    bookTitle.innerText = title;
    bookAuthor.innerText = author;
    pageCount.innerText = totalPages;
    bookStatus.innerText = checkStatus(status);
    clearButton.innerText = "X";
    clearButton.setAttribute("id", bookNum);

    displayBookInfo.appendChild(bookTitle);
    displayBookInfo.appendChild(bookAuthor);
    displayBookInfo.appendChild(pageCount);
    displayBookInfo.appendChild(bookStatus);
    displayBookInfo.appendChild(clearButton);

    clearButton.addEventListener("click", () => {
        let bookPosition = Number(clearButton.getAttribute("id"));
        DeleteBook(bookPosition);
        resetGrid();
        renderAllBookInLibrary();
    })
}

function resetGrid() {
    const titleRow = document.querySelector(".title");
    const authorRow = document.querySelector(".author");
    const pageCountRow = document.querySelector(".page-count");
    const statusRow = document.querySelector(".status");
    const removeBtnRow = document.querySelector(".remove-btn.main");

    displayBookInfo.replaceChildren(titleRow, authorRow, pageCountRow, statusRow, removeBtnRow)
}