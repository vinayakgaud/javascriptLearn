//Immediately invoked function expression
//js let us declare and invoke function at the same time
//use to counter global scope variable pollution
//some other js file linked to html might have variable, and we cannot create var with same name
(function(){
    const user = 'Key'
    console.log(user);
    //can add another function inside it
    const hello = ()=> console.log('Hello from IIFE');
    hello();
})();

//we can provide paramters also
(function(name){
    console.log(`Hello ${name}`);
})('Vinayak');

//we can give name to IIFE function
(function hello(){
    console.log('hello');
})();