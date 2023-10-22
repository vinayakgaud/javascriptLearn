let cartQuantity = 0;

const VARIABLE = 2;

//logical assignment operator
// &&, ||, ?? <- logical operator
// &&=, ||=, ??=
//ways to write ||=
// works if a is falsy value
let a = false;

if(!a) a = 10

console.log(a);

a = '';

a = a || 10;
console.log(a);

a = 0;
a ||= 10; //this short way fo writing for above codes
console.log(a);

//&&= work if variable is truthy value
let b = 10;
if(b) b = 20;
console.log(b);

b = [];
b &&= 20;
console.log(b);

//nullish correlation operator ??=
// it will assign value only if left var is either null or undefined
let c = null;
if(c === null) c = 30;
console.log(c);

c = undefined;
c ??= 30;
console.log(c);