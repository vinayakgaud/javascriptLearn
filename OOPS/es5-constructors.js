//constrcutors
//es5 method
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.show = function(){
        return `title: ${this.title} was written by author: ${this.author} in year: ${this.year}`;
    }
}

const book1 = new Book('book1','doe',2013);
console.log(book1.show()); //created book obj, protoype got inherited it have constructor and other methods for it
const book2 = new Book('');
console.log(book2.show()); //op - Book {title: '', author: undefined, year: undefined}  
//js doesn't give error if parameters are not passed


