'use strict';

class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    static isBook(instance) {
        return instance instanceof Book;
    }

    setTitle(title) {
        if (typeof title === 'string') {
            this.title = title;
        } else {
            console.warn('The book title must be in string form!');
        }
    }

    setAuthor(author) {
        if (typeof author === 'string') {
            this.author = author;
        } else {
            console.warn('The author of book must be string form!');
        }
    }

    setPublicationYear(publicationYear) {
        if (typeof publicationYear === 'number') {
            this.publicationYear = publicationYear;
        } else {
            console.warn('The year of publication must be number form!');
        }
    }
}

class FictionBook extends Book {
    constructor(title, author, publicationYear, genre) {
        super(title, author, publicationYear);
        this.genre = genre;
    }

    setGenre(genre) {
        if (typeof genre === 'string') {
            this.genre = genre;
        } else {
            console.warn('The genre of book must be string form!');
        }
    }
    
    toString() {
        return `Title: ${this.title} \nAuthor: ${this.author} \nPublication year: ${this.publicationYear} \nGenre: ${this.genre}`;
    }
}

class NonFictionBook extends Book {
    constructor(title, author, publicationYear, subject) {
        super(title, author, publicationYear);
        this.subject = subject;
    }

    setSubject(subject) {
        if (typeof subject === 'string') {
            this.subject = subject;
        } else {
            console.warn('The subject of book must be string form!');
        }
    }

    toString() {
        return `Title: ${this.title} \nAuthor: ${this.author} \nPublication year: ${this.publicationYear} \nSubject: ${this.subject}`;
    }
}

class ReferenceBook extends Book {
    constructor(title, author, publicationYear, edition) {
        super(title, author, publicationYear);
        this.edition = edition;
    }

    setEdition(edition) {
        if (typeof edition === 'string') {
            this.edition = edition;
        } else {
            console.warn('The edition of book must be string form!');
        }
    }

    toString() {
        return `Title: ${this.title} \nAuthor: ${this.author} \nPublication year: ${this.publicationYear} \nEdition: ${this.edition}`;
    }
}

let borrowable = {
    borrowed: false,

    checkout() {
        this.borrowed = true;
    },

    checkin() {
        this.borrowed = false;
    }
}

Object.assign(Book.prototype, borrowable);

function addFictionBooks() {
    let title = prompt('Enter the title of the book:');
    let author = prompt('Enter the author of the book:');
    let publicationYear = prompt('Enter the year the book was published:');
    let genre = prompt('Enter the genre of the book:');

    fictionBooks.push(new FictionBook(title, author, publicationYear, genre));
}

function addNonFictionBooks() {
    let title = prompt('Enter the title of the book:');
    let author = prompt('Enter the author of the book:');
    let publicationYear = prompt('Enter the year the book was published:');
    let subject = prompt('Enter the subject of the book:');

    nonFictionBooks.push(new NonFictionBook(title, author, publicationYear, subject));
}

function addReferenceBooks() {
    let title = prompt('Enter the title of the book:');
    let author = prompt('Enter the author of the book:');
    let publicationYear = prompt('Enter the year the book was published:');
    let edition = prompt('Enter the edition of the book:');

    referenceBooks.push(new ReferenceBook(title, author, publicationYear, edition));
}

function removeBooks(title) {
    const fictionIndex = fictionBooks.findIndex(book => book.title === title);
    if (fictionIndex !== -1) {
        fictionBooks.splice(fictionIndex, 1);
        return;
    }
  
    const nonFictionIndex = nonFictionBooks.findIndex(book => book.title === title);
    if (nonFictionIndex !== -1) {
        nonFictionBooks.splice(nonFictionIndex, 1);
        return;
    }
  
    const referenceIndex = referenceBooks.findIndex(book => book.title === title);
    if (referenceIndex !== -1) {
        referenceBooks.splice(referenceIndex, 1);
        return;
    }
}

function searchBooks(searchCriteria) {
    const foundBook = fictionBooks.concat(nonFictionBooks, referenceBooks).find(book =>
        book.title === searchCriteria || book.author === searchCriteria ||
        book.genre === searchCriteria || book.subject === searchCriteria
    );
    
    if (foundBook) {
        alert(foundBook.toString());
        return foundBook;
    }
    
    alert('No matching book found.');
    return null;
}

function takeBook(book) {
    if (book.borrowed === false) {
        book.checkout();
    } else {
        alert("The book's not back in the library yet.");
    }
}

function returnBook(book) {
    if (book.borrowed === true) {
        book.checkin();
    } else {
        alert("The book has already been returned to the library.");
    }
}

let fictionBooks = new Array(new FictionBook("Harry Potter and the Philosopher's Stone", 'J. K. Rowling', 1997, 'Fantasy'));
let nonFictionBooks = new Array(new NonFictionBook('Sapiens: A Brief History of Humankind', 'Y. N. Harari', 2011, 'History'));
let referenceBooks = new Array(new ReferenceBook('Современный учебник JavaScript', 'И. Кантор', 2007, 1));

outer: while (true) {
    let choose = Number(prompt('1. Add books to the library. \n2. Remove books from the library. \n3. Search for books by title, author, genre, or subject. \n4. Perform check-in and check-out operations for borrowable books.'));

    switch (choose) {
        case 1:
            let typeOfBook = Number(prompt('What type of book do you want to add? \n1. Fiction books \n2. Non-fiction books \n3. Reference books'));
            switch (typeOfBook) {
                case 1:
                    addFictionBooks();
                    break;
                case 2:
                    addNonFictionBooks();
                    break;
                case 3:
                    addReferenceBooks();
                    break;
            }
            break;
        case 2:
            let titleOfBook = prompt('Enter the title of the book:');
            removeBooks(titleOfBook);
            break;
        case 3:
            let searchCriteria = prompt('Enter the title, author, genre or subject of the book:');
            searchBooks(searchCriteria);
            break;
        case 4:
            fictionBooks.forEach(value => alert(value));
            nonFictionBooks.forEach(value => alert(value));
            referenceBooks.forEach(value => alert(value));

            let takeOrReturn = Number(prompt('1. I want to take the book \n2. I want to return the book'));
            let titleOfBook2 = prompt('Enter the title of the book:');
            let book = searchBooks(titleOfBook2);
            switch (takeOrReturn) {
                case 1:
                    takeBook(book);
                    break;
                case 2:
                    returnBook(book);
                    break;
            }
            break;
    
        default:
            break outer;
    }
}