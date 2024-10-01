/* Library Stash*/



/* Global Variable */
const myLibrary = [];

/* book info storage object */

function Book(title, author, pageCount, status) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.status = status;
}

/* AddingBook -- adding book to the array */

function AddBookToLibrary(Book) {
    myLibrary.push(Book)
}


/* DeleteBook -- deleting book from the array */

function DeleteBook(position) {
    myLibrary.splice(position, 1);
}


/*Adding some book for e.g. */

const harryPotter1 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 223, false);
const atomicHabbits = new Book("Atomic Habits", "James Clear", 320, false);

myLibrary.push(harryPotter1);
myLibrary.push(atomicHabbits);

/* ----------------Displaying Data to Web----------------------*/

const displayBookInfo = document.querySelector(".book-information-nav");
const parentGrid = document.querySelector(".grid-parent-container"); /*Displaying children grid row by row*/


// function renderLibrary() {
//     myLibrary.forEach(book => {

//         let bookTitle = document.createElement("span");
//         let bookAuthor = document.createElement("span");
//         let pageCount = document.createElement("span");
//         let bookStatus = document.createElement("span");
//         let clearButton = document.createElement("button");
//         clearButton.classList.add("remove-btn")
    
//         bookTitle.innerText = book.title;
//         bookAuthor.innerText = book.author;
//         pageCount.innerText = book.pageCount;
//         bookStatus.innerText = book.status;
//         clearButton.innerText = "X";
    
//         displayBookInfo.appendChild(bookTitle)
//         displayBookInfo.appendChild(bookAuthor)
//         displayBookInfo.appendChild(pageCount)
//         displayBookInfo.appendChild(bookStatus)
//         displayBookInfo.appendChild(clearButton)
//     });
// }


myLibrary.forEach(book => {

    let bookTitle = document.createElement("span");
    let bookAuthor = document.createElement("span");
    let pageCount = document.createElement("span");
    let bookStatus = document.createElement("span");
    let clearButton = document.createElement("button");
    clearButton.classList.add("remove-btn")

    bookTitle.innerText = book.title;
    bookAuthor.innerText = book.author;
    pageCount.innerText = book.pageCount;
    bookStatus.innerText = book.status;
    clearButton.innerText = "X";

    displayBookInfo.appendChild(bookTitle)
    displayBookInfo.appendChild(bookAuthor)
    displayBookInfo.appendChild(pageCount)
    displayBookInfo.appendChild(bookStatus)
    displayBookInfo.appendChild(clearButton)

});




// Toggling between the pseudo-class "active" to show hidden content / popup
function toggle() {
    let blur = document.querySelector("#blur");
    blur.classList.toggle('active');

    let popup = document.querySelector("#popup");
    popup.classList.toggle('active')
}

/* onclick for addNewButton */

const addNewButton = document.querySelector(".add-new");
const exitForm = document.querySelector('.exit-form-btn');
const submitBtn = document.querySelector('.submit-btn');

addNewButton.addEventListener("click", () => {
    toggle();
})

submit.addEventListener("click", () => {
    toggle();
})

exitForm.addEventListener("click", () => {
    toggle();
})

