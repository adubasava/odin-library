const myLibrary = [];

function Book(title, author, genre, numberOfPages, isRead) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
}

function displayBookCards() {
    document.querySelector('.main-container').textContent = "";

    for (let i = 0, j = myLibrary.length; i < j; i++) {
        
        const newDiv = document.createElement("div");
        newDiv.className = "card";

        const status = myLibrary[i].isRead ? "Read" : "Not read";

        newDiv.innerHTML = [
            "<span class=title>",
            myLibrary[i].title,
            "</span/>",
            "<br><br>",
            "<span class=author>",
            myLibrary[i].author,
            "</span/>",
            "<br><br>",
            myLibrary[i].genre,
            "<br><br>",
            myLibrary[i].numberOfPages,
            " p.",
            "<br><br>",
            `<button class='status ${myLibrary[i].isRead}' data-id=${i}>${status}</button>`,
            "<br><br><center>",
            `<button class='remove ${i}' data-index=${i}>Remove a book</button></center>`,
        ].join("");        

        document.querySelector('.main-container').appendChild(newDiv);      
        
    }
}

// Starting set of books
const theHobbit = new Book('The Hobbit, or There and Back Again', 'J. R. R. Tolkien', 'fantasy', '295', false);
myLibrary.push(theHobbit);

const hotel = new Book('Hotel', 'A. Hailey', 'novel', '608', true);
myLibrary.push(hotel);

const sherlock = new Book('The Great Adventures of Sherlock Holmes', 'A. Conan Doyle', 'detective fiction', '276', true);
myLibrary.push(sherlock);


document.querySelector('#show').addEventListener('click', displayBookCards);


// Adding a book
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

addEventListener("submit", addBook);

function addBook(event) {
    event.preventDefault();

    const newBook = new Book(
        document.querySelector('#title').value, 
        document.querySelector('#author').value, 
        document.querySelector('#genre').value,  
        document.querySelector('#pages').value, 
        document.querySelector('#isread').checked, 
        );
    myLibrary.push(newBook);
    dialog.close();
}

// Remove a book from the library

removeButtons = document.querySelectorAll('.remove');

removeButtons.forEach((btn) => {
    btn.addEventListener('click', removeBook(btn.dataset.index));
})

function removeBook(id) {
    myLibrary.splice(id, 1);
    displayBookCards();
}

// Toggle status

bookStatus = document.querySelectorAll('.status');

bookStatus.forEach((btn) => {
    btn.addEventListener('click', toggleStatus(btn.dataset.id));
})

function toggleStatus(id) {
    myLibrary[id].isRead = myLibrary[id].isRead ? false : true;    
    displayBookCards();
}
