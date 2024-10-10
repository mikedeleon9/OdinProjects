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
 <h2>Add New Book </h2>

   <div class="form-grid">
       
            <div>
            <label for="title">Title:</label>
            <input type="text" id="title" name="title"><br><br>
            </div>
            <div>
            <label for="author">Author:</label>
            <input type="text" id="author" name="author"><br><br>
            </div>
            <div>
            <label for="pages">Pages:</label>
            <input type="text" id="pages" name="pages"><br><br>
            </div>

            <div class="radio-group">
            <label>Read?</label>
            <input type="radio" id="read-yes" name="read" value="yes">
            <label for="read-yes">Yes</label>
            <input type="radio" id="read-no" name="read" value="no">
            <label for="read-no">No</label><br><br>
           
            </div>
             <input type="submit" value="Submit">
    </div>
 `;




myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
 

    newBookButton.textContent = "New Book"
    newBookButton.onclick = () => createNewEntry(modalElement);
    
    bookCard.classList.add('book-card');
    bookCard.setAttribute('data-index', index);
    bookCard.innerHTML = `
   <div class="card-content">
   <div> Title: ${book.title} </div>
   <div> Author:  ${book.author} </div>
   <div> Number of Pages: ${book.pages} </div>
   </div>
   <button class="remove-button" ">Remove Book</button>
   
    `;

    modalElement.classList.add('modal')


    mainContainer.appendChild(bookCard);
    
    const removeButton = bookCard.querySelector('.remove-button');
    removeButton.addEventListener('click', ()=> removeBook(index, bookCard));
   
})

function createNewEntry(dialog){
 dialog.showModal();
}

function removeBook(index, bookCard){
  myLibrary.pop(index, 1);
  bookCard.remove();
}

