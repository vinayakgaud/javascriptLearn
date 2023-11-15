//prototype
//creating prototype iinstead of mentioning everything , everyn func in function itself
//it will be added in the objects proto , prototype
//Prototypes are the mechanism by which JavaScript objects inherit features from one another
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
//     this.summar = ()=>{
//         return `title: ${this.title} was written by author: ${this.author} in year: ${this.year}`;
//     }
}

Book.prototype.show = function(){
    return `title: ${this.title} was written by author: ${this.author} in year: ${this.year}`;
}

Book.prototype.summar = ()=>{
    return `title: ${this.title} was written by author: ${this.author} in year: ${this.year}`;
}

const book1 = new Book('book1','doe',2013);
console.log(book1);
// console.log(book1.show());
console.log(book1.summar())

//changing the value of object using prototype
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}

console.log(book1);
book1.revise(2018);
console.log(book1);