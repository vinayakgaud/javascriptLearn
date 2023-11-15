//js is almost object oriented
//strings and other are primitive and not object which have methods for it, when we run method with string js in background has a wrapper to it
const s1 = 'Hello';
console.log(typeof s1); //this will return string which is primitive

const s2 = new String('Hello')
console.log(typeof s2); //this will return object

//object literal with object element
const book = {
    title : 'Learning JS',
    author: 'Brad',
    year: 2016,
    show: function(){
        return `title: ${this.title} was written by author: ${this.author} in year: ${this.year}`;
    }
}
const {title: bookName} = book;
console.log(bookName);
console.log(Object.values(book)); //return array of object values
console.log(Object.keys(book)); //return array of object keys

//every object inherit object prototype 
