//ternary operator
const age = 19;
age>=18 ? console.log('can vote') : console.log('cannot vote');

const boolCanVote = age>= 18 ? true : false;
console.log(boolCanVote);

//writing multiple statement in ternary operator

const auth = true;
const redirect = auth ? (alert('Welcome'), '/Success' //assigning success value to redirect
) : (alert('Denied'),'/Failed');

console.log(redirect);

//if we don't have else statement
auth ? console.log('welcome'): null;
auth && console.log('welcome');

//for of loop
//instead of for(let i = 0) and all we can use
//same can be used to loop over objects and strings and maps, can be used for any iterable obj
const arr = [2,4,5,6];
for(const item of arr) console.log(item);

const str = 'Hello World'
for(const item of str) console.log(item);

const obj = [
    {
        name: 'Brad'
    },
    {
        name: 'Kate'
    }
]
for(const item of obj) console.log(item);

const map = new Map();
map.set('name','test')
map.set('age', '29')

for(const [key,value] of map) console.log(key,value);

//for ..in loop
//to loop through object values
const ob = 
    {
        color: 'red',
        color2: 'blue'
    }

for(const key in ob){
    console.log(key, ob[key]);
}

//with array also we can use this just have to use arr[key]
