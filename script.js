const myLibrary = [];

function Book({title, author, genre, numberOfPages, isRead}) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;

    this.toggleStatus = function() {
        this.isRead = !this.isRead;
    }
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
            `<button class='remove' data-index=${i}>Remove a book</button></center>`,
        ].join("");        

        newDiv.querySelector(".remove").addEventListener("click", () => removeBook(i));
        newDiv.querySelector(".status").addEventListener("click", () => {
            myLibrary[i].toggleStatus();
            displayBookCards();
        });

        document.querySelector('.main-container').appendChild(newDiv);              
    }
}

// Starting set of books
const theHobbit = new Book({title: 'The Hobbit, or There and Back Again', author: 'J. R. R. Tolkien', genre: 'fantasy', numberOfPages: '295', isRead: false});
myLibrary.push(theHobbit);

const hotel = new Book({title: 'Hotel', author: 'A. Hailey', genre: 'novel', numberOfPages: '608', isRead: true});
myLibrary.push(hotel);

const sherlock = new Book({title: 'The Great Adventures of Sherlock Holmes', author: 'A. Conan Doyle', genre: 'detective fiction', numberOfPages: '276', isRead: true});
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

    const newBook = new Book({
        title: document.querySelector('#title').value, 
        author: document.querySelector('#author').value, 
        genre: document.querySelector('#genre').value,  
        numberOfPages: document.querySelector('#pages').value, 
        isRead: document.querySelector('#isread').checked, 
    });
    myLibrary.push(newBook);
    dialog.close();
}

// Remove a book from the library

function removeBook(id) {
    if (document.querySelectorAll('.remove').length > 1) {
        document.querySelectorAll('.remove')[id].parentNode.parentNode.remove();
    } else {
        document.querySelector('.remove').parentNode.parentNode.remove();
    }

    // if to remove from array instead:
    /* myLibrary.splice(id, 1);    
    displayBookCards(); */
}
