//take valaues from array or properties from object and set them as variables
const arr = [1,2,3]
//so instead of getting values from array into variable like this

const val1 = arr[0]
const val2 = arr[1]
const val3 = arr[2]

//we can do this
 const [a,b,c] = [1,2,3]
 console.log(val1, val2, val3)
 console.log(a,b,c)

 //in order to skip the index
 const [a1,,c1] = [1,2,3]
 console.log(a1,c1) //op -  1 3

 const [,,c2] = [1,2,3]
 console.log(c2) //op - 3

 const [a3, ...rest] = [1,2,3]
 console.log(a3, `rest: ${rest}`) // 1 rest: 2,3

 const [a4='1',b4,c4] = [undefined,2,3]
 console.log(a4,b4,c4) //1 2 3, 1 is default value we passed for a4

 //we can do same for objects
 const obj = {
    title: 'foo',
    author: 'bar',
    pages: 100,
    un: undefined
 }

 const value1 = obj.title;
 const value2 = obj.author;
 const value3 = obj.pages;

 console.log(value1, value2, value3)

 const {title, author, pages} = obj;
 console.log(title, author, pages)

 const {title: title1, author: author1, pages: pages1, un = '1'} = obj;
 console.log(title1, author1, pages1, un) //op - foo bar 100 1
 //in object while destructuring we have to use object keys if we have to call it multiple times we can call it as title: variableName

 //nested object
 const obj1 = {
    parent:{
        child: 'child'
    }
 }

 const {parent:{child}} = obj1;
 console.log(child) //op - child

 const user = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2
    },
    {
        id: 3
    }
 ]

 for(const {id, name} of user){
    console.log(id, name !== undefined ? name : '')
 } 
 //op - 1 2 3, we can use destructuring in for loop also

 //we can also use in function

 const users = {
    id: 1,
    name: 'John'
 }

 const getUser = ({id, name})=>{
    console.log(id, name);
 }

 getUser(users); //1 John

 //destructuring come with variable swap
 let a6 = 4;
 let b6 = 5;
 console.log(a6, b6);
 
 [a6,b6] = [b6,a6];

 console.log(a6,b6) //op - 5 4
 
 const regex = /\w+\s/g
 const str = 'fee fi fo fum'

 const [fee,fi, fo] = str.match(regex);
 console.log(fee,fi, fo) //op - fee fi fo

 //if we don't know the property name of object then we can use computed property name for destructing

 let rando;
 const obj2 = {
    [rando] : 23
 }

 const {[rando]: myKey} = obj2
 console.log(myKey) //op - 23