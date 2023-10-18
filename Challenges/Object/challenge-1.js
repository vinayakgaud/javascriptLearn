//creating array of objects
const library = 
[
    {
        title: 'A', 
        author: 'AA', 
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'AB', 
        author: 'ABB', 
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'ABC', 
        author: 'ABCC', 
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

console.log(library);

//changing read value to true
for(let i=0;i<library.length;i++){
    library[i].status.read = true;
}

console.log(library);

//fetching firstbook title as firstBook
const { title: firstBook } = library[0];
console.log(firstBook);

//converting js obj to json string
const jsonString = JSON.stringify(library);
console.log(jsonString);