//subclasses
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
//creating subclass magazine which inherit book

class Magazine extends Book{
    constructor(title, author, year, month){
        super(title,author,year);
        this.month = month;
    }
}

const mag1 = new Magazine('Book One', 'John Doe', 2013,'Jan')
console.log(mag1);
console.log(mag1.getSummary());
console.log(Magazine.show());

const mag2 = new Magazine(book1.title,book1.author,book1.year,'Feb')
console.log(mag2);