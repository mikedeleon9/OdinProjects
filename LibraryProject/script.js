const mainContainer = document.querySelector('.main-container');
const body = document.querySelector('body');
const myLibrary = [];

function Book(title, author, pages, bookRead){
  this.title = title;
  this.author = author;
  this.pages =  pages;
  this.bookRead = bookRead;
  
  this.info = function (){
    return `${title} by ${author}, ${pages} pages, ${bookRead}`;
    
}
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "Not Read");
const theSunAlsoRise = new Book("The Sun Also Rises", "Ernest Hemingway", "289 pages", "Read");
const sapiens = new Book("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", "443", "Read")
const ninetyEightyFour = new Book("Nineteen Eighty-Four", "George Orwell", "323", "Read")

function addBookToLibrary(book) {
 myLibrary.push(book);
}

addBookToLibrary(theHobbit);
addBookToLibrary(theSunAlsoRise)
addBookToLibrary(sapiens);
addBookToLibrary(ninetyEightyFour)


const newBookButton = document.createElement('button');
const modalElement = document.createElement('dialog');
const form = document.createElement('form');

body.appendChild(newBookButton)
body.appendChild(modalElement)
modalElement.appendChild(form)

form.innerHTML = `
 
`;

myLibrary.forEach(book => {
    const bookCard = document.createElement('div');
 

    newBookButton.textContent = "New Book"
    newBookButton.onclick = () => createNewEntry(modalElement);

    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
   <div> Title: ${book.title} </div>
   <div> Author:  ${book.author} </div>
   <div> Number of Pages: ${book.pages} </div>
    `;

    modalElement.classList.add('modal')


    mainContainer.appendChild(bookCard);
    
   
})

function createNewEntry(dialog){
 dialog.showModal();
}