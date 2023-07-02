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
            console.warn.warn('The book title must be in string form!');
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
}

let borrowable = {
    _borrowed: false,

    checkout() {
        this._borrowed = true;
    },

    checkin() {
        this._borrowed = false;
    }
}

Object.assign(Book.prototype, borrowable);

let fictionBooks = new Array(new FictionBook("Harry Potter and the Philosopher's Stone", 'J. K. Rowling', 1997, 'Fantasy'));
let nonFictionBooks = new Array(new NonFictionBook('Sapiens: A Brief History of Humankind', 'Y. N. Harari', 2011, 'History'));
let referenceBooks = new Array(new ReferenceBook('Современный учебник JavaScript', 'И. Кантор', 2007, 1));

console.log(fictionBooks);
console.log(nonFictionBooks);
console.log(referenceBooks);