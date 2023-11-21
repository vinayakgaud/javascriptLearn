//they were introduced in es2015, es6 update, they are compact, have implicit return, and have lexical scope(the scope of a variable or function based on where it is defined in the source code)
//arrow is called fat arrow in arrow function

//normal function
function myFunc(){
    console.log("hello it is normal function");
}

myFunc();
//function expression
const myFuncTwo = function(){
    console.log("this is function expression");
}
myFuncTwo();

//arrow function
const a1 = () => {
    console.log("this is normal syntax for arrow function");
}
a1();

//compact, if we have only one line return, or one  line in fucntion we can skip return or curly braces
//implicit return
const a2 = () => console.log("this is compacted arrow function");
a2();

//for single param we can skipp brackets aLSO, more than 1 param will throw error
const a3 = a => a*2;
console.log(a3(10));

//we need to use brackets with curly brackets while return object

const a4 = ()=>({
    name: 'Vin'
})

console.log(a4()); //return undefined, but as soon as we add bracket to it, it return object

//ex
//normal function
const arr1 = [1,2,3,4,5,6,7];
arr1.forEach(function(n){
    console.log(n);
});
//arrow function
arr1.forEach(n=>console.log(n))

//** https://stackoverflow.com/questions/58701422/arrow-function-with-square-brackets
//we can use arrow function with [] brackets, basically indicates that function will return array, it is for shortcut
//**export const doSomething = () => [ someFunction(), bind(stuff, stuff, stuff) ]; 
/**
 * This code means that your function doSomething returns an array when

//**[0] element - the result of execution of function someFunction() and

//**[1] element - the result of execution of function bind(stuff, stuff, stuff).

This is a shortcut for:

//**export const doSomething = () => {
//**    return [ someFunction(), bind(stuff, stuff, stuff) ]
//**}; 

But be careful if you want to make a shortcut for returning objects. You have to wrap objects in parentheses (), like this:

//**export const doSomething = () => ({ name: 'John' }).
 */
/**

It's just returning an array.

You might use it with a destructuring assign e.g.

//**const [someResult, boundStuff] = doSomething()
Or just like any old function e.g.

//**const something = doSomething() */