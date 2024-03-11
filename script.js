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
        return book;
    }
}


const theHobbit = new Book('The Hobbit, or There and Back Again', 'J.R.R. Tolkien', 'fantasy', '295', false);
myLibrary.push(theHobbit);

const hotel = new Book('Hotel', 'A. Hailey', 'novel', '608', true);
myLibrary.push(hotel);

const sherlock = new Book('The Great Adventures of Sherlock Holmes', 'A. Conan Doyle', 'detective fiction', '276', true);
myLibrary.push(sherlock);

