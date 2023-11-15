//inheritance
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.show = function(){
    return `title: ${this.title} was written by author: ${this.author} in year: ${this.year}`;
}

//creating magazine object which is inheriting the book 
function Magazine(title,author,year,month){
    Book.call(this, title,author,year) //this refer to current instance
    this.month = month;
}
//we need to inherit prototype here, and to inherit it we need to
Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine('Mag One',  'Jhon Doe', 2018, 'Jan');
console.log(mag1);

//we will not be able to call show from magazine as of now because we have not inherited prototype
//to inherit prototype


console.log(mag1.show());
//to choose constructor of Magazine
Magazine.prototype.constructor = Magazine; //didn't saw any difference
console.log(mag1);
