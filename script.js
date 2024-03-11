const myLibrary = [];

function Book(title, author, genre, numberOfPages, isRead) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    for (let book of myLibrary) {
        
        const newDiv = document.createElement("div");
        newDiv.className = "card";

        newDiv.innerHTML = [
            "<span class=title>",
            book.title,
            "</span/>",
            "<br><br>",
            "<span class=author>",
            book.author,
            "</span/>",
            "<br><br>",
            book.genre,
            "<br><br>",
            book.numberOfPages,
            " p.",
            "<br><br>",
            book.isRead,
        ].join("")

        document.querySelector('.main-container').appendChild(newDiv);
    }
}


const theHobbit = new Book('The Hobbit, or There and Back Again', 'J. R. R. Tolkien', 'fantasy', '295', false);
myLibrary.push(theHobbit);

const hotel = new Book('Hotel', 'A. Hailey', 'novel', '608', true);
myLibrary.push(hotel);

const sherlock = new Book('The Great Adventures of Sherlock Holmes', 'A. Conan Doyle', 'detective fiction', '276', true);
myLibrary.push(sherlock);

document.querySelector('#show').addEventListener ('click', addBookToLibrary);

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});


