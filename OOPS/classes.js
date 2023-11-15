//es6 classes
//classes constructor proabbly might give error with IE
class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    //creating method
    getSummary(){
        return `${this.title} <- title, author -> ${this.author} and year -> ${this.year}`
    }
    //static method
    static show(){
        return 'Dolce & Gabon'
    }
}

const book1 = new Book('Book One', 'John Doe', 2013);
console.log(book1);
console.log(book1.getSummary());

console.log(Book.show());