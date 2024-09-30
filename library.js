/* Library Stash*/


/* Global Variable */
const myLibrary = [];

/* book info storage object */

function Book(title, author, numPages, isCompleted){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isCompleted = isCompleted;
}

/* AddingBook -- adding book to the array */

function AddBookToLibrary(Book) {
    myLibrary.push(Book)
}


/* DeleteBook -- deleting book from the array */

function DeleteBook(position) {
    myLibrary.splice(position, 1);
}



