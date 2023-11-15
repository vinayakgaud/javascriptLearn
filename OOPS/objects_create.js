//Object.create();

//another way of creating object
const bookProtos = {
    getSummary: function(){
        console.log('summary function');
    },
    getAge: function(){
        console.log('age function');
    }
}

const book1 = Object.create(bookProtos);
book1.title = 'Book One'
book1.author = 'John Doe'
book1.year = 2018

console.log(book1);
book1.getSummary();
book1.getAge();

const book2 = Object.create(bookProtos, {
    title: {value: 'Book Two'},
    author: {value: 'John Doe'},
    year: {value: 2018}
})

console.log(book2);