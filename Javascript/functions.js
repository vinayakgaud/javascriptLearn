function test(){
    console.log('hello');
    console.log(2+2);
}

test();

//some function examples
function myFunc(user){
    return `this is ${user.id} and name is ${user.name}`;
}

// const user = 'Hello';
// console.log(myFunc(user)); 
// console.log(myFunc('Two'))
console.log(myFunc({
    id: 1,
    name: 'Three'
}))

console.log(Math.round(Math.random() * 7));

//function to get random numbers from given array
function getRandom(arr){
    const randomIndex = Math.round(Math.random() * arr.length);
    return arr[randomIndex]
}

console.log('Random number is : ' + getRandom([1,2,4,5,28,93]));

//there are two ways to write func in js, 1) Function declaration 2) Function expression
//1:
function addDollarSign(value){
    return `$${value}`;
}

console.log(addDollarSign(334));

//2: 
const addPlusSign = function (value){
    return `+${value}`;
}; //we can use semicolon or not
console.log(addPlusSign(466));